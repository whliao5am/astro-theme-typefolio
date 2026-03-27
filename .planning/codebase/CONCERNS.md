# Concerns

## Overview

The codebase is small and readable, but several areas are fragile because they depend on build-time conventions, browser behavior, or manual workflow discipline rather than automated enforcement.

## Build And Workflow Concerns

- Search is a two-step workflow: `pnpm build` followed by `pnpm blogbuild`. Missing the second step leaves search unavailable in production despite a successful site build.
- The repo currently relies on process documentation instead of automated CI definitions visible in the codebase root.
- Hooks can rewrite files at commit time, which can surprise contributors and interrupt commits if they expect a pure validation pass.

## Frontend Runtime Concerns

- `src/components/Search.astro` implements a custom element, dialog behavior, keyboard shortcuts, and lazy imports in one file. This is a likely regression hotspot.
- `src/components/blog/Giscus.astro` depends on third-party script loading and theme synchronization via `postMessage` and DOM observation.
- `src/layouts/Base.astro` adds multiple document-level event listeners and runtime enhancements; subtle lifecycle issues may emerge during Astro page transitions.

## Content Pipeline Concerns

- Backlinks depend on markdown link resolution behavior between `src/plugins/remark-post-backlinks.ts`, `src/utils/backlinks.ts`, and `src/data/post.ts`. Link-shape changes can silently break derived backlinks.
- Content schemas are reasonably strict, but the note collection requires a specific datetime format that contributors may get wrong.
- Example/demo content is mixed with theme source content, which can blur the line between shipped feature examples and maintainers' intended defaults.

## Architecture Concerns

- Theme configuration is centralized, which is good, but many files depend on `src/site.config.ts`; changes there have broad blast radius.
- There is no dedicated abstraction layer for client-side interactive features, so custom elements and inline scripts may accumulate complexity over time.
- The project uses both Tailwind config customization and global CSS tokens; future styling changes need care to avoid drift between the two systems.

## Testing And Reliability Concerns

- No automated unit/e2e coverage exists for route behavior, client interactivity, or plugin transforms.
- OG image generation in `src/pages/og-image/[...slug].png.ts` depends on binary/font tooling that can fail in environment-specific ways.
- Pagefind behavior is only validated when maintainers remember to run `pnpm blogbuild` and preview locally.

## Security And Operational Concerns

- The site is mostly static, so the attack surface is low, but third-party scripts like Giscus still deserve scrutiny.
- Canonical URLs and feed output depend on `siteConfig.url`; incorrect values can leak into OG/RSS/sitemap output.
- The deleted `.example.env` noted in recent history suggests environment example coverage may now be incomplete if new secrets are introduced later.
