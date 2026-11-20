/**
 * Helpers for the entries of _data/publications.yaml, shared by the home page and the works' pages.
 */
import { data } from "../data";

export type Publication = Record<string, any>;
export type Badge = { label: string; url?: string | null; kind: "award" | "press" };
/** One entry of a publication's `links` or `moreLinks`; `type` selects the icon (LINKS in src/config.ts). */
export type Link = { type: string; label: string; url: string };

/** The work's page on this site, for entries that have a `slug`. */
export const pubUrl = (p: Publication) => `/research/${p.slug}`;

/** Featured works with a page, newest year first (the order within a year follows the YAML file). */
export const featuredPublications = (): Publication[] =>
  data.publications.filter((p: Publication) => p.featured && p.slug).sort((a: Publication, b: Publication) => b.year - a.year);

/** Every work that has a page on this site. */
export const publicationsWithPages = (): Publication[] => data.publications.filter((p: Publication) => p.slug);

/**
 * The short venue label, e.g. "NeurIPS'25" or "AMHN@NeurIPS'23".
 * A preprint shows only its year. `venueLabel` in the YAML overrides the name made from `venueShorthand`.
 */
export function venueLabel(p: Publication): string {
  if (p.type === "preprint") return String(p.year);
  const name = String(p.venueLabel ?? p.venueShorthand).replace(/\s*'\d\d$/, "").trim(); // some shorthands already carry a year
  return `${name}'${String(p.year).slice(-2)}`;
}

/** Press articles in _data/press.yaml that cover this work (their `about` lists its id). */
export const pressAbout = (p: Publication): Publication[] => (data.press ?? []).filter((a: Publication) => (a.about ?? []).includes(p.id));

/** Badges for the home page and the work's page: awards (by their `short` name) first, then press that has a `badge` name. */
export function badges(p: Publication): Badge[] {
  const awards: Badge[] = (p.awards ?? []).map((a: Publication) => ({ label: a.short ?? a.name, url: a.url, kind: "award" }));
  const press: Badge[] = pressAbout(p)
    .filter((a) => a.badge)
    .map((a) => ({ label: a.badge, url: a.url, kind: "press" }));
  return [...awards, ...press];
}

/**
 * A path from the YAML files as a site-root path. The YAML uses paths relative to the site root ("imgs/x.png"),
 * which resolve correctly only from top-level pages; nested pages such as /research/cram need "/imgs/x.png".
 */
export const asset = (path: string): string => (/^(https?:|mailto:|\/|#)/.test(path) ? path : `/${path}`);
