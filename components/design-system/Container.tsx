import * as React from "react";
import { cn } from "@/lib/utils";

export type ContainerVariant = "content" | "wide" | "hero" | "reading" | "article" | "bleed";

const maxWidthVar: Record<ContainerVariant, string> = {
  content: "var(--ds-container-content)",
  wide: "var(--ds-container-wide)",
  hero: "var(--ds-container-hero)",
  reading: "var(--ds-container-reading)",
  article: "var(--ds-container-article)",
  bleed: "var(--ds-container-bleed)",
};

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant;
  children?: React.ReactNode;
}

/**
 * The one place a max-width and side gutter are ever set. Every page
 * composition built on the design system reaches for a `Container`
 * variant instead of writing a `max-w-*`/`px-*` value directly.
 *
 * - `content`: default reading/section width for most editorial blocks.
 * - `wide`: wider compositions (staggered editorial pathways, feature grids).
 * - `hero`: the >=1440px image-led hero.
 * - `reading`: the narrow long-form text measure (article body copy).
 * - `article`: the article shell width (headings, meta, callouts).
 * - `bleed`: no max-width, no gutter; for full-width photographic bands.
 */
export function Container({ variant = "content", className, style, children, ...props }: ContainerProps) {
  const isBleed = variant === "bleed";
  return (
    <div
      className={cn("mx-auto w-full", !isBleed && "px-[var(--ds-container-gutter)]", className)}
      style={{ maxWidth: maxWidthVar[variant], ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
