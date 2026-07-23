import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, Heading, BodyLarge } from "./Typography";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  align?: "left" | "center";
  className?: string;
  actions?: React.ReactNode;
}

/**
 * Shared eyebrow + heading + description + optional actions block. The
 * design-system counterpart to `components/ui/SectionHeading.tsx`
 * (production, untouched by this phase); this version is token-driven and
 * is what a future homepage rebuild would adopt.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  level = 2,
  align = "left",
  className,
  actions,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[var(--ds-space-stack-md)]",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className={cn("flex flex-col gap-[var(--ds-space-stack-sm)]", align === "center" && "items-center")}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading level={level}>{title}</Heading>
        {description && (
          <BodyLarge className={cn("text-[var(--ds-color-text-muted)]", align === "center" && "max-w-2xl")}>
            {description}
          </BodyLarge>
        )}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
    </div>
  );
}
