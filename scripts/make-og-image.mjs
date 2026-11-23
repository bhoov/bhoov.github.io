// Make the link-preview image (public/og.png): a 1200x630 screenshot of the top of the built home page.
// Run after `astro build`, and again when the hero changes: `node scripts/make-og-image.mjs`.
// It serves `build/` with Astro's preview server and waits for the hero's default descent to finish rolling.
import { preview } from "astro";
import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = `${root}public/og.png`;

const server = await preview({ root, logLevel: "warn" });
const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 }); // the Open Graph size that Slack, X and LinkedIn show without cropping
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
  await page.goto(`http://localhost:${server.port}/`, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((resolve) => setTimeout(resolve, 2500)); // the roll (1.1 s) and the pulse (0.7 s) of src/scripts/energyLandscape.ts
  await page.screenshot({ path: output, type: "png" });
  console.log(`Wrote ${output}`);
} finally {
  await browser.close();
  await server.stop();
}
