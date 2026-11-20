/**
 * The home page's news list: "Show more" reveals `step` more items, "Show less" returns to the first `base` items.
 * Items open and close with a short height-and-opacity animation (none when the visitor asks for reduced motion).
 * While items close, the page scroll is corrected every frame so the buttons stay where they were on screen:
 * without it, the shrinking list would pull the page up and leave the reader in the next section.
 */

const duration = 280; // ms per item
const stagger = 25; // ms between consecutive items opening
const easing = "cubic-bezier(.4,0,.2,1)";

export function mountNewsList(list: HTMLElement, more: HTMLButtonElement, less: HTMLButtonElement, base: number, step: number) {
  const items = [...list.children] as HTMLElement[];
  const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  let shown = items.filter((li) => !li.hidden).length;
  let busy = false;

  const update = () => {
    const next = Math.min(step, items.length - shown);
    more.hidden = next === 0;
    more.textContent = `Show ${next} more`;
    less.hidden = shown <= base;
  };

  // Height and opacity of one item, from `from` to `to`; overflow is hidden only while it runs.
  const animate = (li: HTMLElement, opening: boolean, delay: number) => {
    const height = `${li.offsetHeight}px`;
    li.style.overflow = "hidden";
    const frames = opening ? [{ height: "0px", opacity: 0 }, { height, opacity: 1 }] : [{ height, opacity: 1 }, { height: "0px", opacity: 0 }];
    const animation = li.animate(frames, { duration, delay, easing, fill: opening ? "backwards" : "forwards" });
    return animation.finished.then(() => {
      li.style.overflow = "";
      return animation;
    });
  };

  more.addEventListener("click", () => {
    if (busy) return;
    const next = items.slice(shown, shown + step);
    for (const li of next) li.hidden = false;
    if (!reduceMotion()) next.forEach((li, i) => animate(li, true, i * stagger));
    shown += next.length;
    update();
  });

  less.addEventListener("click", async () => {
    if (busy) return;
    const closing = items.slice(base, shown);
    const anchor = less.parentElement!; // the button row: kept at the same place on screen
    const startTop = anchor.getBoundingClientRect().top;
    const keepAnchor = () => {
      const drift = anchor.getBoundingClientRect().top - startTop;
      if (Math.abs(drift) >= 0.5) window.scrollBy({ top: drift, behavior: "instant" });
    };
    if (reduceMotion()) {
      for (const li of closing) li.hidden = true;
    } else {
      busy = true;
      let running = true;
      const follow = () => {
        keepAnchor();
        if (running) requestAnimationFrame(follow);
      };
      requestAnimationFrame(follow);
      const animations = await Promise.all(closing.map((li) => animate(li, false, 0)));
      running = false;
      for (const li of closing) li.hidden = true;
      for (const animation of animations) animation.cancel(); // drop the held end frame; the item is now hidden
      busy = false;
    }
    keepAnchor();
    shown = base;
    update();
    more.focus({ preventScroll: true });
  });

  update();
}
