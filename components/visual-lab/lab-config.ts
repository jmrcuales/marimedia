import { getContrastRatio, passesWcagAA } from "@/lib/color-contrast";

/**
 * Single source of truth for the interactive Live Website Preview
 * configurator. Every option here maps to one control in `ControlPanel`
 * and is consumed by `WebsitePreview` to restyle the same composition in
 * place. Nothing in this file is imported by production code.
 */

export type TypographyId = "system-a" | "system-b" | "system-c";
export type SerifAccent = "off" | "newsreader";
export type Asymmetry = "low" | "moderate" | "strong";
export type HeroVariant = "compact-split" | "full-width" | "image-led";
export type PathwaysVariant = "balanced-split" | "staggered-editorial" | "alternating-bands";
export type RibbonOption = "none" | "minimal-line" | "soft-editorial";
export type RadiusOption = "minimal" | "medium" | "soft";
export type ShadowOption = "none" | "subtle" | "elevated";
export type SurfaceOption = "flat-editorial" | "bordered-editorial" | "selectively-elevated";
export type ButtonShape = "medium-rounded" | "soft-rounded" | "pill";
export type ColorEmphasis = "neutral-led" | "red-led" | "editorial-health-accent";
export type MotionOption = "normal" | "reduced" | "none";
export type ViewportOption = "390" | "768" | "1024" | "1440" | "fit";

export interface LabConfig {
  typography: TypographyId;
  serifAccent: SerifAccent;
  asymmetry: Asymmetry;
  hero: HeroVariant;
  pathways: PathwaysVariant;
  ribbon: RibbonOption;
  radius: RadiusOption;
  shadow: ShadowOption;
  surface: SurfaceOption;
  buttonShape: ButtonShape;
  colorEmphasis: ColorEmphasis;
  motion: MotionOption;
  viewport: ViewportOption;
}

/** Matches "current-like surface restraint": pill buttons and elevated cards, close to what components/ui/Button.tsx and Card.tsx do today. */
export const baselineConfig: LabConfig = {
  typography: "system-a",
  serifAccent: "off",
  asymmetry: "low",
  hero: "compact-split",
  pathways: "balanced-split",
  ribbon: "none",
  radius: "soft",
  shadow: "elevated",
  surface: "selectively-elevated",
  buttonShape: "pill",
  colorEmphasis: "neutral-led",
  motion: "normal",
  viewport: "fit",
};

/** The recommended preset, per the Phase 1 brief. Not a final James decision. */
export const compassRecommendedConfig: LabConfig = {
  typography: "system-c",
  serifAccent: "newsreader",
  asymmetry: "moderate",
  hero: "compact-split",
  pathways: "staggered-editorial",
  ribbon: "soft-editorial",
  radius: "medium",
  shadow: "subtle",
  surface: "bordered-editorial",
  buttonShape: "medium-rounded",
  colorEmphasis: "neutral-led",
  motion: "normal",
  viewport: "fit",
};

/** Convenience presets consumed by every "select a well known configuration" dropdown (mainly Comparison Mode). */
export const namedPresets: Record<string, LabConfig> = {
  baseline: baselineConfig,
  "system-a": { ...baselineConfig, typography: "system-a" },
  "system-b": { ...baselineConfig, typography: "system-b" },
  "system-c": { ...baselineConfig, typography: "system-c" },
  compass: compassRecommendedConfig,
};

export const namedPresetLabels: { id: keyof typeof namedPresets; label: string }[] = [
  { id: "baseline", label: "Baseline (today, System A)" },
  { id: "system-a", label: "System A — Poppins + Inter" },
  { id: "system-b", label: "System B — Manrope + Inter" },
  { id: "system-c", label: "System C — Plus Jakarta Sans + Source Sans 3" },
  { id: "compass", label: "Compass recommendation" },
];

type OptionMeta<T extends string> = { id: T; label: string; help: string };

export const typographyOptions: OptionMeta<TypographyId>[] = [
  { id: "system-a", label: "System A", help: "Poppins for headings, Inter for body. The current production baseline." },
  { id: "system-b", label: "System B", help: "Manrope for headings, Inter for body. A lower-cost contemporary swap." },
  { id: "system-c", label: "System C", help: "Plus Jakarta Sans for headings, Source Sans 3 for body. The most editorial option." },
];

