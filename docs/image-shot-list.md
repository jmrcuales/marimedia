# Mari Media Editorial Image Shot List (MARIWEB-010.1 / 010.1.1)

**Status:** Production asset planning and lightweight asset registry  
**Scope:** Documentation only. Defines *which* images are still required, plus provenance and licensing metadata.  
**Companion:** `docs/photography-system.md` defines *how* images should look and how roles behave in code (`lib/photography/`).

This file is the single source of truth for future photography acquisition: commissioned shoots, licensed stock selection, carefully reviewed AI generation, and editorial planning. Do not introduce replacement images into production without explicit approval and a provenance record.

It answers:

- Which images do we need?
- Where will each image come from?
- Who owns it?
- Can it legally be used in production?
- Is it still only a temporary placeholder?

---

## How to use this document

1. Match every acquisition request to a row below (section + image role).
2. Follow the subject description as a creative brief, not a vague mood board.
3. Respect orientation, aspect ratio, and minimum source resolution before delivery.
4. Update **Current status**, **Source**, and **License / Ownership** when an asset is approved for production use.
5. Keep illustrated people article-scoped; parent-brand homepage imagery must be photoreal photography.

### Status legend

| Status | Meaning |
| --- | --- |
| **Missing** | No production asset. Slot may exist in code with `image: undefined`, or the surface is not built yet. |
| **Placeholder** | Temporary stand-in only; not approved for long-term brand use. |
| **Existing (Needs Replacement)** | Ships today but should be replaced (wrong medium, weak crop source, illustration standing in for photography, or insufficient resolution for intended crops). |
| **Approved** | Provenance-documented asset that meets photography-system direction for its role. |

### Source legend

Use these values consistently in the **Source** column.

| Source | Meaning |
| --- | --- |
| **AI Generated** | Created or heavily derived via generative AI (including AI illustration pipelines) |
| **Original Photography** | Captured by Mari Media founders, staff, or under Mari Media direction |
| **Licensed Stock** | Purchased or subscribed commercial stock photography |
| **Licensed Stock (Planned)** | Intended acquisition path; not yet purchased |
| **Commissioned Photography** | Hired photographer or directed shoot |
| **Commissioned Photography (Planned)** | Intended commissioned shoot; not yet executed |
| **In-house Illustration** | Diagram or illustration created for Mari Media (non-photographic) |
| **Existing Website Asset** | Already shipped file reused from another site surface |
| **Partner Supplied** | Provided by a partner under written usage terms |
| **TBD** | Acquisition path not yet decided |

### License / Ownership legend

Use these values consistently in the **License / Ownership** column.

| License / Ownership | Meaning |
| --- | --- |
| **Internal Placeholder** | Temporary or provisional use; not treated as long-term cleared brand photography |
| **Company Owned** | Mari Media owns the rights (work-for-hire, founder capture, or in-house creation) |
| **Licensed (Adobe Stock)** | Adobe Stock license on file |
| **Licensed (Envato)** | Envato / Envato Elements license on file |
| **Licensed (Shutterstock)** | Shutterstock license on file |
| **Creative Commons** | Only if a CC license is verified and attribution requirements are met |
| **Partner Permission** | Written partner permission for logo or supplied creative |
| **To Be Licensed** | Planned commercial license; purchase not complete |
| **TBD** | Ownership or license path not yet decided |

### Column definitions

| Column | Meaning |
| --- | --- |
| Section | Website surface or planned page area |
| Image role | Photography-system role ID when one exists |
| Visual purpose | Why the image exists for the visitor |
| Subject description | Creative brief for capture or selection |
| Orientation | Portrait / landscape / square / either |
| Recommended aspect ratio | Preferred display or source framing |
| Minimum source resolution | Long-edge minimum in pixels (2x-ready) |
| Preferred composition | Crop and framing guidance |
| Preferred lighting | Light quality and color temperature |
| Preferred mood | Emotional register |
| Current status | One of the four statuses above |
| Source | Provenance or planned acquisition path (see Source legend) |
| License / Ownership | Legal status or planned clearance (see License / Ownership legend) |

