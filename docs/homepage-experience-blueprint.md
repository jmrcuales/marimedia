# Homepage Experience Blueprint

**Task:** MARIWEB-008.5 — Homepage Experience Blueprint
**Phase:** Between Phase 2 (Production Design System) and Phase 3 (Editorial Homepage Rebuild)
**Status:** Approved planning document. Implementation specification for Phase 3.
**Scope:** Planning only. No code, components, or copy in this document are implemented anywhere in the codebase as of this writing.

## How to use this document

This is the definitive content and structure specification for the Phase 3 homepage rebuild. It answers *what* goes on the homepage, in *what order*, and *why*, so that Phase 3 execution is a build task, not a design task.

It is built on, and must not contradict:

- `.cursor/rules/mari-media-website-compass.mdc` ("the Compass") — authoritative for positioning, voice, visual direction, trust, accessibility, SEO, and commercial conduct. Section references below (e.g. "Compass §19") point here.
- `.cursor/rules/mari-media-project.mdc` — authoritative for repository conventions and technical direction.
- The Phase 1 visual-direction outcome and the Phase 2 production design system (`components/design-system/`, `tokens.css`, `fonts.ts`), which fixed the palette, type system, radii, shadows, motion, and component vocabulary this blueprint specifies against.
- The existing published site: the current production homepage (`app/page.tsx` and `components/sections/*`), the one published article (`what-is-functional-medicine`), and current navigation/footer.

