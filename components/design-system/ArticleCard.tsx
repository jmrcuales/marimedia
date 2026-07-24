import * as React from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { ArticleSummary } from "@/types/article";
import { formatArticleDate } from "@/types/article";
import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { ImageFrame } from "./ImageFrame";
import { Eyebrow, Heading, BodySmall, Caption } from "./Typography";

export interface ArticleCardProps {
  article: ArticleSummary;
  className?: string;
}

/**
 * Design-system article card, reusing the same `ArticleSummary` shape as
 * production content (`types/article.ts`) so a future migration is a
 * drop-in swap. The current production card
 * (`components/blog/ArticleCard.tsx`) is untouched by this phase; this is
 * the token-driven version documented at `/internal/design-system`.
 */
export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={cn(
        "group block rounded-[var(--ds-radius-surface)] focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-offset-[var(--ds-focus-ring-offset)] focus-visible:outline-[var(--ds-focus-ring-color)]",
        className
      )}
    >
      <Card padding="none" interactive className="flex h-full flex-col overflow-hidden">
        <ImageFrame
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          ratio="wide"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          focalPoint={article.heroImage.focalPoint}
          frameClassName="rounded-none border-0"
        />
        <div className="flex flex-1 flex-col gap-[var(--ds-space-stack-sm)] p-[var(--ds-space-card-padding-md)]">
          <Eyebrow>{article.category}</Eyebrow>
          <Heading level={4} className="leading-snug transition-colors duration-[var(--ds-duration-fast)] group-hover:text-[var(--ds-color-primary)]">
            {article.title}
          </Heading>
          <BodySmall className="flex-1 text-[var(--ds-color-text-muted)]">{article.excerpt}</BodySmall>
          <div className="mt-[var(--ds-space-stack-xs)] flex items-center justify-between border-t border-[var(--ds-color-border-subtle)] pt-[var(--ds-space-3)]">
            <Caption>{formatArticleDate(article.publishedAt)}</Caption>
            <Caption className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readingTimeMinutes} min read
            </Caption>
          </div>
        </div>
      </Card>
    </Link>
  );
}
