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
}: LabSectionProps) {
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
        {children}
      </div>
    </section>
  );
}
