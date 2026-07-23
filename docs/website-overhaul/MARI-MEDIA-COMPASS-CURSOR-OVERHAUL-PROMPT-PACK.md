# Mari Media Compass-Aligned Website Overhaul
## Cursor AI Phase-by-Phase Prompt Pack

**Status:** New prompt pack aligned to the latest approved Mari Media Compass and the permanent Cursor rules.

**Project:** `marimedia`

**Production website:** `https://marimedia.co`

**Approved delivery flow:**

```text
feature branch -> dev -> preprod -> main
```

**Traceability rule:**

```text
1 ClickUp task = 1 Git branch = 1 pull request
```

Use the `MARIWEB` ClickUp prefix. Replace every `<MARIWEB-###>` placeholder with the real ClickUp task ID before creating a branch.

---

# 1. How to Use This Pack

Do not paste the entire prompt pack into Cursor at once.

For each phase:

1. Update local `dev` from `origin/dev`.
2. Create a dedicated feature branch from the latest `dev`.
3. Open a fresh Cursor Agent conversation when practical.
4. Confirm the permanent rules are loaded.
5. Paste the **Common Session Header**.
6. Paste only the current phase prompt.
7. Review Cursor's proposed plan before authorizing broad edits.
8. Test the result locally.
9. Review the phase checkpoint.
10. Merge through a pull request only after approval.

Do not combine phases merely to save time. The visual direction, typography, homepage composition, public copy, inquiry behavior, and release hardening each require their own approval gate.

---

# 2. Authoritative Rule Files

Cursor must read and obey the current permanent Mari Media rule files, especially:

```text
.cursor/rules/mari-media-website-compass.mdc
.cursor/rules/mari-media-project.mdc
```

The Compass-aligned website rule is authoritative for:

- company definition and portfolio-of-brands direction
- brand strategy and positioning
- voice, tone, conduct, and copy rules
- visual identity and approved palette
- website architecture and homepage behavior
- editorial and health-content standards
- partnership and contact journeys
- SEO, accessibility, privacy, security, release, and governance requirements

Do not recreate, shorten, reinterpret, or overwrite these permanent rules during the overhaul.

When a phase prompt conflicts with an active permanent rule, the permanent rule wins. Report the conflict and stop before implementing the conflicting instruction.

Do not use or create a legacy `.cursorrules` file.

---

# 3. Current Website Baseline That Must Be Re-evaluated

The current public site remains more service-company-first than the approved Compass direction. It currently emphasizes affiliate marketing, email marketing, online health events, a four-step process, partner benefits, future services, and a contact section.

The overhaul must move the website toward the approved identity:

- Mari Media is a digital media company and parent company for a future portfolio of trusted digital brands.
- Health and wellness is the first proving ground, not the permanent limit of the parent company.
- The website must create value for both readers and commercial partners.
- Editorial usefulness and audience trust come before aggressive promotion.
- The first screen should feel editorial, human, warm, confident, and composed.
- The site must not look like a hospital, generic wellness template, anonymous content farm, SaaS landing page, or conventional full-service agency.

The current implementation should be treated as working source material, not as the visual or structural target.

Preserve verified working technology and content where it remains useful, especially:

- Next.js App Router, TypeScript, and Tailwind CSS
- the published `/blog/what-is-functional-medicine` URL
- the article content, evidence qualifications, references, images, disclaimers, metadata, and structured-data foundation
- the typed article architecture and reusable article components
- accessibility groundwork that still works
- valid sitemap, robots, canonical, Open Graph, and JSON-LD logic that remains correct
- the official Mari Media logo asset without redrawing, recoloring, cropping, distorting, or replacing it

Do not preserve old visual decisions merely because they already exist.

---

# 4. Approved Visual Direction to Implement

## 4.1 Emotional direction

The website should feel like warm sunlight moving through an elegant creative studio:

- warm and welcoming
- composed and capable
- versatile and adaptable
- elegant and premium through restraint
- young and creative without becoming childish or chaotic
- gender-neutral, human, and approachable
- calmly energetic, never loud or aggressively promotional

## 4.2 Approved palette

Use semantic tokens based on this approved master palette:

| Role | Color | Hex |
|---|---|---|
| Primary canvas | Warm White | `#FAF8F5` |
| Elevated surface | Pure White | `#FFFFFF` |
| Primary text | Soft Black | `#211F1D` |
| Secondary text | Warm Charcoal | `#5E5955` |
| Signature accent | Pastel Red | `#D9857A` |
| Strong accent | Deep Red | `#8F403B` |
| Health accent | Muted Green | `#718774` |
| Health surface | Soft Sage | `#E3E9E1` |
| Warm surface | Soft Blush | `#F2DFDC` |
| Neutral surface | Warm Sand | `#E8E0D5` |

Recommended visual balance:

- 60 to 70 percent warm white and light neutral space
- 15 to 20 percent dark structure
- 10 to 15 percent pastel red and warm accents
- 5 to 10 percent green or another context-specific accent

Do not retain the old vivid-pink palette as the production brand system merely for continuity.

Do not use:

- neon or highly saturated colors
- large vivid-red fields
- bright primary red and green together
- uncontrolled multicolor gradients
- clinical blue-and-white healthcare styling
- black-and-gold luxury clichés
- pastel combinations that feel childish or excessively feminine
- low-contrast text placed on decorative pastel surfaces

All final text and interactive states must meet WCAG AA contrast.

## 4.3 Layout behavior

Use the latest approved editorial prototype as a compositional reference, not as a pixel-for-pixel template.

Required behavior:

- compact, proportionate hero rather than an oversized or screen-filling hero
- varied asymmetric compositions instead of repeated centered blocks
- numbered editorial capability lines instead of SaaS-style icon cards
- distinct `What We Do`, `For Our Partners`, and `For Our Readers` sections
- alternating image-and-copy relationships
- authentic people-centered photography
- magazine-style Health Articles section with one dominant feature
- sparse full-width photographic pauses for pacing
- generous whitespace with intentional section containment
- every image must visibly belong to its section
- no image may overlap or appear displaced into the next section at any breakpoint

## 4.4 Fluid ribbon

Implement a restrained dimensional ribbon or flowing form as Mari Media's distinctive visual behavior.

The ribbon may:

