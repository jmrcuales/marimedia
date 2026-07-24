/**
 * Mari Media image-role specification (MARIWEB-010).
 *
 * Roles describe how an image is used, not which file it is. Components
 * should pick a role, then apply the recommended ratio, sizes, and focal
 * behavior. Do not invent roles ad hoc in presentational components.
 */

/** Matches `ImageFrame` ratios without importing the UI module into `lib/`. */
export type ImageRoleRatio = "square" | "portrait" | "landscape" | "wide";

export type ImageRoleId =
  | "hero-support"
  | "editorial-principle"
  | "service-process"
  | "reader-focus"
  | "featured-article"
  | "article-header"
  | "article-inline"
  | "atmospheric"
  | "founder"
  | "partner";

export interface ImageRoleSpec {
  id: ImageRoleId;
  label: string;
  purpose: string;
  /** Preferred `ImageFrame` ratio when a framed crop is used. */
  preferredRatio: ImageRoleRatio;
  /** Intrinsic source orientation guidance for art direction. */
  sourceOrientation: "portrait" | "landscape" | "either";
  /** Minimum long-edge pixels for a sharp 2x display. */
  minLongEdgePx: number;
  /** Default focal guidance when no per-asset focal point is authored. */
  defaultFocalGuidance: string;
  /** Recommended `sizes` attribute for `next/image`. */
  sizes: string;
  /** Whether this role may use `priority` (above-the-fold only). */
  mayUsePriority: boolean;
  /** Mobile behavior notes for art direction and QA. */
  mobileBehavior: string;
  /** Alt-text expectation for authors. */
  altExpectation: string;
}

