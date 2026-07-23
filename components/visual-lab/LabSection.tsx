import { cn } from "@/lib/utils";

export type LabSectionProps = {
  id: string;
  navLabel: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternates the section background so long pages stay readable. */
  tone?: "page" | "surface-alt";
  /**
   * When set, wraps `children` in a native `<details>` disclosure instead
   * of rendering them directly. The `h2` heading stays outside the
   * disclosure (so it remains a real, always-present landmark for jump
   * links and screen-reader navigation); only the detailed reference
   * content collapses by default. Used for the static documentation
   * sections that sit below the interactive Live Website Preview.
   */
  collapsibleSummary?: string;
};

/**
 * Shared section frame for every lab subsection (typography, color,
 * composition, ribbon, shape/surface, buttons, photography, motion).
 * Handles the heading hierarchy (each section owns one `h2`) and anchor
 * target used by `LabNav`.
 */
export function LabSection({
  id,
  title,
  description,
  children,
  className,
  tone = "page",
  collapsibleSummary,
}: LabSectionProps) {
  const content = collapsibleSummary ? (
    <details className="group">
      <summary className="mm-motion-demo inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-4 py-2 text-sm font-semibold text-[var(--lab-text-primary)] transition-colors hover:bg-[var(--lab-bg-surface-alt)]">
        <span aria-hidden className="transition-transform group-open:rotate-90">
          &rsaquo;
        </span>
        {collapsibleSummary}
      </summary>
      <div className="pt-8">{children}</div>
    </details>
  ) : (
    children
  );

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 border-b border-[var(--lab-divider)] px-4 py-16 sm:px-6 lg:px-8",
        tone === "surface-alt" && "bg-[var(--lab-bg-surface-alt)]",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <h2
            id={`${id}-heading`}
            className="text-2xl font-bold text-[var(--lab-text-primary)] sm:text-3xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base text-[var(--lab-text-secondary)]">{description}</p>
          )}
        </div>
        {content}
      </div>
    </section>
  );
}
