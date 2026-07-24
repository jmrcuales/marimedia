import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "neutral" | "primary" | "success" | "warning" | "error" | "health";

const toneClassName: Record<BadgeTone, string> = {
  neutral: "bg-[var(--ds-color-surface-muted)] text-[var(--ds-color-text)]",
  primary: "bg-[var(--ds-color-primary)] text-[var(--ds-color-primary-foreground)]",
  success: "bg-[var(--ds-color-surface)] text-[var(--ds-color-success)] border border-[var(--ds-color-success)]/30",
  warning: "bg-[var(--ds-color-warning-surface)] text-[var(--ds-color-warning)]",
  error: "bg-[var(--ds-color-error-surface)] text-[var(--ds-color-error)]",
  health: "bg-[var(--ds-color-health-surface)] text-[var(--ds-color-health-text)]",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  children?: React.ReactNode;
}

/** Small status/state indicator. Not interactive; see `Chip` for a removable/selectable pill. */
export function Badge({ tone = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--ds-radius-badge)] px-2.5 py-1 font-[var(--ds-font-body)] text-[length:var(--ds-text-caption)] font-semibold leading-none",
        toneClassName[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
