/**
 * Minimal future ad-placement contract. No ad network, tracking, or
 * creative-management system exists yet; this only defines where an ad
 * could eventually render and the smallest shape a real ad configuration
 * would need. `lib/ads.ts` has no placements configured, so `AdSlot`
 * currently renders nothing everywhere.
 */
export type AdPlacementId =
  | "article-left-rail"
  | "article-right-rail"
  | "article-inline";

export interface AdConfig {
  placementId: AdPlacementId;
  imageSrc: string;
  imageAlt: string;
  href: string;
  width: number;
  height: number;
}