Where this document proposes something the current production homepage does not do, that is intentional: per `mari-media-project.mdc`, "no existing homepage sentence or section is protected from revision." Every deviation is called out explicitly in [Section 15](#15-implementation-notes) so Phase 3 knows what is changing and why.

**Out of scope for this document and for Phase 3 unless noted:** dedicated routes for About, What We Do, Partner With Us, and Contact (Compass §25 architecture; these remain Phase 4). Until those routes exist, homepage CTAs that would normally point to them must point to an in-page anchor, the existing `/blog` route, or a `mailto:` link, exactly as the current site already does. This document flags every such link with its Phase 3 target and its eventual Phase 4 target.

---

## 1. Homepage Mission

The Mari Media homepage exists to let a visitor understand, in the time it takes to scroll through one screen, that Mari Media is a real, founder-led digital media company (not an agency, not a hospital, not a template), that it currently proves itself through useful, careful health content and through the audiences it has built around online health events, that it is actively looking for the right kind of partners, and that a reader can immediately go read something worth their time. After 30 seconds a visitor should feel that they have met a specific, credible, small company with clear judgment, not that they have landed on a generic marketing or wellness site, and they should know exactly what to do next for their own reason for being there (partner, read, or just look around).

---

## 2. Primary Audience

**Primary audience: partnership prospects.** Health-event organizers, summit hosts, and adjacent offer owners (per `mari-media-project.mdc`, current specialization is online health events, U.S. and Canada, open to adjacent fits) evaluating whether Mari Media is a credible, safe, competent partner for affiliate and email promotion.

- Pain points: burned by vendors who over-promise reach or results; unclear on who actually runs the campaigns; wary of anonymous "media buyers"; limited time to vet a new partner.
- Goals: find a partner who understands their audience and won't damage their brand's trust; get a fast, honest read on fit; avoid a long sales process before knowing if it's worth pursuing.
- Questions on arrival: "Who is actually behind this?" "Have they done this before, and with whom?" "What exactly would they do for me?" "Is this legitimate or is it a funnel?"

**Secondary audience: readers.** People searching for understandable health information (currently functional medicine and adjacent preventive-health topics) who land on the homepage directly or before reaching an article.

- Pain points: overwhelmed by either overly clinical or overly hyped health content; distrustful of anonymous health sites; short on time.
- Goals: get a clear, honest answer to a specific health question without being sold something aggressively; know the source is careful and current.
- Questions on arrival: "Is this a real publication or a funnel to a product?" "Is the information current and sourced?" "Who wrote this and why should I trust them?"

**Future audiences (not designed for yet, but the architecture must not block them):** readers and partners in the future brand categories named in Compass §2 (technology, business, finance, education, parenting, travel, home, food, productivity) once Mari Media launches audience-facing brands in those spaces, and potential employees, contractors, or press encountering Mari Media as a company rather than as a health publisher. The homepage must read as "a media company that started in health," not "a health company," so these audiences are not confused by what they find (Compass §2, §24).

---

## 3. Visitor Journey

```
Visitor arrives
      ↓
Immediately understands who Mari Media is
      ↓
Feels credibility
      ↓
Understands the value offered
      ↓
Finds the path relevant to them
      ↓
Builds trust
      ↓
Explores content
      ↓
Feels confident
      ↓
Takes action
```

**Arrives → Understands who Mari Media is.** The hero must resolve the "what is this" question in one sentence and one visual before any scrolling, because an unresolved identity question is the single fastest way to lose both a partner prospect and a reader (Compass §18, Discovery stage). This is why the hero leads with the parent-company identity ("a digital media company that builds trusted digital brands") rather than opening on health, even though health is the loudest thing Mari Media currently does. Opening on health first would answer the wrong question for a partner prospect and would also visually commit the whole homepage to a single-category identity the company does not want (Compass §24: "The homepage must not make health appear to be Mari Media's permanent limitation").

**Understands who → Feels credibility.** Once a visitor knows what Mari Media is, the very next thing they check, almost reflexively, is whether it is real. This is why What We Do follows the hero immediately, stated as specific, numbered, current capabilities rather than adjectives — specificity is what separates a credible small company from a template (Compass §17, "Evidence made visible"; §50, "Trust must come from actual usefulness, specificity, evidence").

**Feels credibility → Understands the value offered.** With identity and credibility established, the visitor needs to know what they personally get. For Our Partners and For Our Readers exist as two separate, self-contained sections (not one blended section) because a partner prospect and a reader are asking different questions and neither should have to filter out the other's content to find their answer (Compass §20, §26: "Keep What We Do, For Our Partners and For Our Readers as distinct sections").

**Understands value → Finds the path relevant to them.** Each of those two sections ends with exactly one CTA aimed at its own audience (Partner With Us; Explore Health Articles), so a visitor self-selects a path without having to read the whole page first.

**Finds path → Builds trust.** Before asking anyone to act, the homepage shows the evidence that makes the offer credible: for readers, that means an actual article with a real author, a real date, and real depth (not a placeholder); for partners, that means an honest, specific account of who is behind the company. This is why Health Articles and the Company & Founders section sit here, after value and before the close, rather than being pushed to the very bottom as an afterthought (Compass §18, Confidence stage: "evidence, transparency, appropriate caution").

**Builds trust → Explores content.** The Health Articles module is the one place on the homepage designed to be genuinely left for (not just glanced at): its whole job is to convert a scroll into a click into the actual article, which is the strongest trust-building action Mari Media can offer a reader for free.

**Explores content → Feels confident.** Confidence is the cumulative effect of everything above landing coherently: a visitor who has seen a specific identity, specific capabilities, a real article, and real founders should now believe the company is exactly what it presented itself as.

**Feels confident → Takes action.** The homepage closes with one calm, final, dual-path action (a specific partner path and a specific general-contact path), deliberately without urgency language, because Compass §42 and §50 both prohibit manufactured urgency and because a visitor who is already confident does not need to be pressured, only given a clear next step.

---

## 4. Homepage Information Architecture

Section order, top to bottom. "Section" here means the homepage content between the global header and global footer; the header and footer themselves are existing shared shell components (Compass §25, §43) and are addressed in [Section 15](#15-implementation-notes), not re-specified here.

| # | Section | Purpose | Primary message | Supporting message | Desired emotional response | Primary CTA | Secondary CTA | Success criteria |
|---|---|---|---|---|---|---|---|---|
| 1 | Hero | Resolve "what is this" instantly | Mari Media is a digital media company building trusted digital brands, currently proven through health | Health is the current focus, not the permanent limit | Oriented, calm, intrigued | Partner With Us | Explore Health Articles | Scroll past hero; CTA visibility; low immediate bounce |
| 2 | What We Do | Establish real, specific capability | Mari Media's work is editorial, audience, and campaign capability, stated plainly | Capabilities are current and bounded, not an inflated agency list | Reassured, informed | none (informational) | none | Time-on-section; scroll continuation |
| 3 | For Our Partners | Convert credibility into partner interest | Mari Media evaluates fit carefully and promotes responsibly | Partnership is a two-way, transparent relationship, not a sales funnel | Respected, considered | Partner With Us | none | Click-through to partner path |
| 4 | For Our Readers | Convert credibility into reader interest | Readers get clear, honest, useful health information with no pressure | The commercial model is honest and disclosed, not hidden | Respected, informed | Explore Health Articles | none | Click-through to `/blog` |
| 5 | Optional photographic pause | Provide pacing and human warmth (conditional on an approved image existing) | (visual only; no competing message) | — | Calm, human | none | none | N/A if omitted |
| 6 | Health Articles editorial spread | Prove the reader value with a real artifact | This is what Mari Media actually publishes | Careful, dated, sourced, current | Curious, trusting | Read the article | See all Health Articles | Click-through to article/`/blog` |
| 7 | Company & Founders | Establish human ownership and credibility through specificity | Real people, real backgrounds, built this on purpose | Why health first, why affiliate work supports (not defines) the mission | Warm, grounded confidence | none | Learn more about us (anchor/route, see §15) | Scroll completion; link engagement |
| 8 | Calm final action | Convert accumulated trust into one clear next step | Two honest paths: partner, or just say hello | No urgency, no pressure | Confident, ready | Partner With Us | Contact us | Form/email engagement rate |

No section beyond the hero and the final action carries more than one CTA, and no CTA appears in every section, by design (see [Section 8](#8-cta-strategy)), satisfying Compass §26/§42's prohibition on repetitive CTA buttons and competing actions.

---

## 5. Detailed Section Specifications

### 5.1 Hero

**Purpose.** Establish identity and orientation before any other message competes for attention.

**Business objective.** Make the parent-company positioning ("digital media company that builds trusted digital brands") the first thing every visitor reads, so partner prospects do not mistake Mari Media for a single-purpose health affiliate site.

**User objective.** Answer "what is this, and is it relevant to me" in under 10 seconds.

**Key questions answered.** What is Mari Media? What does it do today? Is there something here for me right now (as a partner, or as a reader)?

**Content hierarchy.** Eyebrow or short label (optional, e.g. a category-style label already used in `Tag`/`Eyebrow`) → H1 stating what Mari Media is → one supporting sentence naming the current health focus without making it sound like the whole company → primary CTA (`Partner With Us`) and secondary CTA (`Explore Health Articles`), visually distinguished (`Button` variant `primary` vs `outline`, per `components/design-system/Button.tsx`) → optional single supporting image.

**Visual emphasis.** The H1 and the primary CTA are the two visually dominant elements. The supporting image, if used, is secondary and must not overpower the copy (Compass §20: "compact, proportionate hero," "do not use a screen-filling hero headline").

**Recommended component usage.** `Section` (`tone="page"`, `spacing="lg"` is likely too tall for a *compact* hero — use `spacing="md"`) wrapping a `Container` (`variant="hero"` if an image is present, otherwise `variant="content"`); `Eyebrow`/`Display` or `Heading level={1}` from `Typography`; `Body`/`BodyLarge` for the supporting sentence; `Button`/`ButtonLink` for both CTAs; `Ribbon` (minimal-line variant, `animated` optional) used once, beneath or beside the copy block, never behind text.

**Desktop behavior.** Two-column composition at ≥1024px: copy block on one side, supporting image (if approved) on the other, asymmetric per Compass §20 ("varied and asymmetric compositions"). No full-bleed hero image.

**Tablet behavior.** Single column at 768–1023px; image (if present) moves below or is reduced/cropped without losing its subject; CTAs remain side by side if width allows, otherwise stack.

**Mobile behavior.** Single column, image (if present) either omitted or placed after the copy at reduced visual weight; CTAs stack vertically, full width per the existing `sm:flex-row` stacking pattern already used across the current sections; no oversized headline (Compass §40).

**Accessibility considerations.** Exactly one H1 on the page, and it lives here. CTA buttons/links must have descriptive text (already satisfied by "Partner With Us" / "Explore Health Articles" — no "Click here"). If a decorative background motion (ribbon drift) is used, it must respect `prefers-reduced-motion` (already true of `Ribbon`/`tokens.css`). No text embedded only in an image.

**SEO considerations.** The H1 text should closely match the homepage's primary positioning ("digital media company") rather than a slogan, since it is the strongest on-page signal of what the domain is about. Homepage `<title>` and meta description (see [Section 9](#9-seo-strategy)) should be rewritten to match, replacing the current affiliate/email-marketing-only framing in `app/layout.tsx`.

**Internal links.** `Partner With Us` → in absence of a dedicated route, anchor to the final-action section's contact path (`#contact` equivalent) until Phase 4 ships `/partner-with-us`. `Explore Health Articles` → `/blog` (already a real route; keep as is).

**Future extensibility.** The hero must tolerate a swapped supporting image and a swapped secondary CTA (e.g. "Join the Newsletter" once that exists) without restructuring, since Compass §24 lists multiple possible secondary reader actions.

---

### 5.2 What We Do

**Purpose.** Convert "who is this" into "what do they actually do," using specificity as the credibility mechanism.

**Business objective.** Present real, current operating capability without claiming unheld expertise (medical, legal, financial, institutional) and without looking like a generic agency.

**User objective.** A partner prospect wants a fast, concrete list of what Mari Media can execute. A reader mostly skims this section but should not be confused or alarmed by it.

**Key questions answered.** What does Mari Media actually do, day to day? Is this a real operating company or a shell?

**Content hierarchy.** Section eyebrow/heading ("What We Do") → a small number of numbered lines (per Compass §31/§26, "numbered editorial service lines," not a card grid), each with a short title and one or two sentences, ordered roughly by current operating weight: editorial content and audience development first (the actual current work), followed by email marketing, affiliate/event promotion, and the remaining capabilities from Compass §31 that are factually supported today. No decorative "Coming soon" list here (that pattern is explicitly removed; see [Section 15](#15-implementation-notes)).

**Visual emphasis.** Numbers/labels carry visual weight (e.g. `01`, `02`...) but stay typographic, not icon-in-a-colored-circle decoration (Compass §41: "no unnecessary... decorative icons without meaning"; §24 forbids avatar/SaaS-icon treatment for primary capabilities).

**Recommended component usage.** `Section` (`tone="surface"` or `"page"`, alternating with neighboring sections for rhythm) + `SectionHeader`; each line as a lightweight `EditorialCard` with `image` omitted (`padding="md"`, no image prop) or a plainer custom list row using `Heading level={4}` + `Body`, whichever reads less like a card grid. Prefer a single-column numbered list over a 3-up/6-up grid to avoid the "SaaS grid" pattern Compass explicitly prohibits.

**Desktop behavior.** Numbered lines can run two-up in a loose, asymmetric arrangement (not a rigid equal-height grid) or as a single vertical list with generous line spacing; either is acceptable as long as it does not read as a uniform card grid.

**Tablet behavior.** Collapse to a single column; preserve numbering and line order.

**Mobile behavior.** Single column, generous vertical spacing (Compass §40: "preserve whitespace without creating excessive empty screens" — keep spacing intentional, not maximal).

**Accessibility considerations.** Use a real heading level per line (H3 under the section's H2) so the list is navigable by screen reader users via headings, not just visually numbered.

**SEO considerations.** This is a natural place for the copy to state Mari Media's actual service vocabulary (affiliate marketing, email marketing, editorial content, audience development) in plain sentences, supporting the homepage's topical relevance without keyword stuffing (Compass §37).

**Internal links.** None required; this section is informational. If a future What We Do route exists (Phase 4), the section heading may link there.

**Future extensibility.** New capability lines can be appended (e.g. "Landing experiences," "Performance reporting") as they become factually true, without changing the section's structure, per Compass §31's full capability list already anticipating growth.

---

### 5.3 For Our Partners

**Purpose.** Give partner prospects the specific information they need to self-qualify and act, distinct from reader-facing content.

**Business objective.** Drive qualified `Partner With Us` inquiries without over-promising reach, results, or acceptance (Compass §32, §42).

**User objective.** Understand whether Mari Media is a fit for their event/offer and what happens if they reach out.

**Key questions answered.** What kinds of partners does Mari Media work with? What's the value exchange? What happens after I inquire? Is this a real relationship or a funnel?

**Content hierarchy.** Section heading ("For Our Partners") → 2–4 short sentences covering: suitable partner types (health-event/summit organizers primarily, open to adjacent fits), the value exchange (audience relevance and responsible promotion in exchange for transparent, professional execution), and what happens next (a real inquiry, evaluated for fit, not an automatic yes) → single CTA (`Partner With Us`).

**Visual emphasis.** Copy-led; if an image exists, it should show genuine partnership/working context rather than generic handshake or stock-office imagery (Compass §22).

**Recommended component usage.** `Section` + `SectionHeader` (`align="left"`), `Body`/`BodyLarge` copy, `ButtonLink` (`variant="primary"`) for the CTA, optionally an `ImageFrame` (`ratio="landscape"` or `"portrait"`) placed asymmetrically opposite the copy (alternating with For Our Readers per Compass §20's alignment-alternation rule).

**Desktop behavior.** Two-column asymmetric layout (image left, copy right, or vice versa — opposite of whichever alignment For Our Readers uses immediately after it, to create rhythm).

**Tablet behavior.** Single column; image above or below copy, never overlapping.

**Mobile behavior.** Single column, image (if present) sized to avoid pushing the CTA below the fold unnecessarily.

**Accessibility considerations.** CTA text stays specific ("Partner With Us," not "Learn more"); if the image is decorative rather than informative, alt text should still describe it meaningfully per Compass §39 (no purely decorative marketing photography with empty alt unless it is truly decorative, e.g. a background texture).

**SEO considerations.** This section is a natural home for partnership-intent keywords (e.g. "health event marketing partner") stated plainly, supporting discovery by the partner audience without contradicting the parent-company framing established in the hero.

**Internal links.** `Partner With Us` → same target as hero's primary CTA (anchor now, `/partner-with-us` after Phase 4).

**Future extensibility.** Can absorb a future "types of partners we've worked with" list or a link to a future Partner With Us page's fuller criteria without restructuring; must not preemptively imply a partner directory or logos before real, disclosed relationships exist (Compass §50).

---

### 5.4 For Our Readers

**Purpose.** Give readers the specific reassurance and value proposition they need, distinct from partner-facing content.

**Business objective.** Drive traffic into Health Articles and build the audience relationship that the whole business model depends on (Compass §6, §8).

**User objective.** Understand what kind of reading experience this is and whether it's worth their time and trust.

**Key questions answered.** What do I get by reading here? Is this going to be trying to sell me something the whole time? Who stands behind this content?

**Content hierarchy.** Section heading ("For Our Readers") → 2–3 sentences covering: clarity and usefulness readers can expect, honest treatment of any commercial relationship (stated plainly, not hidden, not turned into a disclosure wall per Compass §32/§9), and an invitation to explore → single CTA (`Explore Health Articles`).

**Visual emphasis.** Copy-led, mirrored composition to For Our Partners but with alternated image alignment (Compass §20).

**Recommended component usage.** Same component set as §5.3 (`Section`, `SectionHeader`, `ImageFrame`, `ButtonLink`), mirrored alignment.

**Desktop/tablet/mobile behavior.** Same responsive pattern as For Our Partners, with alignment flipped for visual rhythm.

**Accessibility considerations.** Same as §5.3; CTA reads "Explore Health Articles," never "Click here" or "Learn more."

**SEO considerations.** Natural place to reinforce the health-content value proposition in plain language, supporting `/blog` as the primary content destination.

**Internal links.** `Explore Health Articles` → `/blog`.

**Future extensibility.** Can extend to mention future content categories once other brands/categories launch, without restructuring (Compass §2, §8: "future brand communities").

---

### 5.5 Optional Photographic Pause

**Purpose.** Provide a single full-width visual break for pacing, only when it genuinely helps (Compass §20: "Use full-width photographic pauses sparingly").

**Business objective.** Reinforce human warmth and editorial (not corporate) feel without adding a message that competes with adjacent sections.

**User objective.** A moment of visual rest between two copy-dense sections.

**Key questions answered.** None; this section carries no claim and no CTA.

**Content hierarchy.** Image only, optionally a short caption-style line (not a headline).

**Visual emphasis.** The image is the entire section. No text overlay that reduces contrast or obscures the image (Compass §21 ribbon rule extends in spirit to any overlay treatment).

**Recommended component usage.** `Section` with `container={false}` or `container="bleed"`, a full-bleed `next/image` (or `ImageFrame` with `framed={false}`).

**Desktop/tablet/mobile behavior.** Full-bleed at all widths; crop focal point preserved responsively; no horizontal overflow (Compass §40).

**Accessibility considerations.** Meaningful alt text describing the image's content and relevance, even though it is "just" a pause (Compass §22, §39). If truly decorative and non-informative, mark `aria-hidden`/empty alt, but prefer a real, relevant photo with real alt text.

**SEO considerations.** None beyond correct alt text; not a place for keyword-bearing copy.

**Internal links.** None.

**Future extensibility.** Trivial to swap the image over time (e.g. seasonal, campaign-relevant, or brand-specific imagery later) without any structural change.

**Condition for inclusion.** **This section must be omitted from the Phase 3 build until an approved, provenance-documented image exists for it.** As of this document, no such homepage-appropriate photography exists in `public/images/` beyond the three blog-specific images already tied to the functional-medicine article (see [Section 15](#15-implementation-notes)). Do not substitute a stock-feeling placeholder to force this section to appear; Compass §22 explicitly prohibits "visibly staged stock photos."

---

### 5.6 Health Articles Editorial Spread

**Purpose.** Prove the reader value proposition with a real, specific artifact rather than an abstract claim.

**Business objective.** Convert homepage traffic into article readers and, over time, into an audience relationship (Compass §28).

**User objective.** Quickly judge whether the content is worth reading and get into it with one click.

**Key questions answered.** What does Mari Media actually publish? Is it current, sourced, and written by someone accountable?

**Content hierarchy.** Section heading ("Health Articles" or similar) → one dominant featured article (currently `what-is-functional-medicine`, the only published, featured article) with visible category, title, excerpt, publish date, and reading time → a clear route to the full hub (`/blog`) → **no supporting-story cards**, because only one article currently exists.

**Visual emphasis.** The featured article's image and title dominate; metadata (date, reading time, category) is present but secondary, matching `FeaturedArticle`'s existing layout.

**Recommended component usage.** `Section` (`tone="surface-muted"` works well to separate this from the surrounding copy-led sections) + `SectionHeader`, then the existing `FeaturedArticle` component (`components/design-system/FeaturedArticle.tsx`) rendered with the real `ArticleSummary` for `what-is-functional-medicine`, plus a `ButtonLink`/text link to `/blog` ("See all Health Articles"). **Do not render `ArticleCard` supporting-story slots** until at least one more real, published article exists — an empty, fake, or duplicated card is explicitly prohibited (see the Phase 3 guidance already recorded in `docs/website-overhaul/MARI-MEDIA-COMPASS-CURSOR-OVERHAUL-PROMPT-PACK.md`, and Compass §28, §50).

**Desktop behavior.** `FeaturedArticle`'s existing two-column (image/copy) layout at ≥768px is already correct for this; no change needed to the component.

**Tablet behavior.** Same component collapses to single column per its existing responsive behavior.

**Mobile behavior.** Same; verify the `ImageFrame` aspect ratio (`landscape`) does not create an oversized image relative to the copy at 375px.

**Accessibility considerations.** The article title should be the section's real link target (already true in `FeaturedArticle` — title text itself is a link). Date and reading time are real metadata, not decorative (Compass §29).

**SEO considerations.** This is the homepage's strongest internal link into `/blog/what-is-functional-medicine` — preserve that exact URL (already a stated Phase 3 constraint). Consider whether `Article`/`BlogPosting` structured data belongs on the article page itself (likely already Phase 5 territory) rather than duplicated here; the homepage's role is just a clean, crawlable link with descriptive anchor text (the real title, not "Read more").

**Internal links.** Featured article title/CTA → `/blog/what-is-functional-medicine` (preserve). "See all Health Articles" → `/blog`.

**Future extensibility.** As soon as a second published article exists, this section should grow to include 2–3 supporting `ArticleCard` entries alongside the one `FeaturedArticle`, matching the "one dominant feature, supporting stories" magazine pattern (Compass §20, §28) — the components for this already exist and require no new design work, only content.

---

### 5.7 Company & Founders

**Purpose.** Establish human ownership and credibility through specific, honest facts, while keeping the fuller story on the About page (Compass §27).

**Business objective.** Make it unmistakable that Mari Media is founder-owned and operated, without overstating scale or history.

**User objective.** Know that a real company with real people, not an anonymous operation, is behind everything above.

**Key questions answered.** Who runs this? Why does it exist? Why health first?

**Content hierarchy.** Section heading → purpose-led copy naming the founders only as James and Kaye (no full legal names, no former employers, no résumé detail; later privacy decision supersedes earlier Compass/blueprint career-history guidance for public pages) → why they started Mari Media → a plain statement that health is the first focus, not the permanent one → optional link to a fuller About page/section once it exists.

**Visual emphasis.** Copy-led; if a real photo of the founders exists and is approved, it can accompany this section, but no photo should be fabricated or sourced from generic stock (Compass §22, §50 explicitly prohibits "anonymous teams presented as Mari Media staff").

**Recommended component usage.** `Section` (`tone="page"`) + `SectionHeader`, `Body`/`BodyLarge` copy. If a real photo exists, an `ImageFrame` (`ratio="portrait"` or `"square"`) alongside the copy; otherwise, copy-only is entirely acceptable and preferred over a placeholder image (Compass §22).

**Desktop/tablet/mobile behavior.** Copy-only stacks naturally at all widths; if a photo is added, follow the same asymmetric two-column-to-stack pattern as §5.3/§5.4.

**Accessibility considerations.** Real names and real facts only; no invented credentials (Compass §1, §27).

**SEO considerations.** Reinforces `Organization`/founder-related entity signals in plain language; supports a future `About` page without duplicating it word for word.

**Internal links.** Optional "Learn more about us" → anchor to this same section (self-link, low value) or omitted entirely until a dedicated `/about` route exists in Phase 4; do not link to a route that does not exist yet.

**Future extensibility.** This section should shrink in relative homepage weight (but not disappear) once a full About page exists, becoming purely a teaser with a real link, per Compass §27's instruction to keep the "fuller story" off the homepage.

---

### 5.8 Calm Final Action

**Purpose.** Convert accumulated trust into one clear, low-pressure next step for each audience, and close the page.

**Business objective.** Capture the `Partner With Us` action from visitors who scrolled the whole page without acting earlier, and give everyone else an honest, simple way to say hello.

**User objective.** Take an action that matches how much trust they've built up, without being pressured.

**Key questions answered.** What do I do now?

**Content hierarchy.** A short closing line (not a repeat of the hero headline) → two clearly distinguished actions: a specific partner path (`Partner With Us`, primary) and a specific general-contact path (email/contact, secondary) — matching the existing `Contact` section's honest, direct email pattern (`hello@marimedia.co`, copy-to-clipboard, `mailto:` link) rather than an inert, unwired form, until Phase 6 ships a real backend.

**Visual emphasis.** Two calm, clearly differentiated buttons (`primary` vs `outline`/`secondary` per `Button.tsx`); no countdown, no urgency copy, no "last chance" language (Compass §42, §50).

**Recommended component usage.** `Section` (`tone="surface-muted"` to visually close the page distinctly from the body above) + `SectionHeader` (short, calm heading) + two `ButtonLink`s. Retain the existing, already-honest email-copy interaction pattern from `components/sections/Contact.tsx` (the copy-to-clipboard behavior is good, accessible, and consistent with Compass — carry its *behavior*, restyle its *appearance* to the design-system tokens).

**Desktop behavior.** Two actions side by side, primary visually stronger (size/weight, not just color) per Compass §42 ("Make primary and secondary actions visually distinguishable").

**Tablet/mobile behavior.** Stack vertically, primary action first.

**Accessibility considerations.** No unsupported response-time promises (Compass §33, §46: remove or rewrite "We read and respond to every inquiry ourselves" if it cannot be operationally guaranteed as a promise, or keep it only as a true, non-committal statement of practice, not a guarantee). Copy-to-clipboard status messages remain in an `aria-live="polite"` region (already correct in the current implementation and should be preserved).

**SEO considerations.** Minimal; this is a conversion section, not a content section. Ensure the contact email is crawlable text, not only inside a `mailto:` attribute.

**Internal links.** `Partner With Us` → same anchor/route target as the hero and For Our Partners CTA. Contact path → `mailto:hello@marimedia.co` today; becomes `/contact` after Phase 4.

**Future extensibility.** This is the section that becomes a real, validated contact/partnership form in Phase 6, per Compass §33/§34; its layout should already anticipate a form replacing the email card without breaking the section's two-action structure.

---

## 6. Copy Hierarchy

**Headline philosophy.** The H1 states what Mari Media *is*, in plain declarative language, not a slogan and not a question. It should be specific enough that a reader could repeat it back accurately (Compass §12: "credible... clearly distinguish evidence... from promotion").

**Subheadline philosophy.** One sentence, immediately under the headline, that adds the single most important qualifying fact (currently: the health focus, framed as current rather than total). Subheadlines elsewhere in the page (section descriptions) exist to answer "why should I keep reading this section," not to repeat the section heading in other words.

**Paragraph length.** Two to four sentences per paragraph on the homepage, maximum. No paragraph should require the reader to hold more than one idea in mind at a time (Compass §12: "Clear — make ideas easy to understand").

**Button language.** Verb-first or destination-first, always specific to where the click leads: "Partner With Us," "Explore Health Articles," "See all Health Articles," "Read the article." Never "Click here," "Learn more" (as a bare label with no context), "Submit," or "Get started."

**Link language.** Inline and standalone links use descriptive anchor text that makes sense out of context (Compass §39: "avoid vague links such as 'Click here'").

**Callout style.** The homepage itself should need very few callouts (`Callout` is primarily an article/content-page component per Compass §29–30). If a homepage callout is ever needed (e.g. a brief transparency note in For Our Readers), use the `info` or `disclaimer` variant, never `safety`/`warning`/`error`, and keep it to one or two sentences.

**Editorial tone.** Confident, warm, specific, calmly stated (Compass §10–13). No exclamation points as a substitute for enthusiasm. No rhetorical questions used as a copy crutch ("Ready to grow your business?").

**Reading level.** Plain, general-audience English throughout (roughly grade 7–9 reading level for homepage copy specifically, stricter than long-form health articles are allowed to be, since the homepage must be instantly legible to both a partner executive skimming on a phone and a first-time health reader).

**Non-negotiable, repeated across every section per Compass §14:** no em dashes anywhere in homepage copy; no three-part lists used purely for dramatic rhythm; no fear-, shame-, or insecurity-based framing; no unsupported certainty.

---

## 7. Trust Strategy

The homepage earns trust the same way the rest of the site is required to (Compass §17, §50): through specificity and consistency, not through decoration or borrowed authority. Concretely, on this homepage:

- **Photography.** Every image used must be real, provenance-documented, and relevant to its adjacent copy (Compass §22). Where no such image exists yet (see [Section 15](#15-implementation-notes)), the section either ships without an image or is deferred, never filled with a stock placeholder.
- **Editorial quality.** The single published article is treated as the proof of editorial standards, not summarized into vague claims ("expert-reviewed content") that aren't independently verifiable on the homepage itself. Its real date, real author label, and real reading time do that work.
- **Transparency.** For Our Readers states the commercial relationship plainly and briefly, rather than hiding it in a footer link or turning it into a wall of disclosure text (Compass §9, §32).
- **Human voice.** Company & Founders uses real names and real, checkable backgrounds rather than an anonymous "our team" framing (Compass §27, §50).
- **Evidence.** Dates, authorship, and category labels are visible wherever content is referenced (hero optionally, Health Articles definitely), consistent with Compass §17's "evidence made visible."
- **Professionalism.** Consistent use of the Phase 2 design system (spacing, radii, shadows, type scale) across every section signals competence through consistency rather than through claims of competence.
- **Accessibility.** A homepage that is fully keyboard-navigable, has correct heading order, and respects reduced motion is itself a quiet trust signal to any visitor who notices, and a real requirement for many visitors who need it.
- **Consistency.** No section contradicts another (e.g. the hero cannot say "digital media company" while What We Do reads like a single-purpose affiliate agency). This document exists specifically to prevent that drift.

Explicitly excluded, per Compass §50: fabricated testimonials, client logos, partner logos, badges, statistics, "as featured in" claims, countdowns, and any claim of scale, history, or authority beyond what is true today.

---

## 8. CTA Strategy

| Tier | Action | Where it appears | Destination today (Phase 3) | Destination after Phase 4 |
|---|---|---|---|---|
| Primary conversion | Partner With Us | Hero, For Our Partners (close), Final Action | In-page anchor to Final Action's contact block | `/partner-with-us` |
| Secondary conversion | Explore Health Articles / See all Health Articles | Hero, For Our Readers (close), Health Articles spread | `/blog` (real route already) | `/blog` (unchanged) |
| Micro conversion | Read the article | Health Articles spread | `/blog/what-is-functional-medicine` (real route, preserve) | unchanged |
| Micro conversion | Copy/email contact | Final Action | `mailto:hello@marimedia.co` | `/contact` |
| Micro conversion (future) | Learn more about us | Company & Founders | omitted until `/about` exists, or self-anchor | `/about` |

Rules that keep these from competing (Compass §26, §42, §50):

1. Only two *distinct* actions exist across the whole homepage: partner, or read. Every button on the page is one of those two, or a micro-conversion in direct service of one of them (the article link serves "read"; the email link serves a visitor who wants to act but isn't ready for the formal partner path).
2. No section presents both the primary and secondary CTA together except the Hero (where establishing both paths immediately is the point) and the Final Action (where closing with both, clearly differentiated, is the point). Every section in between offers at most one CTA, matched to that section's own audience.
3. Primary (`Partner With Us`) is always the visually stronger treatment (`Button`/`ButtonLink` `variant="primary"`) wherever it appears alongside a secondary action; the secondary action uses `outline` or `secondary`, never a second `primary`-styled button on the same screen.
4. No CTA promises an outcome, a response time, or acceptance (Compass §32, §42). "Partner With Us" is an invitation to inquire, not a guarantee of anything.

---

## 9. SEO Strategy

**Primary search intent.** Branded and near-branded queries ("Mari Media," "Mari Media partner," "Mari Media health") and, secondarily, category queries from the partner audience ("health event affiliate marketing partner," "email marketing for health summits").

**Supporting intent.** Health-topic queries that could land a reader on the homepage before they've found a specific article (lower priority than the article pages themselves, which are the real SEO surface for health topics per Compass §37).

**Internal linking strategy.** The homepage should be the strongest internal link into: `/blog` (via two separate CTAs — Explore Health Articles and See all Health Articles — which is intentional redundancy for crawlability and user paths, not a copy violation, since they are two different buttons in two different sections, not a repeated identical CTA in every section) and into the one live article (`/blog/what-is-functional-medicine`) with real, descriptive anchor text (the actual title).

**Featured article strategy.** Continue surfacing exactly the real `featured: true` article from `lib/content/articles/`. As more articles are published, the featured slot should be re-evaluated editorially (not automatically "most recent"), consistent with Compass §28's "one dominant feature" model, and supporting `ArticleCard` slots should be added only for genuinely published content.

**Future content expansion.** The Health Articles section's component seam (`FeaturedArticle` + `ArticleCard`) already supports more categories (`articleCategories` in `types/article.ts` already includes Preventive Health, Health Events, Health Trends) without any structural change — this section can absorb category-level browsing entry points later without a redesign.

**Schema opportunities.** `Organization` structured data already exists in `app/layout.tsx` and must be updated (see [Section 15](#15-implementation-notes)) to match the corrected parent-company positioning rather than the current affiliate/email-marketing-only description, since it currently overstates a narrower identity than Compass specifies. No new schema type is required for the homepage itself; `Article`/`BreadcrumbList` schema, if added, belongs on the article and hub pages (Phase 5), not duplicated on the homepage.

**Metadata.** Homepage `<title>` and meta description in `app/layout.tsx` should be rewritten from the current "Affiliate Marketing & Email Marketing Partner" framing to lead with the digital-media-company positioning, mentioning health as the current focus, matching the hero exactly so metadata and on-page content never diverge.

---

## 10. Accessibility Strategy

**Reading order.** DOM order must match visual order at every breakpoint; no CSS-only reordering that would make a screen reader user encounter content in a different sequence than a sighted user (Compass §40).

**Heading hierarchy.** One H1 (hero). Each of the 8 sections in [Section 4](#4-homepage-information-architecture) gets exactly one H2 (via `SectionHeader`'s default `level={2}`). Sub-items within a section (e.g. each What We Do line) use H3, never skipping a level.

**Keyboard navigation.** Every CTA is a real `<a>` (`ButtonLink`) when it navigates, never a `<button>` wrapping navigation via `onClick` alone (the current `Hero`/`Services`/`Contact` pattern of `document.getElementById(...).scrollIntoView` on a `<button>` should not be carried forward as the primary pattern for cross-page CTAs; in-page anchors can remain real `<a href="#id">` elements, which are keyboard- and screen-reader-navigable by default and do not require JavaScript). Focus order follows visual/DOM order; focus states use the existing `--ds-focus-ring-*` tokens already wired into `tokens.css`.

**Contrast.** All text/background pairings must use the already-verified token combinations documented in `tokens.css`'s comments (e.g. `--ds-color-accent` with `--ds-color-accent-foreground`, never Pastel Red with white text per the recorded Phase 1 finding "pastel-red-button-fails"). No new raw hex values introduced in Phase 3; every color reference goes through a `--ds-color-*` token.

**Reduced motion.** Any reveal-on-scroll (`mm-ds-reveal`) or ribbon drift (`mm-ds-ribbon-line[data-animated="true"]`) must rely on the existing `prefers-reduced-motion` handling already built into `tokens.css` — no new bespoke animation should be introduced outside that system. The current homepage's `framer-motion` float/parallax decorations (blurred orbs, floating icon cards in `Hero.tsx`, timeline scale/slide effects) are exactly the kind of unstructured motion this system replaces; Phase 3 should not carry that pattern forward as is.

**Screen reader considerations.** Decorative elements (the ribbon, background shapes) carry `role="presentation"`/`aria-hidden="true"` (already true of `Ribbon.tsx`). Live status regions (e.g. "copied to clipboard") use `aria-live="polite"` as the current `Contact.tsx` already correctly does; preserve that pattern in the Final Action section rather than losing it during restyling.

---

## 11. Responsive Strategy

**Desktop (≥1280px, verified additionally at 1024px and 1440px per the Phase 3 breakpoint list).** Full asymmetric compositions: two-column hero, alternating image/copy alignment across For Our Partners/For Our Readers, generous whitespace between the 8 sections, `Container` variant `wide`/`hero` used where a section's composition benefits from extra width.

**Tablet (768px).** Every two-column section collapses to a single column. Image-bearing sections keep the image directly adjacent to its own copy (never separated by another section's content). Numbered What We Do lines remain legible without needing horizontal scroll.

**Mobile (375px, verified additionally at 320px).** Strict single column throughout. CTAs are full-width or clearly tappable (minimum comfortable tap target, per Compass §40). No oversized headline; the hero H1 must wrap comfortably without truncation or overflow. No horizontal scroll anywhere, including from the `Ribbon` element (fixed `w-full`, never wider than its container).

**How priorities change across breakpoints.** The content and order never change between breakpoints (Compass §40: "preserve reading order, section ownership"); what changes is layout density and image treatment only. On mobile, the two-CTA hero should still show both CTAs, just stacked, rather than hiding the secondary one — hiding a CTA on mobile would silently deprioritize the reader path for the majority of real-world traffic.

---

## 12. Performance Strategy

**Image philosophy.** Every homepage image goes through `next/image` (directly, or via `ImageFrame`, which already wraps it correctly) with explicit `width`/`height` (or `fill` inside a fixed-aspect-ratio container, as `ImageFrame` already does) and a real `sizes` attribute tuned to each section's actual rendered width at each breakpoint, matching the pattern already used in `FeaturedArticle`/`ArticleCard`.

**Lazy loading.** Only the hero's supporting image (if any) is a candidate for `priority` (it is likely part of the largest above-the-fold content). Every other homepage image (For Our Partners, For Our Readers, the optional photographic pause, Health Articles) loads lazily by default (`next/image`'s default), since none of them are above the fold on first paint at common viewport heights.

**Animation limits.** Only two motion patterns are permitted, both already defined in `tokens.css`: the restrained `mm-ds-reveal` fade-and-rise-in on section entry, and the slow ribbon-line gradient drift. Neither should be applied to more than a few elements per screen at once (Compass §20: avoid large blank bands caused by reveal animation — stagger delays modestly, and ensure content is legible even if a user's browser or connection causes the animation to be skipped).

**LCP considerations.** The Largest Contentful Paint candidate on most viewports will be either the hero H1 text block or the hero's supporting image. If an image is used, it must be `priority`-loaded and correctly sized so it does not become an LCP regression; if no hero image exists yet (a real possibility per [Section 15](#15-implementation-notes)), the H1 becomes the LCP element, which is actually the safer default until real photography is approved.

**CLS avoidance.** Every image reserves its aspect ratio via `ImageFrame`'s fixed `aspect-*` classes before the image loads, preventing layout shift. Web fonts (Plus Jakarta Sans, Source Sans 3, Newsreader) should use `next/font`'s automatic `font-display` handling (already how `fonts.ts` loads them) to avoid shift from font swapping. No ad-container reservations are needed on the homepage today (Compass/`mari-media-project.mdc`: "Advertisement containers must not render or reserve blank space when no active advertisement exists" — the homepage carries no ad containers at all in this phase).

**Bundle strategy.** Prefer server components for every homepage section that has no real interactivity (which, per this blueprint, is every section except the Final Action's copy-to-clipboard control and possibly the header's mobile menu, both already client components elsewhere in the app). This is a meaningful change from the current implementation, where every homepage section is marked `"use client"` largely to support `framer-motion` scroll-reveal effects; Phase 3 replacing that with CSS-only reveal (`mm-ds-reveal`, already built and GPU-cheap) removes the need for `framer-motion` on the homepage entirely, which is a real bundle-size win worth calling out to Phase 3 explicitly.

---

## 13. Future Expansion

The 8-section architecture in [Section 4](#4-homepage-information-architecture) is designed to absorb the following without a redesign, only content/section-level additions:

- **Featured events.** A future "Upcoming" or "Featured Event" module can slot between For Our Readers and the optional photographic pause, using the same `EditorialCard`/`Card` vocabulary already established.
- **Newsletter.** A signup module (Compass §35) can occupy the optional-photographic-pause slot or sit just before the Final Action, as its own small section, once real subscription mechanics exist (Phase 6+). It must always state what will be sent, how often, and how to leave, per Compass §35, and must never be bundled with partnership consent.
- **Testimonials.** Not supported until real, attributable partner or reader testimonials exist; when they do, they belong near For Our Partners or For Our Readers respectively, never as fabricated placeholders in the interim (Compass §50).
- **Partner directory.** Could eventually live as a supporting element within or after For Our Partners, but only once real, disclosed partner relationships exist to list (Compass §26: "Avoid... premature logos or partner walls").
- **Featured campaigns / case studies.** Would extend What We Do or sit as a new section between For Our Partners and Health Articles once real, disclosable results exist to describe honestly.
- **Lead magnets.** Would attach to For Our Readers as an additional, clearly optional micro-conversion, following the same consent rules as newsletter signup (Compass §35).
- **Podcast / video.** Could extend the Health Articles section into a broader "Explore" module (audio/video alongside articles) without changing its position in the page, since its job (prove reader value with a real artifact) doesn't change.
- **Multiple published articles.** Already accounted for structurally in §5.6; requires no new design work, only populating `ArticleCard` slots.
- **Future brands.** As Compass §2/§8 brands launch, the homepage's job stays "explain the parent company and point outward" — a future "Our Brands" module could sit after Company & Founders without disturbing the rest of the order.

The one architectural constraint every future addition must respect: no new section may introduce a second competing primary CTA, and no future section may collapse What We Do, For Our Partners, and For Our Readers back into a single generic section (Compass §26).

---

## 14. Success Metrics

| Metric | What it tells us | Notes |
|---|---|---|
| Scroll depth per section | Whether the narrative order in [Section 3](#3-visitor-journey) actually holds attention, and where visitors drop off | Instrument section boundaries, not just page-bottom |
| Primary CTA click-through (`Partner With Us`) | Whether the partner-facing value proposition and trust-building actually convert | Track by originating section (hero vs. For Our Partners vs. Final Action) to see which touchpoint does the real work |
| Secondary CTA click-through (`Explore Health Articles` / article link) | Whether the reader-facing path is working | Track separately from the always-present `/blog` nav link, so the homepage's own contribution is visible |
| Article engagement (from homepage referral) | Whether the Health Articles module is doing its job of proving value, not just gesturing at it | Time on article, scroll depth on the article itself, arriving specifically from the homepage |
| Time on page / time to first meaningful scroll | Rough proxy for whether the hero resolves identity quickly enough | Very short times may indicate the hero is failing at its one job |
| Contact/email engagement | Whether visitors who don't fit the formal partner path still find a way to reach out | Copy-to-clipboard and `mailto:` clicks, until a real form exists in Phase 6 |
| Newsletter signups | Audience-growth health, once the feature exists | Not applicable until Phase 6+ |
| Partner inquiries | The ultimate business objective of the homepage | Not measurable with real volume until Phase 6's contact backend exists; until then, CTA click-through is the best available proxy |
| Core Web Vitals (LCP, CLS, INP) | Whether the performance strategy in [Section 12](#12-performance-strategy) is actually holding, especially after removing `framer-motion` from the homepage | Verify specifically that LCP does not regress from the current (lighter, if less refined) homepage |
| Bounce rate by entry section | Whether visitors landing directly on `/blog/what-is-functional-medicine` and then visiting the homepage behave differently than direct homepage entrants | Useful once there is enough traffic to segment meaningfully |

Success is judged the way Compass §37 requires: through qualified discovery, engaged reading, and useful actions, not through raw traffic or ranking alone.

---

## 15. Implementation Notes

**Assumptions Phase 3 must not silently change:**

1. Dedicated routes for About, What We Do, Partner With Us, and Contact do not exist yet (Phase 4). Every CTA target in this document that says "in-page anchor... until Phase 4" is a deliberate, temporary decision, not a placeholder to be forgotten. Phase 3's final report should list every such link explicitly so Phase 4 knows exactly what to convert.
2. The current production homepage (`app/page.tsx`, `components/sections/*`) and global shell (`Navigation.tsx`, `Footer.tsx`) are entirely pre-Compass: legacy palette (`bg-primary`/`text-[#222222]`/Tailwind grays rather than `--ds-*` tokens), legacy fonts (Poppins/Inter via `app/layout.tsx`, not the Phase 2 Plus Jakarta Sans/Source Sans 3/Newsreader set), a generic three-card-grid "Services" section, decorative icon circles throughout, a "Coming soon" future-services list (explicitly prohibited by `mari-media-project.mdc`: "do not preserve existing homepage wording merely because it already exists," and by Compass §26: "Avoid... vague claims... inflated claims"), and copy that frames Mari Media as a single-purpose "affiliate marketing media company" rather than the parent-company positioning in Compass §7. **This blueprint assumes all of that is replaced in Phase 3, not preserved.** Nothing here should be read as asking Phase 3 to retrofit the old sections; it should be read as the full specification for new ones.
3. `Navigation.tsx` and `Footer.tsx` are shared shell components outside this document's per-section scope, but they must be re-skinned to the Phase 2 design-system tokens as part of Phase 3 (since Phase 3 is the first real page to consume the design system, per the explicit note in `tokens.css`: "Wiring a real page... into this token set is a decision for that later phase"), and their nav labels must stay aligned with whatever this document's CTA targets are at the time of the Phase 3 build (i.e., if Phase 3 still uses in-page anchors, `Navigation.tsx`'s existing anchor-based links can mostly stay; if any label wording changes here, keep it consistent between nav and homepage).
4. **No approved photography exists yet for any homepage section except the Health Articles module**, which reuses the three already-approved, provenance-documented images at `public/images/blog/functional-medicine/` (see that folder's `ASSET-MANIFEST.md`). The hero, For Our Partners, For Our Readers, the optional photographic pause, and Company & Founders all currently have **no approved image**. This is the single largest open risk for Phase 3: either (a) source and get real photography approved before Phase 3 begins those sections' visual build, (b) ship those sections copy-only (fully acceptable per Compass §22, and explicitly the required fallback for the photographic-pause section), or (c) use a clearly labeled internal-review placeholder that cannot ship to production, exactly as Phase 1's lab did. Do not resolve this silently by using stock imagery.
5. Typography (Plus Jakarta Sans / Source Sans 3 / Newsreader) is the Phase 1-approved, Phase 2-implemented working baseline for the design system, and Phase 3 is explicitly the phase intended to wire it into a real production page (per `fonts.ts`'s own documentation). This blueprint specifies Phase 3 should use it. Per Compass §23/§52, this remains the *approved working direction*, not a claim that typography is permanently, irreversibly finalized as Mari Media's brand type forever; if a future review revisits it, that is a typography decision, not a homepage-architecture decision, and would not require re-deriving anything in this document.
6. The current `Organization` JSON-LD in `app/layout.tsx` describes Mari Media narrowly ("affiliate marketing media company focused on online health events"). Phase 3 (or whichever phase touches `app/layout.tsx`'s metadata) should correct this to match Compass §4/§7's actual positioning at the same time the homepage copy changes, so the two never contradict each other.
7. `framer-motion` is used extensively in the current homepage for scroll-reveal and decorative float effects. This blueprint's Performance Strategy ([Section 12](#12-performance-strategy)) and Accessibility Strategy ([Section 10](#10-accessibility-strategy)) both call for replacing that with the existing CSS-only `mm-ds-reveal` system. Removing `framer-motion` from the homepage is a Phase 3 implementation decision this document recommends but does not mandate as a hard constraint; if Phase 3 finds a real reason to keep it for one specific interaction, that should be a called-out decision in that phase's report, not a silent reversion to the old pattern everywhere.
8. This document does not specify exact pixel values, exact copy sentences, or exact image crops. Those are Phase 3 execution decisions, to be made using the tokens, components, and rules already fixed by Phase 1/Phase 2 and the constraints stated throughout this document.

**Constraints Phase 3 must follow (summary):**

- No em dashes anywhere in new copy.
- No fabricated proof, metrics, testimonials, or logos.
- No claim that health is Mari Media's permanent identity.
- No new raw color values outside `--ds-color-*` tokens.
- No card-grid treatment for What We Do.
- No empty/duplicate/fake article cards.
- No urgency, countdowns, or response-time promises.
- No GoHighLevel mention in the hero (may appear once, later, in detailed operational copy if genuinely relevant — most likely in What We Do, not on this pass, since it is currently unclear whether that tool name belongs in public copy at all; flag as an open question for Phase 3 rather than deciding it here).
- Preserve `/blog/what-is-functional-medicine` exactly.
- Verify at 320, 375, 768, 1024, 1280, and 1440px.
- Run lint, type check, tests (if present), and production build before considering Phase 3 complete.

---

*This document is the Phase 3 implementation specification. It does not implement code, does not redesign components, and does not modify the live website.*

---

## Addendum: MARIWEB-009.5 Homepage Experience Optimization

**Status:** This blueprint's Section 4 information architecture and Section 6-8 copy/CTA rules remain the approved baseline. MARIWEB-009.5 is an optimization pass on top of them, not a replacement of this document, and revised two things after a first-time-visitor UX review of the Phase 3 build: the section order, and part of the "For Our Partners" / "Company & Founders" copy. Every other rule in this document (trust strategy, CTA strategy, accessibility, responsive, and performance strategy) still applies unchanged.

**What changed and why:**

1. **Two sections added: Editorial Principles and How We Work.** The review found two real gaps in the Phase 3 build, not just style preferences: (a) the homepage asked visitors to trust Mari Media across several sections before ever stating a specific, checkable commitment, and (b) "For Our Partners" said "a real person reads it and responds" but never said what happens after that, even though blueprint Section 5.3 itself lists "what happens after I inquire" as a key question that section should answer. Editorial Principles (three short, specific commitments) now sits right after the hero. How We Work (a refined, four-step version of the previous website's collaboration process, per the review's Goal 5) now sits right after For Our Partners, directly answering that unresolved question.
2. **Revised section order:** Hero, Editorial Principles, What We Do, For Our Partners, How We Work, For Our Readers, Health Articles, Company & Founders, Calm Final Action. For Our Partners now precedes For Our Readers with How We Work between them rather than immediately adjacent; since neither section has approved photography yet (Implementation Note 4 above still applies), no alternating-image-alignment rhythm was actually broken by this change. Health Articles and Company & Founders keep their original relative position near the end (evidence, then human ownership, then close).
3. **What We Do condensed from five capabilities to three** ("three things, done well"), merging what were three separate lines describing one working capability (build the audience, then connect it with the right partners: email marketing, affiliate/event promotion, and campaign reporting) into two clearer lines, plus editorial content unchanged. No underlying fact was removed, only restated with less repetition. The GoHighLevel mention that lived in the old "Email marketing" line was dropped from this condensed version; Compass Section 6 still permits it to appear once in more detailed operational copy later, on whichever page eventually carries that detail (Phase 4's What We Do page, not this homepage pass).
4. **Hero headline and subheadline rewritten** for faster resolution of "what does Mari Media do," per the review: the previous headline ("proving itself one careful brand at a time") named the company's posture but not its activity; the new headline and subheadline name the activity (writing health content, partnering with online health events) in the same breath as the identity statement, while keeping the "current focus, not the permanent limit" framing from Compass Section 24.
5. **Company & Founders copy, then privacy-corrected (MARIWEB-009.5 follow-up):** The Phase 3 body copy never named the founders. An initial 009.5 pass named them with career history drawn from Compass Section 3. A later approved privacy decision superseded that: public founder names are James and Kaye only; JM, Kristine, full legal names, and former employer affiliations must not appear in public website content. The Who We Are section is purpose-led, not résumé-led.

No change in this addendum touches: the CTA strategy (Section 8), the photography condition (Implementation Note 4), the typography or color system, the routes/anchors used for any CTA, or the `/blog/what-is-functional-medicine` URL.
