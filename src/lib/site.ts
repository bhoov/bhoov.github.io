/**
 * Site-wide build-time facts.
 */
import { existsSync } from "node:fs";

/**
 * The blog (blog/, a separate Astro project served at /blog/) is a work in progress on its own branch.
 * Links to it are shown only when its folder is in the checkout, so the deployed site never links to a missing page.
 */
export const hasBlog = existsSync("blog/package.json");
