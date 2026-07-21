import type { Article, ArticleSummary } from "@/types/article";
import { toArticleSummary } from "@/types/article";
import { allArticles } from "./content/articles";

function byNewestFirst(
  a: { publishedAt: string },
  b: { publishedAt: string }
): number {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

/**
 * Content-access boundary for articles. Pages and UI components should only
 * ever import from this module, never from `lib/content/**` directly, so
 * they stay agnostic to whether an article came from a local file or a
 * future Supabase table.
 *
 * Every function here returns a `Promise` even though the current
 * implementation reads synchronous local content — that keeps the public
 * API shape identical to a later `async`/database-backed implementation, so
 * call sites won't need to change when that migration happens.
 */

/** Published articles, newest first, as lightweight list/card data. */
export async function getPublishedArticles(): Promise<ArticleSummary[]> {
  return allArticles
    .filter((article) => article.status === "published")
    .sort(byNewestFirst)
    .map(toArticleSummary);
}

/** Published articles flagged as featured, newest first. */
export async function getFeaturedArticles(): Promise<ArticleSummary[]> {
  return allArticles
    .filter((article) => article.status === "published" && article.featured)
    .sort(byNewestFirst)
    .map(toArticleSummary);
}

/**
 * Full article record (including body content) for a public-facing route.
 * Returns `null` for an unknown slug and for draft/unpublished articles, so
 * callers can pass the result straight to `notFound()`.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = allArticles.find(
    (candidate) => candidate.slug === slug && candidate.status === "published"
  );
  return article ?? null;
}

/** Slugs eligible for static generation, sitemap entries, and public routes. */
export async function getPublishedArticleSlugs(): Promise<string[]> {
  const articles = await getPublishedArticles();
  return articles.map((article) => article.slug);
}

/** Other published articles in the same category as `slug`, newest first. */
export async function getRelatedArticles(
  slug: string,
  limit = 3
): Promise<ArticleSummary[]> {
  const current = allArticles.find((article) => article.slug === slug);
  if (!current) return [];

  return allArticles
    .filter(
      (article) =>
        article.status === "published" &&
        article.slug !== slug &&
        article.category === current.category
    )
    .sort(byNewestFirst)
    .slice(0, limit)
    .map(toArticleSummary);
}
