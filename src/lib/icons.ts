/**
 * Inline icons in HTML written in the data files: each `<span class="iconify" data-icon="NAME"/>` becomes the icon's <svg>.
 * The icons come from src/lib/icons.json, the same set that src/components/Icon.astro draws.
 */
import icons from "./icons.json";

const table = icons as Record<string, { body: string; width: number; height: number }>;

export function iconSvg(name: string): string {
  const icon = table[name];
  if (!icon) {
    console.warn(`Icon "${name}" is not in src/lib/icons.json`);
    return "";
  }
  return `<svg class="iconify" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 ${icon.width} ${icon.height}" aria-hidden="true" focusable="false">${icon.body}</svg>`;
}

export function inlineIcons(html: string): string {
  return html.replace(/<span class="iconify" data-icon="([^"]+)"\s*\/?>(\s*<\/span>)?/g, (_, name: string) => iconSvg(name));
}
