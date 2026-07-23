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
}

/**
 * The single dominant lead-article module for a magazine-style editorial
 * spread (Compass Section 20/28: "one dominant feature article with
 * supporting stories"). Pairs with `ArticleCard` for the supporting
 * stories around it. Not itself a page layout: `/blog` (production)
 * keeps its own current markup.
 */
export function FeaturedArticle({ article, className }: FeaturedArticleProps) {
  return (
    <Card padding="none" treatment="elevated" className={cn("grid overflow-hidden md:grid-cols-2", className)}>
      <ImageFrame
        src={article.heroImage.src}
        alt={article.heroImage.alt}
        ratio="landscape"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        frameClassName="h-full rounded-none border-0"
        className="h-full"
      />
      <div className="flex flex-col justify-center gap-[var(--ds-space-stack-md)] p-[var(--ds-space-card-padding-lg)]">
        <div className="flex items-center gap-3">
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
        <div className="flex items-center gap-4">
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
