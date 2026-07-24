import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { Heading, Body } from "@/components/design-system/Typography";
import { cn } from "@/lib/utils";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { principles } = homepageContent;

/**
 * Editorial Principles (MARIWEB-009.5). Three checkable commitments in a
 * hairline-ruled editorial row, not a card grid.
 *
 * Desktop composition (MARIWEB-009.5 final): uses the `wide` container so
 * the three columns gain horizontal breathing room at >=1440px instead of
 * packing denser as the viewport grows. The section header is capped so
 * the title retains a comfortable reading measure while the three-column
 * row below expands into the wider stage.
 */
export function TrustPrinciples() {
  return (
    <Section id={homepageSectionIds.principles} tone="surface" spacing="md" container="editorial" reveal>
      <SectionHeader
        eyebrow={principles.eyebrow}
        title={principles.heading}
        className="mb-[var(--ds-space-10)] min-[1440px]:max-w-2xl min-[1440px]:mb-[var(--ds-space-12)]"
      />

      <div className="grid grid-cols-1 gap-[var(--ds-space-8)] md:grid-cols-3 md:gap-[var(--ds-space-10)] min-[1440px]:gap-[var(--ds-space-12)] min-[1920px]:gap-[var(--ds-space-16)]">
        {principles.items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "flex flex-col gap-[var(--ds-space-stack-sm)] mm-ds-reveal",
              index > 0 &&
                "md:border-l md:border-[var(--ds-color-border-subtle)] md:pl-[var(--ds-space-8)] min-[1440px]:pl-[var(--ds-space-10)] min-[1920px]:pl-[var(--ds-space-12)]"
            )}
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <Heading level={3} className="text-[length:var(--ds-text-h5)]">
              {item.title}
            </Heading>
            <Body className="text-[var(--ds-color-text-muted)]">{item.description}</Body>
          </div>
        ))}
      </div>
    </Section>
  );
}
