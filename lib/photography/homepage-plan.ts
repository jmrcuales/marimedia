/**
 * Homepage section image plan (MARIWEB-010).
 *
 * Art direction only. No section receives a production photograph until an
 * approved, provenance-documented asset is provided. Components already
 * render correctly with `image: undefined`.
 */

import type { ImageRoleId } from "./roles";

export type HomepageImagePlanStatus =
  | "implemented-with-existing-asset"
  | "blocked-awaiting-approved-asset"
  | "intentionally-copy-only"
  | "deferred";

export interface HomepageSectionImagePlan {
  sectionId: string;
  sectionLabel: string;
  role: ImageRoleId | null;
  status: HomepageImagePlanStatus;
  recommendedConcept: string;
  whyItSupports: string;
  subjectMatter: string;
  orientation: "portrait" | "landscape" | "square" | "n/a";
  aspectRatio: string;
  focalPlacement: string;
  desktopCrop: string;
  tabletCrop: string;
  mobileCrop: string;
  sameAssetAcrossBreakpoints: boolean;
  artDirectedAlternatesPreferred: boolean;
  currentAssetNote: string;
}

export const homepageSectionImagePlans: HomepageSectionImagePlan[] = [
  {
    sectionId: "hero",
    sectionLabel: "Hero",
    role: "hero-support",
    status: "blocked-awaiting-approved-asset",
    recommendedConcept:
      "A single person in a calm indoor setting reading or listening with focused attention, warm daylight, lived-in details.",
    whyItSupports:
      "Signals human warmth and editorial care beside the company promise without turning the hero into a health-clinic scene.",
    subjectMatter: "Reader or learner in natural light; no white coats, no product bottles, no exaggerated smile.",
    orientation: "portrait",
    aspectRatio: "4:5",
    focalPlacement: "Eyes in upper third; subject slightly off-center toward the open field.",
    desktopCrop: "Portrait ImageFrame at lg+; hidden below lg in the current approved layout.",
    tabletCrop: "Hidden (copy-led hero).",
    mobileCrop: "Hidden (copy-led hero).",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "homepageContent.hero.image is undefined. Do not substitute stock.",
  },
  {
    sectionId: "principles",
    sectionLabel: "Editorial Principles",
    role: null,
    status: "intentionally-copy-only",
    recommendedConcept: "No image. Whitespace and typography carry the trust commitments.",
    whyItSupports: "Adding a photo here would dilute specificity of the three checkable commitments.",
    subjectMatter: "n/a",
    orientation: "n/a",
    aspectRatio: "n/a",
    focalPlacement: "n/a",
    desktopCrop: "n/a",
    tabletCrop: "n/a",
    mobileCrop: "n/a",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "Copy-only by design.",
  },
  {
    sectionId: "what-we-do",
    sectionLabel: "What We Do",
    role: null,
    status: "intentionally-copy-only",
    recommendedConcept:
      "Keep numbered editorial service lines without capability photography. Optional future: one restrained process still life, not three matching cards.",
    whyItSupports: "Numbered lines already establish capability; identical image cards would feel templated.",
    subjectMatter: "n/a for current ship",
    orientation: "n/a",
    aspectRatio: "n/a",
    focalPlacement: "n/a",
    desktopCrop: "n/a",
    tabletCrop: "n/a",
    mobileCrop: "n/a",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "No image slots in the approved component.",
  },
  {
    sectionId: "for-partners",
    sectionLabel: "For Our Partners",
    role: "partner",
    status: "blocked-awaiting-approved-asset",
    recommendedConcept:
      "Two people in a working conversation over a laptop or notes in a warm, non-corporate space. Documentary feel.",
    whyItSupports: "Makes partnership feel human and selective, matching the 'fit check' message.",
    subjectMatter: "Genuine collaboration; no handshakes, contracts, or staged office teams.",
    orientation: "landscape",
    aspectRatio: "4:3",
    focalPlacement: "Faces in the left two-thirds so the right edge can soft-crop at large widths.",
    desktopCrop: "Landscape ImageFrame in the right columns at lg+.",
    tabletCrop: "Hidden in current pattern; if later shown, full-width under copy.",
    mobileCrop: "Hidden in current pattern.",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "homepageContent.forPartners.image is undefined.",
  },
  {
    sectionId: "how-we-work",
    sectionLabel: "How We Work",
    role: null,
    status: "intentionally-copy-only",
    recommendedConcept: "No image. Process clarity comes from the four numbered steps.",
    whyItSupports: "Visual decoration would compete with the honest process narrative.",
    subjectMatter: "n/a",
    orientation: "n/a",
    aspectRatio: "n/a",
    focalPlacement: "n/a",
    desktopCrop: "n/a",
    tabletCrop: "n/a",
    mobileCrop: "n/a",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "Copy-only by design.",
  },
  {
    sectionId: "for-readers",
    sectionLabel: "For Our Readers",
    role: "reader-focus",
    status: "blocked-awaiting-approved-asset",
    recommendedConcept:
      "Someone reading on a couch, kitchen table, or sunlit desk. Calm attention, not wellness posing.",
    whyItSupports: "Anchors the 'read something, not sold something' promise in a believable reader moment.",
    subjectMatter: "Reading / listening / reflecting; no supplement bottles as dominant subjects.",
    orientation: "landscape",
    aspectRatio: "4:3",
    focalPlacement: "Reader face or book/device interaction mid-left or mid-right, alternating vs partners.",
    desktopCrop: "Landscape ImageFrame on the left at lg+.",
    tabletCrop: "Hidden in current pattern.",
    mobileCrop: "Hidden in current pattern.",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "homepageContent.forReaders.image is undefined.",
  },
  {
    sectionId: "articles",
    sectionLabel: "Health Articles",
    role: "featured-article",
    status: "implemented-with-existing-asset",
    recommendedConcept:
      "Use the featured article's hero asset. Prefer future landscape photography over portrait illustrations for wide magazine crops.",
    whyItSupports: "Magazine spread needs one dominant visual owned by the featured story.",
    subjectMatter: "Article-owned imagery only.",
    orientation: "landscape",
    aspectRatio: "16:9 (display) from ideally landscape sources",
    focalPlacement: "Authored per asset; current portrait illustration focuses on upper-center faces.",
    desktopCrop: "Wide cover crop in FeaturedArticle at >=1440px split.",
    tabletCrop: "Wide cover crop stacked above copy.",
    mobileCrop: "Wide cover crop full width.",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: true,
    currentAssetNote:
      "Reuses /images/articles/functional-medicine/functional-medicine-hero.jpg with focal-point treatment.",
  },
  {
    sectionId: "about",
    sectionLabel: "Company & Founders",
    role: "founder",
    status: "intentionally-copy-only",
    recommendedConcept:
      "Real founder photograph only when approved. Until then, copy-only remains correct.",
    whyItSupports: "Founders should be recognizable and true, never stock-substituted.",
    subjectMatter: "James and/or Kaye in a natural setting, or a genuine working moment.",
    orientation: "square",
    aspectRatio: "1:1",
    focalPlacement: "Eyes near center for square crop.",
    desktopCrop: "Optional square beside reading-width copy.",
    tabletCrop: "Stack above or below copy.",
    mobileCrop: "Full width, restrained height.",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "No founder photography ships today.",
  },
  {
    sectionId: "contact",
    sectionLabel: "Calm Final Action",
    role: null,
    status: "intentionally-copy-only",
    recommendedConcept: "No image. Keep the close quiet and actionable.",
    whyItSupports: "A photo would compete with partner and general contact paths.",
    subjectMatter: "n/a",
    orientation: "n/a",
    aspectRatio: "n/a",
    focalPlacement: "n/a",
    desktopCrop: "n/a",
    tabletCrop: "n/a",
    mobileCrop: "n/a",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: false,
    currentAssetNote: "Copy-only by design.",
  },
  {
    sectionId: "photographic-pause",
    sectionLabel: "Optional photographic pause",
    role: "atmospheric",
    status: "deferred",
    recommendedConcept:
      "One full-width lived-in still (window light, desk, quiet interior) only if pacing needs it.",
    whyItSupports: "Compass allows sparse pauses; the current homepage rhythm does not require one.",
    subjectMatter: "Atmosphere without competing message.",
    orientation: "landscape",
    aspectRatio: "21:9 or 16:9",
    focalPlacement: "Soft environmental focus; no text overlays.",
    desktopCrop: "Full bleed, moderate height.",
    tabletCrop: "Full bleed, shorter.",
    mobileCrop: "Full bleed, cropped to atmosphere.",
    sameAssetAcrossBreakpoints: true,
    artDirectedAlternatesPreferred: true,
    currentAssetNote: "Omitted until an approved asset exists.",
  },
];
