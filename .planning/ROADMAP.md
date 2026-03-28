# Roadmap: Astro Typefolio

**Created:** 2026-03-27
**Mode:** Interactive
**Granularity:** Standard
**Execution:** Parallel where independent

## Summary

This roadmap turns the existing brownfield Typefolio codebase into an official v1 release by aligning public-facing content with the actual feature set already present in the template.

**3 phases** | **17 requirements mapped** | All v1 requirements complete ✓

| #   | Phase                                           | Goal                                                                                                          | Requirements                                                              | Success Criteria |
| --- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------- |
| 1   | Reposition Entry Surfaces (Complete 2026-03-27) | Make the homepage and About page present Typefolio clearly and accurately                                     | HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, ABOUT-01, ABOUT-02, ABOUT-03 | 4                |
| 2   | Refresh Blog Showcase (Complete 2026-03-27)    | Update blog-facing showcase content so it demonstrates Typefolio rather than inherited template copy          | BLOG-01, BLOG-02, BLOG-03, BLOG-04, BLOG-05                               | 4                |
| 3   | Clean Tag Surfaces And Ship v1 (Complete 2026-03-27) | Remove remaining public-facing drift in tag/archive surfaces and complete the release-ready consistency sweep | TAGS-01, TAGS-02, CONS-01, CONS-02                                        | 4                |

## Phase Details

### Phase 1: Reposition Entry Surfaces

**Status:** Complete (2026-03-27)

**Goal:** Present Typefolio's audience, value, and key entry points cleanly from the highest-traffic pages.

**Requirements:** HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, ABOUT-01, ABOUT-02, ABOUT-03

**UI hint**: yes

**Success criteria:**

1. Homepage hero/introduction explains Typefolio as a template for researchers and developers
2. Homepage visibly links to the GitHub repository and highlights pinned posts plus news
3. Homepage no longer carries the current list-style presentation block
4. About page absorbs the detailed list-style presentation and uses project-specific copy without upstream residue

### Phase 2: Refresh Blog Showcase

**Status:** Complete (2026-03-27)

**Goal:** Turn the blog surface into a coherent explanation and demonstration of Typefolio's real content features.

**Requirements:** BLOG-01, BLOG-02, BLOG-03, BLOG-04, BLOG-05

**UI hint**: yes

**Success criteria:**

1. Blog index and related featured copy describe Typefolio rather than inherited template messaging
2. Public showcase articles remove obsolete placeholder/test framing
3. The former Markdown Admonitions article becomes a Typefolio blog-components showcase
4. The components showcase clearly demonstrates admonitions, GitHub card, Astro Icon, TLDR, and backlinks

### Phase 3: Clean Tag Surfaces And Ship v1

**Status:** Complete (2026-03-27)

**Goal:** Remove remaining archive/tag drift and complete a final public-facing consistency pass for the official v1 release.

**Requirements:** TAGS-01, TAGS-02, CONS-01, CONS-02

**UI hint**: yes

**Success criteria:**

1. Tag-related pages use Typefolio-specific archive wording
2. Public tag/archive surfaces no longer foreground obsolete test or placeholder framing
3. Home, About, Blog, and Tags present a consistent Typefolio narrative without upstream introduction residue
4. The content refresh leaves the repository ready to present as the official v1 release

## Coverage Check

| Requirement | Phase |
| ----------- | ----- |
| HOME-01     | 1     |
| HOME-02     | 1     |
| HOME-03     | 1     |
| HOME-04     | 1     |
| HOME-05     | 1     |
| ABOUT-01    | 1     |
| ABOUT-02    | 1     |
| ABOUT-03    | 1     |
| BLOG-01     | 2     |
| BLOG-02     | 2     |
| BLOG-03     | 2     |
| BLOG-04     | 2     |
| BLOG-05     | 2     |
| TAGS-01     | 3     |
| TAGS-02     | 3     |
| CONS-01     | 3     |
| CONS-02     | 3     |

All v1 requirements map to exactly one phase.

---

_Last updated: 2026-03-27 after Phase 3 completion_