---

## 1. Homepage

Aligned with `lib/photography/homepage-plan.ts` and the live homepage section order. Whitespace remains part of the identity: several sections are intentionally copy-only today. Rows marked optional document acquisition only if imagery is later introduced.

| Section | Image role | Visual purpose | Subject description | Orientation | Recommended aspect ratio | Minimum source resolution | Preferred composition | Preferred lighting | Preferred mood | Current status | Source | License / Ownership |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hero support | `hero-support` | Human warmth beside the compact company promise without turning the first screen into a clinic or SaaS product shot | Natural editorial photograph of an adult reading or listening with quiet focus in a lived-in room: soft morning side light, a book or tablet in hand, plants or wood texture in the background, face readable but not staring into camera | Portrait | 4:5 | 1600px long edge | Subject slightly off-center; eyes in the upper third; calm negative space toward the copy side; no text overlays | Soft natural daylight; warm-neutral; gentle contrast | Calm, attentive, approachable | Missing | Licensed Stock (Planned) | To Be Licensed |
| Editorial principles | `editorial-principle` (optional) | Optional visual evidence for trust commitments; prefer whitespace over filler | Quiet still life of annotated research notes, a marked-up article printout, and a ceramic mug on a warm wood desk, suggesting careful editorial review rather than decoration | Landscape | 4:3 | 1600px long edge | Off-center desk arrangement; readable environmental context; leave breathing room for adjacent copy | Diffused window light; no harsh desk lamps | Thoughtful, orderly, honest | Missing | TBD | TBD |
| What We Do | `service-process` (optional) | Optional single process image if capability photography is ever added; never a matching three-card icon grid | Overhead or three-quarter view of a campaign planning moment: laptop open to a plain outline or calendar, handwritten notes, one person mid-thought rather than posing for the camera | Landscape | 4:3 | 1600px long edge | Hands, screen, and notes mid-action; avoid centered hero poses and SaaS-style mockups | Soft daylight or warm interior ambient | Capable, grounded, unhurried | Missing | TBD | TBD |
| For Our Partners | `partner` | Makes partnership feel selective and human beside the fit-check message | Two people in a working conversation over a laptop and printed notes in a warm, non-corporate space (home office or quiet café table), documentary feel, mid-discussion rather than handshake | Landscape | 4:3 | 1600px long edge | Faces in the left two-thirds so the right edge can soft-crop at large widths; no contracts waved at camera | Soft natural light; avoid cold conference-room fluorescents | Collaborative, selective, respectful | Missing | Licensed Stock (Planned) | To Be Licensed |
| How We Work | `service-process` (optional) | Optional process still if numbered steps ever need visual pacing; copy-only is preferred today | Close environmental still of a simple four-step checklist on paper beside a laptop, coffee cooling, no people required if the object story is clear | Landscape | 4:3 | 1600px long edge | Clear focal object; generous negative space; no diagram text baked into the photo | Soft side light with calm shadow detail | Clear, methodical, calm | Missing | TBD | TBD |
| For Our Readers | `reader-focus` | Anchors the “read something useful, not get sold something” promise | Someone reading on a couch, kitchen table, or sunlit desk: calm attention on a tablet or printed article, lived-in home details, no supplement bottles as dominant subjects | Landscape (either acceptable) | 4:3 | 1600px long edge | Reader face or device interaction mid-left or mid-right (alternate vs partners section); keep the person primary at mobile widths | Warm window light; soft shadows | Curious, respected, at ease | Missing | Licensed Stock (Planned) | To Be Licensed |
| Featured Article (Health Articles spread) | `featured-article` | Magazine lead for the homepage editorial spread; must belong to the featured story | Prefer a landscape photograph that matches the featured article topic (for current functional-medicine feature: a calm consultation or health-learning moment that is photoreal, not cel-shaded). Current asset is a portrait illustration reused into wide crops | Landscape preferred | 16:9 display (landscape source preferred) | 2000px long edge | Primary subject in left or center third so wide crops stay coherent; author a `focalPoint` | Warm-neutral daylight consistent with article set | Credible, editorial, inviting | Existing (Needs Replacement) | Existing Website Asset | Internal Placeholder |
| Who We Are (Company & Founders) | `founder` | Real ownership and specificity; never stock-substituted founders | Approved portraits of JM and Kristine only when captured: waist-up, natural setting or genuine working moment, direct-to-camera acceptable here, recognizable and true | Square (source may be portrait) | 1:1 | 1200px long edge | Eyes near vertical center for square crop; simple background; no staged “startup team” staging | Soft natural light; honest skin tones | Warm, capable, grounded | Missing | Original Photography | Company Owned |
| Contact / Calm Final Action | none planned | Keep the close quiet; imagery only if a future Contact route needs restrained atmosphere | If ever introduced: a quiet interior detail (open notebook, soft window, empty chair) with no people competing with the dual CTAs | Landscape | 16:9 or 4:3 | 1600px long edge | Atmospheric, not narrative; no faces under CTA areas | Soft daylight | Quiet, open, unpressured | Missing | TBD | TBD |
| Optional photographic pause | `atmospheric` | Rare full-width pacing pause between major sections; omit until approved | One lived-in still: morning light across a quiet desk, linen curtain, or calm interior corner with no competing message | Landscape | 21:9 or 16:9 | 2400px long edge | Soft environmental focus; horizon or texture, not tiny distant figures; no text overlays | Soft natural light; low drama | Peaceful, human, spacious | Missing | Licensed Stock (Planned) | To Be Licensed |

