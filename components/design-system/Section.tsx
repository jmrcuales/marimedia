import * as React from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerVariant } from "./Container";

export type SectionSpacing = "sm" | "md" | "lg";
export type SectionTone = "page" | "surface" | "surface-muted";

const spacingVar: Record<SectionSpacing, string> = {
  sm: "var(--ds-space-section-y-sm)",
  md: "var(--ds-space-section-y-md)",
  lg: "var(--ds-space-section-y-lg)",
};

const toneClassName: Record<SectionTone, string> = {
  page: "bg-[var(--ds-color-bg)]",
  surface: "bg-[var(--ds-color-surface)]",
  "surface-muted": "bg-[var(--ds-color-surface-muted)]",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Vertical rhythm for the section. Defaults to the standard editorial section spacing. */
  spacing?: SectionSpacing;
  tone?: SectionTone;
  /** Passed straight through to the inner `Container`; set `false` to render children edge-to-edge (e.g. a bleed photography band). */
  container?: ContainerVariant | false;
  /** Enables the restrained editorial reveal-on-mount treatment (respects `prefers-reduced-motion`). */
  reveal?: boolean;
  children?: React.ReactNode;
}

/**
 * The single wrapper every design-system page composition uses for a
 * full section: owns vertical rhythm (spacing) and background tone, and
 * optionally wraps children in a `Container` so pages never hand-roll
 * `py-*`/`max-w-*` combinations.
 */
export function Section({
  spacing = "md",
  tone = "page",
  container = "content",
  reveal = false,
  className,
  style,
  children,
  ...props
}: SectionProps) {
  const content = container === false ? children : <Container variant={container}>{children}</Container>;

  return (
    <section
      className={cn(toneClassName[tone], reveal && "mm-ds-reveal", className)}
      style={{ paddingTop: spacingVar[spacing], paddingBottom: spacingVar[spacing], ...style }}
      {...props}
    >
      {content}
    </section>
  );
}
