import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody from "@/components/blog/ArticleBody";
import ReferenceList from "@/components/blog/ReferenceList";
import MedicalDisclaimer from "@/components/blog/MedicalDisclaimer";
import ArticleCta from "@/components/blog/ArticleCta";
import AdSlot from "@/components/blog/AdSlot";
import { getArticleBySlug, getPublishedArticleSlugs } from "@/lib/articles";
import { getAdConfig } from "@/lib/ads";
import { siteUrl } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPublishedArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const canonicalPath = `/blog/${article.slug}`;

  return {
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.tags,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      type: "article",
      url: canonicalPath,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: article.heroImage.src,
          alt: article.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.title,
      description: article.seo.description,
      images: [article.heroImage.src],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `${siteUrl}/blog/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.heroImage.src}`,
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    author: {
      "@type": "Organization",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Mari Media",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    articleSection: article.category,
    ...(article.tags && article.tags.length > 0
      ? { keywords: article.tags.join(", ") }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Health Articles",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Health Articles", href: "/blog" },
    { label: article.title },
  ];

  // Ad rails only ever occupy layout space once real ad content exists for
  // a placement; with nothing configured, the article stays centered.
  const hasLeftRail = Boolean(getAdConfig("article-left-rail"));
  const hasRightRail = Boolean(getAdConfig("article-right-rail"));
  const hasRails = hasLeftRail || hasRightRail;

  const articleContent = (
    <article>
      <section className="pt-36 md:pt-44 pb-8 md:pb-10 px-4 bg-[#FFF5F7]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-7">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <ArticleHero
            category={article.category}
            title={article.title}
            intro={article.heroIntro ?? article.excerpt}
            ctas={article.heroCtas}
            author={article.author}
            publishedAt={article.publishedAt}
            readTimeMinutes={article.readingTimeMinutes}
            image={article.heroImage}
          />
        </div>
      </section>

      <section className="py-14 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ArticleBody blocks={article.content} />

          <ArticleCta placement="article-inline-cta" />

          {article.references && article.references.length > 0 && (
            <div className="max-w-[760px] mx-auto mt-14">
              <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-6 leading-tight">
                References
              </h2>
              <ReferenceList items={article.references} />
            </div>
          )}

          <div className="max-w-[760px] mx-auto mt-10">
            <MedicalDisclaimer text={article.disclaimer} />
          </div>

          <ArticleCta placement="article-end-cta" />

          <AdSlot
            placementId="article-inline"
            className="max-w-[760px] mx-auto mt-10 block"
          />

          <div className="max-w-[760px] mx-auto mt-14 pt-10 border-t border-gray-100 text-center">
            <p className="text-sm font-semibold text-[#D6216E] uppercase tracking-wider mb-4">
              Keep Reading
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-12 px-8 text-base bg-[#D6216E] text-white hover:bg-[#C2185B] hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore More Articles
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />
      <main id="main-content" className="overflow-x-hidden">
        {hasRails ? (
          <div className="2xl:max-w-[1400px] 2xl:mx-auto 2xl:grid 2xl:grid-cols-[240px_minmax(0,1fr)_240px] 2xl:gap-8 2xl:items-start">
            <div className="hidden 2xl:block">
              {hasLeftRail && <AdSlot placementId="article-left-rail" />}
            </div>
            <div className="min-w-0">{articleContent}</div>
            <div className="hidden 2xl:block">
              {hasRightRail && <AdSlot placementId="article-right-rail" />}
            </div>
          </div>
        ) : (
          articleContent
        )}
      </main>
      <Footer />
    </>
  );
}
