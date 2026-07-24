# MARIWEB-010 — Editorial Photography & Visual Identity

**Project status:** Completed  
**Date:** 2026-07-24  
**Audience:** Internal (developers, designers, maintainers)  
**Nature:** Project milestone and historical checkpoint. Not user-facing documentation.

---

## Overview

MARIWEB-010 established Mari Media’s editorial photography foundation for the public website.

This phase defined how images should look and behave, built typed image infrastructure in the codebase, organized asset folders, added focal-point and responsive handling for cover crops, and produced production planning plus asset-governance documentation for future acquisition.

The phase deliberately **did not** treat temporary AI illustrations as permanent brand photography. Homepage section image slots remain empty where approved assets do not yet exist. Whitespace and copy-led layouts remain preferred over filler imagery.

Companion documents:

- [`docs/photography-system.md`](../photography-system.md) — how images should look and how roles behave
- [`docs/image-shot-list.md`](../image-shot-list.md) — which images are still required, with provenance and licensing metadata
- [`lib/photography/`](../../lib/photography/) — typed roles, homepage plan, and focal-point helpers

---

## Completed Work

### MARIWEB-010 — Editorial photography and visual identity

- Editorial photography philosophy aligned with Compass direction (human, calm, documentary-inspired; trust before decoration)
- Image-role specification (`hero-support`, `partner`, `reader-focus`, `featured-article`, `article-header`, `article-inline`, `atmospheric`, `founder`, and related roles)
- Typed photography system under `lib/photography/`
- Asset folder taxonomy: `public/images/homepage/`, `articles/`, `editorial/`, `founders/`
- Relocation of functional-medicine article assets under `articles/`
- Focal-point support (`focalPoint` → CSS `object-position`) on `ImageFrame` and article image pipelines
- Role-based `sizes` wiring and responsive crop guidance
- Homepage section image slots typed as optional references (production photos still blocked pending approved assets)
- Visual-lab PhotographyLab driven by typed roles
- Current-image audit and accessibility/performance notes in `docs/photography-system.md`

### MARIWEB-010.1 — Editorial image shot list

- Production shot list at `docs/image-shot-list.md`
- Homepage inventory (hero, partners, readers, featured article, founders, optional pause, and intentionally copy-only sections)
- Article inventory (hero, inline, diagram, callouts, thumbnails, social)
- Future content inventory (lead magnets, landing pages, newsletter, About, events, partner logos)
- Priority 1–3 acquisition roadmap for photography-complete launch planning

### MARIWEB-010.1.1 — Asset provenance and licensing metadata

- Source and License / Ownership columns on inventory tables
- Provenance for existing Functional Medicine assets
- Planned acquisition paths for missing Priority 1 photography
- Asset Governance section for usage rights, archives, and license records

### MARIWEB-010.1.2 — Standardized placeholder classification

- Controlled vocabularies for Status, Source, and License / Ownership
- Classification rules table so identical situations map to identical labels
- AI-in-use surfaces standardized to: **Existing (Needs Replacement)** / **AI Generated** / **Internal Placeholder**
- Removal of ambiguous alternate labels for the same asset state

---

## Deliverables

### Documentation

| Path | Role |
| --- | --- |
| `docs/photography-system.md` | Authoritative photography direction, audit, roles, homepage plan summary |
| `docs/image-shot-list.md` | Shot list, asset registry, provenance, classification rules, acquisition checklist |
| `docs/project-milestones/MARIWEB-010-editorial-photography-system.md` | This milestone checkpoint |
| `public/images/README.md` | Folder taxonomy overview |
| `public/images/homepage/README.md` | Homepage asset folder stub |
| `public/images/articles/README.md` | Articles asset folder stub |
| `public/images/editorial/README.md` | Editorial asset folder stub |
| `public/images/founders/README.md` | Founders asset folder stub |
| `public/images/articles/functional-medicine/ASSET-MANIFEST.md` | Article asset provenance notes |

### Implementation

| Path / area | Role |
| --- | --- |
| `lib/photography/roles.ts` | Image-role specs (ratio, min resolution, sizes, focal guidance) |
| `lib/photography/homepage-plan.ts` | Typed homepage section image plan and statuses |
| `lib/photography/focal-point.ts` | Focal-point helpers |
| `lib/photography/index.ts` | Module exports |
| `components/design-system/ImageFrame.tsx` | Focal-point / `object-position` support |
| Article and featured-image pipelines | Pass focal points and role-appropriate behavior |
| Homepage content / section components | Optional `image` refs remain undefined where blocked |
| `components/visual-lab/PhotographyLab.tsx` | Internal lab surfaces driven by typed roles |
| Article asset path updates | Functional-medicine images under `/images/articles/...` |

