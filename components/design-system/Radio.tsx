import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

/**
 * Accessible radio input, styled the same way as `Checkbox`: a real
 * `<input type="radio">` drives a token-styled visual dot via the CSS
 * `peer` sibling pattern.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
            type="radio"
            className="peer absolute inset-0 h-5 w-5 cursor-pointer opacity-0"
            {...props}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full border border-[var(--ds-color-border)] bg-[var(--ds-color-surface)] transition-[background-color,border-color] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] motion-reduce:transition-none peer-checked:border-[var(--ds-color-primary)] peer-focus-visible:outline peer-focus-visible:outline-[var(--ds-focus-ring-width)] peer-focus-visible:outline-offset-[var(--ds-focus-ring-offset)] peer-focus-visible:outline-[var(--ds-focus-ring-color)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 scale-0 rounded-full bg-[var(--ds-color-primary)] transition-transform duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] peer-checked:scale-100 motion-reduce:transition-none"
          />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";
