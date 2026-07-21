import type { AdConfig, AdPlacementId } from "@/types/ads";

/**
 * Ad configuration by placement. No ad network, creative, or campaign
 * exists yet, so every placement resolves to `null` and `AdSlot` renders
 * nothing — no reserved width/height, no "Advertisement" placeholder.
 */
const adConfigByPlacement: Partial<Record<AdPlacementId, AdConfig>> = {};

export function getAdConfig(placementId: AdPlacementId): AdConfig | null {
  return adConfigByPlacement[placementId] ?? null;
}
