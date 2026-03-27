# Integrations

## Overview

The project is mostly self-contained and build-time oriented. It has very few runtime service dependencies, but it integrates with multiple content, metadata, and deployment-adjacent tools.

## Astro Integrations

- `@astrojs/mdx` in `astro.config.ts` enables `.mdx` content support
- `@astrojs/sitemap` generates `sitemap-index.xml`
- `astro-robots-txt` generates `robots.txt`
- `astro-webmanifest` generates `manifest.webmanifest` and app icons from `public/icon.svg`
- `astro-expressive-code` adds themed code block rendering
- `astro-icon` loads icon sets for use in components such as `src/pages/index.astro` and `src/components/blog/Giscus.astro`

## Content Integrations

- Astro content collections load from local files using `glob()` in `src/content.config.ts`
- RSS feeds are generated from local collection data in `src/pages/rss.xml.ts` and `src/pages/notes/rss.xml.ts`
- Pagefind indexing is invoked post-build by the `blogbuild` script in `package.json`

## Comment And Embedding Integrations

- Giscus is the only live third-party comment integration, implemented in `src/components/blog/Giscus.astro`
- Repository/category identifiers are configured in `src/site.config.ts`
- The Giscus client script is loaded from `https://giscus.app/client.js`

## Frontend Runtime Integrations

- `pangu/browser` is loaded in `src/layouts/Base.astro` to auto-insert CJK/Latin spacing
- The browser `speculationrules` API is used in `src/layouts/Base.astro` for prefetch/prerender hints
- Pagefind UI is lazy-loaded client-side in `src/components/Search.astro`

## Build-Time Asset Integrations

- `satori` and `@resvg/resvg-js` render blog OG images in `src/pages/og-image/[...slug].png.ts`
- Local font binaries from `src/assets/roboto-mono-regular.ttf` and `src/assets/roboto-mono-700.ttf` are embedded into OG image generation
- Local Google font subsets are served from `public/fonts/`

## External Services And APIs

- No database integration is present
- No auth provider integration is present
- No payment provider integration is present
- No webhook receiver or sender exists in the current codebase
- No custom backend API routes are present beyond generated assets/feeds like RSS and OG image endpoints

## Deployment And Hosting Assumptions

- README links deployment flows for Netlify and Vercel
- The app itself is configured for static output, so hosting assumptions are CDN/static hosting friendly
- `siteConfig.url` in `src/site.config.ts` is treated as canonical site origin and is used in multiple generation flows

## Integration Risks

- Giscus relies on external script availability and correct repository metadata
- Pagefind requires an explicit extra step after `pnpm build`
- OG image generation depends on font files and `@resvg/resvg-js` availability at build time
