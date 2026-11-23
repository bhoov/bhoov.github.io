/**
 * Keep an email address out of plain text: in this public repository, in the built HTML and in the CV's PDF.
 *
 * _data/socialLinkInfo.yaml stores the address reversed and base64-encoded (`email.encoded`).
 * Pages put that string in a `data-email` attribute; `revealEmails` (below, run in the browser) decodes it:
 * - on screen, the link shows the address and opens the visitor's email app;
 * - in print (the CV's PDF), the address is drawn on a canvas, so the PDF has it as an image, not as text,
 *   and the link goes to https://bhoov.com/email, a page that opens the email app (src/pages/email.astro).
 * Crawlers that read HTML or extract PDF text do not find the address; one that runs the page's JavaScript can.
 */

export const decodeEmail = (encoded: string): string => [...atob(encoded)].reverse().join("");

/** Decode every `a[data-email]`: set its click to open the email app, and fill its `[data-email-text]` with the address. */
export async function revealEmails() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>("a[data-email]")];
  await document.fonts.ready; // the canvas copy is drawn in the page's font
  for (const link of links) {
    const address = decodeEmail(link.dataset.email!);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      location.href = `mailto:${address}`;
    });
    const text = link.querySelector<HTMLElement>("[data-email-text]");
    if (!text) continue;
    text.textContent = address;
    text.after(drawText(text, address));
  }
  document.documentElement.dataset.emailReady = ""; // scripts/print-cv.mjs waits for this before printing
}

// The address as an image for print: a canvas sized in em, so it scales with the print font size.
function drawText(text: HTMLElement, address: string): HTMLCanvasElement {
  const style = getComputedStyle(text);
  const size = parseFloat(style.fontSize);
  const scale = 4; // pixels per CSS pixel, for a sharp print
  const canvas = document.createElement("canvas");
  canvas.className = "email-print";
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "email address");
  const ctx = canvas.getContext("2d")!;
  const font = `${style.fontStyle} ${style.fontWeight} ${size * scale}px ${style.fontFamily}`;
  ctx.font = font;
  const width = Math.ceil(ctx.measureText(address).width);
  canvas.width = width;
  canvas.height = Math.ceil(size * scale * 1.3);
  ctx.font = font; // resizing the canvas resets its state
  ctx.fillStyle = style.color;
  ctx.textBaseline = "middle";
  ctx.fillText(address, 0, canvas.height / 2);
  canvas.style.width = `${width / scale / size}em`;
  canvas.style.height = "1.3em";
  return canvas;
}
