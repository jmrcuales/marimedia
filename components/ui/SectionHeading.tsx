import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** "default" matches most sections; "compact" matches lower-emphasis strips like Future Vision. */
  size?: "default" | "compact";
  align?: "center" | "left";
  className?: string;
  descriptionClassName?: string;
}

/**
 * Shared eyebrow + heading + optional description block used across
 * homepage sections. Renders its own eyebrow markup rather than importing
 * `components/blog/SectionEyebrow.tsx`, which stays scoped to blog rendering
 * for now (Phase 1 decision; revisit shared eyebrow consolidation in Phase 2).
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  size = "default",
  align = "center",
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  const isCompact = size === "compact";
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        isCentered ? "text-center" : "text-left",
        isCompact ? "mb-8" : "mb-16",
        className
      )}
    >
      {eyebrow && (
        <span className="block text-sm font-semibold text-primary uppercase tracking-wider">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-bold text-[#222222]",
          isCompact ? "text-2xl md:text-3xl mt-2 mb-3" : "text-4xl md:text-5xl mt-3 mb-5"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-gray-600",
            isCompact ? "text-base" : "text-lg",
            isCentered && "max-w-2xl mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
