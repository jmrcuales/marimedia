import { getContrastRatio, passesWcagAA, type WcagUse } from "@/lib/color-contrast";

/**
 * Data for the Phase 1 visual-direction lab only (`/internal/visual-lab`).
 * Nothing here is imported by, or applied to, any production page. See
 * `components/visual-lab/visual-lab.css` for how these values are scoped
 * to the lab route as CSS custom properties.
 *
 * Base palette values are copied verbatim from
 * `.cursor/rules/mari-media-website-compass.mdc` Section 19 (Master color
 * system), approved in Phase 0.1 (Section 57) as the working direction.
 */
export const compassPalette = [
  { id: "warm-white", label: "Warm White", role: "Primary canvas", hex: "#FAF8F5" },
  { id: "pure-white", label: "Pure White", role: "Elevated surface", hex: "#FFFFFF" },
  { id: "soft-black", label: "Soft Black", role: "Primary text", hex: "#211F1D" },
  { id: "warm-charcoal", label: "Warm Charcoal", role: "Secondary text", hex: "#5E5955" },
  { id: "pastel-red", label: "Pastel Red", role: "Signature accent", hex: "#D9857A" },
  { id: "deep-red", label: "Deep Red", role: "Strong accent", hex: "#8F403B" },
  { id: "muted-green", label: "Muted Green", role: "Health accent", hex: "#718774" },
  { id: "soft-sage", label: "Soft Sage", role: "Health surface", hex: "#E3E9E1" },
  { id: "soft-blush", label: "Soft Blush", role: "Warm surface", hex: "#F2DFDC" },
  { id: "warm-sand", label: "Warm Sand", role: "Neutral surface", hex: "#E8E0D5" },
] as const;

/**
 * Accessibility-driven derivatives that sit outside the 10-swatch Section
 * 19 palette. Each one exists because the nearest brand color failed its
 * intended contrast use (see `contrastPairs` below for the math). Status
 * colors are explicitly allowed to extend beyond the brand palette per
 * the Phase 1 task brief ("status colors may extend beyond the brand
 * palette when accessibility requires it").
 */
export const derivedTokens = [
  {
    id: "text-subtle",
    label: "Subtle text",
    hex: "#756B60",
    rationale:
      "A further-darkened Warm Charcoal derivative. Warm Charcoal itself (6.52:1 on Warm White) is comfortably AA for secondary text, but a lighter 'subtle' tone commonly used for metadata/captions needed its own value that still clears 4.5:1 rather than trailing off into fail territory.",
  },
  {
    id: "action-primary-hover",
    label: "Primary action, hover",
    hex: "#7A362F",
    rationale:
      "Deep Red darkened roughly 15%. Keeps the same hue so the hover state reads as 'the same button, pressed,' while increasing contrast against white button text from 7.08:1 to 8.76:1.",
  },
  {
    id: "border-strong",
    label: "Interactive border",
    hex: "#9C8D79",
    rationale:
      "None of the palette's neutral surfaces (Warm Sand, Soft Sage) reach 3:1 against Warm White or Pure White, so an input or outline-button border drawn in those tones would be nearly invisible. This warm, muted tan clears 3.05:1 on Warm White and 3.23:1 on Pure White, the WCAG threshold for UI-component boundaries, while staying in the same warm-neutral family as Warm Sand.",
  },
  {
    id: "success-text",
    label: "Positive / success text",
    hex: "#455546",
    rationale:
      "Muted Green (#718774) is the palette's Health accent, reserved by Section 19 for health-context surfaces, and it only reaches 3.66:1 on Warm White, below the 4.5:1 required for normal-size text. This darker derivative reaches 7.50:1 on Warm White and can carry small success text without borrowing the health-accent meaning.",
  },
  {
    id: "warning-text",
    label: "Warning / caution text",
    hex: "#6E4A12",
    rationale:
      "The palette has no amber or gold. Warning is a distinct, universally understood signal that should not be approximated with Pastel Red or Deep Red (both already mean something else here). This value reaches 7.47:1 on Warm White.",
  },
  {
    id: "warning-surface",
    label: "Warning surface",
    hex: "#F5E6C8",
    rationale: "Light amber surface paired with the warning text above (6.43:1).",
  },
  {
    id: "error",
    label: "Error",
    hex: "#9C2B22",
    rationale:
      "Reusing Deep Red for errors would make the brand's primary call-to-action color also mean 'something went wrong,' which is confusing regardless of contrast. This is a more saturated, distinctly different red-orange (hue shifted from Deep Red's rgb(143,64,59) to rgb(156,43,34)) that still reads as part of the same warm-red family. Reaches 7.12:1 as text on Warm White and 7.55:1 as white text on the fill.",
  },
] as const;

