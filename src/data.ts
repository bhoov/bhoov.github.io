/**
 * Load every `_data/<name>.yaml` file into `data.<name>`.
 * Vite watches these files, so `astro dev` reloads when one changes.
 */
import yaml from "js-yaml";

const files = import.meta.glob<string>("/_data/*.yaml", { query: "?raw", import: "default", eager: true });

export const data: Record<string, any> = Object.fromEntries(
  Object.entries(files).map(([path, raw]) => [path.split("/").pop()!.replace(/\.yaml$/, ""), yaml.load(raw)])
);
