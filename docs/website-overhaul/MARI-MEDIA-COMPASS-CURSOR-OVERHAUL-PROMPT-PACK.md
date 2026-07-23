# Mari Media Compass Cursor Overhaul — Prompt Pack

> **Status: incomplete capture, pending source document.**
>
> This file is the intended repository home for the external "Mari Media Compass Cursor Overhaul" prompt pack (implementation roadmap and session guide). The full document, including its numbered sections and Section 5 (the Common Session Header), has not yet been pasted or attached into this Cursor session, so it cannot be reproduced here verbatim.
>
> This file currently contains only the content JM has explicitly dictated inside the Cursor session so far (the authoritative phase plan and the Phase 0.1 governance decisions). It is **not** the complete prompt pack. To finish this file:
>
> 1. Paste or attach the full external prompt pack document (all sections, in original wording) into a Cursor session.
> 2. Ask Cursor to replace this file's contents with the verbatim document, preserving its original wording, section numbers, and phase numbering.
> 3. Confirm Section 5 (Common Session Header) is reproduced exactly, since other sessions will rely on it.
>
> This document is an implementation roadmap and session guide. It is **not** a Cursor rule and carries no rule authority. `mari-media-website-compass.mdc` remains authoritative for brand, editorial, UX, SEO, accessibility, security, and trust standards; if anything here ever appears to conflict with that rule, the rule wins and the conflict should be raised explicitly rather than resolved silently.

## Authoritative phase plan

- Phase 0: Compass Alignment and Current-State Audit
- Phase 0.1: Rule and Roadmap Reconciliation
- Phase 1: Visual Direction and Typography Approval Lab
- Phase 2: Production Design System and Global Shell
- Phase 3: Editorial Homepage Rebuild
- Phase 4: Core Public Pages and Information Architecture
- Phase 5: Health Articles Hub and Article Reading Experience
- Phase 6: Inquiry Journeys, Policy Framework, and Consent Boundaries
- Phase 7: SEO, Accessibility, Security, Performance, and Release Hardening

Supabase-backed admin publishing and advertising remain optional later phases, outside this numbered sequence.

## Phase 0.1 governance decisions (JM-approved)

Recorded here for traceability; the durable versions of these decisions live in `.cursor/rules/mari-media-website-compass.mdc` (Sections 19, 23, 55, 56, 57, 58) and `.cursor/rules/mari-media-project.mdc` (Rule authority and scope; Business and positioning; Brand and content).

1. **Rule authority and reconciliation.** `mari-media-website-compass.mdc` governs company positioning, brand strategy, voice, visual direction, public content, editorial standards, public website behavior, trust, accessibility, SEO, privacy, security, and commercial conduct. `mari-media-project.mdc` governs repository conventions, Git workflow, technology, code architecture, testing, and implementation practices. Where the two overlap or conflict, the Compass rule wins. The two files must not duplicate each other's full content.
2. **Prompt-pack location.** The complete external overhaul prompt pack belongs at `docs/website-overhaul/MARI-MEDIA-COMPASS-CURSOR-OVERHAUL-PROMPT-PACK.md`, preserving its original wording and phase numbering. It is a roadmap/session guide, not a permanent Cursor rule. The Common Session Header is Section 5 of that document.
3. **Color decision.** The Compass palette (Warm White `#FAF8F5`, Pure White `#FFFFFF`, Soft Black `#211F1D`, Warm Charcoal `#5E5955`, Pastel Red `#D9857A`, Deep Red `#8F403B`, Muted Green `#718774`, Soft Sage `#E3E9E1`, Soft Blush `#F2DFDC`, Warm Sand `#E8E0D5`) is adopted as the approved working website palette. The old `#CA2D4F` logo-derived family must not remain the general website UI palette. The official logo keeps its own original colors and does not need to match every website semantic token. These hex values are the approved starting direction; final semantic pairings remain subject to accessibility, photography, and visual testing in Phase 1 before being permanently finalized.
4. **Logo decision.** Safe logo delivery optimization is approved; visual modification is not. The authoritative original SVG stays unchanged; a separate optimized web derivative may be produced, preserving paths, shapes, gradients, masks, colors, proportions, viewBox, transparency, and aspect ratio. Visual comparison at multiple rendered sizes is required, along with verification of gradients, masks, IDs, and clipping references. The optimized file must not be used in production unless its rendered output is visually identical to the original, and original/optimized byte sizes must be reported. The production logo swap belongs to Phase 2, not Phase 1.
5. **Typography decision.** Poppins and Inter are provisional and must not be documented as permanent brand typography. Phase 1 must compare the current baseline against two contemporary sans-serif alternatives and an optional restrained serif accent, using identical content, widths, spacing, and scale limitations, shown across navigation, a compact hero, capability lines, an article heading, body content, metadata, captions, buttons, form controls, and footer text at mobile, tablet, and desktop widths. A recommendation is required, but the winner is not automatically applied. Typography approval happens at the end of Phase 1, before Phase 2 applies typography to production.
6. **Authoritative phase plan.** See above.
7. **Phase 1 scope.** Phase 1 is a development-only visual approval lab. In scope: proposed semantic tokens, typography comparisons, ribbon comparisons, shape/surface/radius/border/shadow/button comparisons, editorial image treatment, a compact non-production homepage composition sample, review-route noindex protection, and lint/type-check/test/build verification. Out of scope: production homepage rebuilding, production-wide token or font replacement, broad copy rewriting, public About/What We Do/Partner With Us/Contact/policy routes, production logo replacement, general performance hardening, and unrelated SEO or release work. Public routes remain Phase 4. If dev or preprod is found to be indexable, that correction is a separate urgent SEO task, not bundled into the visual-validation branch.
