import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Renders a remove control; `onRemove` fires on click and Enter/Space. */
  onRemove?: () => void;
  removeLabel?: string;
  selected?: boolean;
  children?: React.ReactNode;
}

/**
 * Interactive pill: a selectable/removable filter or category token.
 * (`Tag`, in contrast, is a static editorial label with no interaction.)
 */
export function Chip({ onRemove, removeLabel = "Remove", selected = false, className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--ds-radius-chip)] border px-3 py-1.5 font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] font-medium transition-[background-color,border-color,color] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] motion-reduce:transition-none",
        selected
          ? "border-[var(--ds-color-primary)] bg-[var(--ds-color-primary)] text-[var(--ds-color-primary-foreground)]"
          : "border-[var(--ds-color-border)] bg-[var(--ds-color-surface)] text-[var(--ds-color-text)]",
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={removeLabel}
          className="-mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full transition-colors duration-[var(--ds-duration-fast)] hover:bg-[var(--ds-color-text)]/10 focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-offset-1 focus-visible:outline-[var(--ds-focus-ring-color)]"
        >
          <X className="h-3 w-3" aria-hidden="true" />
        </button>
      )}
    </span>
  );
}
