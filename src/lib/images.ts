/**
 * Small WebP copies of teasers and author photos, made by scripts/optimize-images.mjs.
 * Each helper falls back to the original file when its copy does not exist.
 */
import { existsSync } from "node:fs";
import { asset } from "./publications";

const copy = (dir: string, name: string) => (existsSync(`public/${dir}/${name}`) ? `/${dir}/${name}` : null);
const stem = (path: string) => path.split("/").pop()!.replace(/\.[^.]+$/, "");

/** `src` and `srcset` for a 16:10 teaser: 480px and 960px wide copies when they exist. */
export function teaserImage(path: string): { src: string; srcset?: string } {
  const small = copy("imgs/teasers/sized", `${stem(path)}-480.webp`);
  const large = copy("imgs/teasers/sized", `${stem(path)}-960.webp`);
  if (!small || !large) return { src: asset(path) };
  return { src: large, srcset: `${small} 480w, ${large} 960w` };
}

/** A 96px copy of an author photo when it exists. */
export function avatarImage(path: string): string {
  return copy("imgs/people/avatars", `${stem(path)}.webp`) ?? asset(path);
}