- guide the eye through open space
- connect related ideas
- shift its secondary color by context
- suggest flexibility, creativity, partnership, and transformation

The ribbon must not:

- recreate or replace the logo
- obscure text or controls
- cross semantic section boundaries in a confusing way
- create horizontal overflow
- become a decorative element repeated in every section
- cause layout shift
- remain animated when `prefers-reduced-motion` is enabled

## 4.5 Photography

Use real or convincingly photorealistic people and lived-in situations where imagery adds emotional truth or credibility.

Do not download or publish random stock photography without documented provenance and usage approval.

Before using any image, record:

- source or owner
- license or permission state
- intended page and section
- alt-text purpose
- whether the image is editorial, decorative, or commercial

Do not use generic staged handshakes, fake office teams, exaggerated medical imagery, or emotionally empty wellness stock.

## 4.6 Typography

Do not silently treat the current Poppins and Inter pairing as a permanent brand standard.

Typography must feel:

- modern
- confident
- premium
- creative
- young
- approachable
- highly readable in editorial and partner-facing contexts

Hierarchy should come from scale, weight, spacing, line length, and composition, not from extremely large hero text.

A serif may be explored only as a controlled editorial accent. Do not assume it should become the dominant brand font.

The final typography system requires side-by-side visual approval before it is applied across production pages.

---

# 5. Common Session Header

Paste this before every phase prompt.

```text
You are working on the Mari Media website repository.

Before doing anything:
1. Read every active file in `.cursor/rules/` that applies to this repository.
2. Treat `.cursor/rules/mari-media-website-compass.mdc` and `.cursor/rules/mari-media-project.mdc` as authoritative.
3. Inspect the current branch, working tree, package.json, lockfile, framework versions, routes, components, content architecture, assets, metadata, and environment conventions relevant to this phase.
4. Preserve unrelated work and report any uncommitted changes before editing.
5. Do not overwrite or weaken the permanent rules.
6. Do not implement work assigned to a later phase.
7. Do not install or upgrade dependencies unless the current requirement cannot be met safely with the existing stack. Explain the exact need before changing dependencies.
8. Do not invent facts, clients, results, testimonials, certifications, reviews, awards, audience size, partner logos, medical authority, team size, or response-time promises.
9. All Mari Media copy must sound natural, specific, warm, credible, calmly confident, and human. Do not use em dash characters.
10. Use US English.

Required phase workflow:
1. Restate the phase objective.
2. Summarize the current implementation relevant to the phase.
3. List assumptions, risks, and decisions that remain unresolved.
4. List the exact files you expect to create, modify, move, or remove.
5. Present a concise implementation plan.
6. Stop before implementation when the phase includes an explicit approval gate.
7. After implementation, run the relevant lint, type-check, test, and production-build commands defined by the repository.
8. Perform responsive, accessibility, SEO, performance, and security checks appropriate to the phase.
9. Summarize files changed, commands and results, remaining risks, manual checks, and the next approval gate.
10. Do not claim a check passed unless it was actually run successfully.

Use one ClickUp task, one branch, and one pull request for this phase. Normal work must branch from the latest `dev` and merge back to `dev` through a pull request.
```

---

# Phase 0: Compass Alignment and Current-State Audit

**Suggested task:** `Audit website against approved Compass`

**Suggested branch:** `chore/<MARIWEB-###>-compass-alignment-audit`

This phase is read-only. Do not modify application code, configuration, content, dependencies, external services, Vercel settings, or DNS.

## Phase 0 prompt

```text
Use the Common Session Header and perform a read-only audit of the current Mari Media repository and public implementation against the active Compass-aligned Cursor rules.

THIS PHASE IS READ-ONLY.
Do not edit files, install packages, create migrations, change external services, or deploy.

Inspect at minimum:
- current Git branch and working-tree status
- package.json, lockfile, Node requirement, Next.js, React, TypeScript, Tailwind, animation, and icon versions
- all active `.cursor/rules/` files and their scopes
- app routes, sitemap, robots, redirects, metadata, Open Graph, Twitter metadata, and JSON-LD
- root layout, header, navigation, mobile navigation, footer, and global CSS
- homepage sections and section order
- current color tokens, typography, type scale, spacing, radii, shadows, surfaces, and motion
- use of cards, grids, pills, icons, decorative elements, and reveal animations
- all homepage, blog hub, article, contact, and partnership copy
- existing photography and image provenance documentation
- the official logo implementation and performance cost
- blog/article content architecture and the published functional-medicine article
- existing forms and what actually happens on submission
- current preview, preproduction, and production indexing controls
- current tests, linting, type checking, build behavior, and accessibility support

Compare the current implementation with the active Compass rule and identify:
1. Correctly aligned elements to preserve.
2. Partially aligned elements to refine.
3. Direct conflicts that must be removed or replaced.
4. Missing public journeys and routes.
5. Missing trust, editorial, disclosure, policy, accessibility, SEO, security, and release requirements.
6. Visual debt, including generic startup patterns, repeated card grids, excessive pills, oversized headings, empty animated sections, or imagery without section ownership.
7. Content-positioning debt, especially where Mari Media is presented only as an affiliate/email service company rather than a parent digital media company.
8. Any current code or content that conflicts with the statement that health is the first proving ground, not the permanent identity.

Return the report in this exact structure:

A. Executive summary
B. Current route and component map
C. Current design-system inventory with exact token/font values
D. Current homepage section map
E. Current content and positioning summary
F. Compass compliance matrix: aligned / partial / conflict / missing
G. Assets and photography inventory with provenance status
H. Blog and article preservation requirements
I. SEO, accessibility, performance, security, and indexing risks
J. Recommended target architecture
K. Recommended phase plan, using the phases in this prompt pack
L. Exact files expected to change in Phase 1
M. Decisions JM must approve before Phase 1

Do not implement anything.
Stop after the audit.
```

## Phase 0 approval checkpoint

Approve or revise:

- files and components to preserve
- sections to retire or merge
- target route architecture
- asset-provenance gaps
- typography-review method
- whether a development-only design review route may be created in Phase 1
- exact ClickUp task ID for Phase 1

---

# Phase 0.1: Rule and Roadmap Reconciliation

**Suggested task:** `Reconcile Compass and project rule authority`

