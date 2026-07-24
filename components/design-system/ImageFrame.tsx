import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { objectPositionFromFocal, type FocalPoint } from "@/lib/photography";

export type ImageFrameRatio = "square" | "portrait" | "landscape" | "wide";

const ratioClassName: Record<ImageFrameRatio, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export interface ImageFrameProps extends Omit<ImageProps, "className" | "style"> {
  ratio?: ImageFrameRatio;
  caption?: React.ReactNode;
  /** Class applied to the outer `<figure>` (e.g. to bleed the frame to a card's edge). */
  className?: string;
  /** Style applied to the outer `<figure>`, alongside `className`. */
  style?: React.CSSProperties;
  frameClassName?: string;
  /** Set `false` for a full-bleed image with no rounding/border (paired with a bleed `Container`). */
  framed?: boolean;
  /**
   * Authored focal point for `object-cover` crops (MARIWEB-010). Prefer this
   * over relying on geometric center when sources are portrait and display
   * ratios are wide, or when the subject sits off-center.
   */
  focalPoint?: FocalPoint;
  /** Escape hatch when a raw CSS `object-position` string is already known. */
  objectPosition?: string;
}

/**
 * Consistent image treatment: fixed aspect ratio, soft radius, hairline
 * border, and an optional caption, so no page hand-rolls its own
 * `aspect-*`/`rounded-*`/`overflow-hidden` combination. `alt` remains
 * required (inherited from `ImageProps`), matching Compass's accessible
 * alt-text requirement.
 */
export function ImageFrame({
  ratio = "landscape",
  caption,
  className,
  style,
  frameClassName,
  framed = true,
  alt,
  focalPoint,
  objectPosition,
  ...imageProps
}: ImageFrameProps) {
  const resolvedObjectPosition = objectPosition ?? objectPositionFromFocal(focalPoint);

  return (
    <figure className={className} style={style}>
      <div
        className={cn(
          "relative overflow-hidden bg-[var(--ds-color-surface-muted)]",
          ratioClassName[ratio],
          framed && "rounded-[var(--ds-radius-image)] border border-[var(--ds-color-border-subtle)]",
          frameClassName
        )}
      >
        <Image
          {...imageProps}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition: resolvedObjectPosition }}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 font-[var(--ds-font-body)] text-[length:var(--ds-text-caption)] text-[var(--ds-color-text-subtle)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
