import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { EditorialCard } from "@/components/design-system/EditorialCard";
import { Divider } from "@/components/design-system/Divider";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { whatWeDo } = homepageContent;

/**
 * What We Do (blueprint Section 5.2): numbered editorial capability lines,
 * not a card grid (Compass Section 26/31/41). A single vertical list keeps
 * this from reading as a SaaS feature grid; `EditorialCard` is reused with
 * a flat, page-toned treatment so each line renders as plain content, not
 * as a separate card floating over the section background.
 */
export function WhatWeDo() {
  return (
    <Section id={homepageSectionIds.whatWeDo} tone="surface" spacing="md" reveal>
      <SectionHeader eyebrow={whatWeDo.eyebrow} title={whatWeDo.heading} description={whatWeDo.intro} className="mb-[var(--ds-space-10)]" />

      <div className="flex flex-col">
        {whatWeDo.capabilities.map((capability, index) => (
          <div key={capability.number}>
            <EditorialCard
              eyebrow={capability.number}
              title={capability.title}
              description={capability.description}
              treatment="flat"
              tone="surface"
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