export type SemanticRole = {
  id: string;
  label: string;
  description: string;
  /** CSS custom property name (without the leading `--`), for reference. */
  cssVar: string;
  hex: string;
  /** Which existing palette or derived token this resolves to, for traceability. */
  source: string;
};

export const semanticRoles: SemanticRole[] = [
  {
    id: "bg-page",
    label: "Page background",
    description: "Default canvas behind all content.",
    cssVar: "lab-bg-page",
    hex: "#FAF8F5",
    source: "Warm White",
  },
  {
    id: "bg-surface",
    label: "Elevated surface",
    description: "Cards, form panels, the featured-article module.",
    cssVar: "lab-bg-surface",
    hex: "#FFFFFF",
    source: "Pure White",
  },
  {
    id: "bg-surface-alt",
    label: "Alternate section surface",
    description: "Used sparingly to separate adjacent sections without a hard border.",
    cssVar: "lab-bg-surface-alt",
    hex: "#E8E0D5",
    source: "Warm Sand",
  },
  {
    id: "text-primary",
    label: "Primary text",
    description: "Headings and primary body copy.",
    cssVar: "lab-text-primary",
    hex: "#211F1D",
    source: "Soft Black",
  },
  {
    id: "text-secondary",
    label: "Secondary text",
    description: "Supporting copy, longer descriptions.",
    cssVar: "lab-text-secondary",
    hex: "#5E5955",
    source: "Warm Charcoal",
  },
  {
    id: "text-subtle",
    label: "Subtle text",
    description: "Metadata, captions, timestamps, helper text.",
    cssVar: "lab-text-subtle",
    hex: "#756B60",
    source: "Derived (accessibility adjustment)",
  },
  {
    id: "action-primary",
    label: "Primary action",
    description: "Partner With Us and other primary buttons.",
    cssVar: "lab-action-primary",
    hex: "#8F403B",
    source: "Deep Red",
  },
  {
    id: "action-primary-hover",
    label: "Primary action, hover",
    description: "Hover/active state for the primary button.",
    cssVar: "lab-action-primary-hover",
    hex: "#7A362F",
    source: "Derived (darkened Deep Red)",
  },
  {
    id: "action-secondary",
    label: "Secondary action",
    description: "Outline button: Soft Black border and text on a transparent fill.",
    cssVar: "lab-text-primary",
    hex: "#211F1D",
    source: "Soft Black",
  },
  {
    id: "link",
    label: "Text link",
    description: "Inline links inside body copy.",
    cssVar: "lab-link",
    hex: "#8F403B",
    source: "Deep Red",
  },
  {
    id: "border-strong",
    label: "Interactive border",
    description: "Input fields, outline buttons, anywhere the boundary must be perceivable.",
    cssVar: "lab-border-strong",
    hex: "#9C8D79",
    source: "Derived (accessibility adjustment)",
  },
  {
    id: "divider",
    label: "Divider",
    description: "Decorative separation only, not required to understand a control.",
    cssVar: "lab-divider",
    hex: "#E8E0D5",
    source: "Warm Sand",
  },
  {
    id: "focus-ring",
    label: "Focus ring",
    description: "Keyboard focus indicator across all interactive elements.",
    cssVar: "lab-focus-ring",
    hex: "#8F403B",
    source: "Deep Red",
  },
  {
    id: "callout-bg",
    label: "Article callout",
    description: "Editorial callouts, pull-quote backgrounds.",
    cssVar: "lab-callout-bg",
    hex: "#F2DFDC",
    source: "Soft Blush",
  },
  {
    id: "editorial-label",
    label: "Editorial label",
    description: "Eyebrows, section labels, category tags.",
    cssVar: "lab-editorial-label",
    hex: "#8F403B",
    source: "Deep Red",
  },
  {
    id: "success",
    label: "Success / positive",
    description: "Form success states, confirmation messages.",
    cssVar: "lab-success-text",
    hex: "#455546",
    source: "Derived (darkened Muted Green, outside health context)",
  },
  {
    id: "warning",
    label: "Warning / caution",
    description: "Non-blocking caution states.",
    cssVar: "lab-warning-text",
    hex: "#6E4A12",
    source: "Derived (outside the 10-swatch palette)",
  },
  {
    id: "error",
    label: "Error",
    description: "Form validation errors, failed states.",
    cssVar: "lab-error",
    hex: "#9C2B22",
    source: "Derived (outside the 10-swatch palette, distinct from Deep Red)",
  },
];

