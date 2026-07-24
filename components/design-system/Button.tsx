import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "default" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseClassName = cn(
  "inline-flex items-center justify-center gap-2 rounded-[var(--ds-radius-button)] font-[var(--ds-font-body)] text-[length:var(--ds-text-button)] font-semibold",
  "transition-[background-color,color,border-color,box-shadow,transform] duration-[var(--ds-duration-medium)] ease-[var(--ds-ease-editorial)] motion-reduce:transition-none",
  "disabled:opacity-50 disabled:pointer-events-none",
  "focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-offset-[var(--ds-focus-ring-offset)] focus-visible:outline-[var(--ds-focus-ring-color)]"
);

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--ds-color-primary)] text-[var(--ds-color-primary-foreground)] shadow-[var(--ds-shadow-sm)] hover:bg-[var(--ds-color-primary-hover)] hover:shadow-[var(--ds-shadow-md)] hover:-translate-y-px",
  secondary:
    "bg-[var(--ds-color-surface)] text-[var(--ds-color-text)] border border-[var(--ds-color-border)] hover:bg-[var(--ds-color-surface-muted)] hover:-translate-y-px",
  outline:
    "bg-transparent text-[var(--ds-color-primary)] border border-[var(--ds-color-primary)] hover:bg-[var(--ds-color-primary)] hover:text-[var(--ds-color-primary-foreground)]",
  ghost: "bg-transparent text-[var(--ds-color-text)] hover:bg-[var(--ds-color-surface-muted)]",
};

const sizeClassName: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[length:var(--ds-text-body-sm)]",
  default: "h-11 px-6",
  lg: "h-[3.25rem] px-8 text-[length:var(--ds-text-body-lg)]",
};

/**
 * Shared class builder so any element (a real `<button>`, or a `next/link`
 * styled as one via `ButtonLink`) can render the exact same visual button.
 */
export function buttonClassName(variant: ButtonVariant = "primary", size: ButtonSize = "default", className?: string) {
  return cn(baseClassName, variantClassName[variant], sizeClassName[size], className);
}

/**
 * Production button. Medium-rounded corners (`--ds-radius-button`),
 * subtle default shadow, restrained editorial-ease hover motion. Primary
 * is the only filled variant that pairs a color with white text (Compass
 * Pastel Red never carries white text; see `tokens.css`).
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return <button ref={ref} className={buttonClassName(variant, size, className)} {...props} />;
  }
);

Button.displayName = "Button";

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * A link (typically wrapping `next/link`'s `<Link>` via `asChild`-free
 * composition: pass `href` directly, or spread onto a `Link`) styled
 * exactly like `Button`. Keeps buttons that navigate as real `<a>`
 * elements instead of nesting an `<a>` inside a `<button>`.
 */
export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return <a ref={ref} className={buttonClassName(variant, size, className)} {...props} />;
  }
);

ButtonLink.displayName = "ButtonLink";
