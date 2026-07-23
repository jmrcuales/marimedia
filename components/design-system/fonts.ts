import { Plus_Jakarta_Sans, Source_Sans_3, Newsreader } from "next/font/google";

/**
 * Production typeface loaders for the Phase 2 design system.
 *
 * These implement the Phase 1-approved baseline referenced in the
 * MARIWEB-008 task brief: Plus Jakarta Sans for display/headings,
 * Source Sans 3 for body copy, and Newsreader as a restricted-use
 * editorial accent (never a primary heading font). The families and
 * weights match what `components/visual-lab/fonts.ts` already loaded for
 * "System C" in the Phase 1 lab, so this is the same real typeface, not a
 * re-guess.
 *
 * Scope: these fonts are only applied where a component explicitly opts
 * in via `Scope.tsx`'s `designSystemFontVariables`, which currently means
 * `/internal/design-system` and any future consumer that wraps itself in
 * `<Scope>`. `app/layout.tsx` (the global font loader for every
 * production route) is untouched by this phase; wiring these families in
 * globally is a decision for the phase that actually rebuilds a
 * production page (Phase 3+).
 */

export const dsDisplayFont = Plus_Jakarta_Sans({
  variable: "--font-ds-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const dsBodyFont = Source_Sans_3({
  variable: "--font-ds-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Restricted-use editorial accent only (quotes, editorial statements). */
export const dsEditorialFont = Newsreader({
  variable: "--font-ds-editorial",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

export const designSystemFontVariables = [
  dsDisplayFont.variable,
  dsBodyFont.variable,
  dsEditorialFont.variable,
].join(" ");
