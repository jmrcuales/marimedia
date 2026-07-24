import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Eyebrow, Heading, BodyLarge } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { ImageFrame } from "@/components/design-system/ImageFrame";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { forPartners } = homepageContent;

/**
 * For Our Partners (blueprint Section 5.3): a distinct, self-contained
 * section aimed only at partner prospects (Compass Section 20/26). No
 * approved partnership photograph exists yet (MARIWEB-009 final polish,
 * photography audit), so this ships copy-first (blueprint Section 15,
 * item 4) using an asymmetric column offset, rather than a full-width
 * centered block, to keep the page's "varied, asymmetric compositions"
 * rhythm (Compass Section 20) without fabricating imagery.
 *
 * The remaining columns hold a ready, currently-inactive `ImageFrame`
 * slot (blueprint Section 5.3's "optionally an `ImageFrame`... placed
 * asymmetrically opposite the copy"), the same conditional pattern
 * `Hero` already uses: populating `forPartners.image` with a real
 * `{ src, alt }` activates this layout with no further code change.
 *
 * Tone changed from `page` to `surface` under MARIWEB-009.5: inserting
 * `TrustPrinciples` and `HowWeWork` around this section (see
 * `app/page.tsx`) meant the original tone sequence would have placed two
 * `page`-toned sections back to back. See `app/page.tsx`'s homepage
 * docblock for the full nine-section tone sequence.
 */
export function ForPartners() {
  const { image } = forPartners;

  return (
    <Section id={homepageSectionIds.forPartners} tone="surface" spacing="md" reveal>
      <div className="grid items-center gap-[var(--ds-space-10)] lg:grid-cols-12">
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

        {image && (
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            <ImageFrame src={image.src} alt={image.alt} ratio="landscape" sizes="(min-width: 1024px) 35vw, 100vw" />
          </div>
        )}
      </div>
    </Section>
  );
}