**Suggested branch:** `chore/<MARIWEB-###>-reconcile-compass-rules`

This phase is documentation and governance only. Do not modify application code, configuration, content, dependencies, external services, Vercel settings, or DNS.

## Phase 0.1 prompt

```text
Use the Common Session Header and the approved Phase 0 audit.

This is Phase 0.1 only: reconcile the permanent Mari Media rule files and record the governance decisions that follow from the Phase 0 audit.

THIS PHASE IS DOCUMENTATION AND GOVERNANCE ONLY.
Do not modify application code under app/, components/, lib/, types/, or public/.

1. Rule authority and reconciliation
Reconcile `.cursor/rules/mari-media-website-compass.mdc` and `.cursor/rules/mari-media-project.mdc`.

The approved company definition is:

"Mari Media is a digital media company that builds, grows, and operates a portfolio of trusted digital brands. It begins with health and wellness, but health is the first proving ground, not the full identity of the parent company."

Remove or revise any statement that defines Mari Media only as an affiliate marketing company, and remove or revise any statement that derives the website's general UI palette from the logo, since both are superseded by the approved Compass direction.

Use this authority boundary:
- `mari-media-website-compass.mdc` governs company positioning, brand strategy, voice, visual direction, public content, editorial standards, public website behavior, trust, accessibility, SEO, privacy, security, and commercial conduct.
- `mari-media-project.mdc` governs repository conventions, Git workflow, technology, code architecture, testing, and implementation practices.
- When the two rules overlap or conflict, `mari-media-website-compass.mdc` wins.
- Do not duplicate the entire Compass rule inside `mari-media-project.mdc`.

Report any further direct inconsistency found between the two files before editing beyond what this phase authorizes.

2. Prompt-pack location
Add the complete external overhaul prompt pack to `docs/website-overhaul/MARI-MEDIA-COMPASS-CURSOR-OVERHAUL-PROMPT-PACK.md`. Preserve its wording and phase numbering. It is an implementation roadmap and session guide, not a permanent Cursor rule. The Common Session Header is Section 5 of that document.

3. Color decision
Adopt the Compass palette (Section 4.2 of this pack; Section 19 of the Compass rule) as the approved working website palette. The old logo-derived vivid-pink family must not remain the general website UI palette. The current official logo retains its original colors; logo colors do not need to match every website semantic token. The Compass hex values are the approved starting direction. Final semantic pairings remain subject to accessibility, photography, and visual testing in Phase 1 before being permanently finalized.

4. Logo decision
Safe logo delivery optimization is approved, but visual modification is not.
- Keep the authoritative original SVG unchanged.
- Create a separate optimized web derivative.
- Preserve paths, shapes, gradients, masks, colors, proportions, viewBox, transparency, and aspect ratio.
- Do not redraw, trace, simplify, recolor, crop, rasterize, or reinterpret the logo.
- Perform visual comparison at multiple rendered sizes.
- Verify gradients, masks, IDs, and clipping references.
- Do not use the optimized file in production unless the rendered output is visually identical.
- Report original and optimized byte sizes.
The production logo swap belongs to Phase 2, not Phase 1.

5. Typography decision
Poppins and Inter are provisional and must not be documented as the permanent brand typography.
Phase 1 must compare:
- Poppins/Inter as the current baseline.
- Two contemporary sans-serif alternatives.
- An optional restrained serif accent only when useful.
Use identical content, widths, spacing, and scale limitations for a fair comparison.
Show navigation, compact hero, capability lines, article heading, body content, metadata, captions, buttons, form controls, and footer text at mobile, tablet, and desktop widths.
Provide a recommendation, but do not automatically choose or apply the winner.
Typography approval must happen at the end of Phase 1 before Phase 2 applies typography to production.

6. Authoritative phase plan
Use this sequence:

Phase 0: Compass Alignment and Current-State Audit
Phase 0.1: Rule and Roadmap Reconciliation
Phase 1: Visual Direction and Typography Approval Lab
Phase 2: Production Design System and Global Shell
Phase 3: Editorial Homepage Rebuild
Phase 4: Core Public Pages and Information Architecture
Phase 5: Health Articles Hub and Article Reading Experience
Phase 6: Inquiry Journeys, Policy Framework, and Consent Boundaries
Phase 7: SEO, Accessibility, Security, Performance, and Release Hardening

Supabase/admin publishing and advertising remain optional later phases.

7. Phase 1 scope
Phase 1 is limited to a development-only visual approval lab.

It may include:
- proposed semantic tokens
- typography comparisons
- ribbon comparisons
- shape, surface, radius, border, shadow, and button comparisons
- editorial image treatment
- a compact non-production homepage composition sample
- review-route noindex protection
- lint, type checking, tests, and build verification

It must not include:
- production homepage rebuilding
- production-wide token replacement
- production-wide font replacement
- broad copy rewriting
- public About, What We Do, Partner With Us, Contact, or policy routes
- production logo replacement
- general performance hardening
- unrelated SEO or release work

Public routes remain Phase 4.

If the audit confirms that dev or preprod environments are currently indexable, propose a separate urgent SEO task before Phase 1. Do not bundle that correction into the visual-validation branch.

After completing Phase 0.1, provide:
1. The exact files changed.
2. A before-and-after summary of both rule files.
3. Confirmation that no application code was changed.
4. The final authoritative phase map.
5. The location of the repository-hosted prompt pack.
6. Lint or validation results applicable to the changed files.
7. The proposed Phase 1 task and branch name.

Stop after Phase 0.1 and request approval before Phase 1.
```

## Phase 0.1 approval checkpoint

Approve or revise:

- the rule-authority boundary between the two permanent rule files
- removal of the affiliate-marketing-only and logo-derived-palette statements from `mari-media-project.mdc`
- adoption of the Compass palette as the approved working website palette
- the logo delivery-optimization constraints and the Phase 2 production-swap boundary
- the typography comparison protocol and its Phase 1 approval gate
- the authoritative phase sequence, Phase 0 through Phase 7
- the Phase 1 scope boundary (development-only visual approval lab; public routes remain Phase 4)
- whether dev/preprod indexability requires a separate urgent SEO task before Phase 1

---

# Phase 1: Visual Direction and Typography Approval Lab

**Suggested task:** `Validate Compass visual system`