---

## 2. Articles

Covers the reading experience, hub cards, and distribution surfaces. Current published set: *What Is Functional Medicine?* under `public/images/articles/functional-medicine/`.

| Section | Image role | Visual purpose | Subject description | Orientation | Recommended aspect ratio | Minimum source resolution | Preferred composition | Preferred lighting | Preferred mood | Current status | Source | License / Ownership |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Article hero (functional medicine) | `article-header` | Lead visual beside or above the article title; establishes topic and tone | Photoreal scene of a thoughtful health conversation or preparation moment: two people in a warm room reviewing notes together, or one person preparing questions before a visit. Replace the current cel-shaded clinician illustration | Portrait | 4:5 or 3:4 | 1400px long edge | Subject mid-frame; eyes in upper third; stable for 3:4 cover crops | Soft natural light; warm gold acceptable if restrained | Careful, human, non-clinical | Existing (Needs Replacement) | AI Generated | Internal Placeholder |
| Inline supporting image (“Your First Visit”) | `article-inline` | Supports the appointment-preparation section with a believable lived moment | Natural editorial photograph of a person at a sunlit home desk writing notes and organizing papers before a health appointment; laptop closed or secondary; plants optional | Portrait or either | Intrinsic preferred (~3:4) | 1200px long edge | Preserve explanatory subject; prefer intrinsic sizing over aggressive cover crops | Soft morning window light | Prepared, calm, practical | Existing (Needs Replacement) | AI Generated | Internal Placeholder |
| Comparison / systems diagram (“Body as an Interconnected System”) | `article-inline` | Explains a concept better than a lifestyle photo; text-free editorial diagram | Restrained editorial diagram of interconnected health factors (nutrition, sleep, movement, environment, body systems, daily habits) around a calm central figure; no garbled or baked-in marketing copy | Portrait | ~2:3 intrinsic | 1200px long edge | Clear hierarchy; readable shapes at mobile width; caption carries explanation | Flat, calm palette complementary to Compass greens and warm neutrals | Clear, educational, quiet | Approved | In-house Illustration | Company Owned |
| Callout imagery (article pattern) | `article-inline` | Optional figure for callouts that need visual emphasis without interrupting reading | Topic-specific still life or quiet detail (e.g. a marked checklist, a glass of water and notebook, a quiet outdoor walk moment) that matches the callout claim without product packaging | Either | Intrinsic or 4:3 | 1200px long edge | Simple subject; generous margin; not a second hero | Soft natural light | Supportive, not sensational | Missing | Licensed Stock (Planned) | To Be Licensed |
| Featured article thumbnail (hub / cards) | `featured-article` | Card and magazine crops that remain coherent when the hero is reused | Same story ownership as the article hero; prefer a dedicated landscape master so 16:9 hub crops do not clip faces from a portrait source | Landscape preferred | 16:9 | 2000px long edge | Subject safe in left/center third; authored focal point required if portrait source must be reused | Match article hero lighting family | Editorial, scannable | Existing (Needs Replacement) | Existing Website Asset | Internal Placeholder |
| Social sharing image (Open Graph / Twitter) | `featured-article` or dedicated OG art | Reliable preview when the article is shared; currently falls back to the hero file | Landscape crop of the approved article hero, or a dedicated 1200×630 (or 1.91:1) social master with the primary subject safely centered and no small text | Landscape | 1.91:1 (e.g. 1200×630 minimum; prefer 2400×1260 source) | 1200px short edge minimum; 2400px long edge preferred | Faces and key subject inside the center safe area; no logo lockups required | Match article set | Credible at thumbnail size | Existing (Needs Replacement) | Existing Website Asset | Internal Placeholder |

