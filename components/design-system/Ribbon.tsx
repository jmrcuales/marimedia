import * as React from "react";
import { cn } from "@/lib/utils";

export interface RibbonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A very slow, low-amplitude gradient drift. Off by default; only enable where a section transition genuinely benefits, per Compass Section 21 ("use it selectively and consistently"). Always respects `prefers-reduced-motion`. */
  animated?: boolean;
}

/**
 * Mari Media's fluid ribbon motif, restricted to the Phase 1-approved
 * "minimal line" direction: a thin, low-weight gradient line used to mark
 * a section transition. It never obscures text, never overlaps unrelated
 * content, and carries no meaning on its own beyond a restrained brand
 * signature (Compass Section 21).
 */
export function Ribbon({ animated = false, className, ...props }: RibbonProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-animated={animated}
      className={cn(
        "mm-ds-ribbon-line h-[2px] w-full rounded-[var(--ds-radius-full)] bg-gradient-to-r from-[var(--ds-color-primary)] via-[var(--ds-color-accent)] to-transparent motion-reduce:!animate-none",
        className
      )}
      {...props}
    />
  );
}
