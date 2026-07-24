import * as React from "react";
import { cn } from "@/lib/utils";

export type SurfaceTreatment = "flat" | "bordered" | "elevated";
export type SurfaceTone = "surface" | "surface-muted" | "page";

const toneClassName: Record<SurfaceTone, string> = {
  surface: "bg-[var(--ds-color-surface)]",
  "surface-muted": "bg-[var(--ds-color-surface-muted)]",
  page: "bg-[var(--ds-color-bg)]",
};

const treatmentClassName: Record<SurfaceTreatment, string> = {
  flat: "",
  bordered: "border border-[var(--ds-color-border-subtle)] shadow-[var(--ds-shadow-none)]",
  elevated: "border border-transparent shadow-[var(--ds-shadow-sm)]",
};

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  treatment?: SurfaceTreatment;
  tone?: SurfaceTone;
  /** Rounds the surface using the shared "soft radius" token. Set `false` for edge-to-edge surfaces. */
  rounded?: boolean;
  children?: React.ReactNode;
}

/**
 * The base primitive behind `Card`, `Callout`, `EditorialCard`, and any
 * other bordered/elevated block. Approved baseline is "bordered editorial
 * surfaces" with "subtle shadows", so `bordered` is the default
 * treatment; `elevated` exists for the small number of surfaces the
 * Compass calls out for selective elevation (forms, the featured
 * article), and `flat` for sections that separate through spacing alone.
 */
export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ treatment = "bordered", tone = "surface", rounded = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          toneClassName[tone],
          treatmentClassName[treatment],
          rounded && "rounded-[var(--ds-radius-surface)]",
          "transition-[box-shadow] duration-[var(--ds-duration-medium)] ease-[var(--ds-ease-standard)] motion-reduce:transition-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Surface.displayName = "Surface";
