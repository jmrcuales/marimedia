import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Eyebrow, Heading, BodyLarge } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { Callout } from "@/components/design-system/Callout";
import { ImageFrame } from "@/components/design-system/ImageFrame";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { forReaders } = homepageContent;

/**
 * For Our Readers: reader-only section, mirrored from For Our Partners.
 *
 * Desktop composition (MARIWEB-009.5 final): uses the `wide` stage with
 * right-weighted copy (and optional left image) so the two audience
 * sections alternate alignment while both use intentional open field at
 * large widths rather than identical centered blocks.
 */
export function ForReaders() {
  const { image } = forReaders;

  return (
    <Section id={homepageSectionIds.forReaders} tone="page" spacing="md" container="editorial" reveal>
      <div className="grid items-center gap-[var(--ds-space-10)] lg:grid-cols-12 min-[1440px]:gap-[var(--ds-space-16)]">
        {image && (
          <div className="hidden lg:col-span-5 lg:col-start-1 lg:block min-[1440px]:col-span-6">
            <ImageFrame src={image.src} alt={image.alt} ratio="landscape" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        )}

        <div className="flex flex-col gap-[var(--ds-space-stack-lg)] lg:col-span-7 lg:col-start-6 min-[1440px]:col-span-5 min-[1440px]:col-start-8 min-[1920px]:col-span-4 min-[1920px]:col-start-9">
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
