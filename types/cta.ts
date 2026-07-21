/**
 * Future call-to-action extension points. Each placement resolves through
 * `lib/cta.ts`, which currently has no CTAs configured, so every placement
 * renders nothing. Kept separate from the article content model so CTA
 * data can later be sourced from Supabase without touching article records
 * or the UI components that render them.
 */
export type CtaPlacement =
  | "article-inline-cta"
  | "article-end-cta"
  | "blog-index-cta";

export interface CtaConfig {
  placement: CtaPlacement;
  heading: string;
  body?: string;
  buttonLabel: string;
  buttonHref: string;
}
