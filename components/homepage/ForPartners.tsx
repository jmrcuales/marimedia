import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Eyebrow, Heading, BodyLarge } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { ImageFrame } from "@/components/design-system/ImageFrame";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { forPartners } = homepageContent;

/**
 * For Our Partners: partner-only section with asymmetric composition.
 *
 * Desktop composition (MARIWEB-009.5 final): uses the `wide` stage so
 * copy-only (no approved image yet) sits as a left-weighted editorial
 * column with intentional open field to the right at >=1440px, rather
 * than a medium-width block centered in a large viewport. When an image
 * is later approved, the existing two-column asymmetric slot activates
 * without further layout work.
 */
export function ForPartners() {
  const { image } = forPartners;

  return (
    <Section id={homepageSectionIds.forPartners} tone="surface" spacing="md" container="editorial" reveal>
      <div className="grid items-center gap-[var(--ds-space-10)] lg:grid-cols-12 min-[1440px]:gap-[var(--ds-space-16)]">
        <div className="flex flex-col gap-[var(--ds-space-stack-lg)] lg:col-span-7 min-[1440px]:col-span-5 min-[1728px]:col-span-5 min-[1920px]:col-span-4">
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

        {image && (
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block min-[1440px]:col-span-6 min-[1440px]:col-start-7">
            <ImageFrame src={image.src} alt={image.alt} ratio="landscape" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        )}
      </div>
    </Section>
  );
}
