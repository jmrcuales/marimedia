import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Container } from "@/components/design-system/Container";
import { Display, BodyLarge } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { Badge } from "@/components/design-system/Badge";
import { ImageFrame } from "@/components/design-system/ImageFrame";
import { Ribbon } from "@/components/design-system/Ribbon";
import { cn } from "@/lib/utils";
import { homepageContent } from "@/lib/content/homepage";

const { hero } = homepageContent;

/**
 * Compact editorial hero (Homepage Experience Blueprint, Section 5.1).
 *
 * Resolves "what is this" before anything else: the parent-company
 * identity leads, health is named as the current focus rather than the
 * whole company, and both the partner and reader paths are offered
 * immediately (Compass Section 24, blueprint Section 3).
 *
 * Responsive strategy (MARIWEB-009 brief):
 * - <1024px: full-width editorial, single column, no image.
 * - 1024-1439px: compact editorial split, image secondary.
 * - >=1440px: image-led editorial, image gets the dominant column.
 *
 * No approved, provenance-documented hero photograph exists yet (see
 * `lib/content/homepage.ts` and blueprint Section 15, item 4), so
 * `hero.image` is `undefined` and this renders as a full-width editorial
 * composition at every breakpoint today. The grid below is still written
 * against the full three-tier spec so populating `hero.image` with a real
 * `{ src, alt }` is the only change needed to activate the split/image-led
 * layouts; nothing here is stock photography or a placeholder image.
 */
export function Hero() {
  const { image } = hero;

  return (
    <Section tone="page" spacing="lg" container={false}>
      <Container variant={image ? "hero" : "content"}>
        <div
          className={cn(
            "grid items-center gap-[var(--ds-space-12)]",
            image &&
              "lg:grid-cols-[1.15fr_1fr] lg:gap-[var(--ds-space-10)] min-[1440px]:grid-cols-[1fr_1.2fr] min-[1440px]:gap-[var(--ds-space-16)]"
          )}
        >
          <div className={cn("flex flex-col gap-[var(--ds-space-stack-lg)]", !image && "max-w-3xl")}>
            <Badge tone="health" className="w-fit">
              {hero.focusBadge}
            </Badge>

            <Display className="text-balance">{hero.headline}</Display>

            <BodyLarge className="max-w-2xl text-[var(--ds-color-text-muted)]">
              {hero.subheadline}
            </BodyLarge>

            <Ribbon animated className="max-w-[10rem]" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={hero.primaryCta.href} className={buttonClassName("primary", "lg")}>
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className={buttonClassName("outline", "lg")}>
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {image && (
            <div className={cn("hidden lg:block", "min-[1440px]:order-first")}>
              <ImageFrame
                src={image.src}
                alt={image.alt}
                ratio="portrait"
                sizes="(min-width: 1440px) 45vw, 40vw"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
