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
 * A mouse also shows a dashed preview of the descent from where it points, without interrupting the rolled path.
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

  // Two trajectories share the probe canvas:
  // - the active one, which a tap or click rolls (and the default one on load); it stays drawn until the next tap or click;
  // - the preview, a dashed path from the mouse that shows where a click there would go, without disturbing the active one.
  type Point = [number, number];
  type Active = { start: Point; path: Point[]; shown: number; pulse: number }; // shown: steps drawn (fractional); pulse: 0 to 1, or -1 for none
  let active: Active | null = null; // set by the first layout
  let preview: { start: Point; path: Point[] } | null = null;

  const underHeadshot = ([x, y]: Point) => Math.hypot(x - memories[0].x, y - memories[0].y) <= anchor.offsetWidth / 2;
  const ring = (ctx: CanvasRenderingContext2D, [x, y]: Point, r: number) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
  };
  const line = (ctx: CanvasRenderingContext2D, points: Point[]) => {
    ctx.beginPath();
    points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.stroke();
  };

  const draw = () => {
    if (!active || !memories.length) return; // before the first layout
    const ctx = probe.getContext("2d")!;
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = accent;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Memory dots in the full accent color, the same as "memories" in the caption and the retrieved dot.
    // They are on this unmasked canvas, so only the ones inside the visible part of the contours are drawn.
    ctx.fillStyle = accent;
    for (const m of visibleMemories) {
      ring(ctx, [m.x, m.y], 3.5);
      ctx.fill();
    }

    // The preview: dashed and lighter, with hollow rings at the query and at the memory it would reach.
    if (preview) {
      ctx.save();
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1.25;
      ctx.setLineDash([3, 4]);
      line(ctx, preview.path);
      ctx.setLineDash([]);
      ctx.fillStyle = "white";
      ring(ctx, preview.start, 3.5);
      ctx.fill();
      ctx.stroke();
      const end = preview.path[preview.path.length - 1];
      if (!underHeadshot(end)) {
        ring(ctx, end, 7);
        ctx.stroke();
      }
      ctx.restore();
    }

    // The active trajectory, drawn up to its rolling head.
    const { start, path, shown, pulse } = active;
    const whole = Math.floor(shown);
    const part = shown - whole;
    const next = path[Math.min(whole + 1, path.length - 1)];
    const head: Point = [path[whole][0] + part * (next[0] - path[whole][0]), path[whole][1] + part * (next[1] - path[whole][1])];
    ctx.lineWidth = 1.75;
    line(ctx, [...path.slice(0, whole + 1), head]);
    // The query: a hollow ring where the path starts.
    ctx.fillStyle = "white";
    ring(ctx, start, 4.5);
    ctx.fill();
    ctx.stroke();
    // The rolling query, or the retrieved memory: a filled dot at the head of the path, unless that is under the headshot.
    const dot = shown < STEPS ? head : path[path.length - 1];
    if (!underHeadshot(dot)) {
      ctx.fillStyle = accent;
      ring(ctx, dot, 4.5);
      ctx.fill();
      // The arrival pulse: a ring that grows and fades around the retrieved memory.
      if (pulse >= 0) {
        ctx.save();
        ctx.globalAlpha = 1 - pulse;
        ctx.lineWidth = 1.5;
        ring(ctx, dot, 4.5 + 18 * Math.sqrt(pulse));
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  // Redraw on the next frame. While a roll runs, its own frames redraw, so this does nothing.
  let drawFrame = 0;
  let rolling = false;
  const requestDraw = () => {
    if (rolling) return;
    cancelAnimationFrame(drawFrame);
    drawFrame = requestAnimationFrame(draw);
  };

  // Roll the query from `start` down to its memory, then pulse it. A memory under the headshot pulses the headshot's ring instead (the `retrieved` class).
  let rollFrame = 0;
  const roll = (start: Point) => {
    cancelAnimationFrame(rollFrame);
    const path = descend(memories, start[0], start[1]);
    const current: Active = { start, path, shown: STEPS, pulse: -1 };
    active = current;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rolling = false;
      return requestDraw();
    }
    const atAnchor = underHeadshot(path[path.length - 1]);
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
    rolling = true;
    const frame = (now: number) => {
      const t = Math.max(0, now - t0); // a frame's timestamp can be slightly earlier than t0
      if (t < ROLL_MS) current.shown = stepAt(ease(t / ROLL_MS));
      else {
        if (!arrived && atAnchor) {
          anchor.classList.remove("retrieved");
          void anchor.offsetWidth; // restart the CSS animation
          anchor.classList.add("retrieved");
        }
        arrived = true;
        current.shown = STEPS;
        current.pulse = t < ROLL_MS + PULSE_MS ? (t - ROLL_MS) / PULSE_MS : -1;
      }
      draw();
      if (t < ROLL_MS + PULSE_MS) rollFrame = requestAnimationFrame(frame);
      else rolling = false;
    };
    rollFrame = requestAnimationFrame(frame);
  };

  let layoutKey = "";
  const layout = () => {
    const box = host.getBoundingClientRect();
    const a = anchor.getBoundingClientRect();
    const ax = a.left - box.left + a.width / 2;
    const ay = a.top - box.top + a.height / 2;
    // Skip a resize that changes nothing drawn (the observer also fires for changes that keep these the same).
    const key = [box.width, box.height, ax, ay, a.width].map((v) => v.toFixed(1)).join();
    if (key === layoutKey) return;
    layoutKey = key;
    width = box.width;
    height = box.height;
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
    // The memories may have moved: keep both trajectories' queries and descend again from them. A running roll finishes on its old path.
    if (firstLayout) roll(defaultStart);
    else {
      if (preview) preview.path = descend(memories, ...preview.start);
      if (active && !rolling) active.path = descend(memories, ...active.start);
      draw();
    }
    firstLayout = false;
  };
  let firstLayout = true;

  let layoutFrame = 0;
  new ResizeObserver(() => {
    cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(layout);
  }).observe(host);
  const pointAt = (e: PointerEvent): Point | null => {
    if (quiet?.contains(e.target as Node)) return null;
    const box = host.getBoundingClientRect();
    return [e.clientX - box.left, e.clientY - box.top];
  };
  const setPreview = (point: Point | null) => {
    preview = point ? { start: point, path: descend(memories, point[0], point[1]) } : null;
    requestDraw();
  };
  // A mouse or pen previews the descent from where it points; over the bio text, and outside the hero, there is no preview.
  // A tap or click rolls the query down from that point. A touch drag is a scroll and changes nothing.
  host.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "touch") setPreview(pointAt(e));
  });
  host.addEventListener("pointerdown", (e) => {
    const start = pointAt(e);
    if (!start) return;
    if (e.pointerType !== "touch") preview = null; // the roll now shows that path
    roll(start);
  });
  host.addEventListener("pointerleave", (e) => {
    if (e.pointerType !== "touch") setPreview(null);
  });
}
