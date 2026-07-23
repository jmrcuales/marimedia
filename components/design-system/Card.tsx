import * as React from "react";
import { cn } from "@/lib/utils";
import { Surface, type SurfaceTreatment, type SurfaceTone } from "./Surface";

export type CardPadding = "sm" | "md" | "lg" | "none";

const paddingClassName: Record<CardPadding, string> = {
  none: "",
  sm: "p-[var(--ds-space-card-padding-sm)]",
  md: "p-[var(--ds-space-card-padding-md)]",
  lg: "p-[var(--ds-space-card-padding-lg)]",
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  treatment?: SurfaceTreatment;
  tone?: SurfaceTone;
  padding?: CardPadding;
  /** Lifts the card on hover; use for clickable cards, not static content blocks. */
  interactive?: boolean;
  children?: React.ReactNode;
}

/** General-purpose content card. See `EditorialCard`, `ArticleCard`, and `FeaturedArticle` for composed, opinionated variants built on top of this. */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ treatment = "bordered", tone = "surface", padding = "md", interactive = false, className, children, ...props }, ref) => {
    return (
      <Surface
        ref={ref}
        treatment={treatment}
        tone={tone}
        className={cn(
          paddingClassName[padding],
          interactive &&
            "transition-[box-shadow,transform] duration-[var(--ds-duration-medium)] ease-[var(--ds-ease-editorial)] hover:-translate-y-1 hover:shadow-[var(--ds-shadow-md)] motion-reduce:hover:translate-y-0",
          className
        )}
        {...props}
      >
        {children}
      </Surface>
    );
  }
);

Card.displayName = "Card";