export const serifAccentOptions: OptionMeta<SerifAccent>[] = [
  { id: "off", label: "Off", help: "No serif anywhere. The whole preview uses the selected typography system only." },
  { id: "newsreader", label: "Newsreader", help: "Adds an italic serif accent only to the pull quote in the credibility section." },
];

export const asymmetryOptions: OptionMeta<Asymmetry>[] = [
  { id: "low", label: "Low asymmetry", help: "Even columns, centered balance, minimal offsets." },
  { id: "moderate", label: "Moderate asymmetry", help: "Uneven column widths and light vertical offsets between related blocks." },
  { id: "strong", label: "Strong asymmetry", help: "Pronounced offsets and uneven proportions throughout the page." },
];

export const heroOptions: OptionMeta<HeroVariant>[] = [
  { id: "compact-split", label: "Compact editorial split", help: "Text on one side, a visual frame on the other, no full-screen height." },
  { id: "full-width", label: "Full-width editorial", help: "Text stacked full width, with the visual frame as a band below it." },
  { id: "image-led", label: "Image-led editorial", help: "The visual frame leads, with text sharing the space rather than dominating it." },
];

export const pathwaysOptions: OptionMeta<PathwaysVariant>[] = [
  { id: "balanced-split", label: "Balanced split", help: "Partner and reader paths as two equal columns." },
  { id: "staggered-editorial", label: "Staggered editorial", help: "Two columns of slightly different widths, one offset lower than the other." },
  { id: "alternating-bands", label: "Alternating bands", help: "Two full-width rows, image and text alternating sides." },
];

export const ribbonOptions: OptionMeta<RibbonOption>[] = [
  { id: "none", label: "No ribbon", help: "Section transitions use spacing and borders only." },
  { id: "minimal-line", label: "Minimal line", help: "A thin, low-weight gradient line between sections." },
  { id: "soft-editorial", label: "Soft editorial ribbon", help: "A broader, subtle gradient band between sections." },
];

export const radiusOptions: OptionMeta<RadiusOption>[] = [
  { id: "minimal", label: "Minimal", help: "About 4 to 6px. Crisp, structural corners." },
  { id: "medium", label: "Medium", help: "About 10 to 12px. The recommended general default." },
  { id: "soft", label: "Soft", help: "About 16 to 20px. Closer to how the site looks today." },
];

export const shadowOptions: OptionMeta<ShadowOption>[] = [
  { id: "none", label: "None", help: "Flat surfaces, separated by borders or spacing only." },
  { id: "subtle", label: "Subtle", help: "A soft, low-contrast lift for surfaces that need to feel distinct." },
  { id: "elevated", label: "Elevated", help: "A stronger shadow. For comparison only, restrained use recommended." },
];

export const surfaceOptions: OptionMeta<SurfaceOption>[] = [
  { id: "flat-editorial", label: "Flat editorial", help: "No card containers. Sections separate through spacing and a top border accent." },
  { id: "bordered-editorial", label: "Bordered editorial", help: "A visible border defines each surface, no shadow by default." },
  { id: "selectively-elevated", label: "Selectively elevated", help: "A small number of surfaces (forms, the featured article) get a shadow." },
];

export const buttonShapeOptions: OptionMeta<ButtonShape>[] = [
  { id: "medium-rounded", label: "Medium rounded", help: "About 10px corners. Confident, not playful." },
  { id: "soft-rounded", label: "Soft rounded", help: "About 18px corners." },
  { id: "pill", label: "Pill", help: "Fully rounded ends, matching how buttons look today." },
];

export const colorEmphasisOptions: OptionMeta<ColorEmphasis>[] = [
  { id: "neutral-led", label: "Neutral-led", help: "Warm White, Pure White, Soft Black and Warm Charcoal dominate. Deep Red is reserved for actions and links." },
  { id: "red-led", label: "Red-led", help: "Deep Red and Pastel Red get more visible emphasis, always in accessible pairings." },
  { id: "editorial-health-accent", label: "Editorial health accent", help: "A neutral shell overall, with Soft Sage and Muted Green appearing only in health-article content." },
];

export const motionOptions: OptionMeta<MotionOption>[] = [
  { id: "normal", label: "Normal restrained motion", help: "Short hover/focus transitions, and a slow ribbon drift if a ribbon is selected." },
  { id: "reduced", label: "Reduced motion", help: "No looping animation. Short transitions remain." },
  { id: "none", label: "No decorative motion", help: "No transitions or animation of any kind." },
];

