/**
 * Keep an email address out of plain text in this public repository and in the built HTML.
 *
 * _data/socialLinkInfo.yaml stores the address reversed and base64-encoded (`email.encoded`).
 * Pages put that string in a `data-email` attribute; `revealEmails` (below, run in the browser) decodes it
 * into the link's `mailto:` and fills the link's `[data-email-text]` with the address.
 * The CV's PDF is printed from the page after this runs, so it has the address as plain text and a working mailto: link.
 * Crawlers that read the HTML do not find the address; one that runs the page's JavaScript, or reads the PDF, can.
 */

export const decodeEmail = (encoded: string): string => [...atob(encoded)].reverse().join("");

export function revealEmails() {
  for (const link of document.querySelectorAll<HTMLAnchorElement>("a[data-email]")) {
    const address = decodeEmail(link.dataset.email!);
    link.href = `mailto:${address}`;
    const text = link.querySelector<HTMLElement>("[data-email-text]");
    if (text) text.textContent = address;
  }
  document.documentElement.dataset.emailReady = ""; // scripts/print-cv.mjs waits for this before printing
}
