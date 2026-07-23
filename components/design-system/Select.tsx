import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { fieldBaseClassName } from "./Input";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          aria-invalid={invalid || undefined}
          className={cn(
            fieldBaseClassName,
            "h-11 appearance-none pl-4 pr-10",
            invalid
              ? "border-[var(--ds-color-error)] focus:border-[var(--ds-color-error)] focus:ring-[var(--ds-color-error)]/20"
              : "border-[var(--ds-color-border)] focus:border-[var(--ds-color-primary)] focus:ring-[var(--ds-color-primary)]/20",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ds-color-text-muted)]"
        />
      </div>
    );
  }
);

Select.displayName = "Select";