export const viewportOptions: { id: ViewportOption; label: string; px: number | null }[] = [
  { id: "390", label: "Mobile (390px)", px: 390 },
  { id: "768", label: "Tablet (768px)", px: 768 },
  { id: "1024", label: "Laptop (1024px)", px: 1024 },
  { id: "1440", label: "Desktop (1440px)", px: 1440 },
  { id: "fit", label: "Fit available space", px: null },
];

/** Font `var(...)` references, keyed by system. System A reuses the fonts already loaded globally by app/layout.tsx. */
export const typographyFontVars: Record<TypographyId, { display: string; body: string }> = {
  "system-a": { display: "var(--font-poppins)", body: "var(--font-inter)" },
  "system-b": { display: "var(--lab-font-manrope)", body: "var(--font-inter)" },
  "system-c": { display: "var(--lab-font-plus-jakarta-sans)", body: "var(--lab-font-source-sans-3)" },
};

/** Radius scale, per element category, so radius changes aren't applied identically everywhere. */
export function getRadiusScale(radius: RadiusOption): { surface: string; image: string; form: string } {
  switch (radius) {
    case "minimal":
      return { surface: "6px", image: "4px", form: "4px" };
    case "medium":
      return { surface: "12px", image: "10px", form: "6px" };
    case "soft":
      return { surface: "20px", image: "16px", form: "10px" };
  }
}

export function getButtonRadius(shape: ButtonShape): string {
  switch (shape) {
    case "medium-rounded":
      return "10px";
    case "soft-rounded":
      return "18px";
    case "pill":
      return "9999px";
  }
}

export function getShadowValue(shadow: ShadowOption): string {
  switch (shadow) {
    case "none":
      return "none";
    case "subtle":
      return "0 1px 2px rgba(33, 31, 29, 0.06), 0 1px 3px rgba(33, 31, 29, 0.08)";
    case "elevated":
      return "0 4px 10px rgba(33, 31, 29, 0.10), 0 10px 25px rgba(33, 31, 29, 0.14)";
  }
}

/** Whether a "card-like" surface gets a border and/or shadow, given the surface + shadow controls. */
export function getSurfaceTreatment(
  surface: SurfaceOption,
  shadow: ShadowOption
): { border: boolean; boxShadow: string } {
  if (surface === "flat-editorial") {
    return { border: false, boxShadow: "none" };
  }
  if (surface === "bordered-editorial") {
    return { border: true, boxShadow: getShadowValue(shadow) };
  }
  // selectively-elevated
  return { border: false, boxShadow: getShadowValue(shadow === "none" ? "subtle" : shadow) };
}

export type ColorEmphasisPreset = {
  eyebrowBg: string;
  eyebrowText: string;
  navCtaBg: string;
  navCtaText: string;
  partnerAccent: string;
  readerAccent: string;
  healthCalloutBg: string;
  healthCalloutText: string;
  footerAccent: string;
};

const palette = {
  warmWhite: "#FAF8F5",
  pureWhite: "#FFFFFF",
  softBlack: "#211F1D",
  warmCharcoal: "#5E5955",
  pastelRed: "#D9857A",
  deepRed: "#8F403B",
  mutedGreen: "#718774",
  softSage: "#E3E9E1",
  softBlush: "#F2DFDC",
  warmSand: "#E8E0D5",
  successText: "#455546",
} as const;

export const colorEmphasisPresets: Record<ColorEmphasis, ColorEmphasisPreset> = {
  "neutral-led": {
    eyebrowBg: "transparent",
    eyebrowText: palette.deepRed,
    navCtaBg: palette.deepRed,
    navCtaText: palette.pureWhite,
    partnerAccent: palette.deepRed,
    readerAccent: palette.warmCharcoal,
    healthCalloutBg: palette.softBlush,
    healthCalloutText: palette.softBlack,
    footerAccent: palette.warmSand,
  },
  "red-led": {
    eyebrowBg: palette.deepRed,
    eyebrowText: palette.pureWhite,
    navCtaBg: palette.deepRed,
    navCtaText: palette.pureWhite,
    partnerAccent: palette.deepRed,
    readerAccent: palette.pastelRed,
    healthCalloutBg: palette.softBlush,
    healthCalloutText: palette.deepRed,
    footerAccent: palette.deepRed,
  },
  "editorial-health-accent": {
    eyebrowBg: "transparent",
    eyebrowText: palette.deepRed,
    navCtaBg: palette.deepRed,
    navCtaText: palette.pureWhite,
    partnerAccent: palette.warmCharcoal,
    readerAccent: palette.mutedGreen,
    healthCalloutBg: palette.softSage,
    healthCalloutText: palette.successText,
    footerAccent: palette.warmSand,
  },
};

