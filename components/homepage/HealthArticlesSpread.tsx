import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { FeaturedArticle } from "@/components/design-system/FeaturedArticle";
import { buttonClassName } from "@/components/design-system/Button";
import { getFeaturedArticles } from "@/lib/articles";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { healthArticles } = homepageContent;

/**
 * Health Articles editorial spread: one dominant featured article.
 *
 * Desktop composition (MARIWEB-009.5 final): uses the `editorial`
 * container with a magazine image/copy split at >=1440px. Below that
 * width, `FeaturedArticle` intentionally stacks (tablet polish) so the
 * image never crowds the text.
 */
export async function HealthArticlesSpread() {
  const featuredArticles = await getFeaturedArticles();
  const featured = featuredArticles[0];

  if (!featured) {
    return null;
  }

  return (
    <Section id={homepageSectionIds.articles} tone="surface-muted" spacing="md" container="editorial" reveal>
      <SectionHeader
        eyebrow={healthArticles.eyebrow}
        title={healthArticles.heading}
        description={healthArticles.description}
        className="mb-[var(--ds-space-10)] min-[1440px]:max-w-2xl min-[1440px]:mb-[var(--ds-space-12)]"
      />

      <FeaturedArticle
        article={featured}
        className="min-[1440px]:grid-cols-[1.15fr_1fr] min-[1920px]:min-h-[26rem]"
      />

      <div className="mt-[var(--ds-space-8)] min-[1440px]:mt-[var(--ds-space-10)]">
        <Link href={healthArticles.viewAllCta.href} className={buttonClassName("secondary")}>
          {healthArticles.viewAllCta.label}
        </Link>
      </div>
    </Section>
  );
}
