/**
 * The hero background: contour lines of a Dense Associative Memory energy, and a retrieval path.
 *
 *   E(x) = -log sum_i exp(-|x - m_i|^2 / (2 s_i^2))
 *
 * x       -- a point on the canvas, in CSS pixels
 * m_i     -- stored memory i (a minimum of E); memory 0 sits under the anchor element (the headshot)
 * s_i     -- width of memory i's basin, in CSS pixels
 *
 * The field canvas draws the contours once per resize (marching squares on a grid of CELL px).
 * The probe canvas draws gradient descent on E from the pointer (or from a default point) to the memory it falls into.
 * A tap or click plays the descent as motion: the query rolls down the path, and the memory it reaches pulses.
 * The default descent also plays once on load. With reduced motion, the path is drawn at once.
 */

type Memory = { x: number; y: number; s: number };

const CELL = 6; // grid spacing for the contour lines, px
const LEVELS = Array.from({ length: 16 }, (_, k) => 0.5 * ((k + 1) * 0.42) ** 2); // E levels; rings about 0.42 s apart near a minimum
const STEPS = 48; // gradient-descent steps per retrieval path
const RATE = 0.22; // step size, as a fraction of s^2
const ROLL_MS = 1100; // time for the query to roll down its path
const PULSE_MS = 700; // the pulse at the retrieved memory

// Small deterministic generator, so the landscape is the same on every load.
function rng(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };
}

// E is computed relative to the nearest memory (log-sum-exp shifted by its largest term), so it stays finite far from every memory.
function energy(memories: Memory[], x: number, y: number) {
  const q = memories.map((m) => ((x - m.x) ** 2 + (y - m.y) ** 2) / (2 * m.s * m.s));
  const q0 = Math.min(...q);
  let sum = 0;
  for (const v of q) sum += Math.exp(q0 - v);
  return q0 - Math.log(sum);
}

// Gradient descent: grad E = sum_i p_i (x - m_i) / s_i^2, where p_i is the softmax weight of memory i.
// Each step is scaled by the weighted s^2, so the step size is the same fraction of the distance in every basin.
function descend(memories: Memory[], x: number, y: number) {
  const path: [number, number][] = [[x, y]];
  for (let t = 0; t < STEPS; t++) {
    const q = memories.map((m) => ((x - m.x) ** 2 + (y - m.y) ** 2) / (2 * m.s * m.s));
    const q0 = Math.min(...q);
    const w = q.map((v) => Math.exp(q0 - v));
    const z = w.reduce((a, b) => a + b, 0);
    let gx = 0;
    let gy = 0;
    let s2 = 0;
    memories.forEach((m, i) => {
      const p = w[i] / z;
      gx += (p * (x - m.x)) / (m.s * m.s);
      gy += (p * (y - m.y)) / (m.s * m.s);
      s2 += p * m.s * m.s;
    });
    x -= RATE * s2 * gx;
    y -= RATE * s2 * gy;
    path.push([x, y]);
  }
  return path;
}

// Marching squares: for each level, stroke the line segments where E crosses it.
function contours(ctx: CanvasRenderingContext2D, memories: Memory[], width: number, height: number) {
  const nx = Math.ceil(width / CELL) + 1;
  const ny = Math.ceil(height / CELL) + 1;
  const e = new Float32Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) e[j * nx + i] = energy(memories, i * CELL, j * CELL);
  const lerp = (a: number, b: number, level: number) => (level - a) / (b - a);
  for (const level of LEVELS) {
    ctx.beginPath();
    for (let j = 0; j < ny - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        const a = e[j * nx + i], b = e[j * nx + i + 1], c = e[(j + 1) * nx + i + 1], d = e[(j + 1) * nx + i];
        const x = i * CELL, y = j * CELL;
        // Crossing points on the four cell edges: top (a-b), right (b-c), bottom (d-c), left (a-d).
        const pts: [number, number][] = [];
        if (a < level !== b < level) pts.push([x + CELL * lerp(a, b, level), y]);
        if (b < level !== c < level) pts.push([x + CELL, y + CELL * lerp(b, c, level)]);
        if (d < level !== c < level) pts.push([x + CELL * lerp(d, c, level), y + CELL]);
        if (a < level !== d < level) pts.push([x, y + CELL * lerp(a, d, level)]);
        for (let k = 0; k + 1 < pts.length; k += 2) {
          ctx.moveTo(pts[k][0], pts[k][1]);
          ctx.lineTo(pts[k + 1][0], pts[k + 1][1]);
        }
      }
    }
    ctx.stroke();
  }
}