**Suggested branch:** `feat/<MARIWEB-###>-compass-visual-validation`

This phase validates visual decisions before they are applied to production routes.

## Phase 1 prompt

```text
Use the Common Session Header and the approved Phase 0 audit.

This is Phase 1 only: visual direction and typography validation.

Do not rebuild the production homepage yet.
Do not alter the public article content.
Do not connect databases, forms, CRM, analytics, or external services.

Before implementation, confirm whether the repository already contains a safe development-only component showcase or design-review route. If not, propose the smallest implementation that can be excluded from the production sitemap and protected from indexing.

Create a development-only visual approval lab that compares the same representative Mari Media content across controlled alternatives.

The review lab must include:

1. Approved color system
- semantic tokens for canvas, elevated surface, text, secondary text, signature accent, strong accent, health accent, sage surface, blush surface, sand surface, borders, focus, success, warning, and error
- WCAG contrast results for every text and interactive pairing
- examples showing the recommended palette balance
- examples showing prohibited overuse

2. Typography comparison
- retain the current Poppins/Inter system as the baseline comparison only
- add two contemporary sans-serif alternatives that are compatible with the current Next.js font-loading approach
- optionally include one restrained serif accent treatment, but never as the dominant UI/body font
- render all options with identical content, widths, scale limits, and spacing so the comparison is fair
- include compact hero, navigation, capability list, article title, article body, metadata, captions, buttons, form fields, and footer text
- show desktop, tablet, and mobile specimens
- report font weights, variable-font support, loading impact, readability, and fallback behavior
- do not select the winner automatically

3. Shape and surface language
- compare appropriate corner radii, borders, dividers, and shadows
- demonstrate editorial image frames and section-contained compositions
- avoid making every component a rounded card
- avoid excessive pill-shaped controls

4. Fluid ribbon exploration
- create no more than three restrained variants
- use accessible decorative SVG or CSS
- ensure the ribbon is `aria-hidden` when decorative
- verify no text obstruction, horizontal overflow, layout shift, or reduced-motion violation
- do not modify or reinterpret the official logo

5. Homepage composition sample
- build one compact, non-production composition sample based on the approved prototype behavior
- include a compact hero, numbered capabilities, one partner section, one reader section, and one article feature
- use the same copy and image dimensions across typography alternatives
- do not build the final full homepage

6. Photography treatment
- use only existing approved/provenance-documented local images
- when no suitable approved image exists, use a clearly labeled internal review placeholder that cannot ship to production
- provide an asset-gap list for the final homepage

Required outputs:
- visual approval route or component showcase
- exact token proposal
- typography comparison table
- ribbon comparison table
- responsive screenshots or precise manual capture instructions at 375, 768, 1024, and 1440 pixels
- accessibility and performance observations
- asset-gap list
- recommendation with reasons, clearly separated from the approval decision

Run lint, type checking, and production build.
Confirm the review route is absent from the sitemap and noindex in any environment where it can be reached.

Stop and request JM's approval of:
- one typography system
- one ribbon direction
- one shape/surface direction
- final semantic token values
- approved image treatment

Do not proceed to Phase 2.
```

## Phase 1 approval checkpoint

Record the approved:

- heading font
- body/interface font
- optional editorial serif accent, if any
- type scale and maximum hero size
- ribbon variant
- radii, borders, shadows, and button shape
- final token values after contrast testing
- homepage asset requirements

---

# Phase 2: Production Design System and Global Shell

**Suggested task:** `Implement Compass design foundation`

**Suggested branch:** `feat/<MARIWEB-###>-compass-design-foundation`

## Phase 2 prompt

```text
Use the Common Session Header and the approved Phase 1 visual decisions.

This is Phase 2 only: apply the approved Compass design system and rebuild the global shell.

Do not rebuild all homepage sections yet.
Do not build dedicated public pages yet.
Do not change the published article's factual body copy.
Do not connect external systems.

Implement:

1. Semantic production tokens
- replace obsolete vivid-pink-first tokens with the approved warm-neutral, pastel-red, deep-red, muted-green, sage, blush, and sand system
- preserve accessible functional colors for focus, errors, warnings, and success
- keep tokens semantic rather than naming UI components by raw color
- document permitted contexts and prohibited combinations

2. Approved typography
- implement only the typography system explicitly approved after Phase 1
- use `next/font` or the repository's approved local-font approach
- define a fluid but restrained type scale
- cap hero display size so hierarchy does not depend on oversized text
- define comfortable body sizes, line heights, paragraph spacing, article measure, captions, metadata, labels, and UI text

3. Foundations
Create or refine small reusable primitives as needed:
- Container
- Section
- SectionHeading
- Eyebrow
- Button and LinkButton variants
- TextLink
- EditorialDivider
- ResponsiveImage or ImageFrame
- FluidRibbon
- VisuallyHidden
- SkipLink
- accessible focus conventions

Do not create a separate design-system package.
Do not add abstractions that are not used by the current phase or the approved next phase.

4. Global background, spacing, and motion
- use warm white as the primary canvas
- use pure white for selected elevated surfaces
- use blush, sage, and sand as controlled contextual surfaces
- use dark structure through text, dividers, and limited strong surfaces
- maintain generous section spacing without creating empty bands
- remove or reduce reveal animations that can leave content invisible before scrolling
- use motion only when it improves comprehension
- respect `prefers-reduced-motion`

5. Header and navigation
The public architecture must support:
- Home
- About
- What We Do
- Health Articles
- Partner With Us
- Contact

Implementation guidance:
- the logo may serve as the Home link
- emphasize `Partner With Us` as the primary business action
- keep `Health Articles` easy to reach from every public route
- use real links, not route-fragile scroll buttons
- desktop and mobile menus must expose equivalent destinations
- mobile navigation must support keyboard use, Escape, focus management, correct labels, and route-change closing
- keep the header compact so it does not dominate the first screen

6. Footer shell
- position Mari Media as a digital media company, not only an affiliate/email service vendor
- include only working internal links
- omit social icons until real approved profiles exist
- prepare a clear policy-link area without adding dead destinations
- retain the business email path

7. Logo handling
- preserve the official mark and aspect ratio
- do not redraw, recolor, trace, crop, or distort it
- optimize delivery only when the visible result remains identical and the source asset is authoritative
- if optimization cannot be verified, preserve the current asset and record the performance risk

Verify:
- 320, 375, 768, 1024, 1280, and 1440 pixel widths
- no horizontal overflow
- no header collision or crowded tablet navigation
- WCAG AA contrast
- visible focus states
- reduced motion
- no hydration or console warnings
- lint, type check, tests if present, and production build

End with the files changed, token mapping, typography implementation, removed legacy behaviors, test results, manual checks, and Phase 3 approval request.
Stop after Phase 2.
```

