import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { EditorialCard } from "@/components/design-system/EditorialCard";
import { Divider } from "@/components/design-system/Divider";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { whatWeDo } = homepageContent;

/**
 * What We Do: numbered editorial capability lines, not a card grid.
 *
 * Desktop composition (MARIWEB-009.5 final): at >=1440px this becomes an
 * intentional magazine split: section header left-weighted, capability
 * list right-weighted across a 12-column stage. Below that breakpoint it
 * remains a single stacked editorial list. This is a composition change,
 * not a wider centered column.
 */
export function WhatWeDo() {
  return (
    <Section id={homepageSectionIds.whatWeDo} tone="page" spacing="md" container="editorial" reveal>
      <div className="grid gap-[var(--ds-space-10)] min-[1440px]:grid-cols-12 min-[1440px]:gap-[var(--ds-space-16)] min-[1920px]:gap-[var(--ds-space-20)]">
        <div className="min-[1440px]:col-span-4 min-[1728px]:col-span-4">
          <SectionHeader
            eyebrow={whatWeDo.eyebrow}
            title={whatWeDo.heading}
            description={whatWeDo.intro}
            className="min-[1440px]:sticky min-[1440px]:top-28"
          />
        </div>

        <div className="flex flex-col min-[1440px]:col-span-7 min-[1440px]:col-start-6">
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
      </div>
    </Section>
  );
}
