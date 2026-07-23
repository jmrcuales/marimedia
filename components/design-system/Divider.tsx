import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  /** Optional short label centered on the line (e.g. "Next section"). */
  label?: string;
}

export function Divider({ orientation = "horizontal", label, className, ...props }: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px self-stretch bg-[var(--ds-color-divider)]", className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn("flex items-center gap-4", className)}
        {...props}
      >
        <span className="h-px flex-1 bg-[var(--ds-color-divider)]" />
        <span className="font-[var(--ds-font-body)] text-[length:var(--ds-text-eyebrow)] font-semibold uppercase tracking-[var(--ds-tracking-wider)] text-[var(--ds-color-text-subtle)]">
          {label}
        </span>
        <span className="h-px flex-1 bg-[var(--ds-color-divider)]" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("h-px w-full bg-[var(--ds-color-divider)]", className)}
      {...props}
    />
  );
}
