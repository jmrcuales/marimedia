/**
 * Focal-point helpers for intentional responsive cropping (MARIWEB-010).
 *
 * Percentages use CSS `object-position` conventions: 0% is left/top,
 * 100% is right/bottom. Prefer documenting the subject's eyes or primary
 * interaction, not the geometric center of the frame.
 */

export interface FocalPoint {
  /** Horizontal focus, 0–100 (left → right). */
  x: number;
  /** Vertical focus, 0–100 (top → bottom). */
  y: number;
}

/** Convert a focal point into a CSS `object-position` value. */
export function objectPositionFromFocal(focal?: FocalPoint | null): string {
  if (!focal) {
    return "50% 50%";
  }

  return `${clampPercent(focal.x)}% ${clampPercent(focal.y)}%`;
}

function clampPercent(value: number): number {
  if (Number.isNaN(value)) {
    return 50;
  }

  return Math.min(100, Math.max(0, value));
}
