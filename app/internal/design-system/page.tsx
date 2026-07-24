import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isProductionDeployment } from "@/lib/env";
import type { ArticleSummary } from "@/types/article";
import { Scope } from "@/components/design-system/Scope";
import { Container } from "@/components/design-system/Container";
import {
  Text,
  Display,
  Heading,
  BodyLarge,
  Body,
  BodySmall,
  Caption,
  Eyebrow,
  Label,
  EditorialStatement,
  Code,
  List,
  Blockquote,
} from "@/components/design-system/Typography";
import { Button, ButtonLink } from "@/components/design-system/Button";
import { Input } from "@/components/design-system/Input";
import { Textarea } from "@/components/design-system/Textarea";
import { Select } from "@/components/design-system/Select";
import { Checkbox } from "@/components/design-system/Checkbox";
import { Radio } from "@/components/design-system/Radio";
import { Badge } from "@/components/design-system/Badge";
import { Chip } from "@/components/design-system/Chip";
import { Tag } from "@/components/design-system/Tag";
import { Divider } from "@/components/design-system/Divider";
import { Avatar } from "@/components/design-system/Avatar";
import { Card } from "@/components/design-system/Card";
import { Surface } from "@/components/design-system/Surface";
import { EditorialCard } from "@/components/design-system/EditorialCard";
import { SectionHeader } from "@/components/design-system/SectionHeader";
import { Callout } from "@/components/design-system/Callout";
import { Quote } from "@/components/design-system/Quote";
import { Ribbon } from "@/components/design-system/Ribbon";
import { ArticleCard } from "@/components/design-system/ArticleCard";
import { FeaturedArticle } from "@/components/design-system/FeaturedArticle";
import { ReferenceNav } from "@/components/design-system/reference/ReferenceNav";
import { RemovableChipDemo } from "@/components/design-system/reference/RemovableChipDemo";
import { ReferenceSection } from "@/components/design-system/reference/ReferenceSection";
import { TokenSwatch } from "@/components/design-system/reference/TokenSwatch";
import { Specimen } from "@/components/design-system/reference/Specimen";

/**
 * Phase 2 production design system reference (MARIWEB-008).
 *
 * Unlike the Phase 1 visual-direction lab (`/internal/visual-lab`), this
 * page is not experimental and has no controls: it renders the actual
 * production components exported from `components/design-system`,
 * against the actual token values in `tokens.css`. Nothing here is a
 * simulation.
 *
 * Same non-production safety pattern as the Phase 1 lab: 404s on the
 * verified production deployment, carries `noindex, nofollow`, and is
 * never linked from navigation, the footer, or any production page. No
 * production page (home, about, blog, contact) imports anything from
 * this route or is changed by it.
 */
export const metadata: Metadata = {
  title: "Design System (Internal)",
  description: "Internal, production design system reference. Not part of the public site.",
  robots: { index: false, follow: false },
};

const sampleFeatured: ArticleSummary = {
  id: "sample-featured",
  slug: "what-is-functional-medicine",
  title: "What Is Functional Medicine? A Clear, Honest Introduction",
  excerpt:
    "Functional medicine looks at how your body's systems interact instead of treating symptoms in isolation. Here's what that means in practice, and what to expect from a first visit.",
  category: "Functional Medicine",
  author: { name: "Mari Media Editorial" },
  heroImage: {
    src: "/images/articles/functional-medicine/functional-medicine-hero.jpg",
    alt: "Illustrated scene of two clinicians in conversation during a consultation in a sunlit office",
    width: 1050,
    height: 1400,
    focalPoint: { x: 50, y: 28 },
  },
  publishedAt: "2026-03-01",
  readingTimeMinutes: 9,
  featured: true,
};

