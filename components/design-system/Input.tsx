import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Renders the error border/focus treatment; pair with a visible error message for accessibility. */
  invalid?: boolean;
}

const fieldBaseClassName = cn(
  "flex w-full rounded-[var(--ds-radius-form)] border bg-[var(--ds-color-surface)] font-[var(--ds-font-body)] text-[length:var(--ds-text-body)] text-[var(--ds-color-text)]",
  "placeholder:text-[var(--ds-color-text-subtle)]",
  "transition-[border-color,box-shadow] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] motion-reduce:transition-none",
  "focus:outline-none focus:ring-2 focus:ring-offset-0",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={invalid || undefined}
        className={cn(
          fieldBaseClassName,
          "h-11 px-4",
          invalid
            ? "border-[var(--ds-color-error)] focus:border-[var(--ds-color-error)] focus:ring-[var(--ds-color-error)]/20"
            : "border-[var(--ds-color-border)] focus:border-[var(--ds-color-primary)] focus:ring-[var(--ds-color-primary)]/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { fieldBaseClassName };