export type ContrastPair = {
  id: string;
  label: string;
  foregroundHex: string;
  foregroundLabel: string;
  backgroundHex: string;
  backgroundLabel: string;
  use: WcagUse;
  note?: string;
};

const rawContrastPairs: ContrastPair[] = [
  {
    id: "primary-text-on-page",
    label: "Primary text on page background",
    foregroundHex: "#211F1D",
    foregroundLabel: "Soft Black",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "normal-text",
  },
  {
    id: "primary-text-on-surface",
    label: "Primary text on elevated surface",
    foregroundHex: "#211F1D",
    foregroundLabel: "Soft Black",
    backgroundHex: "#FFFFFF",
    backgroundLabel: "Pure White",
    use: "normal-text",
  },
  {
    id: "secondary-text-on-page",
    label: "Secondary text on page background",
    foregroundHex: "#5E5955",
    foregroundLabel: "Warm Charcoal",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "normal-text",
  },
  {
    id: "subtle-text-on-page",
    label: "Subtle text on page background",
    foregroundHex: "#756B60",
    foregroundLabel: "Subtle text (derived)",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "normal-text",
  },
  {
    id: "button-text-on-primary",
    label: "Button text on primary action fill",
    foregroundHex: "#FFFFFF",
    foregroundLabel: "Pure White",
    backgroundHex: "#8F403B",
    backgroundLabel: "Deep Red",
    use: "normal-text",
  },
  {
    id: "button-text-on-primary-hover",
    label: "Button text on primary action hover fill",
    foregroundHex: "#FFFFFF",
    foregroundLabel: "Pure White",
    backgroundHex: "#7A362F",
    backgroundLabel: "Primary action hover (derived)",
    use: "normal-text",
  },
  {
    id: "pastel-red-button-fails",
    label: "Button text on Pastel Red fill (rejected)",
    foregroundHex: "#FFFFFF",
    foregroundLabel: "Pure White",
    backgroundHex: "#D9857A",
    backgroundLabel: "Pastel Red",
    use: "normal-text",
    note: "Fails even the large-text threshold. Pastel Red is not used as a filled button background with white text anywhere in this system; it is reserved for tags, tints, and decorative surfaces paired with dark text instead.",
  },
  {
    id: "link-on-page",
    label: "Text link on page background",
    foregroundHex: "#8F403B",
    foregroundLabel: "Deep Red",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "normal-text",
  },
  {
    id: "muted-green-small-text-fails",
    label: "Muted Green as small text (rejected)",
    foregroundHex: "#718774",
    foregroundLabel: "Muted Green",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "normal-text",
    note: "Passes large-text and UI-component thresholds (3.66:1) but fails normal-text AA. Muted Green stays usable for icons, large stat figures, and decorative surfaces; small success text uses the darkened derivative instead.",
  },
  {
    id: "success-text-on-page",
    label: "Success text on page background",
    foregroundHex: "#455546",
    foregroundLabel: "Success text (derived)",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "normal-text",
  },
  {
    id: "success-text-on-sage",
    label: "Success text on health surface",
    foregroundHex: "#455546",
    foregroundLabel: "Success text (derived)",
    backgroundHex: "#E3E9E1",
    backgroundLabel: "Soft Sage",
    use: "normal-text",
  },
  {
    id: "warning-text-on-warning-surface",
    label: "Warning text on warning surface",
    foregroundHex: "#6E4A12",
    foregroundLabel: "Warning text (derived)",
    backgroundHex: "#F5E6C8",
    backgroundLabel: "Warning surface (derived)",
    use: "normal-text",
  },
  {
    id: "error-text-on-page",
    label: "Error text on page background",
    foregroundHex: "#9C2B22",
    foregroundLabel: "Error (derived)",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "normal-text",
  },
  {
    id: "error-button-text",
    label: "Button text on error fill",
    foregroundHex: "#FFFFFF",
    foregroundLabel: "Pure White",
    backgroundHex: "#9C2B22",
    backgroundLabel: "Error (derived)",
    use: "normal-text",
  },
  {
    id: "callout-text-on-blush",
    label: "Primary text on article callout",
    foregroundHex: "#211F1D",
    foregroundLabel: "Soft Black",
    backgroundHex: "#F2DFDC",
    backgroundLabel: "Soft Blush",
    use: "normal-text",
  },
  {
    id: "editorial-label-on-blush",
    label: "Editorial label on article callout",
    foregroundHex: "#8F403B",
    foregroundLabel: "Deep Red",
    backgroundHex: "#F2DFDC",
    backgroundLabel: "Soft Blush",
    use: "normal-text",
  },
  {
    id: "warm-sand-border-fails",
    label: "Warm Sand as a border on page background (rejected)",
    foregroundHex: "#E8E0D5",
    foregroundLabel: "Warm Sand",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "ui-component",
    note: "Only 1.23:1, effectively invisible. Warm Sand stays as a decorative divider and alt-surface tone; interactive borders (inputs, outline buttons) use the derived border-strong token instead.",
  },
  {
    id: "border-strong-on-page",
    label: "Interactive border on page background",
    foregroundHex: "#9C8D79",
    foregroundLabel: "Interactive border (derived)",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "ui-component",
  },
  {
    id: "border-strong-on-surface",
    label: "Interactive border on elevated surface",
    foregroundHex: "#9C8D79",
    foregroundLabel: "Interactive border (derived)",
    backgroundHex: "#FFFFFF",
    backgroundLabel: "Pure White",
    use: "ui-component",
  },
  {
    id: "focus-ring-on-page",
    label: "Focus ring on page background",
    foregroundHex: "#8F403B",
    foregroundLabel: "Deep Red",
    backgroundHex: "#FAF8F5",
    backgroundLabel: "Warm White",
    use: "ui-component",
  },
  {
    id: "focus-ring-on-surface",
    label: "Focus ring on elevated surface",
    foregroundHex: "#8F403B",
    foregroundLabel: "Deep Red",
    backgroundHex: "#FFFFFF",
    backgroundLabel: "Pure White",
    use: "ui-component",
  },
];

export type ContrastResult = ContrastPair & { ratio: number; passes: boolean };

/** Every documented pairing, with the ratio actually calculated (not eyeballed). */
export const contrastResults: ContrastResult[] = rawContrastPairs.map((pair) => {
  const ratio = getContrastRatio(pair.foregroundHex, pair.backgroundHex);
  return { ...pair, ratio, passes: passesWcagAA(ratio, pair.use) };
});
