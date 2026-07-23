import { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";
import { siteUrl } from "@/lib/site";
import { isProductionDeployment } from "@/lib/env";

/**
 * Non-production deployments must not publish a crawlable sitemap (see
 * `lib/env.ts`), so every environment other than the real production
 * deployment gets an empty sitemap instead of the real route list.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!isProductionDeployment()) {
    return [];
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const publishedArticles = await getPublishedArticles();
  const articleRoutes: MetadataRoute.Sitemap = publishedArticles.map(
    (article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...articleRoutes];
}
