import type { CtaConfig, CtaPlacement } from "@/types/cta";

/**
 * CTA configuration by placement. Nothing is configured yet in Phase 2 —
 * no newsletter signup, no lead magnet, no live campaign exists to link to —
 * so every placement resolves to `null` and `ArticleCta` renders nothing.
 * When a real CTA is ready, add its config here (or swap this module for a
 * Supabase-backed lookup) without changing any component that calls it.
 */
const ctaConfigByPlacement: Partial<Record<CtaPlacement, CtaConfig>> = {};

export function getCta(placement: CtaPlacement): CtaConfig | null {
  return ctaConfigByPlacement[placement] ?? null;
}
