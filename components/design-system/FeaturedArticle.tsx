import * as React from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { ArticleSummary } from "@/types/article";
import { formatArticleDate } from "@/types/article";
import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { ImageFrame } from "./ImageFrame";
import { Tag } from "./Tag";
import { Eyebrow, Heading, BodyLarge, Caption } from "./Typography";
import { buttonClassName } from "./Button";

export interface FeaturedArticleProps {
  article: ArticleSummary;
  className?: string;
  /**
   * Only pass `true` when this instance renders as the page's likely LCP
   * image (e.g. placed at the very top of a page). Its one production
   * usage today, `HealthArticlesSpread`, sits well below the fold on the
   * homepage, so this defaults to `false` there rather than forcing an
   * eager fetch of an offscreen image (MARIWEB-009 image-readiness pass).
   */
  priority?: boolean;
}

/**
 * The single dominant lead-article module for a magazine-style editorial
 * spread (Compass Section 20/28).
 *
 * Responsive layout (MARIWEB-009.5 polish): stacked image-above-copy
 * through tablet widths, then a true magazine split only at >=1440px.
 * The previous `md:grid-cols-2` start forced a cramped two-column layout
 * at 768–1024 where `h-full` + a fixed landscape aspect ratio crowded
 * (and could visually collide with) the text column. Stacking on tablet
 * is the intentional composition for that width, not a shrunk desktop.
 */
export function FeaturedArticle({ article, className, priority = false }: FeaturedArticleProps) {
  return (
    <Card
      padding="none"
      treatment="elevated"
      className={cn(
        "grid grid-cols-1 overflow-hidden min-[1440px]:grid-cols-2 min-[1440px]:items-stretch",
        className
      )}
    >
      <ImageFrame
        src={article.heroImage.src}
        alt={article.heroImage.alt}
        ratio="wide"
        sizes="(min-width: 1440px) 50vw, 100vw"
        priority={priority}
        focalPoint={article.heroImage.focalPoint}
        className="min-[1440px]:h-full"
        frameClassName="rounded-none border-0 min-[1440px]:aspect-auto min-[1440px]:h-full min-[1440px]:min-h-[20rem]"
      />
      <div className="flex flex-col justify-center gap-[var(--ds-space-stack-md)] p-[var(--ds-space-card-padding-md)] sm:p-[var(--ds-space-card-padding-lg)]">
        <div className="flex flex-wrap items-center gap-3">
          <Tag>Featured</Tag>
          <Eyebrow>{article.category}</Eyebrow>
        </div>
        <Heading level={2}>
          <Link
            href={`/blog/${article.slug}`}
            className="transition-colors duration-[var(--ds-duration-fast)] hover:text-[var(--ds-color-primary)] focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-offset-[var(--ds-focus-ring-offset)] focus-visible:outline-[var(--ds-focus-ring-color)]"
          >
            {article.title}
          </Link>
        </Heading>
        <BodyLarge className="text-[var(--ds-color-text-muted)]">{article.excerpt}</BodyLarge>
        <div className="flex flex-wrap items-center gap-4">
          <Caption>{formatArticleDate(article.publishedAt)}</Caption>
          <Caption className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTimeMinutes} min read
          </Caption>
        </div>
        <div>
          <Link href={`/blog/${article.slug}`} className={buttonClassName("outline", "sm")}>
            Read the article
          </Link>
        </div>
      </div>
    </Card>
  );
}