---

# Phase 3: Editorial Homepage Rebuild

**Suggested task:** `Rebuild Compass-aligned homepage`

**Suggested branch:** `feat/<MARIWEB-###>-editorial-homepage-overhaul`

## Phase 3 prompt

```text
Use the Common Session Header and the approved Phase 2 production design system.

This is Phase 3 only: rebuild the homepage around the approved Compass positioning and composition.

Do not build dedicated public pages yet, except links may point to routes already approved and available.
Do not create a database, admin area, contact backend, CRM integration, or analytics experiment.

PRIMARY OUTCOME
The homepage must establish:
- what Mari Media is
- whom it serves
- why it is credible
- what readers can explore
- what suitable partners can do next

It must balance Mari Media's parent-company story with the immediate usefulness of health content. It must not make health the permanent limit of the company.

Build the homepage in this narrative order unless the approved Phase 0 plan documents a better equivalent:

1. Compact editorial hero
- communicate Mari Media as a digital media company that creates useful content, trusted audience relationships, and thoughtful connections with credible partners
- keep health visible as the current first focus without defining the whole company by health events
- primary CTA: `Partner With Us`
- secondary reader action: `Explore Health Articles`
- use authentic human imagery when an approved asset exists
- use the approved ribbon sparingly to create movement
- do not use a full-screen headline, generic growth dashboard, floating marketing icons, fake metrics, or unsupported outcome claims
- do not mention GoHighLevel in the hero

2. What We Do
- present capabilities as numbered editorial service lines, not a three-card or six-card SaaS grid
- use concise, outcome-led descriptions
- capabilities may include editorial content, audience development, email marketing, affiliate and event promotion, landing experiences, campaign operations, and performance reporting when factually supported
- do not imply medical, legal, financial, institutional, or specialist authority Mari Media does not hold

3. For Our Partners
- make this a distinct self-contained section
- explain suitable partner types, the value exchange, responsible promotion, audience relevance, transparency, and professional execution
- use a clearly associated image
- direct commercial visitors to `Partner With Us`
- do not promise reach, conversions, acceptance, or response times

4. For Our Readers
- make this a distinct self-contained section
- explain the value readers receive: clarity, context, useful resources, respectful guidance, and carefully considered next steps
- state or imply the commercial model transparently without turning the section into a disclosure wall
- use a clearly associated image
- direct readers to Health Articles

5. Credibility through specificity
- show how trust is earned through authorship, dates, sources, disclosures, careful claims, and relevant next steps
- do not use fake trust badges, invented memberships, placeholder partner logos, testimonials, or decorative proof

6. Optional photographic pause
- use one full-width photographic pause only when an approved image meaningfully improves pacing
- keep text concise and readable
- do not place critical information only inside the image

7. Health Articles editorial spread
- create a magazine-style composition
- use one dominant feature article
- render supporting stories only when real published articles exist
- with only one article, do not show empty cards, fake posts, `Coming soon` cards, or repeated copies of the same article
- show meaningful summary, category, date, and reading time
- preserve the existing functional-medicine URL
- include a clear route to all Health Articles

8. Compact company or founder context
- include only the amount of founder/company context needed to establish human ownership and credibility
- keep the fuller story for the About page
- use accurate facts about JM and Kristine without exaggeration

9. Calm final action
- end with one specific partner path and one general-contact path
- avoid repeated CTAs, urgency, countdowns, response-time promises, and inflated language

CONTENT IMPLEMENTATION
- place editable homepage copy in a clearly named typed content module
- do not scatter final copy across many presentational components
- preserve factual meaning, but no existing homepage sentence or section is protected from revision
- remove generic AI-sounding language, corporate fog, and repeated claims
- do not use em dash characters
- avoid presenting future capabilities as current services
- remove decorative `Coming soon` service lists unless there is a real approved reason to keep them

COMPOSITION REQUIREMENTS
- varied asymmetric layout on desktop
- deliberate, readable stacking on mobile
- alternate image and copy alignment without making every section identical
- maintain semantic section ownership
- no image overlap into neighboring sections at any tested breakpoint
- no uncontrolled absolute positioning
- no large blank bands caused by reveal animation
- no excessive card grids or icon circles
- no horizontal overflow

IMAGE REQUIREMENTS
- use only approved, provenance-documented assets
- update or create the asset manifest as needed
- use `next/image`, correct `sizes`, stable dimensions, and meaningful alt text
- decorative ribbon and purely decorative imagery must be hidden appropriately from assistive technology

SEO AND ACCESSIBILITY
- one logical H1
- correct H2/H3 hierarchy
- semantic landmarks
- keyboard-accessible CTAs and links
- meaningful anchor text
- homepage metadata aligned with the parent digital-media positioning
- Organization structured data must remain accurate and free of unsupported claims

Verify at 320, 375, 768, 1024, 1280, and 1440 pixels.
Run lint, type checking, tests if present, and production build.

End with:
- final section map
- copy changes
- components created, reused, merged, or retired
- images used and provenance status
- responsive and accessibility findings
- unresolved copy or asset risks
- manual visual-review instructions
- Phase 4 approval request

Stop after Phase 3.
```

## Phase 3 visual approval checkpoint

Review the homepage at minimum on:

- 375 px mobile
- 768 px tablet
- 1024 px small desktop
- 1440 px desktop

Confirm:

- the hero is compact
- the parent-company identity is clear
- health is visible but not presented as the permanent limit
- What We Do, Partners, and Readers are visibly distinct
- the ribbon is restrained
- images belong to their sections
- the page does not resemble a SaaS template, hospital, generic wellness site, or conventional agency
- typography remains readable and premium
- there are no empty or duplicated article cards

---

# Phase 4: Core Public Pages and Information Architecture

