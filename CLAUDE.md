# Repository Guidelines

## Project Structure & Module Organization
Core app code lives in `src/`:
- `src/pages/`: route-driven Astro pages (`posts`, `notes`, `tags`, RSS, OG image endpoint).
- `src/components/` and `src/layouts/`: reusable UI and page shells.
- `src/components/blog/`: blog-specific UI such as TOC, backlinks, and comment blocks.
- `src/content/`: Markdown/MDX collections (`post`, `note`, `tag`). Filenames become slugs.
- `src/plugins/` and `src/utils/`: remark plugins and shared helpers.
- `src/styles/`: global, block, and component-level CSS.
Static files are in `public/`. Build output is generated in `dist/`.

## Build, Test, and Development Commands
Use `pnpm` (CI uses Node 22 + pnpm):
- `pnpm install`: install dependencies.
- `pnpm dev`: run local dev server at `localhost:3000`.
- `pnpm build`: production build to `dist/`.
- `pnpm postbuild`: generate Pagefind search index from `dist/`.
- `pnpm preview`: preview built output locally.
- `pnpm check`: Astro + Biome checks (`astro check && biome check`).
- `pnpm lint`: apply Biome fixes where possible.
- `pnpm format`: run Prettier (Astro + Tailwind plugins).

## Coding Style & Naming Conventions
- Formatting is enforced by Biome + Prettier; run `pnpm check` before opening a PR.
- Indentation is tabs (`useTabs: true`, width 2).
- Use semicolons, double quotes, and trailing commas where valid.
- Keep Astro components in `PascalCase` (for example `BaseHead.astro`), utility files in `camelCase` (for example `generateToc.ts`).
- Content entries should use descriptive, kebab-case filenames (for example `cover-image.md`).

## Testing Guidelines
There is no standalone unit-test suite in this repository. Treat these as required quality gates:
- `pnpm check` for type/lint validation.
- `pnpm build` to verify production output.
- For search-related changes, run `pnpm postbuild` and validate Pagefind behavior locally with `pnpm preview`.

## Commit & Pull Request Guidelines
Use `gitmoji + Conventional Commits` for all commit titles:
- Format:
```
<emoji> <type>[optional scope]: <description>

[optional body]

[optional footer]
```
- Core types: `feat`, `fix`; also allowed: `docs`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `style`.
- Breaking changes: use `!` after type/scope or add `BREAKING CHANGE:` in the footer.
- Examples:
  - `✨ feat(search): add tag filter shortcuts`
  - `🐛 fix(og-image): handle missing cover image`
  - `♻️ refactor: simplify remark plugin wiring`
- When merging a feature branch into `main`, use a regular merge commit (`git merge --no-ff`) instead of fast-forward.

Follow `.github/pull_request_template.md`:
- Describe scope (minor fix vs larger change).
- Link related issues (`Closes #123` when applicable).
- Include before/after screenshots for visual updates.
- Ensure CI-equivalent checks pass locally before requesting review.

## Security & Configuration Tips
- Copy `.example.env` to `.env` for local secrets; never commit secrets.
- Update `src/site.config.ts` and `astro.config.ts` together when changing site URL, metadata, or integration behavior.

## Collaboration Rules
- For frontend implementation tasks (for example Astro, Tailwind CSS v4, HTML, CSS, JavaScript, TypeScript, and related APIs), query Context7 MCP docs/examples first before coding; if insufficient, state that clearly and then use local repository context.
- `README.md` is for public-facing project usage/showcase content only; do not add personal collaboration habits or agent workflow rules there (for example Collaboration Conventions).
- When a change affects behavior, configuration, interfaces, usage, or comments, update related docs in the same PR.
- At minimum, keep `AGENTS.md`, `CLAUDE.md`, and impacted inline comments/docstrings in sync; update `README.md` only when user-facing behavior/usage docs actually change.
