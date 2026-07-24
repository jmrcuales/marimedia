import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { BodyLarge } from "@/components/design-system/Typography";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { companyFounders } = homepageContent;

/**
 * Company & Founders (blueprint Section 5.7; privacy-corrected under
 * MARIWEB-009.5): leads with why Mari Media exists, with the founders
 * supporting that story rather than becoming it. Public founder names
 * are James and Kaye only; no career history or former employers.
 * No fabricated founder photography is used; this ships copy-only,
 * which Compass Section 22 treats as fully acceptable (preferred over
 * a stock or placeholder image).
 */
export function CompanyFounders() {
  return (
    <Section id={homepageSectionIds.about} tone="page" spacing="md" container="reading" reveal>
      <SectionHeader
        eyebrow={companyFounders.eyebrow}
        title={companyFounders.heading}
        className="mb-[var(--ds-space-6)]"
      />
      <div className="flex flex-col gap-[var(--ds-space-stack-md)]">
        {companyFounders.body.map((paragraph) => (
          <BodyLarge key={paragraph} className="text-[var(--ds-color-text-muted)]">
            {paragraph}
          </BodyLarge>
        ))}
      </div>
    </Section>
  );
}
