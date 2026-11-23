// Make the raster icons from public/favicon.svg (the thesis target: three energy contours around a minimum).
// Run after changing the SVG, and commit the output:
//
//   node scripts/make-icons.mjs
//
// public/favicon.ico            16, 32 and 48 px, for browsers that do not use the SVG
// public/apple-touch-icon.png   180 px on white, for phone home screens
// The raster icons use the SVG's light colors; only the SVG switches to its dark colors in a dark browser theme.
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const sharp = createRequire(import.meta.resolve("astro"))("sharp"); // not a direct dependency; Astro's copy
const root = new URL("../public/", import.meta.url).pathname;
const svg = readFileSync(`${root}favicon.svg`);

const png = (size) => sharp(svg, { density: (72 * size) / 64 * 4 }).resize(size, size).png().toBuffer();

// An ICO file holding PNG images (supported by every current browser).
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, i) => {
  const entry = 6 + 16 * i;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4); // color planes
  header.writeUInt16LE(32, entry + 6); // bits per pixel
  header.writeUInt32LE(images[i].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[i].length;
});
writeFileSync(`${root}favicon.ico`, Buffer.concat([header, ...images]));

// Home-screen icon: the target at 76% of a white square, as iOS rounds the corners and adds no padding.
const mark = await sharp(svg, { density: 72 * 4 }).resize(136, 136).png().toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: "#ffffff" } })
  .composite([{ input: mark, left: 22, top: 22 }])
  .png()
  .toFile(`${root}apple-touch-icon.png`);

console.log("Wrote public/favicon.ico and public/apple-touch-icon.png");
