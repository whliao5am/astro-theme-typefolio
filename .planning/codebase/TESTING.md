# Testing

## Current Validation Strategy

There is no standalone unit-test or integration-test suite in this repository. Quality is enforced primarily through static analysis, content/type validation, and production builds.

## Primary Commands

- `pnpm check`
  - Runs `astro check && biome check`
  - Verifies Astro routes, content schemas, type safety, and Biome lint/format rules
- `pnpm build`
  - Builds the static site and validates route generation
- `pnpm blogbuild`
  - Generates the Pagefind index against `dist/`
- `pnpm preview`
  - Local preview of build output for manual verification

## CI Coverage

GitHub Actions in [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) runs:

1. `pnpm install`
2. `pnpm check`
3. `pnpm build`

CI does not currently run `pnpm blogbuild`, browser tests, or visual regression tests.

## Local Hook Coverage

`pre-commit` hooks in [`.pre-commit-config.yaml`](../../.pre-commit-config.yaml) provide two layers:

- **pre-commit**
  - YAML validation
  - end-of-file normalization
  - trailing whitespace cleanup
  - Biome for staged JS/TS-family files
  - Prettier for staged Astro/Markdown/HTML-family files
- **pre-push**
  - `pnpm astro check`
  - `pnpm build`

## What Gets Verified Well

- Content frontmatter shape via [`src/content.config.ts`](../../src/content.config.ts)
- Astro route generation and static path correctness
- Type-level mistakes in data helpers and config
- Formatting and many lint-level regressions
- Production build compatibility for OG generation, RSS routes, and static pages

## What Is Not Covered Well

- No unit tests for helpers like [`src/utils/backlinks.ts`](../../src/utils/backlinks.ts) or [`src/utils/generateToc.ts`](../../src/utils/generateToc.ts)
- No automated browser coverage for:
  - theme toggling
  - search modal behavior
  - Giscus theme synchronization
  - pangu spacing behavior
- No visual regression testing for typography/layout changes
- No mocked tests for custom remark plugins

## Manual Testing Hotspots

Changes should be manually checked in:

- blog post rendering and TOC behavior via [`src/layouts/BlogPost.astro`](../../src/layouts/BlogPost.astro)
- homepage pinned posts and timeline via [`src/pages/index.astro`](../../src/pages/index.astro)
- tag archive pagination via [`src/pages/tags/[tag]/[...page].astro`](../../src/pages/tags/[tag]/[...page].astro)
- search flow after `pnpm build && pnpm blogbuild && pnpm preview`
- OG image generation via [`src/pages/og-image/[...slug].png.ts`](../../src/pages/og-image/[...slug].png.ts)

## Testing Assessment

For a theme/template repo, the current validation floor is reasonable but incomplete. The biggest gap is lack of direct automated coverage for custom markdown transforms and browser-side enhancements, which are exactly the parts most likely to regress silently.