export type EmphasisContrastCheck = {
  label: string;
  ratio: number;
  passes: boolean;
};

/**
 * Live accessibility guard for the color-emphasis control. Every built-in
 * emphasis preset above is designed to pass, so this should never report a
 * failure in normal use, but it is a real calculation (not a hardcoded
 * flag) and will catch a future preset edit that introduces a bad
 * pairing, such as Pastel Red behind white text.
 */
export function checkEmphasisContrast(emphasis: ColorEmphasis): EmphasisContrastCheck[] {
  const preset = colorEmphasisPresets[emphasis];
  const checks: { label: string; fg: string; bg: string }[] = [
    { label: "Nav CTA text on its fill", fg: preset.navCtaText, bg: preset.navCtaBg },
    {
      label: "Eyebrow text on its background",
      fg: preset.eyebrowText,
      bg: preset.eyebrowBg === "transparent" ? palette.warmWhite : preset.eyebrowBg,
    },
    { label: "Health callout text on its background", fg: preset.healthCalloutText, bg: preset.healthCalloutBg },
  ];

  return checks.map((check) => {
    const ratio = getContrastRatio(check.fg, check.bg);
    return { label: check.label, ratio, passes: passesWcagAA(ratio, "normal-text") };
  });
}

/** Formats the current configuration for the "Copy current selections" control. */
export function formatConfigForCopy(config: LabConfig): string {
  const typography = typographyOptions.find((o) => o.id === config.typography);
  const serif = serifAccentOptions.find((o) => o.id === config.serifAccent);
  const asymmetry = asymmetryOptions.find((o) => o.id === config.asymmetry);
  const hero = heroOptions.find((o) => o.id === config.hero);
  const pathways = pathwaysOptions.find((o) => o.id === config.pathways);
  const ribbon = ribbonOptions.find((o) => o.id === config.ribbon);
  const radius = radiusOptions.find((o) => o.id === config.radius);
  const shadow = shadowOptions.find((o) => o.id === config.shadow);
  const surface = surfaceOptions.find((o) => o.id === config.surface);
  const button = buttonShapeOptions.find((o) => o.id === config.buttonShape);
  const color = colorEmphasisOptions.find((o) => o.id === config.colorEmphasis);
  const motion = motionOptions.find((o) => o.id === config.motion);
  const viewport = viewportOptions.find((o) => o.id === config.viewport);
  const fontVars = typographyFontVars[config.typography];

  return [
    "TYPOGRAPHY",
    `${typography?.label} — ${typography?.help}`,
    `Serif accent: ${serif?.label}`,
    "",
    "LAYOUT",
    `${asymmetry?.label}`,
    `${hero?.label}`,
    `${pathways?.label} pathways`,
    "",
    "RIBBON",
    `${ribbon?.label}`,
    "",
    "SHAPES",
    `${radius?.label} radius`,
    `${shadow?.label} shadows`,
    `${surface?.label} surfaces`,
    `${button?.label} buttons`,
    "",
    "COLOR",
    `${color?.label} Compass palette`,
    "",
    "MOTION",
    `${motion?.label}`,
    "",
    "VIEWPORT",
    `${viewport?.label}`,
    "",
    `(font variables: display ${fontVars.display}, body ${fontVars.body})`,
  ].join("\n");
}

/** Serializes a config into short URL query values; used for optional URL state. */
export function configToSearchParams(config: LabConfig): URLSearchParams {
  const params = new URLSearchParams();
  (Object.keys(config) as (keyof LabConfig)[]).forEach((key) => {
    params.set(key, config[key]);
  });
  return params;
}

export function configFromSearchParams(params: URLSearchParams): LabConfig | null {
  const keys = Object.keys(baselineConfig) as (keyof LabConfig)[];
  if (!keys.some((key) => params.has(key))) return null;

  const result = { ...baselineConfig };
  for (const key of keys) {
    const value = params.get(key);
    if (value) {
      // Values always originate from configToSearchParams, which only ever
      // writes the option ids already defined in this module.
      (result as Record<string, string>)[key] = value;
    }
  }
  return result;
}
