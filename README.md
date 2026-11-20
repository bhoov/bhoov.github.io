# bhoov-github-io

Built with [Astro](https://astro.build/) and [MDX](https://mdxjs.com/), styled with plain CSS.

## Layout

- `_data/*.yaml` holds the site content: publications, news, CV sections and contact cards.
  `src/data.ts` loads every file into `data.<filename>`, so `_data/news.yaml` becomes `data.news`.
  Any page or component can `import { data } from "../data"`.
- `src/pages/` defines the routes.
  `index.astro` is the homepage and `cv.astro` is the CV.
  Each featured work has a page at `/research/<slug>`, made by `src/pages/research/[slug].astro` from its entry in `_data/publications.yaml` (`slug`, `tagline`, `abstract`, `links`, `moreLinks`, `bibtex`).
  Other standalone pages (for example `hopfield-networks-2.0.mdx`) are MDX files that use `src/layouts/Project.astro`; see that file for its frontmatter fields.
- `src/components/` holds the components; `src/components/cv/` holds the CV entries.
- Styles are plain CSS.
  `src/styles/global.css` has the color tokens (`--slate-400`, `--rose-900`, ...), a small reset and the base `h1` style.
  `src/styles/cv.css` has the classes shared by the CV entries.
  Everything else is in the `<style>` block of the component that uses it; Astro scopes those styles to the component.
- `public/` is copied to the site root unchanged (images, icons, PDFs, `CNAME`).
- Pages are built as `<name>.html` (`build.format: "file"` in `astro.config.mjs`), so `/cv` is served from `cv.html`.

To add a project page, copy `src/pages/drdam.mdx`, change the frontmatter and write the body in Markdown.
Add anyone in its `connect:` list to `_data/contacts.yaml`.

Astro removes whitespace that contains a newline next to an element, as JSX does.
In `.astro` files, keep an inline link on the same line as the text around it.

## Quickstart

Requires Node 22 or later and pnpm (`corepack enable` provides the version pinned in `package.json`).

```sh
pnpm install
pnpm dev        # dev server with live reload
pnpm build      # build the site into build/ and print the CV PDF
pnpm preview    # serve build/
pnpm check      # type-check .astro files
```

`pnpm build` runs `astro build` and then `pnpm print-cv`.
`print-cv` serves `build/` with Astro's preview server, prints `/cv` with Puppeteer, and writes `cv-pdfs/benjamin-hoover-cv.pdf` into both `build/` and `public/`.
Commit the updated `public/` copy so the repository holds the current PDF.
Puppeteer downloads Chrome into `.cache/puppeteer/` (gitignored) on first use.

## Building and deploying

The site is deployed with [`gh-pages`](https://www.npmjs.com/package/gh-pages), which pushes `build/` to the `gh-pages` branch.

**WARNING: Never commit directly to the `gh-pages` branch.**

Pushing to the `deploy` branch runs `.github/workflows/gh-pages.yml`, which builds the site (including the CV PDF) and runs `gh-pages`.

To build and deploy from your machine instead:

```sh
pnpm run deploy   # `pnpm deploy` is a different, built-in pnpm command
```