**Suggested task:** `Build Compass public journeys`

**Suggested branch:** `feat/<MARIWEB-###>-core-public-pages`

## Phase 4 prompt

```text
Use the Common Session Header and the approved Phase 3 homepage.

This is Phase 4 only: implement the core public routes and consistent information architecture.

Build or refine:
- `/about`
- `/what-we-do`
- `/partner-with-us`
- `/contact`

Preserve `/blog` and `/blog/[slug]` for Phase 5.
Do not change the canonical URL of the existing functional-medicine article.
Do not connect a contact or CRM backend in this phase unless a separately approved secure implementation already exists.

1. About page
The page must:
- explain why JM and Kristine created Mari Media
- explain what each founder contributes accurately and without exaggeration
- state that Mari Media is a digital media company building trusted digital brands
- state that health and wellness is the initial proving ground, not the permanent identity
- acknowledge affiliate marketing as part of the commercial model without allowing it to define the company
- connect the founders' desire for greater control of time and scalable work with a reader-facing commitment to trust, usefulness, honesty, and care
- avoid invented scale, clients, awards, institutional authority, or team size

Use a human editorial composition rather than biography cards, corporate timelines, or fake milestone counters.

2. What We Do page
Describe capabilities through outcomes and actual operating strengths.
Use numbered editorial service lines instead of SaaS icon cards.
Possible capability groups, when factually supported:
- Content and editorial
- Audience development
- Email marketing
- Affiliate and event promotion
- Landing experiences
- Campaign operations
- Performance reporting

For every capability:
- distinguish current ability from future intention
- explain who it helps and what responsible execution looks like
- state material limits honestly
- avoid guaranteed results
- direct suitable commercial visitors to Partner With Us

3. Partner With Us page
Explain:
- suitable partner types and opportunities
- audience and editorial fit
- value exchange
- responsible promotion standards
- disclosure expectations
- what Mari Media reviews before accepting an opportunity
- what happens after an inquiry

Do not promise acceptance, reach, conversions, or response times.
Do not silently subscribe inquiry submitters to marketing.
Warn users not to send confidential, health, financial, password, identity-document, or credential information.

Until the functional inquiry phase:
- use a clear business email or non-deceptive inquiry path
- do not display a form that pretends to submit when it does not

4. Contact page
Keep general contact visibly distinct from partnership inquiry.
Provide clear categories such as:
- reader feedback
- corrections
- accessibility
- privacy
- media
- website problems
- general questions

Provide:
- dependable business email path
- sensitive-information warning
- link to Partner With Us for commercial opportunities

Do not imply newsletter consent.
Do not promise a response time.

5. Navigation and internal links
- update all global navigation and footer links to real routes
- keep Health Articles easy to reach
- use descriptive link text
- prevent duplicate or competing contact journeys
- add breadcrumbs where useful

6. Metadata and structured data
- unique page purpose, title, description, canonical URL, and internal links
- Organization or AboutPage structured data only when accurate
- do not add unsupported Person credentials or claims

7. Content management
- keep public-page copy in typed, clearly named content modules when practical
- use shared components without forcing every page into the same layout
- do not use em dash characters

Verify responsive behavior, keyboard access, contrast, heading order, metadata, internal links, lint, type checking, tests if present, and production build.

End with route map, copy summary, files changed, deferred form behavior, and Phase 5 approval request.
Stop after Phase 4.
```

---

# Phase 5: Health Articles Hub and Article Reading Experience

**Suggested task:** `Rebuild editorial article experience`

**Suggested branch:** `refactor/<MARIWEB-###>-editorial-article-experience`

## Phase 5 prompt

```text
Use the Common Session Header and the approved Phase 4 public architecture.

This is Phase 5 only: rebuild the Health Articles hub and article reading experience.

Preserve:
- `/blog`
- `/blog/what-is-functional-medicine`
- the published article's factual content
- evidence qualifications
- references
- disclaimer
- current useful images and alt text unless a verified improvement is approved
- correct canonical, Open Graph, Twitter, BlogPosting, and BreadcrumbList behavior

Do not migrate to Supabase in this phase.
Use the current typed repository content architecture.

1. Health Articles hub
The hub must behave like an editorial destination, not an undifferentiated card archive.

Implement:
- clear editorial introduction
- one dominant feature article
- supporting stories only when real published stories exist
- category paths only when real categories have useful content
- meaningful summaries
- visible publication or update dates
- reading time
- clear article imagery
- no fake content, empty placeholders, repeated article cards, decorative search, or nonfunctional filters

Search, filters, and pagination must remain absent until content volume makes them useful.
Newsletter or lead-magnet invitations must not interrupt discovery and must not be displayed unless their consent and delivery behavior is real.

2. Individual article template
Every article must support:
- breadcrumbs
- category
- one H1
- useful introduction or dek
- real author or editorial responsibility
- publication date
- update date when materially updated
- reading time
- relevant disclosure
- hero image with meaningful alt text
- comfortable reading measure
- strong H2/H3 hierarchy
- captions when needed
- table of contents only for articles long enough to benefit
- readable references
- health-information disclaimer
- affiliate disclosure where relevant
- related articles only when genuinely related and published
- correction/update note when applicable

Do not invent a medical reviewer, fact checker, clinician, author credential, or review process.

3. Health-content requirements
- distinguish education from personal medical advice
- preserve cautious claims and source qualifications
- avoid diagnosis, fear, guaranteed outcomes, and certainty beyond evidence
- make external source names and destinations understandable
- retain a clear distinction between association and causation where relevant
- do not replace necessary conventional care with functional-medicine claims

4. Calls to action
- use restrained mid-article and end-of-article invitations
- do not interrupt comprehension
- do not use sticky conversion controls, popups, fake urgency, or repeated partner promotion
- with no real newsletter or lead magnet, omit those invitations cleanly

5. Structured data and SEO
- unique metadata
- canonical URL
- correct article dates
- accurate author/publisher fields
- BlogPosting or Article schema only when supported by visible content
- BreadcrumbList
- useful internal links
- sitemap generated from published content
- no draft indexing

6. Corrections and traceability
- add content-model support for material update notes or correction notes when appropriate
- do not create a public claim that a correction process exists unless the corresponding policy and operating path are implemented or clearly staged

7. Visual system
- apply approved editorial typography, palette, image framing, dividers, callouts, checklists, references, and disclosures
- avoid excessive rounded cards inside the reading column
- keep decorative ribbon use minimal or absent in long-form reading

Verify:
- semantic heading hierarchy
- reading width and line length at all breakpoints
- keyboard and screen-reader link context
- images and layout stability
- external-link safety
- structured-data validity
- sitemap inclusion
- no regression to the published article
- lint, type checking, tests if present, and production build

End with before/after route behavior, preserved content confirmation, content-model changes, structured-data summary, manual article QA checklist, and Phase 6 approval request.
Stop after Phase 5.
```

