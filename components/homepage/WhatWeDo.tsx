import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { EditorialCard } from "@/components/design-system/EditorialCard";
import { Divider } from "@/components/design-system/Divider";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { whatWeDo } = homepageContent;

/**
 * What We Do (blueprint Section 5.2, condensed to three lines under
 * MARIWEB-009.5's "three things, done well" framing): numbered editorial
 * capability lines, not a card grid (Compass Section 26/31/41). A single
 * vertical list keeps this from reading as a SaaS feature grid;
 * `EditorialCard` is reused with a flat, page-toned treatment so each
 * line renders as plain content, not as a separate card floating over
 * the section background.
 *
 * Reduced from five capabilities to three (MARIWEB-009.5, Goal 4): the
 * homepage review found five numbered lines read as a long list rather
 * than a statement of focus, and "email marketing," "affiliate/event
 * promotion," and "campaign operations" already described one working
 * capability (build the audience, then connect it to the right
 * partners) split into three separate lines. The condensed list keeps
 * every underlying fact; nothing here is a new claim.
 */
export function WhatWeDo() {
  return (
    <Section id={homepageSectionIds.whatWeDo} tone="page" spacing="md" reveal>
      <SectionHeader eyebrow={whatWeDo.eyebrow} title={whatWeDo.heading} description={whatWeDo.intro} className="mb-[var(--ds-space-10)]" />

      <div className="flex flex-col">
        {whatWeDo.capabilities.map((capability, index) => (
          <div key={capability.number} className="mm-ds-reveal" style={{ animationDelay: `${index * 90}ms` }}>
            <EditorialCard
              eyebrow={capability.number}
              title={capability.title}
              description={capability.description}
              treatment="flat"
              tone="page"
              padding="md"
              level={3}
              className="px-0"
            />
            {index < whatWeDo.capabilities.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Section>
  );
}
