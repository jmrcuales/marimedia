# Mari Media Photography System (MARIWEB-010)

Authoritative photography and visual-image direction for the public website.
Typed implementation lives in `lib/photography/`. Components consume roles and
focal points; they do not invent photography policy inline.

---

## Status legend

| Label | Meaning |
| --- | --- |
| **Implemented now** | Shipped in this task |
| **Recommended for later** | Approved direction; waits on assets or a later phase |
| **Blocked** | Needs an approved, provenance-documented asset before production use |

---

## 1. Current-image audit

### Inventory

| File path | Where it appears | Role | Intrinsic size | Aspect | Crop behavior | Responsive behavior | Supports section meaning? | Brand fit | Audit notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `public/images/articles/functional-medicine/functional-medicine-hero.jpg` | Article hero; homepage Health Articles feature; blog featured card; design-system samples | Article header / featured article | 1050×1400 | ~3:4 portrait | `object-cover` into 3:4 (article hero) and 16:9 / wide (feature cards) | Feature stacks through tablet; magazine split at ≥1440px | Partially: consultation mood fits the article | Weak as parent-brand photography | Cel-shaded **illustration**, warm light, two clinicians (not clinician + patient). AI/illustration artifacts possible. Portrait source in wide crops previously centered geometrically and clipped faces. |
| `public/images/articles/functional-medicine/functional-medicine-first-visit.jpg` | Inline article figure (“Your First Visit”) | Article inline | 825×1100 | ~3:4 portrait | Intrinsic `width`/`height` (no cover crop) | Centered figure ≤420px | Yes: preparation / reflection | Acceptable as article illustration; not homepage photography | Illustration of a person writing at a sunlit desk. Warm palette. Mild AI text/hand risk. |
| `public/images/articles/functional-medicine/interconnected-health-systems.jpg` | Inline article figure (“Body as an Interconnected System”) | Article inline (diagram) | 733×1100 | ~2:3 portrait | Intrinsic sizing | Centered figure ≤420px | Yes: explanatory diagram | Acceptable as **editorial diagram**, not human photography | Text-free diagram (prior Gamma asset rejected for garbled text). Calm palette. Not photoreal. |
| Official logo SVG | Navigation, footer | Brand mark | vector | n/a | contain | Fixed heights | Yes | Yes | Out of photography scope; preserve unchanged. |
| Homepage hero / partners / readers / founders / pause | — | — | — | — | — | — | — | — | **No assets.** Slots exist; `image` remains `undefined`. Copy-only is intentional. |

### Cross-cutting findings

- **Duplicate visual ideas:** Warm window light + plants appear in both human illustrations. Acceptable within one article; do not extend that illustrated style site-wide.
- **Inconsistent lighting / color temperature:** Article set is internally consistent (warm gold). No other photography exists to clash with yet.
- **Weak crops:** Featured/homepage wide crops of the portrait hero were the main technical debt. Focal-point support addresses this without replacing the asset.
- **Resolution:** Hero long edge 1400px is acceptable for ≤700px CSS width at 2x; thin for full-bleed 50vw on large desktops. Prefer ≥2000px landscape sources for future featured images.
- **Generic / staged / clinical risk:** White-coat consultation illustration leans clinical. Keep it article-scoped; do not promote it to homepage hero or partner imagery.
- **Missing imagery that would help:** Approved photoreal hero-support, partner, and reader images would unlock the already-built asymmetric layouts. Founder photography only when real. Optional atmospheric pause remains deferred.

### Asset move (implemented)

Former path `public/images/blog/functional-medicine/` → `public/images/articles/functional-medicine/` so article assets live under the photography folder taxonomy. Public URLs updated in content and internal samples.

---

## 2. Photography direction

### Subject matter

Prefer: real people in thoughtful moments; reading, listening, reflecting; warm human interaction; lived-in health/wellness settings; natural online-event participation; editorial still life when people are unnecessary; subtle details of care and discernment.

Avoid: doctors pointing at charts; posed white-coat stares; handshakes; exaggerated happiness; staged yoga; miracle-health language; dominant supplement bottles; before/after; fear imagery; busy collages; obvious AI faces/anatomy; generic corporate teamwork.

### Human presence

Candid or documentary-inspired. Natural, relaxed, thoughtful, engaged, emotionally believable. Direct-to-camera only for intentional founder or expert portraits.

### Lighting

Soft natural light; warm-neutral daylight; gentle contrast; visible texture; calm shadow detail. Avoid harsh clinical light, extreme HDR, heavy orange or cold blue grading, neon, overexposure, artificial glow.

### Color treatment

Complement the Compass palette with warm neutrals, soft greens, earth tones, natural skin, muted blues, cream environments. Do not force brand hexes into every frame. Avoid heavy filters for fake consistency.

### Composition

Negative space; off-center subjects; clear focal points; layered depth; environmental context; crops that support adjacent text. Horizontal for feature sections; portrait only when the component benefits. Avoid centering every subject, accidental tablet crops, and subjects under text overlays (Mari Media does not overlay copy on photos).

### Medium rule

- **Photography** is the parent-brand default for homepage and future landing pages.
- **Editorial diagrams / restrained illustrations** are allowed **inside articles** when they explain a concept better than a photo (as with interconnected systems).
- Illustrated people are a **temporary article compromise**, not the homepage visual identity. Replace with approved photography when available.

---

## 3. Image-role specification

