# Integrations

## Overview

The codebase is mostly self-contained. External integrations are concentrated in build-time Astro integrations, client-side embeds, and content enhancement APIs.

## Astro Integrations

Configured in [`astro.config.ts`](../../astro.config.ts):

- `expressiveCode(expressiveCodeOptions)` for enhanced code blocks.
- `icon()` from `astro-icon`.
- `sitemap()` from `@astrojs/sitemap`.
- `mdx()` from `@astrojs/mdx`.
- `robotsTxt()` from `astro-robots-txt`.
- `webmanifest()` from `astro-webmanifest`.

These are build-time integrations with no custom remote credentials visible in the repo.

## Search Integration

- **Pagefind** is wired as a post-build step through `pnpm blogbuild` in [`package.json`](../../package.json).
- The UI is lazy-loaded in [`src/components/Search.astro`](../../src/components/Search.astro) using `@pagefind/default-ui`.
- Search only functions against generated build artifacts under `dist/pagefind/`.

## Comments Integration

- **Giscus** is the only comment provider currently wired.
- Configuration lives in [`src/site.config.ts`](../../src/site.config.ts) via `giscusConfig`.
- The embed is mounted client-side in [`src/components/blog/Giscus.astro`](../../src/components/blog/Giscus.astro).
- Required identifiers:
  - `repo`
  - `repoId`
  - `category`
  - `categoryId`

## GitHub API Usage

- [`src/plugins/remark-github-card.ts`](../../src/plugins/remark-github-card.ts) generates client-side cards that fetch:
  - `https://api.github.com/repos/{owner}/{repo}`
  - `https://api.github.com/users/{username}`
- These requests are unauthenticated and run in the browser after page load.
- Failure mode is soft: the card stays in an error state and logs a warning.

## RSS And Metadata

- Blog RSS route: [`src/pages/rss.xml.ts`](../../src/pages/rss.xml.ts)
- Notes RSS route: [`src/pages/notes/rss.xml.ts`](../../src/pages/notes/rss.xml.ts)
- Base metadata and feed auto-discovery links live in [`src/components/BaseHead.astro`](../../src/components/BaseHead.astro).

## OG Image Pipeline

- [`src/pages/og-image/[...slug].png.ts`](../../src/pages/og-image/[...slug].png.ts) integrates:
  - `satori` for SVG rendering
  - `satori-html` for templated markup
  - `@resvg/resvg-js` for PNG output
- Fonts are loaded from local assets:
  - [`src/assets/roboto-mono-regular.ttf`](../../src/assets/roboto-mono-regular.ttf)
  - [`src/assets/roboto-mono-700.ttf`](../../src/assets/roboto-mono-700.ttf)

## Typography And Browser Features

- `pangu/browser` is imported in [`src/layouts/Base.astro`](../../src/layouts/Base.astro) to insert CJK/Latin spacing client-side.
- The base layout also injects browser speculation rules for prefetch and prerender.

## CI And Developer Tooling

- GitHub Actions CI in [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) installs Node 22 and runs `pnpm check` plus `pnpm build`.
- `pre-commit` hooks in [`.pre-commit-config.yaml`](../../.pre-commit-config.yaml) run:
  - YAML/EOL/whitespace checks
  - Biome on staged JS/TS-like files
  - Prettier on staged Astro/Markdown/HTML-like files

## Environment And Secrets

- There are currently no active runtime secrets declared in the app config.
- Giscus values are hard-coded in [`src/site.config.ts`](../../src/site.config.ts), which is acceptable for public repo/discussion identifiers but not for private secrets.
- Legacy webmention env wiring appears removed in the current working tree.