### Article acquisition rule

New articles should plan hero + optional inline figures before publish. Do not expand cel-shaded people illustration as a brand system. Diagrams remain allowed when they explain better than photography. Record Source and License / Ownership for every new article asset before publish.

---

## 3. Future content and company surfaces

Placeholders for Phase 4+ pages, audience growth, and commercial surfaces. Do not invent partner logos or fake office photography.

| Section | Image role | Visual purpose | Subject description | Orientation | Recommended aspect ratio | Minimum source resolution | Preferred composition | Preferred lighting | Preferred mood | Current status | Source | License / Ownership |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lead magnets (covers / headers) | `reader-focus` or custom cover | Promise the download honestly; support reading rather than interrupt it | Photoreal cover: a reader reviewing a printed guide or tablet checklist on a calm desk, or a restrained still life of the guide itself without fake seals | Landscape or portrait per template | 16:9 header or 4:5 cover | 1600px long edge | Clear focal object; room for title treatment in layout (not baked into photo text) | Soft daylight | Useful, inviting, unpressured | Missing | Licensed Stock (Planned) | To Be Licensed |
| Landing pages (campaign / event) | `hero-support` / `partner` / `atmospheric` as needed | One dominant visual plane per landing page; match offer without clinical authority claims | Event or offer-specific: audience listening to an online health session at home, or a host preparing notes before going live; authentic participation, not stage smoke and spotlights | Landscape preferred for full-bleed heroes | 16:9 or 21:9 | 2000–2400px long edge | Edge-to-edge capable; subject not centered under future type; no floating badges in-camera | Warm-neutral; avoid neon event lighting | Focused, welcoming, credible | Missing | TBD | TBD |
| Newsletter (header / confirmation) | `reader-focus` | Visual cue for what arrives in the inbox without fake intimacy | Quiet reading moment or still life of a laptop inbox with a calm interior; no exaggerated “you’ve got mail” staging | Landscape | 16:9 or 4:3 | 1600px long edge | Soft environmental context; subject readable at email-client widths | Soft daylight | Friendly, regular, calm | Missing | Licensed Stock (Planned) | To Be Licensed |
| About page (environment) | `founder` / `service-process` | Supports founding story and company intent without inventing scale | Real working context of Mari Media’s founders: home office, planning notes, collaborative review of content; no fake team walls or invented offices | Landscape | 4:3 or 16:9 | 1600px long edge | Documentary; one clear activity; avoid “startup hero leap” | Soft natural light | Honest, warm, specific | Missing | Original Photography | Company Owned |
| Founder portrait: JM | `founder` | Recognizable ownership for About / Company sections | Approved portrait of JM (engineering, web, UX, email-marketing background reflected only through setting if useful: laptop, calm workspace), waist-up, natural expression | Portrait source | 1:1 display | 1200px long edge | Eyes near center; simple background | Soft natural light | Capable, approachable | Missing | Original Photography | Company Owned |
| Founder portrait: Kristine | `founder` | Recognizable ownership for About / Company sections | Approved portrait of Kristine (media sales and affiliate-management experience reflected only through authentic working context if useful), waist-up, natural expression | Portrait source | 1:1 display | 1200px long edge | Eyes near center; pair visually with JM’s portrait (consistent light family) | Soft natural light | Confident, warm, credible | Missing | Original Photography | Company Owned |
| Company photography (general) | `service-process` / `atmospheric` | Future parent-brand library beyond a single article niche | Library set: reading, planning, online-event participation, quiet collaboration; lived-in U.S./Canada home and work settings; gender-neutral casting | Mixed | Role-dependent (see §1–2) | Role minimums (1600–2400px) | Negative space; off-center subjects; authored focal points | Soft natural; warm-neutral grade | Editorial, human, adaptable | Missing | TBD | TBD |
| Event photography | `partner` / `atmospheric` / campaign-specific | Prove online health-event specialization without claiming institutional medical authority | Real summit or webinar moments: host on camera with notes, audience attending from home, calm backstage prep; obtain releases; no stock “audience applauding in dark theater” clichés unless truly owned | Landscape | 16:9 | 2000px long edge | Documentary crop; faces readable; avoid fear or miracle framing | Mixed practical light corrected toward warm-neutral | Energized but calm, professional | Missing | Original Photography | Company Owned |
| Partner logos (future) | n/a (logo lockup, not photography) | Display only when real, maintained partnership permission exists | Vector or high-res raster logos supplied by partners under written usage terms; never invent or scrape decorative logo walls | n/a | Original aspect; consistent display height in UI | Vector preferred; raster ≥2x display height | Clear space per partner brand guide; monochrome treatment only if approved | n/a | Professional, restrained | Missing | Partner Supplied | Partner Permission |

