import { cn } from "@/lib/utils";
import { Container, type ContainerVariant } from "../Container";

export interface ReferenceSectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  tone?: "page" | "surface-alt";
  container?: ContainerVariant;
  className?: string;
}

/**
 * Scaffolding for one section of the `/internal/design-system` reference
 * page only (not part of the reusable component inventory). Mirrors
 * `components/visual-lab/LabSection.tsx`'s heading/anchor pattern from
 * Phase 1 for consistency.
 */
export function ReferenceSection({
  id,
  title,
  description,
  children,
  tone = "page",
  container = "wide",
  className,
}: ReferenceSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 border-b border-[var(--ds-color-border-subtle)] py-[var(--ds-space-section-y-sm)]",
        tone === "surface-alt" && "bg-[var(--ds-color-surface-muted)]",
        className
      )}
    >
      <Container variant={container}>
        <div className="mb-[var(--ds-space-8)] max-w-3xl">
          <h2
            id={`${id}-heading`}
            className="font-[var(--ds-font-display)] text-[length:var(--ds-text-h2)] font-bold leading-[var(--ds-leading-heading)] tracking-[var(--ds-tracking-tight)] text-[var(--ds-color-text)]"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-[var(--ds-space-3)] font-[var(--ds-font-body)] text-[length:var(--ds-text-body-lg)] text-[var(--ds-color-text-muted)]">
              {description}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
