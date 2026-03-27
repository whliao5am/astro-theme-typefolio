# Stack

## Overview

Typefolio is a static Astro 5 site starter built on Node.js 22 and `pnpm`. The repo is published as an npm template package (`package.json`) and produces static HTML, RSS, and generated OG images through Astro build-time routes.

## Runtime

- **Language:** TypeScript-first project with Astro components and Markdown/MDX content.
- **Runtime:** Node.js 22 in CI and local development (`README.md`, `.github/workflows/ci.yml`).
- **Package manager:** `pnpm` with a lockfile committed at `pnpm-lock.yaml`.
- **Module system:** ESM via `"type": "module"` in `package.json`.

## Core Frameworks

- **Astro:** Main app framework and router (`astro`, `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss`).
- **Tailwind CSS v4:** Styling entry through `@tailwindcss/vite` in [`astro.config.ts`](../../astro.config.ts) and prose customization in [`tailwind.config.ts`](../../tailwind.config.ts).
- **Astro Icon:** Inline icon rendering in components like [`src/pages/index.astro`](../../src/pages/index.astro) and [`src/components/blog/Giscus.astro`](../../src/components/blog/Giscus.astro).
- **astro-expressive-code:** Build-time code block rendering configured from [`src/site.config.ts`](../../src/site.config.ts).

## Content Stack

- **Astro Content Collections:** Declared in [`src/content.config.ts`](../../src/content.config.ts) for `blog`, `note`, and `tag`.
- **Markdown/MDX loaders:** `glob()` loaders read from `src/content/blog`, `src/content/note`, and `src/content/tag`.
- **Math:** `remark-math` + `rehype-katex` in [`astro.config.ts`](../../astro.config.ts).
- **Custom remark plugins:** Backlinks, GitHub cards, reading time, and admonitions under `src/plugins/`.

## Asset And Build Tooling

- **Satori + Resvg:** OG image generation in [`src/pages/og-image/[...slug].png.ts`](../../src/pages/og-image/[...slug].png.ts).
- **Sharp:** Image pipeline dependency pinned in `package.json`.
- **Pagefind:** Post-build static search index generated via `pnpm blogbuild`.
- **pangu:** Client-side CJK/Latin spacing adjustment in [`src/layouts/Base.astro`](../../src/layouts/Base.astro).

## Formatting And Static Analysis

- **TypeScript config:** Strict Astro preset plus `@/*` path alias in [`tsconfig.json`](../../tsconfig.json).
- **Biome:** Lint and JS/TS formatting rules in [`biome.json`](../../biome.json).
- **Prettier:** Astro-aware formatting in [`.prettierrc.js`](../../.prettierrc.js).
- **pre-commit:** Local hook orchestration in [`.pre-commit-config.yaml`](../../.pre-commit-config.yaml).

## Build Commands

- `pnpm dev` / `pnpm start`: Local Astro dev server.
- `pnpm build`: Static production build.
- `pnpm blogbuild`: Pagefind indexing against `dist/`.
- `pnpm preview`: Preview built output.
- `pnpm check`: `astro check && biome check`.

## Important Config Files

- [`package.json`](../../package.json)
- [`astro.config.ts`](../../astro.config.ts)
- [`tailwind.config.ts`](../../tailwind.config.ts)
- [`biome.json`](../../biome.json)
- [`.prettierrc.js`](../../.prettierrc.js)
- [`tsconfig.json`](../../tsconfig.json)

## Notes

- The project currently has a dirty working tree during mapping, including removal of legacy webmention-related files. The map reflects the current working state, not necessarily the last committed state.
- There is no server database or backend runtime in the app itself; everything is static generation plus optional third-party embeds.
