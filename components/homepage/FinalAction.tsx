import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { Heading, Body } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { Divider } from "@/components/design-system/Divider";
import { ContactEmailAction } from "./ContactEmailAction";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { finalAction } = homepageContent;

/**
 * Calm Final Action: two honest closing paths.
 *
 * Desktop composition (MARIWEB-009.5 final): the dual-path grid widens
 * stepwise at 1440 / 1920 so the two columns gain separation on large
 * monitors without stretching body text to full content width. The
 * centered header keeps a reading measure.
 */
export function FinalAction() {
  return (
    <Section id={homepageSectionIds.contact} tone="surface-muted" spacing="lg" container="editorial" reveal>
      <SectionHeader
        title={finalAction.heading}
        description={finalAction.body}
        align="center"
        className="mb-[var(--ds-space-12)] min-[1440px]:mb-[var(--ds-space-16)]"
      />

      <div className="mx-auto grid max-w-4xl gap-[var(--ds-space-10)] sm:grid-cols-[1fr_auto_1fr] sm:items-center min-[1440px]:max-w-5xl min-[1440px]:gap-[var(--ds-space-12)] min-[1920px]:max-w-6xl min-[1920px]:gap-[var(--ds-space-16)]">
        <div className="flex flex-col gap-[var(--ds-space-stack-md)]">
          <Heading level={3}>{finalAction.partner.label}</Heading>
          <Body className="text-[var(--ds-color-text-muted)]">{finalAction.partner.body}</Body>
          <div>
            <a href={finalAction.partner.mailto} className={buttonClassName("primary")}>
              {finalAction.partner.ctaLabel}
            </a>
          </div>
        </div>

        <div className="sm:hidden">
          <Divider />
        </div>
        <div className="hidden sm:block">
          <Divider orientation="vertical" />
        </div>

        <div className="flex flex-col gap-[var(--ds-space-stack-md)]">
          <Heading level={3}>{finalAction.general.label}</Heading>
          <Body className="text-[var(--ds-color-text-muted)]">{finalAction.general.body}</Body>
          <ContactEmailAction email={finalAction.contactEmail} />
        </div>
      </div>
    </Section>
  );
}