const sampleSupporting: ArticleSummary[] = [
  {
    id: "sample-1",
    slug: "what-is-functional-medicine",
    title: "Preparing for Your First Functional Medicine Visit",
    excerpt: "A short checklist for organizing your health history before you sit down with a practitioner.",
    category: "Functional Medicine",
    author: { name: "Mari Media Editorial" },
    heroImage: {
      src: "/images/articles/functional-medicine/functional-medicine-first-visit.jpg",
      alt: "Illustrated scene of a person at a sunlit home desk writing notes and organizing papers before a health appointment",
      width: 825,
      height: 1100,
      focalPoint: { x: 58, y: 36 },
    },
    publishedAt: "2026-02-18",
    readingTimeMinutes: 6,
    featured: false,
  },
  {
    id: "sample-2",
    slug: "what-is-functional-medicine",
    title: "The Body as an Interconnected System",
    excerpt: "Why sleep, nutrition, and stress rarely act alone, and what that means for how care is approached.",
    category: "Preventive Health",
    author: { name: "Mari Media Editorial" },
    heroImage: {
      src: "/images/articles/functional-medicine/interconnected-health-systems.jpg",
      alt: "Editorial illustration of six connected health factors (nutrition, sleep, movement, environment, body systems, and daily habits) arranged around a central figure",
      width: 733,
      height: 1100,
      focalPoint: { x: 50, y: 48 },
    },
    publishedAt: "2026-01-30",
    readingTimeMinutes: 7,
    featured: false,
  },
];

const colorGroups: { title: string; tokens: { label: string; cssVar: string; hex?: string; note?: string }[] }[] = [
  {
    title: "Background & surface",
    tokens: [
      { label: "Background", cssVar: "--ds-color-bg", hex: "#FAF8F5" },
      { label: "Surface", cssVar: "--ds-color-surface", hex: "#FFFFFF" },
      { label: "Surface, muted", cssVar: "--ds-color-surface-muted", hex: "#E8E0D5" },
    ],
  },
  {
    title: "Text",
    tokens: [
      { label: "Text", cssVar: "--ds-color-text", hex: "#211F1D" },
      { label: "Text, muted", cssVar: "--ds-color-text-muted", hex: "#5E5955" },
      { label: "Text, subtle", cssVar: "--ds-color-text-subtle", hex: "#756B60" },
    ],
  },
  {
    title: "Border",
    tokens: [
      { label: "Border", cssVar: "--ds-color-border", hex: "#9C8D79" },
      { label: "Border, subtle", cssVar: "--ds-color-border-subtle", hex: "#E8E0D5" },
    ],
  },
  {
    title: "Primary & accent",
    tokens: [
      { label: "Primary", cssVar: "--ds-color-primary", hex: "#8F403B" },
      { label: "Primary, hover", cssVar: "--ds-color-primary-hover", hex: "#7A362F" },
      { label: "Accent", cssVar: "--ds-color-accent", hex: "#D9857A", note: "Tints, tags, chips with dark text only, never white text." },
      { label: "Link / Link, hover", cssVar: "--ds-color-link", hex: "#8F403B" },
    ],
  },
  {
    title: "Status",
    tokens: [
      { label: "Success", cssVar: "--ds-color-success", hex: "#455546" },
      { label: "Warning", cssVar: "--ds-color-warning", hex: "#6E4A12" },
      { label: "Warning, surface", cssVar: "--ds-color-warning-surface", hex: "#F5E6C8" },
      { label: "Error", cssVar: "--ds-color-error", hex: "#9C2B22" },
      { label: "Error, surface", cssVar: "--ds-color-error-surface", hex: "#F6DEDB", note: "New in Phase 2, verified 5.89:1 with Error text." },
    ],
  },
  {
    title: "Health (context-restricted)",
    tokens: [
      { label: "Health", cssVar: "--ds-color-health", hex: "#718774", note: "Icons/large elements only; fails normal-text AA." },
      { label: "Health, text", cssVar: "--ds-color-health-text", hex: "#455546" },
      { label: "Health, surface", cssVar: "--ds-color-health-surface", hex: "#E3E9E1" },
    ],
  },
  {
    title: "Interaction",
    tokens: [
      { label: "Selection background", cssVar: "--ds-color-selection-bg", hex: "#F2DFDC" },
      { label: "Focus ring", cssVar: "--ds-color-focus-ring", hex: "#8F403B" },
    ],
  },
];

