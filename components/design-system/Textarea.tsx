import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldBaseClassName } from "./Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          fieldBaseClassName,
          "min-h-[7.5rem] px-4 py-3 resize-none",
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

Textarea.displayName = "Textarea";
