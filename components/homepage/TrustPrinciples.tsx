import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { Heading, Body } from "@/components/design-system/Typography";
import { cn } from "@/lib/utils";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { principles } = homepageContent;

/**
 * Editorial Principles (MARIWEB-009.5, new section). Placed immediately
 * after the hero and before any capability or audience content.
 *
 * Rationale (homepage UX review): the previous section order asked a
 * first-time visitor to build trust gradually across a long capability
 * list before ever stating what Mari Media won't do. Moving three
 * specific, checkable commitments this early answers "why should I
 * trust them" almost as fast as the hero answers "what is this,"
 * without turning into a badge or a claim (Compass Section 50 still
 * prohibits decorative trust badges; these are plain statements, not
 * icons or seals).
 *
 * Deliberately not numbered (unlike `WhatWeDo`/`HowWeWork` immediately
 * below it) and laid out as a three-column editorial row with hairline
 * rules rather than a card grid, so three numbered sections in a row
 * don't start reading as one repeated pattern (Compass Section 41:
 * avoid repeating the same component treatment everywhere).
 */
export function TrustPrinciples() {
  return (
    <Section id={homepageSectionIds.principles} tone="surface" spacing="md" reveal>
      <SectionHeader eyebrow={principles.eyebrow} title={principles.heading} className="mb-[var(--ds-space-10)]" />

      <div className="grid grid-cols-1 gap-[var(--ds-space-8)] md:grid-cols-3 md:gap-[var(--ds-space-10)]">
        {principles.items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "flex flex-col gap-[var(--ds-space-stack-sm)] mm-ds-reveal",
              index > 0 && "md:border-l md:border-[var(--ds-color-border-subtle)] md:pl-[var(--ds-space-8)]"
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
