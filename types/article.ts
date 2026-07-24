import type { LucideIcon } from "lucide-react";

/**
 * Editorial content taxonomy. A typed union (rather than a bare `string`)
 * makes it possible to add category navigation/filtering later without
 * touching every article entry.
 */
export const articleCategories = [
  "Functional Medicine",
  "Preventive Health",
  "Health Events",
  "Health Trends",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

/** Publication state. Draft articles never reach public lookups, listings, or routes. */
export type ArticleStatus = "draft" | "published";

/** Article byline. Kept intentionally small; extend only when a real need appears. */
export interface ArticleAuthor {
  name: string;
}

/** A single image with the metadata required to render it accessibly. */
export interface ArticleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Optional focal point for `object-cover` crops (MARIWEB-010). Required
   * whenever a portrait source is displayed in a wide or landscape frame.
   */
  focalPoint?: {
    x: number;
    y: number;
  };
}

/** SEO-facing title/description, generated into page metadata and JSON-LD. */
export interface ArticleSEO {
  title: string;
  description: string;
}

/** A single feature/topic card used inside a `cardGrid` block. */
export interface ArticleFeatureCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** A single line item inside a `checklist` block. Optionally links out. */
export interface ArticleChecklistItem {
  text: string;
  href?: string;
}

/** A single figure inside a `statGrid` block (e.g. "60 / Minutes / ..."). */
export interface ArticleStatItem {
  value: string;
  label: string;
  description: string;
}

/** A single citation inside an article's reference list. */
export interface ArticleReference {
  source: string;
  title: string;
  url: string;
}

export type ArticleCalloutVariant = "safety" | "evidence" | "info" | "disclaimer";

/** A simple link button authored directly as part of an article's hero content. */
export interface ArticleCtaLink {
  label: string;
  href: string;
}

/**
 * Rich, structured article content. Every long-form article is authored as
 * an array of these typed blocks instead of raw HTML or one-off JSX, which
 * keeps rendering data-driven and safe (no `dangerouslySetInnerHTML` from an
 * untrusted source) while covering headings, paragraphs, lists, images,
 * callouts/evidence notes, and two-column layouts. The `cta` block is a
 * future inline call-to-action insertion point: it resolves through the CTA
 * extension-point module (see `lib/cta.ts`) and renders nothing until a real
 * CTA is configured for that placement.
 */
export type ArticleContentBlock =
  | { type: "eyebrow"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id?: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
      focalPoint?: {
        x: number;
        y: number;
      };
    }
  | { type: "cardGrid"; columns: 2 | 3 | 4; items: ArticleFeatureCardItem[] }
  | { type: "checklist"; heading?: string; items: ArticleChecklistItem[] }
  | {
      type: "callout";
      variant: ArticleCalloutVariant;
      title?: string;
      text: string;
    }
  | { type: "statGrid"; items: ArticleStatItem[] }
  /** Two side-by-side sub-columns on desktop, stacked on mobile. */
  | { type: "twoColumn"; columns: [ArticleContentBlock[], ArticleContentBlock[]] }
  /** Inline call-to-action insertion point; see module doc above. */
  | { type: "cta"; placement: "article-inline-cta" };

/**
 * Full article record, including the long-form body. Used for the single
 * article page. Draft articles carry this same shape, but the content
 * repository (`lib/articles.ts`) never returns them from public lookups.
 */
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  tags?: string[];
  author: ArticleAuthor;
  heroImage: ArticleImage;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  featured: boolean;
  seo: ArticleSEO;
  /**
   * The hero's introductory paragraph, shown under the H1 (before any CTAs).
   * Falls back to `excerpt` for articles that don't define one.
   */
  heroIntro?: string;
  /** Optional hero call-to-action buttons rendered under the intro paragraph. */
  heroCtas?: ArticleCtaLink[];
  content: ArticleContentBlock[];
  references?: ArticleReference[];
  /** Overrides the site's default end-of-article medical disclaimer text. */
  disclaimer?: string;
  status: ArticleStatus;
}

/**
 * Lightweight projection of `Article` for list/card contexts (the blog
 * index, related-article rails, etc.) that never need the full body.
 */
export type ArticleSummary = Pick<
  Article,
  | "id"
  | "slug"
  | "title"
  | "excerpt"
  | "category"
  | "tags"
  | "author"
  | "heroImage"
  | "publishedAt"
  | "updatedAt"
  | "readingTimeMinutes"
  | "featured"
>;

/**
 * Rough estimate of reading time from an `ArticleContentBlock[]`, based on
 * an average adult silent-reading pace (~200 words/minute). Only counts
 * blocks that contain prose so structural blocks like images don't skew it.
 */
export function estimateReadingTime(blocks: ArticleContentBlock[]): number {
  const WORDS_PER_MINUTE = 200;

  const collectText = (block: ArticleContentBlock): string[] => {
    switch (block.type) {
      case "eyebrow":
      case "heading":
      case "paragraph":
      case "quote":
        return [block.text];
      case "callout":
        return [block.title ?? "", block.text];
      case "checklist":
        return [block.heading ?? "", ...block.items.map((item) => item.text)];
      case "cardGrid":
        return block.items.flatMap((item) => [item.title, item.description]);
      case "statGrid":
        return block.items.flatMap((item) => [
          item.value,
          item.label,
          item.description,
        ]);
      case "twoColumn":
        return block.columns.flat().flatMap(collectText);
      case "image":
      case "cta":
        return [];
      default:
        return [];
    }
  };

  const wordCount = blocks
    .flatMap(collectText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

export function toArticleSummary(article: Article): ArticleSummary {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    tags: article.tags,
    author: article.author,
    heroImage: article.heroImage,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    readingTimeMinutes: article.readingTimeMinutes,
    featured: article.featured,
  };
}

export function formatArticleDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
