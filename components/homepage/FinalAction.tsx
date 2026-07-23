import { Section } from "@/components/design-system/Section";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { Heading, Body } from "@/components/design-system/Typography";
import { buttonClassName } from "@/components/design-system/Button";
import { Divider } from "@/components/design-system/Divider";
import { ContactEmailAction } from "./ContactEmailAction";
import { homepageContent, homepageSectionIds } from "@/lib/content/homepage";

const { finalAction } = homepageContent;

/**
 * Calm Final Action (blueprint Section 5.8): closes the page with exactly
 * two honest, clearly differentiated paths, no urgency language, and no
 * unsupported response-time promise (Compass Section 33/42/46).
 *
 * Both paths currently resolve to the same inbox (no partnership form or
 * CRM integration exists yet; that is Phase 6), so they are differentiated
 * honestly through a pre-filled subject line rather than by fabricating a
 * dedicated partner intake flow that does not exist.
 */
export function FinalAction() {
  return (
    <Section id={homepageSectionIds.contact} tone="surface-muted" spacing="lg" reveal>
      <SectionHeader
        title={finalAction.heading}
        description={finalAction.body}
        align="center"
        className="mb-[var(--ds-space-12)]"
      />

      <div className="mx-auto grid max-w-4xl gap-[var(--ds-space-10)] sm:grid-cols-[1fr_auto_1fr] sm:items-center">
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
