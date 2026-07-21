import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogIndexHero from "@/components/blog/BlogIndexHero";
import ArticleCard from "@/components/blog/ArticleCard";
import ArticleCta from "@/components/blog/ArticleCta";
import { getFeaturedArticles, getPublishedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Health Articles",
  description:
    "Practical, research-informed articles on functional medicine, preventive health, and the online health summits shaping wellness in 2026, from the Mari Media team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Health Articles | Mari Media",
    description:
      "Practical, research-informed articles on functional medicine, preventive health, and the online health summits shaping wellness in 2026.",
    type: "website",
    url: "/blog",
  },
};

export default async function BlogIndexPage() {
  const [publishedArticles, featuredArticles] = await Promise.all([
    getPublishedArticles(),
    getFeaturedArticles(),
  ]);

  const featuredSlugs = new Set(featuredArticles.map((article) => article.slug));
  const remainingArticles = publishedArticles.filter(
    (article) => !featuredSlugs.has(article.slug)
  );

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="overflow-x-hidden">
        <BlogIndexHero />

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            {featuredArticles.length > 0 && (
              <div className={remainingArticles.length > 0 ? "mb-14" : ""}>
                {featuredArticles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    variant="featured"
                  />
                ))}
              </div>
            )}

            {remainingArticles.length > 0 && (
              <div
                className={`grid gap-6 ${
                  remainingArticles.length === 1
                    ? "max-w-sm mx-auto"
                    : remainingArticles.length === 2
                      ? "md:grid-cols-2 max-w-3xl mx-auto"
                      : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {remainingArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}

            <ArticleCta placement="blog-index-cta" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
