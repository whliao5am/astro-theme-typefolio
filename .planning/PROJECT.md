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
- ✓ Homepage now presents Typefolio as a concise entry surface with GitHub access, pinned posts, and news — validated in Phase 1
- ✓ About now carries the denser capability inventory and Typefolio-specific positioning — validated in Phase 1
- ✓ Blog archive and public showcase posts now describe Typefolio's real publishing features instead of inherited template/demo content — validated in Phase 2
- ✓ Tag archives now use Typefolio-specific wording and align with the rest of the public narrative — validated in Phase 3
- ✓ The v1 content-and-showcase milestone is complete and ready to present as the official release candidate — validated in Phase 3

### Active

- None. The v1 content-alignment milestone is complete.

### Out of Scope

- README TODO feature development — deferred until after the official v1 content release
- New feature work or backend/platform expansion — this milestone is for presentation and content alignment, not capability expansion
- New page types or major information-architecture changes — keep the existing site structure and update the current surfaces in place

## Context

- The repository is a brownfield Astro project with an existing `.planning/codebase/` map covering stack, architecture, conventions, testing, and concerns
- The current product direction targets researchers and developers who need a polished personal homepage, blog, and research-update template
- The v1 milestone has now aligned Home, About, Blog, and Tags around one coherent Typefolio narrative
- Future work can move to post-v1 improvements rather than more public-facing residue cleanup

## Constraints

- **Tech stack**: Keep Astro + static generation + current integrations — this release should polish the current template instead of re-platforming it
- **Scope**: No new TODO features from README — the user wants an official v1 based on current capabilities first
- **Information architecture**: Reuse existing routes and page types — avoid expanding the template surface area during this milestone
- **Release bar**: Public-facing copy must describe Typefolio itself — v1 should not ship with upstream/template-test residue visible to end users

## Key Decisions

| Decision                                                                                | Rationale                                                                                                            | Outcome           |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Define the next milestone as official v1 content alignment, not new feature development | The codebase already covers the desired core capabilities; presentation drift is the real blocker to a clean release | Phase 1 confirmed |
| Prioritize updates in the order Home → About → Blog → Tags                              | This matches the highest-visibility entry points and the user's stated sequencing                                    | Phase 1 completed |
| Use the existing feature set as the showcase baseline                                   | The goal is to explain and demonstrate current capabilities clearly before extending the template further            | Phase 1 completed |
| Repurpose the former admonitions article into an MDX component walkthrough              | Astro Icon needed to be rendered directly, and the showcase had to feel like product documentation instead of demo filler | Phase 2 completed |
| Hide pure test posts from production rather than polishing them as public examples       | The release bar was a clean archive, not keeping internal verification posts visible                                  | Phase 2 completed |
| Treat the tag/archive consistency pass as the final v1 release gate                     | Once Home, About, Blog, and Tags aligned, the milestone objective was fully satisfied                                | Phase 3 completed |

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

_Last updated: 2026-03-27 after Phase 3 completion_
