import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { FeaturedArticle } from "@/components/design-system/FeaturedArticle";
import { buttonClassName } from "@/components/design-system/Button";
import { getFeaturedArticles } from "@/lib/articles";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { healthArticles } = homepageContent;

/**
 * Health Articles editorial spread (blueprint Section 5.6): one dominant
 * featured article, no fabricated or duplicated supporting cards.
 *
 * Only one article (`what-is-functional-medicine`) is published today, so
 * this renders exactly one `FeaturedArticle` and nothing else. Per the
 * blueprint and the Phase 3 guidance in
 * `docs/website-overhaul/MARI-MEDIA-COMPASS-CURSOR-OVERHAUL-PROMPT-PACK.md`,
 * do not add `ArticleCard` "supporting story" slots until at least a
 * second real, published article exists; an empty, fake, or duplicated
 * card is explicitly prohibited. When a second article is published, this
 * component is the only place that needs to change (add an `ArticleCard`
 * grid alongside the featured slot).
 */
export async function HealthArticlesSpread() {
  const featuredArticles = await getFeaturedArticles();
  const featured = featuredArticles[0];

  if (!featured) {
    // No published, featured article exists. Rather than render an empty
    // or fabricated card, the whole section is omitted until real content
    // exists to feature.
    return null;
  }

  return (
    <Section id={homepageSectionIds.articles} tone="surface-muted" spacing="md" reveal>
      <SectionHeader
        eyebrow={healthArticles.eyebrow}
        title={healthArticles.heading}
        description={healthArticles.description}
        className="mb-[var(--ds-space-10)]"
      />

      <FeaturedArticle article={featured} />

      <div className="mt-[var(--ds-space-8)]">
        <Link href={healthArticles.viewAllCta.href} className={buttonClassName("secondary")}>
          {healthArticles.viewAllCta.label}
        </Link>
      </div>
    </Section>
  );
}