---

# Phase 6: Inquiry Journeys, Policy Framework, and Consent Boundaries

**Suggested task:** `Implement trusted inquiry journeys`

**Suggested branch:** `feat/<MARIWEB-###>-trusted-inquiry-journeys`

This phase contains an external-system approval gate. Cursor must not silently choose or connect a CRM, email service, database, CAPTCHA provider, or analytics tool.

## Phase 6 prompt

```text
Use the Common Session Header and the approved Phase 5 site.

This is Phase 6 only: implement trustworthy general-contact and partnership-inquiry experiences, then establish the approved public-policy framework.

Before implementation, inspect the repository and environment documentation for an already approved contact destination.

If no approved secure destination exists, STOP after producing:
- an inquiry data-flow proposal
- field list
- validation rules
- privacy and consent boundaries
- anti-spam options
- retention questions
- environment variables required
- operational owner and failure-handling requirements
- recommendation with reasons

Do not choose or connect an external system without approval.

A. General contact journey
Keep general contact distinct from partnership inquiry.
Suggested categories:
- reader feedback
- correction request
- accessibility issue
- privacy question
- media inquiry
- website problem
- other general question

Collect only what is needed.
Do not request sensitive health, financial, password, credential, government-ID, or payment information.
Display a clear warning not to send sensitive information.

B. Partner With Us journey
Collect only information needed to assess fit, potentially including:
- name
- work email
- company or organization
- website or opportunity URL
- partnership type
- audience or topic
- launch or event timing when relevant
- short description
- requested support

Do not force general contacts through partnership-specific questions.
Do not promise acceptance, reach, conversions, or response time.

C. Consent and privacy boundaries
- form-processing acknowledgment is required
- newsletter consent is optional, separate, unchecked by default, and absent unless a real newsletter workflow exists
- a partnership inquiry is not newsletter consent
- lead-magnet delivery must not be bundled deceptively with unrelated marketing permission
- do not place imported contacts into confirmed-subscriber workflows
- do not store the same personal inquiry data in multiple systems unless JM explicitly approves the purpose and retention model

D. Technical implementation after approval
- server-side submission only
- server-side schema validation
- accessible client feedback without trusting client validation
- rate limiting or an approved equivalent control
- honeypot or approved anti-spam control
- output encoding and safe logging
- no secrets in client code
- no raw personal messages in logs
- clear success confirmation
- clear recoverable error state
- delivery-failure handling
- no fake success
- no console-only or browser-alert submission
- ownership and escalation documentation

E. Public-policy framework
The initial public set should cover:
- Privacy
- Terms
- Affiliate Disclosure
- Editorial Standards
- Health Disclaimer
- Accessibility
- Corrections
- Contact information

Do not invent legal obligations, entity details, addresses, data practices, vendors, retention periods, governing law, or regulatory claims.

Before drafting final public policy copy:
1. Inventory actual current practices and data flows.
2. List every missing business/legal decision.
3. Create a content brief for each policy.
4. Identify which sections require legal or specialist review.
5. Stop for approval when facts are missing.

When approved copy is supplied or approved for drafting:
- use plain language
- show owner and last-reviewed date
- link policies from relevant contexts, not only the footer
- place affiliate disclosures where commercial relationships matter
- keep health disclaimer visible where health information is consumed
- make corrections easy to request

F. Verification
- validation and error behavior
- keyboard and screen-reader form use
- rate-limit behavior
- spam-control behavior
- no PII in logs
- no unintended newsletter subscription
- no duplicate storage without approval
- secure environment-variable handling
- policy routes and links
- lint, type checking, tests, and production build

End with the approved data flow, system ownership, environment variables, files changed, test evidence, policy-review status, operational handoff, and Phase 7 approval request.
Stop after Phase 6.
```

---

# Phase 7: SEO, Accessibility, Security, Performance, and Release Hardening

**Suggested task:** `Harden Compass website release`

**Suggested branch:** `seo/<MARIWEB-###>-compass-release-hardening`

## Phase 7 prompt

