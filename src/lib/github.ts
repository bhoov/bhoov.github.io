/**
 * GitHub star counts, fetched once per repository at build time.
 * With GITHUB_TOKEN set (as in the deploy workflow), requests are authenticated and get a higher rate limit.
 * If a request fails, the count is null and the link is shown without stars, so a build never fails on this.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const cache = new Map<string, Promise<number | null>>();

// Counts are also kept on disk for 6 hours, so repeated local builds stay under GitHub's unauthenticated limit (60 requests per hour).
const diskPath = "node_modules/.cache/github-stars.json";
const maxAgeMs = 6 * 60 * 60 * 1000;
let disk: Record<string, { stars: number; at: number }> = {};
try {
  disk = JSON.parse(readFileSync(diskPath, "utf8"));
} catch {}
const remember = (repo: string, stars: number) => {
  disk[repo] = { stars, at: Date.now() };
  try {
    mkdirSync("node_modules/.cache", { recursive: true });
    writeFileSync(diskPath, JSON.stringify(disk));
  } catch {}
};

/** "owner/repo" from a GitHub repository URL, or null for any other URL. */
export function githubRepo(url: string): string | null {
  const match = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/?#]+)/);
  return match ? `${match[1]}/${match[2].replace(/\.git$/, "")}` : null;
}

export function githubStars(url: string): Promise<number | null> {
  const repo = githubRepo(url);
  if (!repo) return Promise.resolve(null);
  const saved = disk[repo];
  if (!cache.has(repo) && saved && Date.now() - saved.at < maxAgeMs) cache.set(repo, Promise.resolve(saved.stars));
  if (!cache.has(repo)) {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "bhoov.com-build" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    cache.set(
      repo,
      fetch(`https://api.github.com/repos/${repo}`, { headers })
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          const stars = typeof json?.stargazers_count === "number" ? json.stargazers_count : null;
          if (stars !== null) remember(repo, stars);
          return stars ?? saved?.stars ?? null; // on failure, an expired saved count is better than none
        })
        .catch(() => saved?.stars ?? null),
    );
  }
  return cache.get(repo)!;
}

/** 812 -> "812", 9212 -> "9.2k", 12400 -> "12k". */
export function formatStars(n: number): string {
  if (n < 1000) return String(n);
  const k = n / 1000;
  return `${k >= 10 ? Math.round(k) : k.toFixed(1).replace(/\.0$/, "")}k`;
}
