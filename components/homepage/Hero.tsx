import Link from "next/link";
import { Section } from "@/components/design-system/Section";
import { Container } from "@/components/design-system/Container";
import { Display, BodyLarge, Caption } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { Badge } from "@/components/design-system/Badge";
import { ImageFrame } from "@/components/design-system/ImageFrame";
import { Ribbon } from "@/components/design-system/Ribbon";
import { cn } from "@/lib/utils";
import { homepageContent } from "@/lib/content/homepage";

const { hero } = homepageContent;

/**
 * Compact editorial hero (Homepage Experience Blueprint, Section 5.1;
 * refined under MARIWEB-009.5 final polish).
 *
 * CTA hierarchy (MARIWEB-009.5): audience labels sit above each action so
 * partners and readers self-select without a split landing page.
 *
 * Desktop composition (MARIWEB-009.5): left-weighted on a 12-column
 * editorial stage at >=1440px. CTA polish (MARIWEB-009.5 responsive):
 * the copy column no longer shrinks to 5/12 at 1920px (that width was
 * too narrow for two `lg` buttons side by side, so "Explore Health
 * Articles" wrapped). Headline/body keep their reading measures; the
 * CTA group sizes to its labels with `whitespace-nowrap` so each button
 * reads as one intentional line.
 */
export function Hero() {
  const { image } = hero;

  return (
    <Section tone="page" spacing="lg" container={false}>
      <Container variant={image ? "hero" : "editorial"}>
        <div
          className={cn(
            "grid items-center gap-[var(--ds-space-12)]",
            image
              ? "lg:grid-cols-[1.15fr_1fr] lg:gap-[var(--ds-space-10)] min-[1440px]:grid-cols-[1fr_1.2fr] min-[1440px]:gap-[var(--ds-space-16)]"
              : "min-[1440px]:grid-cols-12 min-[1440px]:gap-[var(--ds-space-16)]"
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-[var(--ds-space-stack-lg)]",
              image
                ? undefined
                : "min-[1440px]:col-span-8 min-[1728px]:col-span-7 min-[1920px]:col-span-7"
            )}
          >
            <Badge tone="health" className="w-fit">
              {hero.focusBadge}
            </Badge>

            <Display className="max-w-3xl text-balance">{hero.headline}</Display>

            <BodyLarge className="max-w-2xl text-[var(--ds-color-text-muted)]">
              {hero.subheadline}
            </BodyLarge>

            <Ribbon animated className="max-w-[10rem]" />

            <div
              className="flex flex-col gap-[var(--ds-space-6)] sm:flex-row sm:items-end sm:gap-[var(--ds-space-10)]"
              role="group"
              aria-label="Choose your path"
            >
              <div className="flex w-full flex-col gap-[var(--ds-space-stack-sm)] sm:w-auto">
                <Caption className="font-semibold uppercase tracking-[var(--ds-tracking-wider)] text-[var(--ds-color-editorial-label)]">
                  {hero.primaryCta.audience}
                </Caption>
                <Link
                  href={hero.primaryCta.href}
                  className={buttonClassName("primary", "lg", "w-full whitespace-nowrap sm:w-auto")}
                >
                  {hero.primaryCta.label}
                </Link>
              </div>

              <div
                className="hidden w-px self-stretch bg-[var(--ds-color-divider)] sm:block"
                aria-hidden="true"
              />

              <div className="flex w-full flex-col gap-[var(--ds-space-stack-sm)] sm:w-auto">
                <Caption className="font-semibold uppercase tracking-[var(--ds-tracking-wider)] text-[var(--ds-color-text-subtle)]">
                  {hero.secondaryCta.audience}
                </Caption>
                <Link
                  href={hero.secondaryCta.href}
                  className={buttonClassName("outline", "lg", "w-full whitespace-nowrap sm:w-auto")}
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
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
