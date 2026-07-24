import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Eyebrow, Heading, BodyLarge } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { Callout } from "@/components/design-system/Callout";
import { ImageFrame } from "@/components/design-system/ImageFrame";
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
 *
 * Like `ForPartners`, the columns opposite the copy hold a ready,
 * currently-inactive `ImageFrame` slot (MARIWEB-009 final polish,
 * photography audit) on the left, mirroring `ForPartners`' image-on-the-
 * right placement, so the two sections alternate once real photography
 * exists rather than only alternating text alignment.
 *
 * Tone changed from `surface-muted` to `page` under MARIWEB-009.5: `How
 * We Work` (`surface-muted`) now sits directly above this section (see
 * `app/page.tsx`), so this needed to change tone to keep no two adjacent
 * sections sharing a background. See `app/page.tsx`'s homepage docblock
 * for the full nine-section tone sequence.
 */
export function ForReaders() {
  const { image } = forReaders;

  return (
    <Section id={homepageSectionIds.forReaders} tone="page" spacing="md" reveal>
      <div className="grid items-center gap-[var(--ds-space-10)] lg:grid-cols-12">
        {image && (
          <div className="hidden lg:col-span-5 lg:col-start-1 lg:block">
            <ImageFrame src={image.src} alt={image.alt} ratio="landscape" sizes="(min-width: 1024px) 35vw, 100vw" />
          </div>
        )}

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
