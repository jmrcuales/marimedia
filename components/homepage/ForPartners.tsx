import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Eyebrow, Heading, BodyLarge } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { forPartners } = homepageContent;

/**
 * For Our Partners (blueprint Section 5.3): a distinct, self-contained
 * section aimed only at partner prospects (Compass Section 20/26). No
 * approved partnership photograph exists yet, so this ships copy-first
 * (blueprint Section 15, item 4) using an asymmetric column offset,
 * rather than a full-width centered block, to keep the page's
 * "varied, asymmetric compositions" rhythm (Compass Section 20) without
 * fabricating imagery.
 */
export function ForPartners() {
  return (
    <Section id={homepageSectionIds.forPartners} tone="page" spacing="md" reveal>
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col gap-[var(--ds-space-stack-lg)] lg:col-span-7">
          <Eyebrow>{forPartners.eyebrow}</Eyebrow>
          <Heading level={2}>{forPartners.heading}</Heading>
          <div className="flex flex-col gap-[var(--ds-space-stack-md)]">
            {forPartners.body.map((paragraph) => (
              <BodyLarge key={paragraph} className="text-[var(--ds-color-text-muted)]">
                {paragraph}
              </BodyLarge>
            ))}
          </div>
          <div>
            <Link href={forPartners.cta.href} className={buttonClassName("primary")}>
              {forPartners.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
