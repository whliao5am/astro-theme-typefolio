# Testing

## Current Testing Model

There is no standalone unit or integration test suite in this repository. Quality is enforced through static analysis, build verification, and manual preview flows.

## Required Validation Commands

- `pnpm check` runs `astro check && biome check`
- `pnpm build` verifies production output generation
- `pnpm blogbuild` generates the Pagefind index after a successful build
- `pnpm preview` is used to manually inspect built output locally

## Git Hook Enforcement

The project uses `pre-commit` with hook definitions in `.pre-commit-config.yaml`.

- Pre-commit hooks:
  - `check-yaml`
  - `end-of-file-fixer`
  - `trailing-whitespace`
  - `biome (staged)`
  - `prettier (staged)`
- Pre-push hooks:
  - `astro check`
  - `astro build`

## What Gets Verified Well

- Astro route/content typing and schema correctness
- Lint and formatting consistency
- Production build integrity
- Search indexing workflow when manually invoked

## What Is Not Covered Well

- No unit tests for helpers in `src/utils/` or `src/data/post.ts`
- No component-level rendering tests for Astro components
- No end-to-end browser tests for search, theme toggle, Giscus, or pagination
- No snapshot coverage for generated RSS or OG image outputs

## Manual Regression Hotspots

- `src/components/Search.astro` because it mixes custom elements, dialogs, and lazy imports
- `src/components/blog/Giscus.astro` because it depends on external script loading and theme synchronization
- `src/pages/og-image/[...slug].png.ts` because it depends on build-time binary/font behavior
- `src/plugins/remark-post-backlinks.ts` and `src/data/post.ts` because backlink derivation is cross-file and content-driven

## Testing Recommendations

- Preserve `pnpm check` and `pnpm build` as mandatory gates
- Use `pnpm blogbuild` when changing search UI or content indexing behavior
- Consider adding focused tests around utilities and plugin transforms before larger feature expansion
