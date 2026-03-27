# Conventions

## Formatting

- Tabs are the indentation standard, documented in `AGENTS.md`
- Prettier is configured in `.prettierrc.js`
- Biome formatting and lint rules are configured in `biome.json`
- The codebase prefers semicolons and double quotes

## File Naming

- Astro components use `PascalCase`, for example `src/components/BaseHead.astro`
- Utility modules use descriptive lowercase/camelCase names, for example `src/utils/generateToc.ts`
- Markdown content uses slug-friendly filenames and directory names, for example `src/content/blog/cover-image/index.md`

## TypeScript Patterns

- Shared interfaces are centralized in `src/types.ts`
- Astro route files frequently use `GetStaticPaths` and `InferGetStaticPropsType`, as in `src/pages/blog/[...slug].astro`
- Type imports are used in many TS files, matching the Biome rule set
- Constants are preferred over mutable state unless caching is intentional, as in `backlinksByPostPromise` in `src/data/post.ts`

## Configuration Patterns

- Site-wide metadata is centralized in `src/site.config.ts`
- Astro integration wiring stays in `astro.config.ts`
- Route and layout code reads from `siteConfig` rather than duplicating metadata

## Content Conventions

- Blog entries support `title`, `description`, `publishDate`, optional `updatedDate`, `tags`, `tldr`, `pinned`, and `giscus` per `src/content.config.ts`
- Tag names are normalized to lowercase and de-duplicated in `src/content.config.ts`
- Notes have a simpler schema and require ISO datetime strings with timezone offsets

## UI And Styling Conventions

- Tailwind utility classes are heavily used inline in Astro templates
- Component-specific CSS is extracted when inline utilities would be unwieldy, for example `src/styles/blocks/search.css`
- Typography customizations are centralized in `tailwind.config.ts`

## Error Handling And Defensive Code

- Utility functions often return `undefined` instead of throwing for invalid inputs, for example `resolvePostLinkToId()` in `src/utils/backlinks.ts`
- Client-side components tend to warn and return early when expected DOM nodes are missing, for example `src/components/Search.astro`
- Draft filtering is environment-sensitive through `import.meta.env.PROD` in `src/data/post.ts`

## Documentation And Workflow Conventions

- Repository process rules are duplicated in `AGENTS.md` and `CLAUDE.md`
- The repo expects related docs/config comments to be updated when behavior changes
- The project currently has some executable-bit noise on text files, which appears incidental rather than intentional
