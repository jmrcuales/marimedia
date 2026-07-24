import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, type CardProps, type CardPadding } from "./Card";
import { Eyebrow, Heading, Body } from "./Typography";
import { ImageFrame, type ImageFrameRatio } from "./ImageFrame";

const paddingVar: Record<Exclude<CardPadding, "none">, string> = {
  sm: "var(--ds-space-card-padding-sm)",
  md: "var(--ds-space-card-padding-md)",
  lg: "var(--ds-space-card-padding-lg)",
};

export interface EditorialCardProps extends Omit<CardProps, "children" | "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: { src: string; alt: string; ratio?: ImageFrameRatio };
  level?: 2 | 3 | 4 | 5;
  footer?: React.ReactNode;
}

/**
 * Composed editorial block: optional image, eyebrow, heading, description,
 * optional footer (e.g. a link or metadata row). Used for "What We Do"
 * capability lines, partner/reader value blocks, and similar editorial
 * compositions once a page adopts the design system; not itself a page
 * layout.
 */
export function EditorialCard({
  eyebrow,
  title,
  description,
  image,
  level = 3,
  footer,
  className,
  padding = "lg",
  ...cardProps
}: EditorialCardProps) {
  return (
    <Card padding={padding} className={cn("flex flex-col gap-[var(--ds-space-stack-md)]", className)} {...cardProps}>
      {image && padding !== "none" && (
        <ImageFrame
          src={image.src}
          alt={image.alt}
          ratio={image.ratio ?? "landscape"}
          className="mb-[var(--ds-space-stack-sm)]"
          style={{ margin: `calc(${paddingVar[padding]} * -1) calc(${paddingVar[padding]} * -1) 0` }}
          frameClassName="rounded-none border-0"
        />
      )}
      <div className="flex flex-col gap-[var(--ds-space-stack-sm)]">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading level={level}>{title}</Heading>
        {description && <Body className="text-[var(--ds-color-text-muted)]">{description}</Body>}
      </div>
      {footer && <div className="mt-[var(--ds-space-stack-sm)]">{footer}</div>}
    </Card>
  );
}
