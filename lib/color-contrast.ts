/**
 * Minimal, dependency-free WCAG 2.x contrast utilities.
 *
 * Used by the Phase 1 visual-direction lab (`/internal/visual-lab`) to
 * calculate real contrast ratios for proposed color pairings instead of
 * asserting pass/fail by eye. Implements the standard relative-luminance
 * and contrast-ratio formulas from the WCAG 2.1 specification:
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */

type RGB = { r: number; g: number; b: number };

function hexToRgb(hex: string): RGB {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const intValue = parseInt(value, 16);
  return {
    r: (intValue >> 16) & 255,
    g: (intValue >> 8) & 255,
    b: intValue & 255,
  };
}

function channelToLinear(channel: number): number {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance({ r, g, b }: RGB): number {
  const rLin = channelToLinear(r);
  const gLin = channelToLinear(g);
  const bLin = channelToLinear(b);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/** Contrast ratio between two hex colors, from 1 (no contrast) to 21 (max). */
export function getContrastRatio(hexA: string, hexB: string): number {
  const luminanceA = relativeLuminance(hexToRgb(hexA));
  const luminanceB = relativeLuminance(hexToRgb(hexB));
  const lighter = Math.max(luminanceA, luminanceB);
  const darker = Math.min(luminanceA, luminanceB);
  return (lighter + 0.05) / (darker + 0.05);
}

export type WcagUse = "normal-text" | "large-text" | "ui-component";

const WCAG_AA_THRESHOLDS: Record<WcagUse, number> = {
  "normal-text": 4.5,
  "large-text": 3,
  "ui-component": 3,
};

/** Whether a contrast ratio meets WCAG 2.1 AA for the given intended use. */
export function passesWcagAA(ratio: number, use: WcagUse): boolean {
  return ratio >= WCAG_AA_THRESHOLDS[use];
}

export function formatRatio(ratio: number): string {
  return `${ratio.toFixed(2)}:1`;
}
