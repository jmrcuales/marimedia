import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { Heading, Body, Text } from "@/components/design-system/Typography";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { howWeWork } = homepageContent;

/**
 * How We Work (MARIWEB-009.5, new section). Sits directly after For Our
 * Partners, answering the question that section raises but previously
 * left unanswered: what actually happens after someone reaches out.
 *
 * A refined, honest return of the previous website's four-step
 * collaboration process (Compass-review Goal 5): concise, editorial,
 * and framed around trust rather than a sales pipeline. No step
 * promises a response time or an outcome operations can't guarantee
 * (Compass Section 33/46).
 *
 * Laid out as a four-column numbered grid rather than `WhatWeDo`'s
 * vertical stacked list, so two numbered sections in a row still read
 * as visually distinct compositions (Compass Section 20: "varied and
 * asymmetric compositions... avoid repeating centered sections").
 */
export function HowWeWork() {
  return (
    <Section id={homepageSectionIds.howWeWork} tone="surface-muted" spacing="md" reveal>
      <SectionHeader
        eyebrow={howWeWork.eyebrow}
        title={howWeWork.heading}
        description={howWeWork.intro}
        className="mb-[var(--ds-space-10)]"
      />

      <div className="grid grid-cols-1 gap-[var(--ds-space-8)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[var(--ds-space-6)]">
        {howWeWork.steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col gap-[var(--ds-space-stack-sm)] mm-ds-reveal lg:border-l lg:border-[var(--ds-color-border-subtle)] lg:pl-[var(--ds-space-6)] lg:first:border-l-0 lg:first:pl-0"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {/*
              `--ds-color-primary` (deep red), not `--ds-color-accent`
              (pastel red): pastel red measures ~2.1:1 against this
              section's `surface-muted` background, well under the 3:1
              WCAG AA large-text minimum (MARIWEB-009.5 contrast audit,
              using the same formula as `lib/color-contrast.ts`). Deep
              red measures ~5.4:1 here, and is the same token `Eyebrow`
              already resolves to via `--ds-color-editorial-label`.
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