---

## Decisions Made

1. **AI-generated imagery is temporary.** Cel-shaded / AI people illustrations may ship as Internal Placeholder article assets only. They are not parent-brand homepage photography.
2. **Photography supports editorial trust, not marketing theatrics.** Prefer lived-in, documentary-inspired moments over staged wellness or clinical authority clichés.
3. **Real photography should replace AI placeholders over time.** Shot-list Priority 1 defines the photography-complete launch blockers.
4. **Whitespace is preferable to unnecessary stock imagery.** Several homepage sections remain intentionally copy-only; optional rows exist only if imagery is later justified.
5. **Approved, provenance-documented assets are required before filling blocked homepage slots.** Components already render correctly with `image: undefined`.
6. **Git tags remain reserved for production releases.** This milestone is a documentation checkpoint, not a git tag.
7. **MARIWEB-010 photography documentation is considered frozen** until real assets begin replacing placeholders. Update `docs/image-shot-list.md` when assets change; do not reopen photography philosophy without a new task.
8. **Diagrams remain allowed inside articles** when they explain better than a photo (example: interconnected-systems figure, Approved / In-house Illustration / Company Owned).
9. **Founder portraits must be real.** Never stock-substitute JM or Kristine.

---

## Deferred Work

Intentionally postponed (tracked in `docs/image-shot-list.md`):

- Real homepage photography (hero support, For Our Partners, For Our Readers)
- Landscape featured-article masters and replacement article hero / inline photography
- Dedicated social / Open Graph masters with cleared rights
- Founder portraits and About-page environmental photography
- Partner logos (only after written brand-usage permission)
- Event photography and broader company library
- Licensed stock or commissioned acquisition and purchase records
- Optional atmospheric photographic pause
- Formal photography replacement schedule / production cutover plan after assets are approved
- Optional AVIF master exports once a real photography library exists

---

## Exit Criteria

This phase is complete because:

1. Photography direction is documented and reusable (`docs/photography-system.md`).
2. Image roles and homepage plans are typed in code (`lib/photography/`).
3. Focal-point and responsive image handling exist for cover-cropped surfaces.
4. Asset taxonomy and manifests exist for current and future files.
5. Production planning exists as a shot list with priorities (`docs/image-shot-list.md`).
6. Provenance, licensing metadata, governance, and controlled classification vocabulary are in place.
7. Homepage and article surfaces remain honest: no fake stock, no invented founder photos, no filler imagery forced into copy-only sections.
8. Remaining photography work is acquisition and replacement, not system design.

Infrastructure and planning are done. Asset capture and licensing are deferred by design.

---

## Next Phase

**MARIWEB-011 — Editorial Reading Experience**

Highest priority next because:

- Photography infrastructure no longer blocks editorial product work.
- The published Health Articles journey (hub, article template, reading comfort, disclosures, related content, restrained CTAs) is the primary reader trust surface.
- Improving the reading experience raises the value of every future photograph and every new article without waiting on licensed stock.
- Compass Phase 5 direction (Health Articles hub and article reading experience) is the natural successor once homepage structure and photography foundations exist.

Photography acquisition may continue in parallel as operations work; it should not reopen MARIWEB-010 system design unless a new task explicitly requires it.

---

## Project Status

| Field | Value |
| --- | --- |
| **Status** | Completed |
| **Date** | 2026-07-24 |
| **Series** | MARIWEB-010, MARIWEB-010.1, MARIWEB-010.1.1, MARIWEB-010.1.2 |
| **Git tag** | None (tags reserved for production releases) |

---

## Related commits (historical)

| Commit subject | Task |
| --- | --- |
| `feat(MARIWEB-010): establish editorial photography and visual identity` | MARIWEB-010 |
| `docs(MARIWEB-010.1): add editorial image shot list` | MARIWEB-010.1 |
| `docs(MARIWEB-010.1.1): add asset provenance and licensing metadata` | MARIWEB-010.1.1 |
| `docs(MARIWEB-010.1.2): standardize asset placeholder classification` | MARIWEB-010.1.2 |
| `docs(MARIWEB-010): add editorial photography project milestone` | This milestone |
