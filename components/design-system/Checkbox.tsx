import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

/**
 * Accessible checkbox: a real, natively-behaving `<input type="checkbox">`
 * sits on top of (and drives, via the CSS `peer` pattern) a token-styled
 * visual box, so labels, keyboard interaction, and assistive tech all
 * work exactly as a native checkbox would.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex items-start gap-3 font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] text-[var(--ds-color-text)]",
          props.disabled && "cursor-not-allowed opacity-50",
          !props.disabled && "cursor-pointer",
          className
        )}
      >
        <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            className="peer absolute inset-0 h-5 w-5 cursor-pointer opacity-0"
            {...props}
          />
          {/* Both the box and the checkmark are direct siblings of the
              `peer` input (not nested inside each other), which is what
              lets Tailwind's `peer-checked:` sibling-combinator utilities
              actually apply to each of them. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[var(--ds-radius-xs)] border border-[var(--ds-color-border)] bg-[var(--ds-color-surface)] transition-[background-color,border-color] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] motion-reduce:transition-none peer-checked:border-[var(--ds-color-primary)] peer-checked:bg-[var(--ds-color-primary)] peer-focus-visible:outline peer-focus-visible:outline-[var(--ds-focus-ring-width)] peer-focus-visible:outline-offset-[var(--ds-focus-ring-offset)] peer-focus-visible:outline-[var(--ds-focus-ring-color)]"
          />
          <Check
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-3.5 w-3.5 text-[var(--ds-color-primary-foreground)] opacity-0 transition-opacity duration-[var(--ds-duration-fast)] peer-checked:opacity-100 motion-reduce:transition-none"
          />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
