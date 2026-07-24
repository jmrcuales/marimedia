import { Manrope, Plus_Jakarta_Sans, Source_Sans_3, Newsreader } from "next/font/google";

/**
 * Fonts loaded only for the Phase 1 typography comparison
 * (`/internal/visual-lab`). System A (the current baseline) intentionally
 * reuses the already-loaded `--font-poppins` / `--font-inter` variables
 * from `app/layout.tsx` instead of loading them again here, since that
 * global configuration must not be duplicated or replaced during this
 * phase.
 *
 * Because `next/font/google` self-hosts and code-splits per import site,
 * these four families are only fetched by visitors who load this route,
 * not by production pages.
 */

export const manrope = Manrope({
  variable: "--lab-font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--lab-font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const sourceSans3 = Source_Sans_3({
  variable: "--lab-font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Optional restrained serif accent, used only for pull quotes/excerpts. */
export const newsreader = Newsreader({
  variable: "--lab-font-newsreader",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

export const labFontVariables = [
  manrope.variable,
  plusJakartaSans.variable,
  sourceSans3.variable,
  newsreader.variable,
].join(" ");
