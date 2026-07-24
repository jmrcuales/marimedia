import * as React from "react";
import { cn } from "@/lib/utils";

export type TagTone = "accent" | "neutral" | "health";

const toneClassName: Record<TagTone, string> = {
  accent: "bg-[var(--ds-color-accent)] text-[var(--ds-color-accent-foreground)]",
  neutral: "bg-[var(--ds-color-surface-muted)] text-[var(--ds-color-text-muted)]",
  health: "bg-[var(--ds-color-health-surface)] text-[var(--ds-color-health-text)]",
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone;
  children?: React.ReactNode;
}

/**
 * Static editorial label (category, "Featured", content taxonomy). No
 * interaction and no remove control; use `Chip` for selectable/removable
 * pills instead.
 */
export function Tag({ tone = "accent", className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--ds-radius-full)] px-2.5 py-1 font-[var(--ds-font-body)] text-[length:var(--ds-text-eyebrow)] font-semibold uppercase tracking-[var(--ds-tracking-wider)]",
        toneClassName[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
