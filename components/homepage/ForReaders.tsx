import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Eyebrow, Heading, BodyLarge } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { Callout } from "@/components/design-system/Callout";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { forReaders } = homepageContent;

/**
 * For Our Readers (blueprint Section 5.4): distinct from For Our Partners,
 * aimed only at readers. Mirrors For Our Partners' asymmetric offset but
 * flips the alignment (right-weighted instead of left-weighted) so the two
 * sections create alternating rhythm without needing alternating imagery
 * (Compass Section 20).
 *
 * Includes a brief, honest commercial-transparency note using the
 * `disclaimer` `Callout` variant, per blueprint Section 6 ("If a homepage
 * callout is ever needed... use the info or disclaimer variant") and
 * Compass Section 9 (disclose where it materially affects understanding,
 * not only on a footer policy page).
 */
export function ForReaders() {
  return (
    <Section id={homepageSectionIds.forReaders} tone="surface-muted" spacing="md" reveal>
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col gap-[var(--ds-space-stack-lg)] lg:col-span-7 lg:col-start-6">
          <Eyebrow>{forReaders.eyebrow}</Eyebrow>
          <Heading level={2}>{forReaders.heading}</Heading>
          <div className="flex flex-col gap-[var(--ds-space-stack-md)]">
            {forReaders.body.map((paragraph) => (
              <BodyLarge key={paragraph} className="text-[var(--ds-color-text-muted)]">
                {paragraph}
              </BodyLarge>
            ))}
          </div>
          <Callout variant="disclaimer">{forReaders.disclosure}</Callout>
          <div>
            <Link href={forReaders.cta.href} className={buttonClassName("outline")}>
              {forReaders.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