// `quiet`: an element inside `host` (the bio text) where the pointer does not move the probe, so the graphic does not distract from reading.
export function mountEnergyLandscape(host: HTMLElement, field: HTMLCanvasElement, probe: HTMLCanvasElement, anchor: HTMLElement, quiet?: HTMLElement) {
  const accent = getComputedStyle(host).getPropertyValue("--accent").trim() || "#2a78d6";
  let memories: Memory[] = [];
  let width = 0;
  let height = 0;
  let defaultStart: [number, number] = [0, 0];

  const setup = (canvas: HTMLCanvasElement) => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    const ctx = canvas.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  };

  let visibleMemories: Memory[] = [];

  // `shown`: how many descent steps to draw (fractional; the last one is partial). `pulse`: 0 to 1 through the arrival pulse, or -1 for none.
  const drawProbe = (start: [number, number], path = descend(memories, start[0], start[1]), shown = STEPS, pulse = -1) => {
    const ctx = probe.getContext("2d")!;
    ctx.clearRect(0, 0, width, height);
    // Memory dots in the full accent color, the same as "memories" in the caption and the retrieved dot.
    // They are on this unmasked canvas, so only the ones inside the visible part of the contours are drawn.
    ctx.fillStyle = accent;
    for (const m of visibleMemories) {
      ctx.beginPath();
      ctx.arc(m.x, m.y, 3.5, 0, 2 * Math.PI);
      ctx.fill();
    }
    const whole = Math.floor(shown);
    const part = shown - whole;
    const next = path[Math.min(whole + 1, path.length - 1)];
    const head: [number, number] = [path[whole][0] + part * (next[0] - path[whole][0]), path[whole][1] + part * (next[1] - path[whole][1])];
    const rolling = shown < STEPS;
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.75;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    for (let i = 0; i <= whole; i++) (i ? ctx.lineTo(path[i][0], path[i][1]) : ctx.moveTo(path[i][0], path[i][1]));
    ctx.lineTo(head[0], head[1]);
    ctx.stroke();
    // The query: a hollow ring where the path starts.
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(start[0], start[1], 4.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    // The rolling query, or the retrieved memory: a filled dot at the head of the path, unless that is under the headshot.
    const [ex, ey] = rolling ? head : path[path.length - 1];
    if (Math.hypot(ex - memories[0].x, ey - memories[0].y) > anchor.offsetWidth / 2) {
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(ex, ey, 4.5, 0, 2 * Math.PI);
      ctx.fill();
      // The arrival pulse: a ring that grows and fades around the retrieved memory.
      if (pulse >= 0) {
        ctx.save();
        ctx.globalAlpha = 1 - pulse;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ex, ey, 4.5 + 18 * Math.sqrt(pulse), 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  // Roll the query from `start` down to its memory, then pulse it. A memory under the headshot pulses the headshot's ring instead (the `retrieved` class).
  let rollFrame = 0;
  const roll = (start: [number, number]) => {
    cancelAnimationFrame(rollFrame);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return drawProbe(start);
    const path = descend(memories, start[0], start[1]);
    const [ex, ey] = path[path.length - 1];
    const atAnchor = Math.hypot(ex - memories[0].x, ey - memories[0].y) <= anchor.offsetWidth / 2;
    // Position along the path by distance travelled, eased in and out, so the query visibly speeds up and settles.
    // (Timed by step instead, it would cover most of the distance in the first few frames: the descent steps shrink geometrically.)
    const cumulative = [0];
    for (let i = 1; i < path.length; i++) cumulative.push(cumulative[i - 1] + Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]));
    const total = cumulative[cumulative.length - 1];
    const stepAt = (fraction: number) => {
      const target = fraction * total;
      let i = 0;
      while (i < path.length - 2 && cumulative[i + 1] < target) i++;
      const span = cumulative[i + 1] - cumulative[i];
      return i + (span > 0 ? Math.min(1, (target - cumulative[i]) / span) : 1);
    };
    const ease = (x: number) => (x < 0.5 ? 4 * x ** 3 : 1 - (-2 * x + 2) ** 3 / 2);
    const t0 = performance.now();
    let arrived = false;
    const frame = (now: number) => {
      const t = now - t0;
      if (t < ROLL_MS) drawProbe(start, path, stepAt(ease(t / ROLL_MS)));
      else {
        if (!arrived && atAnchor) {
          anchor.classList.remove("retrieved");
          void anchor.offsetWidth; // restart the CSS animation
          anchor.classList.add("retrieved");
        }
        arrived = true;
        drawProbe(start, path, STEPS, Math.min(1, (t - ROLL_MS) / PULSE_MS));
      }
      if (t < ROLL_MS + PULSE_MS) rollFrame = requestAnimationFrame(frame);
    };
    rollFrame = requestAnimationFrame(frame);
  };

  const layout = () => {
    const box = host.getBoundingClientRect();
    width = box.width;
    height = box.height;
    const a = anchor.getBoundingClientRect();
    const ax = a.left - box.left + a.width / 2;
    const ay = a.top - box.top + a.height / 2;
    host.style.setProperty("--anchor-x", `${ax}px`);
    host.style.setProperty("--anchor-y", `${ay}px`);

    // Memory 0 under the headshot, then more scattered around, at least 1.5 basin widths apart.
    const random = rng(7);
    const base = Math.max(60, a.width * 0.5);
    memories = [{ x: ax, y: ay, s: base }];
    const count = Math.round(Math.min(14, Math.max(6, (width * height) / 60000)));
    for (let tries = 0; memories.length < count && tries < 500; tries++) {
      const m = { x: random() * width, y: random() * height, s: base * (0.4 + 0.45 * random()) };
      if (memories.every((o) => Math.hypot(o.x - m.x, o.y - m.y) > 1.5 * (o.s + m.s))) memories.push(m);
    }
    // The default query: the first point on a ring around the headshot, starting down-left, whose descent ends at the headshot.
    defaultStart = [ax - 1.7 * base, ay + 1.3 * base];
    for (let k = 0; k < 24; k++) {
      const angle = (0.75 + k / 24) * Math.PI;
      const start: [number, number] = [ax + 1.8 * base * Math.cos(angle), ay - 1.8 * base * Math.sin(angle)];
      const [ex, ey] = descend(memories, ...start).at(-1)!;
      const inside = start[0] > 8 && start[0] < width - 8 && start[1] > 8 && start[1] < height - 8;
      if (inside && Math.hypot(ex - ax, ey - ay) < 4) {
        defaultStart = start;
        break;
      }
    }

    const fade = Math.min(520, 0.8 * window.innerWidth); // where the field's CSS mask reaches transparent
    visibleMemories = memories.slice(1).filter((m) => Math.hypot(m.x - ax, m.y - ay) < 0.75 * fade);

    const ctx = setup(field);
    ctx.strokeStyle = accent;
    ctx.globalAlpha = 0.24;
    ctx.lineWidth = 1;
    contours(ctx, memories, width, height);
    setup(probe);
    if (firstLayout) roll(defaultStart);
    else drawProbe(defaultStart);
    firstLayout = false;
  };
  let firstLayout = true;

  // Layout and probe drawing each keep their own pending frame, so a pointer move cannot cancel a pending re-layout.
  let layoutFrame = 0;
  let probeFrame = 0;
  new ResizeObserver(() => {
    cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(layout);
  }).observe(host);
  const probeFrom = (start: [number, number]) => {
    cancelAnimationFrame(probeFrame);
    cancelAnimationFrame(rollFrame);
    probeFrame = requestAnimationFrame(() => drawProbe(start));
  };
  const pointAt = (e: PointerEvent): [number, number] | null => {
    if (quiet?.contains(e.target as Node)) return null;
    const box = host.getBoundingClientRect();
    return [e.clientX - box.left, e.clientY - box.top];
  };
  // A mouse or pen draws the path as it moves. A tap or click rolls the query down the path; a touch drag is a scroll and leaves the path as it is.
  // After a click, the mouse must move 12px before it takes over again, so a small hand movement does not cut the roll short.
  let clickedAt: [number, number] | null = null;
  host.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    const point = pointAt(e);
    if (clickedAt && point && Math.hypot(point[0] - clickedAt[0], point[1] - clickedAt[1]) < 12) return;
    clickedAt = null;
    probeFrom(point ?? defaultStart);
  });
  host.addEventListener("pointerdown", (e) => {
    const start = pointAt(e);
    clickedAt = start;
    if (start) roll(start);
    else if (e.pointerType !== "touch") probeFrom(defaultStart);
  });
  host.addEventListener("pointerleave", (e) => {
    if (e.pointerType !== "touch") probeFrom(defaultStart);
  });
}
