import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type AvatarSize = "sm" | "md" | "lg";

const sizeClassName: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-[length:var(--ds-text-caption)]",
  md: "h-11 w-11 text-[length:var(--ds-text-body-sm)]",
  lg: "h-16 w-16 text-[length:var(--ds-text-h5)]",
};

const sizePx: Record<AvatarSize, number> = { sm: 32, md: 44, lg: 64 };

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** Author initials or similar fallback, shown when `src` is absent. Kept on a neutral surface (not Muted Green) since initials text does not reliably clear AA contrast against that fill. */
  initials?: string;
  size?: AvatarSize;
}

/** Author byline / person avatar. Falls back to initials on a neutral surface when no image is provided. */
export function Avatar({ src, alt = "", initials, size = "md", className, ...props }: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--ds-radius-avatar)] bg-[var(--ds-color-surface-muted)] font-[var(--ds-font-body)] font-semibold text-[var(--ds-color-text)]",
        sizeClassName[size],
        className
      )}
      {...props}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={`${sizePx[size]}px`} className="object-cover" />
      ) : (
        <span aria-hidden={alt ? undefined : "true"}>{initials}</span>
      )}
    </span>
  );
}