```text
Use the Common Session Header and the approved Phase 6 implementation.

This is Phase 7 only: complete preproduction hardening and release validation.

Do not add new product features.
Do not redesign approved pages unless a defect blocks compliance or release.

1. SEO and discovery
Audit every indexable route for:
- unique purpose
- title
- description
- canonical URL
- heading hierarchy
- useful internal links
- Open Graph and Twitter metadata
- appropriate structured data
- correct status codes
- sitemap inclusion
- robots behavior

Verify:
- `/`
- `/about`
- `/what-we-do`
- `/partner-with-us`
- `/contact`
- `/blog`
- every published article
- every approved public-policy route

Preserve the canonical functional-medicine article URL.
Do not keyword-stuff or distort copy for rankings.

2. Preview and preproduction indexing controls
- production may be indexable according to approved robots rules
- dev, preview, and preproduction environments must not compete with production
- configure noindex and appropriate access controls for non-production environments
- verify canonical URLs do not point to preview domains
- verify sitemaps are not exposed as indexable production competitors
- document Vercel environment behavior and manual checks

3. Accessibility
Test to WCAG 2.2 AA-conscious standards:
- keyboard-only operation
- skip link
- focus order and visibility
- mobile-menu behavior
- landmarks
- heading hierarchy
- labels and instructions
- validation and error announcements
- contrast
- text resizing
- zoom
- reduced motion
- image alt text
- link purpose
- touch targets
- no content loss at reflow

Use automated tools as support, not as the only review.
Record manual findings and fixes.

4. Security
Review:
- security headers
- Content Security Policy appropriate to actual dependencies
- frame protections
- referrer policy
- permissions policy
- HTTPS assumptions
- secrets and environment variables
- client-bundle exposure
- server-side authorization where applicable
- form abuse controls
- dependency audit
- lockfile integrity
- unsafe redirects
- external-link attributes
- error handling and logging
- personal-data exposure
- source maps and debugging output

Do not apply a copied CSP that breaks Next.js or required services. Build it from actual resource use and test it.

5. Performance
Measure and improve without damaging editorial quality:
- LCP
- CLS
- INP-related interaction risks
- image sizing and priority
- font loading and fallback behavior
- logo payload
- unnecessary client components
- animation cost
- unused packages
- bundle size
- long pages and hydration
- caching and static generation

Do not remove useful content merely to improve a score.
Do not claim performance improvements without before-and-after evidence.

6. Content and trust QA
Review visible copy for:
- parent digital-media positioning
- health as a beachhead, not the permanent limit
- accurate founder and capability statements
- no fake proof
- no hidden commercial intent
- no unsupported medical claims
- no generated or generic voice
- no em dash characters
- correct dates, authorship, sources, disclosures, and policy links

7. Release verification
Run all repository quality commands.
At minimum, when available:
- lint
- type check
- unit/integration tests
- production build
- route smoke tests
- structured-data checks
- accessibility checks
- dependency audit

Create a release checklist covering:
- dev verification
- preprod verification
- production environment variables
- rollback point
- deployment owner
- post-deploy smoke test
- sitemap and robots verification
- Search Console live-URL and indexing checks when appropriate
- monitoring and incident owner

Follow the approved flow:

feature branch -> dev -> preprod -> main

Do not deploy directly to main from the feature branch.
Do not modify production DNS unless separately approved.

End with:
- compliance summary
- defects fixed
- unresolved risks
- commands and results
- before-and-after performance evidence
- accessibility manual-test record
- security-header summary
- indexable-route inventory
- preprod acceptance checklist
- production release checklist
- rollback instructions

Stop after Phase 7 and request final release approval.
```

---

# Optional Phase 8: Supabase Content and Admin Publishing

Do not begin this phase merely because Supabase appears in previous plans. Start only after the public design, article model, editorial workflow, roles, security model, and operating need are approved.

**Suggested task:** `Build secure editorial publishing`

**Suggested branch:** `feat/<MARIWEB-###>-secure-editorial-publishing`

## Optional Phase 8 prompt

```text
Use the Common Session Header and the approved production website.

This is an optional future phase. Do not implement until JM has explicitly approved:
- Supabase project and ownership
- environment strategy for local, dev, preprod, and production
- content schema
- administrator and editor roles
- publish/review authority
- media requirements
- backup expectations
- audit requirements
- migration plan from typed repository content

First produce the schema, RLS policies, migration plan, rollback plan, environment-variable list, role matrix, and threat review.
Stop for approval before remote migrations.

After approval, implement the smallest secure publishing system needed for:
- article drafts
- review status
- publication
- updates and correction notes
- media selection/upload
- private preview
- published-content queries

Requirements:
- no public signup
- server-side authorization for every protected route and action
- service-role key never exposed to the browser
- RLS enabled and tested
- drafts never public or indexable
- content sanitized and validated
- unique slugs
- published article URLs preserved
- audit trail for material publication changes
- reliable migration and rollback

Do not build a page builder, workflow engine, analytics dashboard, email editor, public accounts, or complex enterprise permissions.
```

---

# Optional Phase 9: Advertising and Sponsored Placements

Start only when real advertisers, affiliate creative, placement rules, and disclosure requirements exist.

**Suggested task:** `Activate responsible ad placements`

**Suggested branch:** `feat/<MARIWEB-###>-responsible-ad-placements`

## Optional Phase 9 prompt

```text
Use the Common Session Header and the approved advertising requirements.

This is an optional future phase.

Before implementation, present the content model, placement map, disclosure behavior, destination validation, scheduling rules, privacy impact, and responsive behavior. Stop for approval before migration or activation.

Requirements:
- ads and sponsored placements must be clearly labeled
- they must never imitate editorial recommendations
- no popups, interstitials, autoplay, or sticky overlays
- desktop side rails only where the editorial layout supports them
- no mobile side-rail ads
- when no eligible ad exists, the ad component returns null and leaves no blank box, label, column, or reserved space
- active ads must not cause layout shift
- destinations must be validated
- inactive, expired, or future ads must not render
- do not add click tracking without an approved analytics and privacy requirement
- editorial comprehension and accessibility take priority over revenue placement
```

---

# 6. Phase Completion Standard

A phase is not complete merely because the page looks acceptable on one desktop screen.

Each phase must finish with:

- exact files changed
- exact files removed or moved
- decisions made
- decisions still pending
- commands run and actual results
- responsive checks
- accessibility checks
- SEO checks where applicable
- performance checks where applicable
- security checks where applicable
- manual verification steps
- screenshots or precise capture instructions when visual approval is required
- known limitations
- rollback considerations
- clear request for approval before the next phase

Cursor must stop after the current phase.

---

# 7. Non-negotiable Release Guardrails

Do not release an implementation that:

- presents Mari Media only as an affiliate/email marketing vendor
- makes health the permanent parent-company identity
- uses the old vivid-pink system as the final Compass palette
- locks a new typography system without visual approval
- uses an oversized Paradise Media-style hero
- copies Paradise Media, HealthMeans, or the reference prototype's identity
- uses generic AI-generated startup layouts
- repeats centered headings and identical card grids throughout the homepage
- lets images overlap or lose their owning section
- uses fake client logos, testimonials, awards, statistics, audience size, or results
- implies medical authority Mari Media does not possess
- hides affiliate or commercial intent
- treats inquiry consent as newsletter consent
- uses a fake or nonfunctional contact form
- exposes secrets in client code
- allows preview or preproduction pages to compete with production in search
- breaks the functional-medicine article URL or removes its evidence, references, disclaimer, or structured-data foundation
- uses em dash characters in Mari Media copy
- publishes unlicensed or undocumented imagery
- uses decorative motion that overrides reduced-motion preferences
- ships with horizontal overflow, inaccessible navigation, invisible focus, console errors, hydration warnings, TypeScript errors, failed builds, or known broken links
