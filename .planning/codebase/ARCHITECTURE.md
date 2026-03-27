# Architecture

## High-Level Shape

This is a content-first static site architecture. Route files in `src/pages/` assemble data from Astro content collections and local helpers, then render through shared layouts and presentational components.

## Primary Flow

1. Content is loaded from `src/content/` using collection schemas in `src/content.config.ts`
2. Data helper functions in `src/data/post.ts` shape blog post lists, tags, and backlinks
3. Route entrypoints in `src/pages/` call those helpers and generate static paths where needed
4. Layouts in `src/layouts/` provide page shell, SEO head tags, shared header/footer, and article rendering
5. Components in `src/components/` provide UI fragments for search, timeline, TOC, post previews, comments, and project cards
6. Markdown/MDX rendering is extended through remark/rehype plugins configured in `astro.config.ts`

## Entry Points

- `src/pages/index.astro` is the homepage
- `src/pages/blog/[...page].astro` and `src/pages/blog/[...slug].astro` drive blog list and blog post pages
- `src/pages/notes/[...page].astro` and `src/pages/notes/[...slug].astro` drive notes pages
- `src/pages/tags/index.astro` and `src/pages/tags/[tag]/[...page].astro` drive tag archives
- `src/pages/projects/index.astro` is the project showcase page
- `src/pages/rss.xml.ts` and `src/pages/notes/rss.xml.ts` generate feeds
- `src/pages/og-image/[...slug].png.ts` generates per-post social images

## Layout Layers

- `src/layouts/Base.astro` wraps all pages with head, header, footer, skip link, and shared client-side enhancement scripts
- `src/layouts/BlogPost.astro` extends the base layout for article pages and composes masthead, TOC, backlinks, TL;DR, and Giscus

## Data And Derived State

- `getAllPosts()` in `src/data/post.ts` centralizes blog collection loading and draft filtering
- Backlinks are derived lazily in memory using `createBacklinksByPostMap()` in `src/data/post.ts`
- `src/utils/backlinks.ts` resolves internal blog links into canonical post IDs
- Grouping and tag aggregation are also centralized in `src/data/post.ts`

## Markdown Processing Pipeline

- `astro.config.ts` wires a mixed remark/rehype pipeline
- `src/plugins/remark-reading-time.ts` adds reading-time metadata
- `src/plugins/remark-post-backlinks.ts` records outbound links into frontmatter-like metadata
- `src/plugins/remark-admonitions.ts` and `src/plugins/remark-github-card.ts` add custom authoring features

## Client-Side Islands And Behavior

- Search is implemented as a custom element in `src/components/Search.astro`
- Theme-aware comment loading is handled in `src/components/blog/Giscus.astro`
- Base layout script enhances page navigation and typography using `astro:page-load`, `speculationrules`, and `pangu`

## Architectural Constraints

- The site is optimized for static generation rather than dynamic server state
- Repository configuration is centralized in `src/site.config.ts`
- Many features assume canonical URLs and filesystem-backed content rather than database records
