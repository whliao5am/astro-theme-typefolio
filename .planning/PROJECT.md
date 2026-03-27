# Astro Typefolio

## What This Is

Astro Typefolio is a static personal-site template for researchers and developers who want a professional home for a homepage, blog, projects, tags, and research updates. The current codebase already delivers the main feature set; the active milestone is to replace upstream/demo residue with Typefolio-specific presentation so the project can ship as its official v1 release.

## Core Value

Provide a professional, elegant, minimal, static-fast personal publishing template that follows Occam's razor.

## Requirements

### Validated

- ✓ Homepage, about, blog, notes, projects, and tag routes exist and build successfully — existing codebase
- ✓ Markdown and MDX publishing support exists with TOC, TLDR, admonitions, GitHub cards, backlinks, and generated OG images — existing codebase
- ✓ Search, Giscus comments, pinned content surfaces, timeline/news presentation, and typography-focused styling already exist — existing codebase

### Active

- [ ] Reposition the homepage as a concise Typefolio introduction with GitHub access, pinned posts, and news, while removing the current list-heavy presentation
- [ ] Move the list-style self/site presentation from the homepage to the About page and rewrite About around Typefolio's real audience and purpose
- [ ] Refresh blog, tag, and related showcase content so public-facing copy no longer describes the previous template or test/demo content
- [ ] Repurpose the current Markdown Admonitions article into a Typefolio blog-components showcase covering admonitions, GitHub card, Astro Icon, TLDR, backlinks, and related blog UI capabilities
- [ ] Treat completion of this content-and-showcase refresh as the bar for the official v1 release

### Out of Scope

- README TODO feature development — deferred until after the official v1 content release
- New feature work or backend/platform expansion — this milestone is for presentation and content alignment, not capability expansion
- New page types or major information-architecture changes — keep the existing site structure and update the current surfaces in place

## Context

- The repository is a brownfield Astro project with an existing `.planning/codebase/` map covering stack, architecture, conventions, testing, and concerns
- The current product direction targets researchers and developers who need a polished personal homepage, blog, and research-update template
- Existing public content still contains upstream `astro-theme-cactus` residue, placeholder/test framing, and incomplete feature showcasing
- The user already considers the feature set functionally complete enough for v1; the remaining work is public-facing narrative alignment and example content quality
- Priority order for this milestone is: homepage, About page, blog system/showcase content, then tag-related surfaces

## Constraints

- **Tech stack**: Keep Astro + static generation + current integrations — this release should polish the current template instead of re-platforming it
- **Scope**: No new TODO features from README — the user wants an official v1 based on current capabilities first
- **Information architecture**: Reuse existing routes and page types — avoid expanding the template surface area during this milestone
- **Release bar**: Public-facing copy must describe Typefolio itself — v1 should not ship with upstream/template-test residue visible to end users

## Key Decisions

| Decision                                                                                | Rationale                                                                                                            | Outcome   |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------- |
| Define the next milestone as official v1 content alignment, not new feature development | The codebase already covers the desired core capabilities; presentation drift is the real blocker to a clean release | — Pending |
| Prioritize updates in the order Home → About → Blog → Tags                              | This matches the highest-visibility entry points and the user's stated sequencing                                    | — Pending |
| Use the existing feature set as the showcase baseline                                   | The goal is to explain and demonstrate current capabilities clearly before extending the template further            | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):

1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):

1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---

_Last updated: 2026-03-27 after initialization_