---

## 4. Current inventory cross-reference

| Asset path | Mapped shot-list rows | Current status | Source | License / Ownership |
| --- | --- | --- | --- | --- |
| `public/images/articles/functional-medicine/functional-medicine-hero.jpg` | Article hero; Featured Article; Featured thumbnail; Social sharing (fallback) | Existing (Needs Replacement) | AI Generated | Internal Placeholder |
| `public/images/articles/functional-medicine/functional-medicine-first-visit.jpg` | Inline supporting (“Your First Visit”) | Existing (Needs Replacement) | AI Generated | Internal Placeholder |
| `public/images/articles/functional-medicine/interconnected-health-systems.jpg` | Comparison / systems diagram | Approved | In-house Illustration | Company Owned |
| Homepage hero / partners / readers / founders / pause slots | Corresponding homepage rows | Missing | See §1 row | See §1 row |
| Official logo SVG | Out of photography scope | Approved (brand mark; not photography) | Existing Website Asset | Company Owned |

Empty folder taxonomy already prepared: `public/images/homepage/`, `public/images/editorial/`, `public/images/founders/`, `public/images/articles/`.

---

## 5. Future acquisition checklist

### Priority 1 — Required before a photography-complete launch

Images that unlock already-built homepage layouts and remove the weakest public visual debt.

- [ ] Homepage hero support (`hero-support`, 4:5, ≥1600px) — Licensed Stock (Planned) / To Be Licensed
- [ ] For Our Partners (`partner`, 4:3, ≥1600px) — Licensed Stock (Planned) / To Be Licensed
- [ ] For Our Readers (`reader-focus`, 4:3, ≥1600px) — Licensed Stock (Planned) / To Be Licensed
- [ ] Featured article landscape master for the current functional-medicine story (`featured-article`, 16:9 source preferred, ≥2000px) — replace Internal Placeholder
- [ ] Article hero photography replacing the cel-shaded consultation illustration (`article-header`, 4:5 / 3:4, ≥1400px) — replace AI Generated / Internal Placeholder
- [ ] “Your First Visit” inline photography replacing the illustrated desk scene (`article-inline`, ≥1200px) — replace AI Generated / Internal Placeholder
- [ ] Dedicated social sharing master for the published article (1.91:1, ≥1200×630; prefer 2x) — clear License / Ownership before relying on it in distribution

