import { cn } from "@/lib/utils";

export interface SpecimenProps {
  label: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}

/** Labeled row wrapper for one typography/spacing/token specimen. */
export function Specimen({ label, meta, children, className }: SpecimenProps) {
  return (
    <div className={cn("border-b border-[var(--ds-color-border-subtle)] py-[var(--ds-space-5)]", className)}>
      <div className="mb-[var(--ds-space-2)] flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-[var(--ds-font-body)] text-[length:var(--ds-text-eyebrow)] font-semibold uppercase tracking-[var(--ds-tracking-wider)] text-[var(--ds-color-text-subtle)]">
          {label}
        </p>
        {meta && (
          <p className="font-[var(--ds-font-mono)] text-[length:var(--ds-text-caption)] text-[var(--ds-color-text-subtle)]">
            {meta}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