Defined in code: `lib/photography/roles.ts`.

| Role ID | Ratio | Min long edge | Priority allowed | Primary `sizes` |
| --- | --- | --- | --- | --- |
| `hero-support` | 4:5 portrait | 1600 | Yes (hero only) | `(min-width: 1440px) 45vw, (min-width: 1024px) 40vw, 100vw` |
| `editorial-principle` | 4:3 | 1600 | No | `(min-width: 1024px) 40vw, 100vw` |
| `service-process` | 4:3 | 1600 | No | `(min-width: 1024px) 40vw, 100vw` |
| `reader-focus` | 4:3 | 1600 | No | `(min-width: 1024px) 40vw, 100vw` |
| `featured-article` | 16:9 | 2000 | No on homepage | `(min-width: 1440px) 50vw, 100vw` |
| `article-header` | 4:5 / 3:4 | 1400 | Yes on article page | `(min-width: 1024px) 420px, (min-width: 768px) 60vw, 90vw` |
| `article-inline` | intrinsic preferred | 1200 | No | `(min-width: 768px) 420px, 90vw` |
| `atmospheric` | 16:9 / 21:9 | 2400 | No | `100vw` |
| `founder` | 1:1 | 1200 | No | `(min-width: 768px) 280px, 60vw` |
| `partner` | 4:3 | 1600 | No | `(min-width: 1024px) 40vw, 100vw` |

Every cover-cropped asset should author a `focalPoint: { x, y }` (0–100). `ImageFrame` and article image components apply it via CSS `object-position`.

### Alt text

- Informative images: short, factual description of what is shown and its function.
- Decorative-only: empty alt.
- Do not start with “Image of”.
- Do not keyword-stuff.
- Name illustration as illustration when the medium matters for honesty.

---

## 4. Section-by-section homepage plan

Full typed plan: `lib/photography/homepage-plan.ts`.

| Section | Status | Concept summary |
| --- | --- | --- |
| Hero | **Blocked** | Calm reader/learner portrait; 4:5; lg+ only |
| Editorial Principles | **Intentionally copy-only** | No image |
| What We Do | **Intentionally copy-only** | No capability photo grid |
| For Our Partners | **Blocked** | Working conversation, 4:3, right column lg+ |
| How We Work | **Intentionally copy-only** | No image |
| For Our Readers | **Blocked** | Reading moment, 4:3, left column lg+ |
| Health Articles | **Implemented** (existing article hero + focal point) | Prefer future landscape photo sources |
| Company & Founders | **Intentionally copy-only** until real portraits | Founder role when approved |
| Final Action | **Intentionally copy-only** | No image |
| Photographic pause | **Deferred** | Omit until approved atmospheric asset |

Whitespace remains part of the identity. Do not add imagery to fill space.

---

## 5. Implementation summary (MARIWEB-010)

### Implemented now

- Photography system module (`lib/photography/*`)
- This document
- Asset folder taxonomy: `homepage/`, `articles/`, `editorial/`, `founders/`
- Relocated functional-medicine assets under `articles/`
- `ImageFrame` focal-point / `object-position` support
- `ArticleImage` / hero / card pipelines pass focal points
- Accurate alt text for current article assets
- Homepage slots typed as `SectionImageRef` (still `undefined`)
- Visual-lab PhotographyLab driven by typed roles
- Role-based `sizes` wiring on hero / partners / readers

### Recommended for later

- Source approved photoreal assets for hero, partners, readers
- Prefer landscape ≥2000px sources for featured article leads
- Replace illustrated people with photography in the functional-medicine article when licensed photos exist
- Optional atmospheric pause only if pacing needs it
- Align legacy blog `ArticleCard` featured breakpoint with design-system `FeaturedArticle` (≥1440 stack) in a dedicated layout task

### Blocked (no approved asset)

- Homepage hero support image
- For Our Partners image
- For Our Readers image
- Founder portraits
- Photographic pause

**Do not generate or introduce replacement images without explicit approval.**

---

## 6. Accessibility review

- Alt text updated to describe illustrated medium and actual subjects.
- Focal points keep faces in frame for assistive context consistency with what sighted users see.
- Decorative logo treatment unchanged.
- Empty decorative folders have no rendered images.

---

## 7. Performance review

- Only article-header / optional hero-support may use `priority`.
- Homepage featured article remains lazy (below fold).
- Next.js optimizer still serves WebP/AVIF variants from local JPEGs.
- Source files remain modest (~200–380 KB JPEG). Recompression deferred unless LCP regresses after real hero photography lands.
- No client-side image logic added.

---

## 8. Responsive QA checklist

Review at 375, 430, 768, 1024, 1280, 1440, 1728, 1920, 2560:

| Check | Expected |
| --- | --- |
| Featured crop | Faces remain in upper band via `focalPoint` |
| Article hero 3:4 | Stable; focal near upper-center |
| Inline figures | Intrinsic; no accidental cover crop |
| Homepage without section photos | Copy-led; generous whitespace preserved |
| Large screens | Composed stages, not stretched filler images |
| Tablet | Featured stacks; no cramped image/text collision on homepage feature |

---

## 9. Deferred recommendations

1. Commission or license photoreal homepage set (hero, partner, reader) with manifests.
2. Capture real founder portraits for About / Company.
3. Author landscape feature photography per new article.
4. Consider AVIF master exports once photography library exists.
5. Do not expand cel-shaded illustration as a brand system.