### Priority 2 — Improves quality and next surfaces

- [ ] Founder portraits of JM and Kristine (`founder`, 1:1, ≥1200px each) — Original Photography / Company Owned
- [ ] About page environmental / working-context photograph — Original Photography / Company Owned
- [ ] Per-article landscape feature photography for each new Health Article — Source and license recorded per story
- [ ] Callout-ready inline stills for recurring article patterns — Licensed Stock (Planned) / To Be Licensed
- [ ] Lead-magnet cover or header photography when a magnet ships
- [ ] Newsletter header or confirmation imagery when email templates need it

### Priority 3 — Nice to have

- [ ] Optional homepage photographic pause (`atmospheric`, 21:9 / 16:9, ≥2400px)
- [ ] Optional Editorial Principles still life (only if whitespace feels insufficient after Priority 1)
- [ ] Optional What We Do / How We Work process still (single image max; never icon grids)
- [ ] Contact-page atmospheric detail if a dedicated Contact route introduces imagery
- [ ] Landing-page full-bleed sets for specific campaigns or events
- [ ] Broader company photography library (reading, planning, online-event participation)
- [ ] Owned event photography with releases — Original Photography / Company Owned
- [ ] Partner logos only after written permission and maintained relationships — Partner Supplied / Partner Permission

---

## 6. Art-direction reminders (from the photography system)

- Prefer candid, documentary-inspired people in thoughtful moments.
- Avoid white-coat stares, handshakes, exaggerated happiness, staged yoga, miracle-health language, dominant supplement bottles, before/after, fear imagery, and obvious AI anatomy defects.
- Photography is the parent-brand default; diagrams are allowed inside articles when they explain better than a photo.
- Author a `focalPoint: { x, y }` (0–100) for every cover-cropped asset.
- Record provenance (source, license, release, date) beside every approved file before production use.

---

## 7. Document maintenance

| When | Update |
| --- | --- |
| Asset approved | Change status to **Approved**; set final **Source** and **License / Ownership**; note path under inventory |
| Stock purchased | Replace **To Be Licensed** with the specific license value (Adobe Stock, Envato, or Shutterstock) |
| New page ships | Add a section table row (including Source and License / Ownership) before requesting photography |
| Article publishes | Add hero / inline / social rows for that story with provenance filled |
| Priority checklist item completes | Check the box and adjust remaining Priority 1 launch blockers |
| Asset replaced | Update the mapped rows and inventory cross-reference; do not leave stale Internal Placeholder values |

**Owner:** Mari Media website / editorial photography planning  
**Related:** `docs/photography-system.md`, `lib/photography/roles.ts`, `lib/photography/homepage-plan.ts`, `public/images/articles/functional-medicine/ASSET-MANIFEST.md`

---

## Asset Governance

- Never use an image in production without confirming usage rights for the intended surface (web, social, email, paid promotion).
- Treat AI-generated people illustrations as Internal Placeholder assets; replace them with cleared photography before treating a surface as photography-complete.
- Prefer Company Owned or explicitly Licensed stock over unclear free downloads.
- Preserve original source files (RAW, high-res masters, or purchase downloads) whenever possible; do not keep only a compressed web derivative as the sole archive.
- Record stock purchase information: vendor, license type, order or asset ID, purchase date, and permitted uses.
- Keep license receipts, model releases, and partner permission emails with project records, not only in chat history.
- When a licensed vendor is chosen, update the License / Ownership cell to the matching value (Licensed (Adobe Stock), Licensed (Envato), or Licensed (Shutterstock)).
- Do not invent partner logos, fake office scenes, or stock-substituted founder portraits.
- Update this document whenever an asset is added, replaced, relicensed, or retired.
- If Source or License / Ownership is still TBD at the time of a launch decision, resolve it before shipping or keep the surface intentionally copy-only.
- Creative Commons assets require verified license terms and attribution handling before use; default preference remains Company Owned or commercial stock.
- Homepage parent-brand imagery should not ship as AI Generated Internal Placeholder once Priority 1 photography acquisition begins.