export default function DesignSystemReferencePage() {
  if (isProductionDeployment()) {
    notFound();
  }

  return (
    <Scope showMotionPreviewToggle>
      <ReferenceNav />

      <header className="border-b border-[var(--ds-color-border-subtle)] py-[var(--ds-space-section-y-sm)]">
        <Container variant="wide">
          <Eyebrow>MARIWEB-008 · Phase 2</Eyebrow>
          <Display className="mt-2">Mari Media production design system</Display>
          <BodyLarge className="mt-[var(--ds-space-4)] max-w-3xl text-[var(--ds-color-text-muted)]">
            The approved Phase 1 visual direction, implemented as reusable, token-driven production
            components. Everything on this page renders the real components exported from{" "}
            <Code>components/design-system</Code>, styled by the real tokens in{" "}
            <Code>tokens.css</Code>. No production page (home, about, blog, contact) is changed by
            this phase; nothing here is wired into them yet.
          </BodyLarge>
        </Container>
      </header>

      <ReferenceSection
        id="tokens"
        title="Token architecture"
        description="One token file (tokens.css), scoped to this system, feeding every component below. Categories: color, typography, spacing, radius, elevation, border, container, section, motion, transition, z-index, and focus."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Radius, button", cssVar: "--ds-radius-button" },
            { label: "Radius, surface", cssVar: "--ds-radius-surface" },
            { label: "Shadow, sm", cssVar: "--ds-shadow-sm" },
            { label: "Shadow, md", cssVar: "--ds-shadow-md" },
            { label: "Duration, fast", cssVar: "--ds-duration-fast" },
            { label: "Duration, medium", cssVar: "--ds-duration-medium" },
            { label: "Ease, editorial", cssVar: "--ds-ease-editorial" },
            { label: "Z-index, nav", cssVar: "--ds-z-nav" },
          ].map((token) => (
            <div
              key={token.cssVar}
              className="rounded-[var(--ds-radius-md)] border border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-surface)] p-3"
            >
              <p className="font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] font-semibold text-[var(--ds-color-text)]">
                {token.label}
              </p>
              <p className="font-[var(--ds-font-mono)] text-[length:var(--ds-text-caption)] text-[var(--ds-color-text-subtle)]">
                {token.cssVar}
              </p>
            </div>
          ))}
        </div>
      </ReferenceSection>

      <ReferenceSection
        id="typography"
        title="Typography"
        description="Plus Jakarta Sans for display/headings, Source Sans 3 for body, Newsreader as a restricted editorial accent. Every role below renders through the shared Text component."
        tone="surface-alt"
      >
        <Surface treatment="bordered" className="p-[var(--ds-space-card-padding-lg)]">
          <Specimen label="Display" meta="--ds-text-display · Plus Jakarta Sans">
            <Display>Trusted digital brands, built with care</Display>
          </Specimen>
          <Specimen label="Heading 1" meta="--ds-text-h1">
            <Heading level={1}>Editorial work people return to</Heading>
          </Specimen>
          <Specimen label="Heading 2" meta="--ds-text-h2">
            <Heading level={2}>What We Do</Heading>
          </Specimen>
          <Specimen label="Heading 3" meta="--ds-text-h3">
            <Heading level={3}>For Our Partners</Heading>
          </Specimen>
          <Specimen label="Heading 4" meta="--ds-text-h4">
            <Heading level={4}>Editorial content</Heading>
          </Specimen>
          <Specimen label="Heading 5" meta="--ds-text-h5">
            <Heading level={5}>Audience development</Heading>
          </Specimen>
          <Specimen label="Heading 6" meta="--ds-text-h6">
            <Heading level={6}>Section label</Heading>
          </Specimen>
          <Specimen label="Body large" meta="--ds-text-body-lg">
            <BodyLarge>
              Mari Media builds, grows, and operates a portfolio of trusted digital brands, starting
              with health and wellness.
            </BodyLarge>
          </Specimen>
          <Specimen label="Body" meta="--ds-text-body">
            <Body>
              Readers should feel informed and respected, not sold to. Partners should feel that their
              audience fit was genuinely considered.
            </Body>
          </Specimen>
          <Specimen label="Body small" meta="--ds-text-body-sm">
            <BodySmall>Supporting detail that does not need the same visual weight as the paragraph above it.</BodySmall>
          </Specimen>
          <Specimen label="Caption" meta="--ds-text-caption">
            <Caption>Published March 1, 2026 · Updated March 14, 2026</Caption>
          </Specimen>
          <Specimen label="Eyebrow" meta="--ds-text-eyebrow">
            <Eyebrow>Functional Medicine</Eyebrow>
          </Specimen>
          <Specimen label="Label" meta="--ds-text-label">
            <Label htmlFor="specimen-input">Work email</Label>
          </Specimen>
          <Specimen label="Button text" meta="--ds-text-button">
            <Button size="sm">Partner With Us</Button>
          </Specimen>
          <Specimen label="Quote" meta="--ds-text-quote · Newsreader (restricted use)">
            <Quote attribution="James, co-founder">
              We wanted a business that could grow beyond the limits of a single job.
            </Quote>
          </Specimen>
          <Specimen label="Editorial statement" meta="--ds-text-editorial-statement · Newsreader (restricted use)">
            <EditorialStatement>
              Health is the first proving ground, not the permanent limit.
            </EditorialStatement>
          </Specimen>
          <Specimen label="Code" meta="--ds-text-code · mono">
            <Body>
              Reference a token with <Code>var(--ds-color-primary)</Code>.
            </Body>
          </Specimen>
          <Specimen label="List" meta="Unordered / ordered">
            <div className="grid gap-6 sm:grid-cols-2">
              <List>
                <li>Editorial content</li>
                <li>Audience development</li>
                <li>Email marketing</li>
              </List>
              <List ordered>
                <li>Inquiry submitted</li>
                <li>Fit reviewed</li>
                <li>Response sent</li>
              </List>
            </div>
          </Specimen>
          <Specimen label="Blockquote" meta="Plain semantic quote">
            <Blockquote>Trust before short-term revenue.</Blockquote>
          </Specimen>
        </Surface>
      </ReferenceSection>

      <ReferenceSection
        id="colors"
        title="Color architecture"
        description="Neutral-led Compass palette. Every component consumes a semantic role below, never a raw hex value."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {colorGroups.map((group) => (
            <div key={group.title}>
              <Heading level={4} className="mb-[var(--ds-space-3)]">
                {group.title}
              </Heading>
              <div className="grid gap-2">
                {group.tokens.map((token) => (
                  <TokenSwatch key={token.cssVar} {...token} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ReferenceSection>

      <ReferenceSection id="spacing" title="Spacing scale" description="One scale, semantic aliases for vertical rhythm, sections, cards, articles, and forms." tone="surface-alt">
        <div className="flex flex-wrap items-end gap-4">
          {[
            ["stack-xs", "var(--ds-space-stack-xs)"],
            ["stack-sm", "var(--ds-space-stack-sm)"],
            ["stack-md", "var(--ds-space-stack-md)"],
            ["stack-lg", "var(--ds-space-stack-lg)"],
            ["stack-xl", "var(--ds-space-stack-xl)"],
          ].map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className="w-10 bg-[var(--ds-color-primary)]" style={{ height: value }} />
              <Caption>{name}</Caption>
            </div>
          ))}
        </div>
        <div className="mt-[var(--ds-space-8)] grid gap-3 sm:grid-cols-3">
          <div className="rounded-[var(--ds-radius-md)] border border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-surface)] p-3">
            <Caption>Section, sm/md/lg</Caption>
            <Body className="mt-1">--ds-space-section-y-*</Body>
          </div>
          <div className="rounded-[var(--ds-radius-md)] border border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-surface)] p-3">
            <Caption>Card padding, sm/md/lg</Caption>
            <Body className="mt-1">--ds-space-card-padding-*</Body>
          </div>
          <div className="rounded-[var(--ds-radius-md)] border border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-surface)] p-3">
            <Caption>Form field / label gap</Caption>
            <Body className="mt-1">--ds-space-form-field-gap / --ds-space-form-label-gap</Body>
          </div>
        </div>
      </ReferenceSection>

      <ReferenceSection id="containers" title="Container system" description="Reusable max-widths so no page hand-rolls a max-w value.">
        <div className="space-y-3">
          {[
            { variant: "reading" as const, note: "Long-form body text measure" },
            { variant: "article" as const, note: "Article shell (headings, meta, callouts)" },
            { variant: "content" as const, note: "Default section width" },
            { variant: "wide" as const, note: "Wide editorial/feature compositions" },
            { variant: "hero" as const, note: ">=1440px image-led hero" },
          ].map((row) => (
            <div key={row.variant} className="rounded-[var(--ds-radius-md)] bg-[var(--ds-color-surface-muted)] p-2">
              <Container variant={row.variant} className="rounded-[var(--ds-radius-sm)] bg-[var(--ds-color-primary)]/10 py-2 text-center">
                <Caption className="text-[var(--ds-color-text)]">
                  {row.variant} — {row.note}
                </Caption>
              </Container>
            </div>
          ))}
          <div className="rounded-[var(--ds-radius-md)] bg-[var(--ds-color-surface-muted)] p-2">
            <div className="w-full rounded-[var(--ds-radius-sm)] bg-[var(--ds-color-primary)]/10 py-2 text-center">
              <Caption className="text-[var(--ds-color-text)]">bleed — full-width, no max-width or gutter</Caption>
            </div>
          </div>
        </div>
      </ReferenceSection>

      <ReferenceSection id="elevation-surface" title="Elevation & surface" description="Subtle shadows, bordered editorial surfaces by default, soft radius." tone="surface-alt">
        <div className="grid gap-6 sm:grid-cols-3">
          <Surface treatment="flat" className="p-[var(--ds-space-6)]">
            <Text variant="label" as="p">Flat</Text>
            <BodySmall className="mt-1 text-[var(--ds-color-text-muted)]">No border or shadow. Separation via spacing only.</BodySmall>
          </Surface>
          <Surface treatment="bordered" className="p-[var(--ds-space-6)]">
            <Text variant="label" as="p">Bordered</Text>
            <BodySmall className="mt-1 text-[var(--ds-color-text-muted)]">The default editorial surface treatment.</BodySmall>
          </Surface>
          <Surface treatment="elevated" className="p-[var(--ds-space-6)]">
            <Text variant="label" as="p">Elevated</Text>
            <BodySmall className="mt-1 text-[var(--ds-color-text-muted)]">Reserved for forms and the featured article.</BodySmall>
          </Surface>
        </div>
      </ReferenceSection>

      <ReferenceSection id="buttons" title="Buttons" description="Medium-rounded, restrained editorial-ease hover motion. States: default, hover, focus-visible, disabled.">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Partner With Us</Button>
          <Button variant="secondary">Secondary action</Button>
          <Button variant="outline">Outline action</Button>
          <Button variant="ghost">Ghost action</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <ButtonLink href="#buttons" variant="primary">
            Link styled as a button
          </ButtonLink>
        </div>
        <div className="mt-[var(--ds-space-4)] flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
        <Caption className="mt-[var(--ds-space-3)] block">
          Tab to any button above to see the token-driven focus ring (`--ds-focus-ring-*`).
        </Caption>
      </ReferenceSection>

      <ReferenceSection id="forms" title="Forms" description="Input, Textarea, Select, Checkbox, Radio, with default and invalid states." tone="surface-alt">
        <Surface treatment="elevated" className="max-w-xl p-[var(--ds-space-card-padding-lg)]">
          <form className="flex flex-col gap-[var(--ds-space-form-field-gap)]" action="#">
            <div className="flex flex-col gap-[var(--ds-space-form-label-gap)]">
              <Label htmlFor="specimen-input">Work email</Label>
              <Input id="specimen-input" type="email" placeholder="you@company.com" />
            </div>
            <div className="flex flex-col gap-[var(--ds-space-form-label-gap)]">
              <Label htmlFor="specimen-input-invalid">Website (invalid state)</Label>
              <Input id="specimen-input-invalid" invalid defaultValue="not-a-url" />
              <BodySmall className="text-[var(--ds-color-error)]">Enter a full URL, including https://</BodySmall>
            </div>
            <div className="flex flex-col gap-[var(--ds-space-form-label-gap)]">
              <Label htmlFor="specimen-select">Partnership type</Label>
              <Select id="specimen-select" defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="event">Event partnership</option>
                <option value="affiliate">Affiliate program</option>
                <option value="other">Other</option>
              </Select>
            </div>
            <div className="flex flex-col gap-[var(--ds-space-form-label-gap)]">
              <Label htmlFor="specimen-textarea">Tell us about the opportunity</Label>
              <Textarea id="specimen-textarea" placeholder="A brief description is enough to start." />
            </div>
            <Checkbox label="I understand this inquiry is not a newsletter signup." />
            <fieldset className="flex flex-col gap-[var(--ds-space-form-label-gap)]">
              <legend className="mb-1">
                <Text variant="label" as="span">
                  Preferred contact method
                </Text>
              </legend>
              <Radio name="contact-method" label="Email" defaultChecked />
              <Radio name="contact-method" label="Phone" />
            </fieldset>
            <div>
              <Button type="submit">Submit inquiry</Button>
            </div>
          </form>
        </Surface>
      </ReferenceSection>

      <ReferenceSection id="cards" title="Cards" description="Card, EditorialCard, and Section Header composed together.">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card interactive>
            <Text variant="label" as="p">Plain card</Text>
            <Body className="mt-2 text-[var(--ds-color-text-muted)]">
              Bordered by default, lifts slightly on hover when `interactive` is set.
            </Body>
          </Card>
          <EditorialCard
            eyebrow="Audience development"
            title="Grow readers who come back"
            description="Numbered editorial service line, per Compass Section 31."
          />
          <EditorialCard
            image={{
              src: "/images/articles/functional-medicine/interconnected-health-systems.jpg",
              alt: "Illustration of interconnected health systems.",
            }}
            eyebrow="Health"
            title="With a photograph"
            description="EditorialCard bleeds an optional ImageFrame to the card's edge."
          />
        </div>
        <div className="mt-[var(--ds-space-8)]">
          <SectionHeader
            eyebrow="Composed example"
            title="Section Header component"
            description="Eyebrow, heading, description, and optional actions, used at the top of any composed section."
            actions={
              <>
                <Button size="sm">Primary action</Button>
                <Button size="sm" variant="outline">
                  Secondary
                </Button>
              </>
            }
          />
        </div>
      </ReferenceSection>

      <ReferenceSection id="article-cards" title="Article cards" description="FeaturedArticle for the single dominant lead story, ArticleCard for supporting stories, matching the magazine-style editorial spread described in Compass Section 20/28." tone="surface-alt">
        <div className="flex flex-col gap-[var(--ds-space-8)]">
          <FeaturedArticle article={sampleFeatured} />
          <div className="grid gap-6 sm:grid-cols-2">
            {sampleSupporting.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </ReferenceSection>

      <ReferenceSection id="callouts-quotes" title="Callouts & quotes" description="Info, safety, evidence, warning, error, health, and disclaimer variants, plus the Quote pull-quote component.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Callout variant="info" title="Editorial note">
            Contextual information that supports the surrounding paragraph without raising concern.
          </Callout>
          <Callout variant="safety" title="Before you try this">
            Content that asks a reader to pause and consider a real safety consideration.
          </Callout>
          <Callout variant="evidence" title="What the research says">
            A summary of supporting evidence, with the strength and limits of that evidence stated plainly.
          </Callout>
          <Callout variant="warning" title="Worth double-checking">
            A non-blocking caution that does not require stopping.
          </Callout>
          <Callout variant="error" title="This didn't go through">
            A failed action, such as a form submission error.
          </Callout>
          <Callout variant="health" title="Health context only">
            Uses the Health accent, restricted to genuinely health-related content per Compass Section 19.
          </Callout>
          <Callout variant="disclaimer">
            This article is for general education and is not a substitute for personalized medical advice.
          </Callout>
        </div>
        <div className="mt-[var(--ds-space-6)] max-w-2xl">
          <Quote attribution="Kaye, co-founder">
            Useful content, audience trust, and thoughtful promotion can build a sustainable media
            business.
          </Quote>
        </div>
      </ReferenceSection>

      <ReferenceSection id="tags-badges" title="Tags, badges, chips & avatars" tone="surface-alt">
        <div className="flex flex-wrap items-center gap-3">
          <Tag>Functional Medicine</Tag>
          <Tag tone="health">Health</Tag>
          <Tag tone="neutral">Neutral</Tag>
        </div>
        <div className="mt-[var(--ds-space-4)] flex flex-wrap items-center gap-3">
          <Badge tone="neutral">Draft</Badge>
          <Badge tone="primary">Featured</Badge>
          <Badge tone="success">Confirmed</Badge>
          <Badge tone="warning">Pending review</Badge>
          <Badge tone="error">Failed</Badge>
          <Badge tone="health">Health</Badge>
        </div>
        <div className="mt-[var(--ds-space-4)] flex flex-wrap items-center gap-3">
          <Chip>Nutrition</Chip>
          <Chip selected>Sleep (selected)</Chip>
          <RemovableChipDemo />
        </div>
        <div className="mt-[var(--ds-space-4)] flex flex-wrap items-center gap-4">
          <Avatar initials="JA" size="sm" />
          <Avatar initials="KA" size="md" />
          <Avatar initials="MM" size="lg" />
        </div>
      </ReferenceSection>

      <ReferenceSection id="ribbon" title="Ribbon" description="Minimal line only, the Phase 1-approved direction. Restrained, selective, never obscures content.">
        <div className="flex flex-col gap-[var(--ds-space-8)]">
          <div>
            <Caption className="mb-2 block">Static</Caption>
            <Ribbon />
          </div>
          <div>
            <Caption className="mb-2 block">Slow drift (respects prefers-reduced-motion; try the toggle above)</Caption>
            <Ribbon animated />
          </div>
        </div>
      </ReferenceSection>

      <ReferenceSection id="motion" title="Motion" description="Fast, medium, slow, editorial reveal, hover, and focus, all restrained and reduced-motion safe." tone="surface-alt">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <Text variant="label" as="p">Editorial reveal</Text>
            <div className="mm-ds-reveal mt-3 rounded-[var(--ds-radius-md)] bg-[var(--ds-color-surface-muted)] p-4">
              <BodySmall className="text-[var(--ds-color-text-muted)]">
                Fades and rises in on mount. No animation at all under `prefers-reduced-motion: reduce`.
              </BodySmall>
            </div>
          </Card>
          <Card interactive>
            <Text variant="label" as="p">Hover / transform</Text>
            <BodySmall className="mt-2 text-[var(--ds-color-text-muted)]">
              This whole card lifts slightly on hover (`--ds-duration-medium`, `--ds-ease-editorial`). Hover
              disabled entirely for reduced motion via `motion-reduce:`.
            </BodySmall>
          </Card>
        </div>
      </ReferenceSection>

      <ReferenceSection
        id="responsive"
        title="Responsive behavior"
        description="Fluid type via clamp(), a single responsive container gutter, and layouts that reflow rather than break at mobile, tablet, laptop, and desktop widths."
      >
        <List>
          <li>Type roles that benefit from scaling (Display, H1–H3, Quote, Editorial Statement) use `clamp()` so they resize smoothly with viewport width instead of jumping at breakpoints.</li>
          <li>`Container`&apos;s side gutter (`--ds-container-gutter`) is itself a `clamp()` value, from 16px on narrow phones up to 40px on wide desktop.</li>
          <li>Card grids above (Cards, Article Cards) use CSS grid with responsive column counts (`sm:grid-cols-2`, `lg:grid-cols-3`) rather than fixed widths.</li>
          <li>Every focus-visible, hover, and motion state above was verified at mobile (390px), tablet (768px), laptop (1024px), and desktop (1440px) widths.</li>
        </List>
      </ReferenceSection>

      <footer className="py-[var(--ds-space-section-y-sm)]">
        <Container variant="wide">
          <Divider label="End of reference" />
          <Caption className="mt-[var(--ds-space-4)] block">
            Internal reference only. Not linked from navigation or the footer, not indexed, and not
            part of the public site architecture.
          </Caption>
        </Container>
      </footer>
    </Scope>
  );
}
