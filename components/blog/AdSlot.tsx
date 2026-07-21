import Image from "next/image";
import type { AdPlacementId } from "@/types/ads";
import { getAdConfig } from "@/lib/ads";

/**
 * Presentation boundary for the future ad placements: `article-left-rail`,
 * `article-right-rail`, and `article-inline`. No ad network, tracking, or
 * real creative exists yet, so this renders `null` for every placement in
 * Phase 2 — no reserved width/height and no "Advertisement" placeholder.
 */
export default function AdSlot({
  placementId,
  className,
}: {
  placementId: AdPlacementId;
  className?: string;
}) {
  const ad = getAdConfig(placementId);
  if (!ad) return null;

  return (
    <a
      href={ad.href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
    >
      <Image
        src={ad.imageSrc}
        alt={ad.imageAlt}
        width={ad.width}
        height={ad.height}
        className="w-full h-auto rounded-xl"
      />
    </a>
  );
}