export const imageRoles: Record<ImageRoleId, ImageRoleSpec> = {
  "hero-support": {
    id: "hero-support",
    label: "Hero support image",
    purpose:
      "Supports the compact homepage hero with human warmth and editorial context without competing with the brand promise.",
    preferredRatio: "portrait",
    sourceOrientation: "portrait",
    minLongEdgePx: 1600,
    defaultFocalGuidance: "Eyes / primary subject in the upper third; leave calm negative space toward the copy side.",
    sizes: "(min-width: 1440px) 45vw, (min-width: 1024px) 40vw, 100vw",
    mayUsePriority: true,
    mobileBehavior: "May hide below lg when the layout is copy-led; if shown, stack below copy and preserve focal point.",
    altExpectation: "Describe the people and setting briefly; do not restate the headline.",
  },
  "editorial-principle": {
    id: "editorial-principle",
    label: "Editorial principle image",
    purpose: "Optional visual evidence for trust or operating-standard sections. Prefer whitespace over filler.",
    preferredRatio: "landscape",
    sourceOrientation: "landscape",
    minLongEdgePx: 1600,
    defaultFocalGuidance: "Off-center subject with readable environmental context.",
    sizes: "(min-width: 1024px) 40vw, 100vw",
    mayUsePriority: false,
    mobileBehavior: "Stack below copy; do not force a side-by-side crop.",
    altExpectation: "Describe the activity that supports the principle, not abstract brand adjectives.",
  },
  "service-process": {
    id: "service-process",
    label: "Service or process image",
    purpose: "Shows working context for capabilities or partnership process without SaaS icon language.",
    preferredRatio: "landscape",
    sourceOrientation: "landscape",
    minLongEdgePx: 1600,
    defaultFocalGuidance: "Hands, screens, or conversation mid-action; avoid posed camera stares.",
    sizes: "(min-width: 1024px) 40vw, 100vw",
    mayUsePriority: false,
    mobileBehavior: "Full-width under copy; keep focal subject clear at 375px.",
    altExpectation: "Name the activity (planning, reviewing, discussing), not a marketing claim.",
  },
  "reader-focus": {
    id: "reader-focus",
    label: "Reader-focused image",
    purpose: "Shows reading, learning, or calm attention. Supports For Our Readers and similar journeys.",
    preferredRatio: "landscape",
    sourceOrientation: "either",
    minLongEdgePx: 1600,
    defaultFocalGuidance: "Person engaged with content; face readable when present; warm lived-in setting.",
    sizes: "(min-width: 1024px) 40vw, 100vw",
    mayUsePriority: false,
    mobileBehavior: "Stack; prefer showing the reader over background detail.",
    altExpectation: "Describe the reading or learning moment specifically.",
  },
  "featured-article": {
    id: "featured-article",
    label: "Featured article image",
    purpose: "Magazine lead image for homepage Health Articles and blog feature slots.",
    preferredRatio: "wide",
    sourceOrientation: "landscape",
    minLongEdgePx: 2000,
    defaultFocalGuidance:
      "Primary subject in the left or center third so wide crops remain coherent. Portrait sources need an authored focal point.",
    sizes: "(min-width: 1440px) 50vw, 100vw",
    mayUsePriority: false,
    mobileBehavior: "Full-bleed within the feature card; stack above copy through tablet.",
    altExpectation: "Match article subject; keep factual and free of SEO stuffing.",
  },
  "article-header": {
    id: "article-header",
    label: "Article header image",
    purpose: "Lead visual beside or above the article title on the reading page.",
    preferredRatio: "portrait",
    sourceOrientation: "portrait",
    minLongEdgePx: 1400,
    defaultFocalGuidance: "Subject mid-frame; eyes in upper third for portrait crops.",
    sizes: "(min-width: 1024px) 420px, (min-width: 768px) 60vw, 90vw",
    mayUsePriority: true,
    mobileBehavior: "Full width under intro metadata; keep 3:4 crop stable.",
    altExpectation: "Describe the scene as it relates to the article topic.",
  },
  "article-inline": {
    id: "article-inline",
    label: "Inline article image",
    purpose: "Supports a specific section of long-form content. May be photography or a restrained editorial diagram.",
    preferredRatio: "portrait",
    sourceOrientation: "either",
    minLongEdgePx: 1200,
    defaultFocalGuidance: "Preserve the explanatory subject; avoid aggressive cover crops when intrinsic sizing is used.",
    sizes: "(min-width: 768px) 420px, 90vw",
    mayUsePriority: false,
    mobileBehavior: "Centered figure with caption; prefer intrinsic width/height over forced cover crops.",
    altExpectation: "Explain what the figure shows; captions may add context, not replace alt.",
  },
  atmospheric: {
    id: "atmospheric",
    label: "Decorative atmospheric image",
    purpose: "Rare full-width pacing pause. Omit unless an approved asset materially improves rhythm.",
    preferredRatio: "wide",
    sourceOrientation: "landscape",
    minLongEdgePx: 2400,
    defaultFocalGuidance: "Horizon or soft environmental subject; no faces under text overlays (no overlays).",
    sizes: "100vw",
    mayUsePriority: false,
    mobileBehavior: "Shorter vertical crop; keep atmosphere, not tiny distant figures.",
    altExpectation: "If informative, describe the scene; if purely decorative, empty alt is acceptable.",
  },
  founder: {
    id: "founder",
    label: "Founder or company image",
    purpose: "Optional real portrait of founders or working context. Never invent or stock-substitute.",
    preferredRatio: "square",
    sourceOrientation: "portrait",
    minLongEdgePx: 1200,
    defaultFocalGuidance: "Waist-up, natural light, eyes near vertical center for square crops.",
    sizes: "(min-width: 768px) 280px, 60vw",
    mayUsePriority: false,
    mobileBehavior: "Stack above or below founding copy; one image maximum unless art-directed.",
    altExpectation: "Name the person when known; describe setting briefly.",
  },
  partner: {
    id: "partner",
    label: "Partner / collaboration image",
    purpose: "Supports For Our Partners and Partner With Us with genuine working conversation.",
    preferredRatio: "landscape",
    sourceOrientation: "landscape",
    minLongEdgePx: 1600,
    defaultFocalGuidance: "Two people in conversation; no handshake clichés; faces readable.",
    sizes: "(min-width: 1024px) 40vw, 100vw",
    mayUsePriority: false,
    mobileBehavior: "Hidden below lg on current homepage pattern; when shown, full-width under copy.",
    altExpectation: "Describe the collaboration moment without implying a named client relationship.",
  },
};

export const imageRoleList: ImageRoleSpec[] = Object.values(imageRoles);
