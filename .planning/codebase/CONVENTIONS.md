# Conventions

## Formatting

- Indentation uses tabs, consistent with [`biome.json`](../../biome.json) and [`.prettierrc.js`](../../.prettierrc.js).
- JavaScript and TypeScript use semicolons and double quotes.
- Astro files are formatted by Prettier with the `astro` parser override.
- Tailwind classes are kept inline in Astro markup rather than abstracted aggressively.

## TypeScript And Import Style

- The codebase prefers explicit typing for public helpers, for example in [`src/data/post.ts`](../../src/data/post.ts) and [`src/utils/generateToc.ts`](../../src/utils/generateToc.ts).
- Path alias `@/*` is used for imports from `src/`.
- `import type` is enforced by Biome outside Astro overrides.
- ESM syntax is used everywhere.

## Content Schema Conventions

- Frontmatter is validated centrally in [`src/content.config.ts`](../../src/content.config.ts).
- Blog content fields have strong defaults:
  - `draft: false`
  - `pinned: false`
  - `giscus: true`
  - `tldr: []`
- Tags are normalized to lowercase and deduplicated before use.

## Component Patterns

- Layouts are thin composition layers; route files usually fetch data and pass it down.
- Interactive behavior is embedded with inline `<script>` blocks in Astro components rather than moved into a framework runtime.
- Web components are used for isolated browser interactions:
  - `site-search`
  - `theme-toggle`

## Markdown Plugin Patterns

- Plugins are single-purpose and colocated under `src/plugins/`.
- Shared AST helpers are extracted to [`src/utils/remark.ts`](../../src/utils/remark.ts).
- Plugin output often augments Astro frontmatter via `file.data.astro.frontmatter`, as seen in [`src/plugins/remark-reading-time.ts`](../../src/plugins/remark-reading-time.ts) and [`src/plugins/remark-post-backlinks.ts`](../../src/plugins/remark-post-backlinks.ts).

## Error Handling Style

- Most UI-side failures degrade gracefully with `console.warn`, not thrown runtime errors.
- Examples:
  - Missing dialog/button in [`src/components/Search.astro`](../../src/components/Search.astro)
  - GitHub card fetch failures in [`src/plugins/remark-github-card.ts`](../../src/plugins/remark-github-card.ts)
  - Invalid theme value warnings in [`src/components/ThemeProvider.astro`](../../src/components/ThemeProvider.astro)

## Data And State Conventions

- There is minimal shared mutable state.
- The one notable module-level cache is `backlinksByPostPromise` in [`src/data/post.ts`](../../src/data/post.ts), used to avoid recomputing backlinks repeatedly.
- DOM state is generally read from attributes such as `data-theme` rather than centralized stores.

## Accessibility And Semantics

- The repo includes structural a11y patterns:
  - skip link via [`src/components/SkipLink.astro`](../../src/components/SkipLink.astro)
  - labeled nav/breadcrumb/feed/comment regions
  - `sr-only` text for icon-only buttons and links
- Biome’s accessibility rules are enabled with selective overrides in [`biome.json`](../../biome.json).

## Documentation Conventions

- Repo usage and setup are documented in [`README.md`](../../README.md).
- Collaboration and repo workflow rules are duplicated in [`AGENTS.md`](../../AGENTS.md) and [`CLAUDE.md`](../../CLAUDE.md).
- The repository currently expects doc updates alongside behavior/config changes.
