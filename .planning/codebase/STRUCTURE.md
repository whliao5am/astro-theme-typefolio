# Structure

## Top-Level Layout

- `src/` — application code, Astro pages, components, layouts, content, utilities, plugins, and styles
- `public/` — static assets served as-is
- `.github/workflows/` — CI configuration
- `dist/` — generated output after build
- `logo-design/` — auxiliary design assets, not part of runtime app

## Source Tree Breakdown

## Routes

- `src/pages/`
- Dynamic catch-all routing is used for archives and content detail pages:
  - `blog/[...slug].astro`
  - `blog/[...page].astro`
  - `notes/[...slug].astro`
  - `notes/[...page].astro`
  - `tags/[tag]/[...page].astro`

## Layouts

- `src/layouts/Base.astro` — global shell
- `src/layouts/BlogPost.astro` — post-specific shell

## Components

- `src/components/layout/` — `Header.astro`, `Footer.astro`
- `src/components/blog/` — TOC, masthead, backlinks, post preview, TLDR, comments
- `src/components/home/` — homepage timeline
- `src/components/projects/` — project cards
- `src/components/note/` — note rendering
- root-level components — search, theme toggle/provider, inline icon link, paginator, base head

## Content

- `src/content/blog/` — example and showcase blog content
- `src/content/note/` — note collection
- `src/content/tag/` — tag metadata overrides

Blog content mixes flat files and nested directories:

- `src/content/blog/pagination-preview.md`
- `src/content/blog/cover-image/index.md`
- `src/content/blog/markdown-elements/admonitions.md`

## Utilities And Data Modules

- `src/data/post.ts` — content query and aggregation helpers
- `src/utils/date.ts` — formatting and sorting helpers
- `src/utils/backlinks.ts` — internal blog URL resolution helpers
- `src/utils/generateToc.ts` — heading tree builder
- `src/utils/remark.ts` — shared mdast/hast helpers
- `src/utils/domElement.ts` — DOM/theme helper(s)

## Plugin Organization

Custom markdown plugins live in `src/plugins/`:

- `remark-admonitions.ts`
- `remark-github-card.ts`
- `remark-post-backlinks.ts`
- `remark-reading-time.ts`

Each plugin is small and focused rather than bundled into a monolithic content transform layer.

## Styling Layout

- `src/styles/global.css` — global theme tokens and broad styling
- `src/styles/blocks/` — block-level styles such as search
- `src/styles/components/` — specialized component styles like admonitions, GitHub cards, project cards
- `tailwind.config.ts` extends prose typography instead of colocating all styles in components

## Naming Patterns

- Astro components use `PascalCase`, e.g. `BaseHead.astro`, `PostPreview.astro`
- Utility and plugin files use `camelCase` or descriptive kebab-free names, e.g. `generateToc.ts`, `remark-post-backlinks.ts`
- Content filenames are slug-oriented and often kebab-case, e.g. `social-image.md`
- Dynamic routes follow Astro conventions with `[param]` and `[...param]`

## Structural Observations

- The repo is intentionally shallow and readable; most logic is near the routes or markdown plugins.
- There is little indirection beyond the shared post data helpers in [`src/data/post.ts`](../../src/data/post.ts).
- `dist/` is present in the repo working tree, which is useful for previews but should be treated as generated output during reasoning and edits.
