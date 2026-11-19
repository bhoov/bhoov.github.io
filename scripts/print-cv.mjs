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
