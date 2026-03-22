# Typefolio

Typefolio is a typography-focused blog and portfolio starter built with [Astro](https://astro.build/). It began as a fork of `astro-theme-cactus`, then evolved into a more editorial, reading-first theme with tighter spacing, bilingual typography support, a restrained black-and-white visual system, and several blog-oriented quality-of-life improvements.

The original upstream README is preserved in [`README-cactus.md`](./README-cactus.md).

## Table Of Contents

- [Typefolio](#typefolio)
  - [Table Of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Quick Start](#quick-start)
  - [Commands](#commands)
  - [Configure](#configure)
  - [Adding Posts, Notes, and Tags](#adding-posts-notes-and-tags)
    - [Post Frontmatter](#post-frontmatter)
    - [Note Frontmatter](#note-frontmatter)
    - [Tag Frontmatter](#tag-frontmatter)
  - [Search](#search)
  - [Comments](#comments)
  - [Acknowledgment](#acknowledgment)
  - [License](#license)

## Key Features

- Astro v5 starter for personal blogs, notes, and portfolio-style publishing
- Markdown and MDX content collections for posts, notes, and tag pages
- Black-and-white light/dark theme with a custom Typefolio visual identity
- Four built-in accent palettes: the original scheme plus Slate Blue, Sepia Ink, and Muted Teal
- Local bilingual font loading for English and Simplified Chinese text
- Automatic CJK/Latin spacing refinement via [pangu](https://github.com/vinta/pangu.js)
- Tuned prose spacing and blog typography for long-form reading
- Sticky table of contents with active section highlighting on desktop
- TL;DR block support via frontmatter
- LaTeX math rendering via KaTeX (`$...$`, `$$...$$`)
- Automatic backlinks for posts referenced by other posts
- Giscus comments with theme synchronization and per-post opt-out
- Homepage `What's New` timeline for research, writing, and project updates
- Refined pinned-post presentation on the homepage and blog index
- Generated OG images with a Typefolio theme icon
- RSS, sitemap, robots.txt, web app manifest, and Pagefind-powered static search
- Expressive Code syntax highlighting and Astro Icon integration

## Quick Start

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

To build and preview production output locally:

```bash
pnpm build
pnpm blogbuild
pnpm preview
```

## Commands

| Command              | Action                                                         |
| :------------------- | :------------------------------------------------------------- |
| `pnpm install`       | Install dependencies                                           |
| `pnpm dev`           | Start the local dev server at `localhost:3000`                 |
| `pnpm build`         | Build the production site to `./dist/`                         |
| `pnpm blogbuild`     | Generate the Pagefind search index from `./dist/`              |
| `pnpm preview`       | Preview the production build locally                           |
| `pnpm check`         | Run Astro type/content checks and Biome validation             |
| `pnpm lint`          | Apply Biome fixes where possible                               |
| `pnpm format`        | Format the project with Prettier                               |
| `pnpm hooks:install` | Install `pre-commit` Git hooks for `pre-commit` and `pre-push` |
| `pnpm hooks:run`     | Run all configured `pre-commit` hooks across the repository    |

## Git Hooks

This repository uses [`pre-commit`](https://pre-commit.com/) to keep local checks aligned with [`.github/workflows/ci.yml`](./.github/workflows/ci.yml).

Install the tool once on your machine, then install the repository hooks:

```bash
uv tool install pre-commit
pnpm hooks:install
```

If you do not use `uv`, `pipx install pre-commit` works as well.

Configured hooks:

- `pre-commit`: runs `prettier`, `biome`, and basic YAML/whitespace hygiene checks on staged files.
- `pre-push`: runs `pnpm astro check` and `pnpm build` to mirror the current GitHub Actions validation flow before code leaves your machine.

## Configure

- Edit `src/site.config.ts` to update the site title, author, description, locale, menu links, URL, and Giscus configuration.
  - Set `siteConfig.url` to your own production domain.
  - Update `giscusConfig` with your repository and discussion category details.
  - Toggle comment blocks through `commentDisplayConfig`.
- Edit `astro.config.ts` when you need to change integrations or site-wide markdown behavior.
  - KaTeX, autolinked headings, external link behavior, backlinks, admonitions, and reading-time support are wired here.
  - The web manifest and icon generation settings also live here.
- Replace and update assets in `public/`:
  - `icon.svg` is the source for generated favicons and app icons.
  - `social-card.png` is the default fallback social image.
- Replace or adjust local font assets in `public/fonts/`.
  - `public/fonts/google-fonts.css` currently loads local subsets of `Open Sans` and `Noto Sans SC`.
- Adjust theme tokens and prose styling in `src/styles/global.css`.
  - This is where Typefolio defines its spacing rhythm, typography system, link styles, and light/dark color variables.
- Update homepage content in `src/pages/index.astro`.
  - This includes the intro copy and the `What's New` timeline items.
- Add or edit content inside:
  - `src/content/blog/`
  - `src/content/note/`
  - `src/content/tag/`

## Adding Posts, Notes, and Tags

This project uses [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) to organize local Markdown and MDX files with schema validation in `src/content.config.ts`.

Adding a post, note, or tag page is as simple as creating a new `.md` or `.mdx` file in:

- `src/content/blog`
- `src/content/note`
- `src/content/tag`

The filename becomes the slug. Tag entries can override the generated tag archive copy for matching tag names.

### Post Frontmatter

| Property      | Description                                                                                   |
| :------------ | :-------------------------------------------------------------------------------------------- |
| `title`       | Post title. Required.                                                                         |
| `description` | SEO and preview description. Required.                                                        |
| `publishDate` | Publish date, parsed into a JavaScript `Date`. Required.                                      |
| `updatedDate` | Optional update date.                                                                         |
| `tags`        | Optional tag list. Values are lowercased and de-duplicated.                                   |
| `tldr`        | Optional list of short summary points displayed before the post body.                         |
| `coverImage`  | Optional image object with `src` and `alt` shown at the top of a post.                        |
| `ogImage`     | Optional custom social image path. If omitted, Typefolio generates an OG image automatically. |
| `draft`       | Optional boolean to exclude a post from production-facing output. Defaults to `false`.        |
| `pinned`      | Optional boolean to feature a post in pinned sections. Defaults to `false`.                   |
| `giscus`      | Optional boolean to disable Giscus for a specific post. Defaults to `true`.                   |

Example:

```yaml
---
title: "A Better Reading Rhythm"
description: "How Typefolio tunes spacing, typography, and content structure for long-form writing."
publishDate: 2026-03-18
updatedDate: 2026-03-19
tags: ["astro", "typography"]
tldr:
  - "Typefolio improves prose rhythm with tighter spacing rules."
  - "Posts can opt into pinned sections and TL;DR summaries."
pinned: true
giscus: true
---
```

### Note Frontmatter

| Property      | Description                              |
| :------------ | :--------------------------------------- |
| `title`       | Note title. Required.                    |
| `description` | Optional meta description.               |
| `publishDate` | ISO 8601 datetime with offset. Required. |

### Tag Frontmatter

| Property      | Description                           |
| :------------ | :------------------------------------ |
| `title`       | Optional custom tag page title.       |
| `description` | Optional custom tag page description. |

## Search

Typefolio uses [Pagefind](https://pagefind.app/) for static search.

Build the site first, then generate the search index:

```bash
pnpm build
pnpm blogbuild
```

Preview the built site with:

```bash
pnpm preview
```

Search is based on the built output in `dist/`, so it does not reflect production-like behavior until after `pnpm build` and `pnpm blogbuild` have run.

## Comments

Typefolio supports [Giscus](https://giscus.app/) comments on blog posts.

1. Make sure your discussion repository is public, GitHub Discussions are enabled, and the Giscus app is installed.
2. Fill in `giscusConfig` in `src/site.config.ts` with `repo`, `repoId`, `category`, and `categoryId`.
3. Theme synchronization is built in. Typefolio maps its current site theme to the embedded Giscus theme automatically.
4. Toggle comment providers globally through `commentDisplayConfig` in `src/site.config.ts`.
5. Disable comments per post with `giscus: false` in the post frontmatter.

## Acknowledgment

Typefolio is based on:

- [chrismwilliams/astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus)

Related inspiration:

- [kirontoo/astro-theme-cody](https://github.com/kirontoo/astro-theme-cody)
- [Herman's blog](https://herman.bearblog.dev/)
- [Motherfucking Website](https://motherfuckingwebsite.com/)
- [Better Motherfucking Website](http://bettermotherfuckingwebsite.com/)
- [The Best Motherfucking Website](https://thebestmotherfucking.website/)

## License

MIT. See [LICENSE](./LICENSE).
