# Concerns

## 1. Dirty Working Tree During Mapping

The repository is currently not clean. Mapping happened while webmention-related files were being removed from the working tree. Any planning that assumes the last commit matches the current local state could drift if those changes are not committed or are later modified.

## 2. No Automated Tests For Core Custom Logic

There are no unit or integration tests for:

- [`src/plugins/remark-admonitions.ts`](../../src/plugins/remark-admonitions.ts)
- [`src/plugins/remark-github-card.ts`](../../src/plugins/remark-github-card.ts)
- [`src/plugins/remark-post-backlinks.ts`](../../src/plugins/remark-post-backlinks.ts)
- [`src/utils/backlinks.ts`](../../src/utils/backlinks.ts)
- [`src/utils/generateToc.ts`](../../src/utils/generateToc.ts)

These are high-value custom behaviors with failure modes that `pnpm check` will not fully catch.

## 3. Client-Side GitHub API Calls Are Fragile

[`src/plugins/remark-github-card.ts`](../../src/plugins/remark-github-card.ts) emits inline scripts that fetch GitHub APIs in the browser. Risks:

- unauthenticated rate limits
- API shape changes
- content layout breakage when fetch fails
- CSP sensitivity because cards depend on inline script execution

## 4. Search Is Easy To Misread During Development

[`src/components/Search.astro`](../../src/components/Search.astro) intentionally disables real search in dev mode. This is documented, but it creates a common confusion path: the feature appears present but is not testable until build plus Pagefind indexing have been run.

## 5. Heavy Reliance On Inline Scripts

Theme switching, search, GitHub cards, and post UI behaviors are implemented with inline scripts inside Astro files. This keeps the architecture simple, but it raises maintenance cost around:

- lifecycle events during Astro page transitions
- CSP hardening
- duplicated DOM-query logic
- subtle hydration-free regressions

## 6. Generated Output Is Present In Repo

`dist/` exists locally and may be checked or reasoned about accidentally. Since routes and tag pages are derived from content, stale generated output can mislead debugging if a contributor inspects `dist/` before rebuilding.

## 7. Some Content And Copy Still Look Template-Like

[`src/pages/index.astro`](../../src/pages/index.astro) and parts of [`README.md`](../../README.md) still contain starter-theme language and placeholder-style examples. That is acceptable for a template repo, but it can blur the line between “showcase content” and “real product behavior.”

## 8. Comment System Is Publicly Configured

Giscus identifiers in [`src/site.config.ts`](../../src/site.config.ts) are public-safe, but they are hard-coded to a specific repo/category. Template consumers who forget to replace them may accidentally point discussions at the upstream configuration.

## 9. Build-Time Rendering Features Increase Change Risk

The project combines several build-sensitive features:

- MDX
- custom remark plugins
- KaTeX
- expressive-code
- Satori/Resvg OG images
- Pagefind post-processing

This is still manageable, but it means seemingly small content or config edits can have wide downstream effects. Any roadmap touching markdown, rendering, or asset pipelines should plan explicit build verification.
