import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://bhoov.com",
  outDir: "./build", // gh-pages publishes this directory
  build: {
    // Write `cv.html` instead of `cv/index.html`.
    // This keeps the old URLs and lets the relative asset paths in `_data/*.yaml` resolve from every page.
    format: "file",
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: "github-light" },
  },
  redirects: {
    "/holdmetight": "https://forms.gle/BNWQT3UeYmbqBpCf8",
  },
});
