// Make small WebP copies of the images the home page and the work pages show, so they load fast.
// Run it after adding or changing a teaser or an author photo, and commit the output:
//
//   node scripts/optimize-images.mjs
//
// Teasers (public/imgs/teasers/*.svg|webp, 16:10) -> public/imgs/teasers/sized/<name>-480.webp and -960.webp.
//   SVG teasers are drawn in Chrome with Inter loaded, so their text uses the site's font.
// Author photos (`picture` in _data/people.yaml) -> public/imgs/people/avatars/<name>.webp, 96x96 (shown at 28px).
// src/lib/images.ts uses these copies when they exist and falls back to the originals.
import { readFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { createRequire } from "node:module";
import puppeteer from "puppeteer";

// sharp is not a direct dependency; Astro depends on it, so load the copy Astro uses.
const sharp = createRequire(import.meta.resolve("astro"))("sharp");

const root = new URL("..", import.meta.url).pathname;
const teasers = join(root, "public/imgs/teasers");
const sized = join(teasers, "sized");
const avatars = join(root, "public/imgs/people/avatars");
mkdirSync(sized, { recursive: true });
mkdirSync(avatars, { recursive: true });

const WIDTHS = [480, 960];
const QUALITY = 82;

async function svgToPng(browser, file, width) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: (width * 10) / 16, deviceScaleFactor: 1 });
  const svg = readFileSync(file, "utf8");
  await page.setContent(
    `<!doctype html><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=block" rel="stylesheet">
     <style>html,body{margin:0;background:white}svg{display:block;width:${width}px;height:auto}</style>${svg}`,
    { waitUntil: "networkidle0" },
  );
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width, height: (width * 10) / 16 } });
  await page.close();
  return png;
}

const browser = await puppeteer.launch({ args: ["--no-sandbox"], executablePath: process.env.CHROME_PATH || undefined });
for (const name of readdirSync(teasers)) {
  const ext = extname(name);
  if (![".svg", ".webp", ".png", ".jpg"].includes(ext)) continue;
  const file = join(teasers, name);
  const base = basename(name, ext);
  const source = ext === ".svg" ? await svgToPng(browser, file, Math.max(...WIDTHS)) : readFileSync(file);
  for (const w of WIDTHS) {
    const out = join(sized, `${base}-${w}.webp`);
    const info = await sharp(source).resize({ width: w, height: (w * 10) / 16, fit: "contain", background: "white" }).webp({ quality: QUALITY }).toFile(out);
    console.log(`${out.replace(root, "")}  ${(info.size / 1024).toFixed(1)} KB`);
  }
}
await browser.close();

// Author photos: every `picture:` path in people.yaml that exists in public/.
const pictures = [...readFileSync(join(root, "_data/people.yaml"), "utf8").matchAll(/^\s*picture:\s*"?([^"\n#]+?)"?\s*(?:#.*)?$/gm)].map((m) => m[1].replace(/^\//, ""));
for (const picture of new Set(pictures)) {
  const file = join(root, "public", picture);
  if (!existsSync(file)) continue;
  const out = join(avatars, `${basename(picture, extname(picture))}.webp`);
  const info = await sharp(file).rotate().resize(96, 96, { fit: "cover", position: "attention" }).webp({ quality: QUALITY }).toFile(out);
  console.log(`${out.replace(root, "")}  ${(info.size / 1024).toFixed(1)} KB`);
}

// The headshot on the home page (public/imgs/people/me-headshot.jpg, the full-resolution original) -> -320.webp and -480.webp.
// It is shown 8.5rem (136px) wide on phones and 14rem (224px) on wider screens; the srcset in src/pages/index.astro picks one.
for (const w of [320, 480]) {
  const out = join(root, `public/imgs/people/me-headshot-${w}.webp`);
  const info = await sharp(join(root, "public/imgs/people/me-headshot.jpg")).rotate().resize({ width: w }).webp({ quality: QUALITY }).toFile(out);
  console.log(`${out.replace(root, "")}  ${(info.size / 1024).toFixed(1)} KB`);
}
