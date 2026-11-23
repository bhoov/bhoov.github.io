// Print the built /cv page to PDF.
// Run after `astro build`. It serves `build/` with Astro's preview server, prints /cv with Puppeteer,
// and writes the PDF to `build/` (this deploy) and to `public/` (so the committed copy stays current).
import { preview } from "astro";
import puppeteer from "puppeteer";
import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const pdfName = "cv-pdfs/benjamin-hoover-cv.pdf";
const outputs = [`${root}build/${pdfName}`, `${root}public/${pdfName}`];

const server = await preview({ root, logLevel: "warn" });
const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
try {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${server.port}/cv`, { waitUntil: "networkidle0" });
  // Wait for the email address to be drawn as an image (src/lib/email.ts), so the PDF has no address in its text.
  await page.waitForFunction(() => "emailReady" in document.documentElement.dataset, { timeout: 10000 });
  // Links to this site are relative on the page; in the PDF they would point at this local server. Point them at bhoov.com.
  await page.evaluate(() => {
    for (const a of document.querySelectorAll("a[href]")) a.href = new URL(a.getAttribute("href"), "https://bhoov.com/").href;
  });
  await mkdir(`${root}build/cv-pdfs`, { recursive: true });
  await page.pdf({
    path: outputs[0],
    format: "letter",
    margin: { top: "60px", left: "80px", right: "80px", bottom: "60px" },
  });
  await copyFile(outputs[0], outputs[1]);
  console.log(`Wrote ${outputs.join(" and ")}`);
} finally {
  await browser.close();
  await server.stop();
}
