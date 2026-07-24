import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { Heading, Body, Text } from "@/components/design-system/Typography";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { howWeWork } = homepageContent;

/**
 * How We Work: four-step collaboration process after For Our Partners.
 *
 * Desktop composition (MARIWEB-009.5 final): uses the `wide` container so
 * the four-column process row can open its gutters at >=1440px and
 * >=1920px instead of compressing four equal cells inside a fixed 1152px
 * content measure. Header measure stays capped for readability.
 */
export function HowWeWork() {
  return (
    <Section id={homepageSectionIds.howWeWork} tone="surface-muted" spacing="md" container="editorial" reveal>
      <SectionHeader
        eyebrow={howWeWork.eyebrow}
        title={howWeWork.heading}
        description={howWeWork.intro}
        className="mb-[var(--ds-space-10)] min-[1440px]:max-w-2xl min-[1440px]:mb-[var(--ds-space-12)]"
      />

      <div className="grid grid-cols-1 gap-[var(--ds-space-8)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[var(--ds-space-6)] min-[1440px]:gap-[var(--ds-space-10)] min-[1920px]:gap-[var(--ds-space-12)]">
        {howWeWork.steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col gap-[var(--ds-space-stack-sm)] mm-ds-reveal lg:border-l lg:border-[var(--ds-color-border-subtle)] lg:pl-[var(--ds-space-6)] lg:first:border-l-0 lg:first:pl-0 min-[1440px]:pl-[var(--ds-space-8)] min-[1440px]:first:pl-0"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {/*
              `--ds-color-primary` (deep red), not `--ds-color-accent`
              (pastel red): pastel red fails WCAG AA large-text on this
              surface-muted background; deep red matches Eyebrow contrast.
            */}
            <Text variant="h2" as="span" className="text-[var(--ds-color-primary)]">
              {step.number}
            </Text>
            <Heading level={3}>{step.title}</Heading>
            <Body className="text-[var(--ds-color-text-muted)]">{step.description}</Body>
          </div>
        ))}
      </div>
    </Section>
  );
}
