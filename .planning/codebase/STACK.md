# Stack

## Overview

This repository is a static-first Astro theme for personal publishing. The primary stack is Astro 5, TypeScript, Tailwind CSS v4, and Markdown/MDX content collections, with additional plugins for typography, math, code rendering, search, RSS, and social images.

## Languages

- TypeScript in app/config files such as `astro.config.ts`, `tailwind.config.ts`, `src/content.config.ts`, and `src/pages/og-image/[...slug].png.ts`
- Astro component files in `src/components/`, `src/layouts/`, and `src/pages/`
- Markdown and MDX content in `src/content/blog/`, `src/content/note/`, and `src/content/tag/`
- CSS in `src/styles/global.css`, `src/styles/blocks/search.css`, and `src/styles/components/*.css`
- YAML for Git hooks in `.pre-commit-config.yaml`

## Runtime And Build

- Node.js 22 is the expected runtime per `AGENTS.md`
- `pnpm` is the package manager and lockfile owner via `pnpm-lock.yaml`
- ESM is enabled with `"type": "module"` in `package.json`
- Astro outputs a static site via `astro build`
- Vite powers local dev/build and is extended in `astro.config.ts`

## Core Frameworks And Libraries

- `astro` in `package.json` is the core framework
- `@astrojs/mdx`, `@astrojs/sitemap`, and `@astrojs/rss` handle content extensions and output
- `@tailwindcss/vite` and `tailwindcss` provide styling infrastructure
- `astro-expressive-code` powers code block rendering, configured from `src/site.config.ts`
- `astro-icon` provides icon rendering in Astro components
- `astro-robots-txt` and `astro-webmanifest` generate site metadata assets

## Content And Rendering Tooling

- `src/content.config.ts` defines the `blog`, `note`, and `tag` collections with Zod schemas
- `remark-math` and `rehype-katex` support math rendering
- Custom remark plugins live in `src/plugins/`
- `rehype-autolink-headings`, `rehype-external-links`, and `rehype-unwrap-images` shape rendered content output
- `reading-time` is used through `src/plugins/remark-reading-time.ts`

## Search And Asset Generation

- Pagefind is integrated through the `blogbuild` script in `package.json`
- Search UI mounts dynamically in `src/components/Search.astro`
- OG image generation uses `satori`, `satori-html`, and `@resvg/resvg-js` in `src/pages/og-image/[...slug].png.ts`
- Image optimization relies on `sharp`

## Formatting And Quality Tooling

- Biome configuration lives in `biome.json`
- Prettier configuration lives in `.prettierrc.js`
- Git hooks are managed by `pre-commit` through `.pre-commit-config.yaml`
- `pnpm check` runs `astro check && biome check`

## Configuration Surface

- Site metadata and theme-level options live in `src/site.config.ts`
- Astro integration wiring lives in `astro.config.ts`
- Tailwind typography customization lives in `tailwind.config.ts`
- TS path aliases are configured in `tsconfig.json`
