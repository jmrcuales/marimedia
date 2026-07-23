import * as React from "react";
import { AlertTriangle, FlaskConical, Info, ShieldAlert, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";
import { Body } from "./Typography";

export type CalloutVariant = "info" | "safety" | "evidence" | "warning" | "error" | "health" | "disclaimer";

interface VariantStyle {
  wrapper: string;
  icon: string;
  title: string;
  Icon: typeof Info;
}

const variantStyles: Record<CalloutVariant, VariantStyle> = {
  info: {
    wrapper: "bg-[var(--ds-color-surface)] border-[var(--ds-color-border-subtle)]",
    icon: "text-[var(--ds-color-text-muted)]",
    title: "text-[var(--ds-color-text)]",
    Icon: Info,
  },
  safety: {
    wrapper: "bg-[var(--ds-color-warning-surface)] border-[var(--ds-color-warning)]/30",
    icon: "text-[var(--ds-color-warning)]",
    title: "text-[var(--ds-color-warning)]",
    Icon: AlertTriangle,
  },
  evidence: {
    wrapper: "bg-[var(--ds-color-surface)] border-[var(--ds-color-border)]",
    icon: "text-[var(--ds-color-primary)]",
    title: "text-[var(--ds-color-text)]",
    Icon: FlaskConical,
  },
  warning: {
    wrapper: "bg-[var(--ds-color-warning-surface)] border-[var(--ds-color-warning)]/30",
    icon: "text-[var(--ds-color-warning)]",
    title: "text-[var(--ds-color-warning)]",
    Icon: AlertTriangle,
  },
  error: {
    wrapper: "bg-[var(--ds-color-error-surface)] border-[var(--ds-color-error)]/30",
    icon: "text-[var(--ds-color-error)]",
    title: "text-[var(--ds-color-error)]",
    Icon: ShieldAlert,
  },
  health: {
    wrapper: "bg-[var(--ds-color-health-surface)] border-[var(--ds-palette-muted-green)]/40",
    icon: "text-[var(--ds-color-health-text)]",
    title: "text-[var(--ds-color-health-text)]",
    Icon: HeartPulse,
  },
  disclaimer: {
    wrapper: "bg-[var(--ds-color-surface-muted)] border-[var(--ds-color-border-subtle)]",
    icon: "text-[var(--ds-color-text-subtle)]",
    title: "text-[var(--ds-color-text-muted)]",
    Icon: Info,
  },
};

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariant;
  title?: string;
  children?: React.ReactNode;
}

/**
 * Editorial callout. Token-driven counterpart to
 * `components/blog/Callout.tsx` (production, untouched by this phase),
 * for future adoption once article rendering is migrated to this system.
 */
export function Callout({ variant = "info", title, children, className, ...props }: CalloutProps) {
  const styles = variantStyles[variant];
  const { Icon } = styles;
  const isDisclaimer = variant === "disclaimer";

  return (
    <div
      role={variant === "safety" || variant === "error" ? "note" : undefined}
      className={cn(
        "flex gap-[var(--ds-space-3)] rounded-[var(--ds-radius-surface)] border p-[var(--ds-space-5)]",
        styles.wrapper,
        isDisclaimer && "italic",
        className
      )}
      {...props}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", styles.icon)} aria-hidden="true" />
      <div className="min-w-0 flex-1 space-y-[var(--ds-space-stack-xs)]">
        {title && (
          <p className={cn("font-[var(--ds-font-body)] text-[length:var(--ds-text-body)] font-bold not-italic", styles.title)}>
            {title}
          </p>
        )}
        {typeof children === "string" ? (
          <Body className="text-[var(--ds-color-text-muted)]">{children}</Body>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
