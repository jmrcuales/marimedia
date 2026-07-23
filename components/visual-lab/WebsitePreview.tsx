import { ArrowRight, ImageOff } from "lucide-react";
import type { ArticleSummary } from "@/types/article";
import { formatArticleDate } from "@/types/article";
import { cn } from "@/lib/utils";
import {
  type LabConfig,
  typographyFontVars,
  getRadiusScale,
  getButtonRadius,
  getSurfaceTreatment,
  colorEmphasisPresets,
} from "./lab-config";

/**
 * The realistic, non-production Mari Media composition used by the Live
 * Website Preview. Every visual property (typography, radius, shadow,
 * surface, ribbon, color emphasis, asymmetry, hero/pathways variant,
 * button shape, motion) is derived from `config`, so changing a control
 * in `ControlPanel` re-renders this same component with new values. No
 * production component is reused or modified here.
 */

function ImagePlaceholder({
  role,
  aspect,
  className,
  radius,
}: {
  role: string;
  aspect: string;
  className?: string;
  radius: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-1 border border-dashed border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)] p-3 text-center",
        aspect,
        className
      )}
      style={{ borderRadius: radius }}
      role="img"
      aria-label={`${role}. Internal image placeholder, approved photography required.`}
    >
      <ImageOff size={16} className="text-[var(--lab-text-subtle)]" aria-hidden />
      <span className="text-[11px] font-medium text-[var(--lab-text-subtle)]">{role}</span>
      <span className="text-[10px] text-[var(--lab-text-subtle)]">
        Internal image placeholder — approved photography required
      </span>
    </div>
  );
}

function RibbonDivider({ config }: { config: LabConfig }) {
  if (config.ribbon === "none") return null;

  if (config.ribbon === "minimal-line") {
    return (
      <div
        aria-hidden
        className="mx-auto h-[2px] w-full max-w-none bg-gradient-to-r from-[var(--lab-deep-red)] via-[var(--lab-pastel-red)] to-transparent"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="mm-ribbon-animated mm-motion-demo h-3 w-full"
      style={{
        background:
          "linear-gradient(90deg, var(--lab-soft-blush), var(--lab-warm-sand), var(--lab-soft-sage), var(--lab-soft-blush))",
      }}
    />
  );
}

const heroGridClasses: Record<LabConfig["hero"], Record<LabConfig["asymmetry"], string>> = {
  "compact-split": {
    low: "lg:grid-cols-2",
    moderate: "lg:grid-cols-[1.3fr_1fr]",
    strong: "lg:grid-cols-[1.7fr_1fr]",
  },
  "full-width": {
    low: "lg:grid-cols-1",
    moderate: "lg:grid-cols-1",
    strong: "lg:grid-cols-1",
  },
  "image-led": {
    low: "lg:grid-cols-2",
    moderate: "lg:grid-cols-[1fr_1.3fr]",
    strong: "lg:grid-cols-[1fr_1.7fr]",
  },
};

const heroTextMaxWidth: Record<LabConfig["asymmetry"], string> = {
  low: "max-w-xl",
  moderate: "max-w-lg",
  strong: "max-w-md",
};

function Hero({ config, buttonStyle, secondaryButtonStyle }: SectionProps) {
  const fonts = typographyFontVars[config.typography];
  const radii = getRadiusScale(config.radius);
  const emphasis = colorEmphasisPresets[config.colorEmphasis];
  const isImageLed = config.hero === "image-led";
  const isFullWidth = config.hero === "full-width";

  const textBlock = (
    <div className={cn(!isFullWidth && heroTextMaxWidth[config.asymmetry])}>
      <span
        className="mm-motion-demo inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: emphasis.eyebrowBg,
          color: emphasis.eyebrowText,
        }}
      >
        Mari Media — Digital Media Company
      </span>
      {/* This preview renders inside the page's own "Live Website Preview"
          h2 (see LabSection), so its internal hierarchy starts at h3
          rather than a second document-level h1. */}
      <h3
        className="wp-heading mt-3 text-3xl font-bold leading-tight text-[var(--lab-text-primary)] sm:text-4xl"
        style={{ fontFamily: fonts.display }}
      >
        A trusted media partner for the brands people rely on.
      </h3>
      <p className="mt-4 text-base text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
        Mari Media is a digital media company that builds and operates trusted digital brands.
        Health is our first editorial proving ground, not the whole of who we are. We support
        readers who want clear information and partners who want a considered, transparent
        relationship. Affiliate marketing is one revenue capability among several, not the entire
        company.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          className="mm-motion-demo inline-flex h-11 items-center justify-center px-6 text-sm font-semibold transition-colors duration-200"
          style={buttonStyle}
        >
          Partner With Us
        </button>
        <button
          type="button"
          className="mm-motion-demo inline-flex h-11 items-center justify-center px-6 text-sm font-semibold transition-colors duration-200"
          style={secondaryButtonStyle}
        >
          Explore Health Articles
        </button>
      </div>
    </div>
  );

  const visual = (
    <ImagePlaceholder
      role="Hero — human connection image"
      aspect={isFullWidth ? "aspect-[21/9]" : isImageLed ? "aspect-[4/3]" : "aspect-[4/3]"}
      radius={radii.image}
    />
  );

  if (isFullWidth) {
    return (
      <div className="space-y-6">
        {textBlock}
        {visual}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 items-center gap-8", heroGridClasses[config.hero][config.asymmetry])}>
      {isImageLed ? (
        <>
          {visual}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {visual}
        </>
      )}
    </div>
  );
}

type SectionProps = {
  config: LabConfig;
  buttonStyle: React.CSSProperties;
  secondaryButtonStyle: React.CSSProperties;
};

function WhatWeDo({ config }: SectionProps) {
  const fonts = typographyFontVars[config.typography];
  const capabilities = [
    { number: "01", title: "Editorial content", description: "Research-informed articles that answer a real question before they ask for anything." },
    { number: "02", title: "Audience development", description: "Growing readerships that come back, not one-time traffic spikes." },
    { number: "03", title: "Email and affiliate partnerships", description: "Promotion built on relevance and disclosure, a revenue capability, not the whole identity." },
  ];

  const indentSteps: Record<LabConfig["asymmetry"], number> = { low: 0, moderate: 6, strong: 14 };
  const step = indentSteps[config.asymmetry];

  return (
    <div>
      <h4
        className="wp-heading text-2xl font-bold text-[var(--lab-text-primary)]"
        style={{ fontFamily: fonts.display }}
      >
        What we do
      </h4>
      <div className="mt-6 divide-y divide-[var(--lab-divider)]">
        {capabilities.map((item, index) => (
          <div
            key={item.number}
            className="flex gap-5 py-5"
            style={{ marginLeft: `${step * index}px` }}
          >
            <span className="shrink-0 font-mono text-2xl font-bold text-[var(--lab-pastel-red)]">
              {item.number}
            </span>
            <div>
              <h5 className="wp-heading text-base font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
                {item.title}
              </h5>
              <p className="mt-1 text-sm text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pathways({ config, buttonStyle }: SectionProps) {
  const fonts = typographyFontVars[config.typography];
  const emphasis = colorEmphasisPresets[config.colorEmphasis];
  const radii = getRadiusScale(config.radius);
  const surfaceTreatment = getSurfaceTreatment(config.surface, config.shadow);

  const cardStyle = (accent: string): React.CSSProperties => ({
    borderRadius: radii.surface,
    borderTopWidth: "4px",
    borderTopStyle: "solid",
    borderTopColor: accent,
    borderLeftWidth: surfaceTreatment.border ? "1px" : "0px",
    borderRightWidth: surfaceTreatment.border ? "1px" : "0px",
    borderBottomWidth: surfaceTreatment.border ? "1px" : "0px",
    borderLeftStyle: "solid",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
    borderLeftColor: "var(--lab-border-strong)",
    borderRightColor: "var(--lab-border-strong)",
    borderBottomColor: "var(--lab-border-strong)",
    boxShadow: surfaceTreatment.boxShadow,
    backgroundColor: "var(--lab-bg-surface)",
  });

  const partnerCard = (
    <div className="p-6" style={cardStyle(emphasis.partnerAccent)}>
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: emphasis.partnerAccent, fontFamily: fonts.body }}>
        For partners
      </p>
      <h5 className="wp-heading mt-2 text-lg font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
        Reach an audience that reads before it acts.
      </h5>
      <p className="mt-2 text-sm text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
        Programs and opportunities we evaluate for fit, transparency, and audience relevance.
      </p>
      <button type="button" className="mm-motion-demo mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "var(--lab-link)", fontFamily: fonts.body }}>
        Partner With Us <ArrowRight size={16} aria-hidden />
      </button>
    </div>
  );

  const readerCard = (
    <div className="p-6" style={cardStyle(emphasis.readerAccent)}>
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--lab-text-secondary)", fontFamily: fonts.body }}>
        For readers
      </p>
      <h5 className="wp-heading mt-2 text-lg font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
        Understand a health topic without the noise.
      </h5>
      <p className="mt-2 text-sm text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
        Research-informed articles written to be understood, not just published.
      </p>
      <button type="button" className="mm-motion-demo mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "var(--lab-link)", fontFamily: fonts.body }}>
        Explore Health Articles <ArrowRight size={16} aria-hidden />
      </button>
    </div>
  );

  const heading = (
    <h4 className="wp-heading mb-6 text-2xl font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
      Built for readers and partners alike
    </h4>
  );

  if (config.pathways === "alternating-bands") {
    return (
      <div>
        {heading}
        <div className="space-y-6">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
            {partnerCard}
            <ImagePlaceholder role="Partner / collaboration image" aspect="aspect-[4/3]" radius={radii.image} />
          </div>
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
            <ImagePlaceholder role="Human connection image" aspect="aspect-[4/3]" radius={radii.image} className="lg:order-1" />
            <div className="lg:order-2">{readerCard}</div>
          </div>
        </div>
      </div>
    );
  }

  const staggerOffset = config.pathways === "staggered-editorial" ? "lg:mt-10" : "";

  return (
    <div>
      {heading}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>{partnerCard}</div>
        <div className={staggerOffset}>{readerCard}</div>
      </div>
    </div>
  );
}

function Credibility({ config }: SectionProps) {
  const fonts = typographyFontVars[config.typography];
  const serifStyle: React.CSSProperties =
    config.serifAccent === "newsreader" ? { fontFamily: "var(--lab-font-newsreader)", fontStyle: "italic" } : { fontFamily: fonts.body, fontStyle: "italic" };

  return (
    <div className="max-w-2xl">
      <h4 className="wp-heading text-2xl font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
        How we work
      </h4>
      <p className="mt-3 text-sm text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
        We evaluate partnerships for audience fit and editorial relevance, disclose commercial
        relationships where they matter, and review health content for accuracy before it
        publishes.
      </p>
      <blockquote className="mt-5 border-l-2 border-[var(--lab-action-primary)] pl-4 text-lg text-[var(--lab-text-primary)]" style={serifStyle}>
        Good health content should make people feel informed, not sold to.
      </blockquote>
    </div>
  );
}

function FeaturedArticle({ config, article }: SectionProps & { article: ArticleSummary | null }) {
  const fonts = typographyFontVars[config.typography];
  const radii = getRadiusScale(config.radius);
  const surfaceTreatment = getSurfaceTreatment(config.surface, config.shadow);
  const emphasis = colorEmphasisPresets[config.colorEmphasis];

  return (
    <div>
      <h4 className="wp-heading text-2xl font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
        Featured health article
      </h4>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div
          style={{
            borderRadius: radii.surface,
            border: surfaceTreatment.border ? "1px solid var(--lab-border-strong)" : "none",
            boxShadow: surfaceTreatment.boxShadow,
            backgroundColor: "var(--lab-bg-surface)",
            overflow: "hidden",
          }}
        >
          <ImagePlaceholder
            role={article?.heroImage.alt ?? "Editorial health image"}
            aspect="aspect-[16/9]"
            radius="0px"
          />
          <div className="p-5">
            <p
              className="rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wider"
              style={{
                display: "inline-block",
                backgroundColor: emphasis.healthCalloutBg,
                color: emphasis.healthCalloutText,
                fontFamily: fonts.body,
              }}
            >
              {article?.category ?? "Functional Medicine"}
            </p>
            <h5 className="wp-heading mt-2 text-xl font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
              {article?.title ?? "What Is Functional Medicine? A Practical, Evidence-Based Introduction"}
            </h5>
            <p className="mt-2 text-sm text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
              {article?.excerpt ?? "A practical introduction to functional medicine's patient-centered approach."}
            </p>
            <p className="mt-3 text-xs text-[var(--lab-text-subtle)]" style={{ fontFamily: fonts.body }}>
              {article ? `${formatArticleDate(article.publishedAt)} · ${article.readingTimeMinutes} min read` : "Published July 10, 2026 · 9 min read"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2].map((position) => (
            <div
              key={position}
              className="flex flex-1 items-center justify-center border border-dashed border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)] p-4 text-center"
              style={{ borderRadius: radii.surface }}
            >
              <span className="text-xs font-medium text-[var(--lab-text-subtle)]">
                Supporting article position {position} — reserved for a future published article.
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Founder({ config }: SectionProps) {
  const fonts = typographyFontVars[config.typography];
  const radii = getRadiusScale(config.radius);

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
      <div className="w-full max-w-[140px] shrink-0">
        <ImagePlaceholder role="Founder photograph" aspect="aspect-square" radius={radii.image} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
          A note from our founders
        </p>
        <p className="mt-2 max-w-md text-sm text-[var(--lab-text-secondary)]" style={{ fontFamily: fonts.body }}>
          A short, honest note from JM and Kristine will go here once approved. No biography or
          portrait is fabricated for this preview.
        </p>
      </div>
    </div>
  );
}

function InquiryCta({ config, buttonStyle }: SectionProps) {
  const fonts = typographyFontVars[config.typography];
  const radii = getRadiusScale(config.radius);
  const surfaceTreatment = getSurfaceTreatment(config.surface, config.shadow);

  const fieldStyle: React.CSSProperties = {
    borderRadius: radii.form,
    fontFamily: fonts.body,
  };

  return (
    <div
      className="max-w-md p-6"
      style={{
        borderRadius: radii.surface,
        border: surfaceTreatment.border ? "1px solid var(--lab-border-strong)" : "1px solid transparent",
        boxShadow: surfaceTreatment.boxShadow,
        backgroundColor: "var(--lab-bg-surface)",
      }}
    >
      <h4 className="wp-heading text-lg font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
        Tell us about your audience
      </h4>
      <div className="mt-4 space-y-4">
        <label className="block text-sm" style={{ fontFamily: fonts.body }}>
          <span className="mb-1.5 block font-medium text-[var(--lab-text-primary)]">Work email</span>
          <input
            type="email"
            disabled
            placeholder="you@company.com"
            className="w-full border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-3 py-2 text-[var(--lab-text-primary)]"
            style={fieldStyle}
          />
        </label>
        <p className="text-xs text-[var(--lab-text-subtle)]" style={{ fontFamily: fonts.body }}>
          We only use this to respond to your inquiry. Preview only, this field does not accept
          input.
        </p>
        <button type="button" className="mm-motion-demo inline-flex h-11 items-center justify-center px-6 text-sm font-semibold transition-colors duration-200" style={buttonStyle}>
          Partner With Us
        </button>
      </div>
    </div>
  );
}

function Footer({ config }: SectionProps) {
  const fonts = typographyFontVars[config.typography];
  const emphasis = colorEmphasisPresets[config.colorEmphasis];

  return (
    <div className="border-t-2 pt-6 text-xs text-[var(--lab-text-subtle)]" style={{ borderColor: emphasis.footerAccent, fontFamily: fonts.body }}>
      <p>© 2026 Mari Media. All rights reserved.</p>
      <p className="mt-1">A digital media company building trusted digital brands, starting with health.</p>
    </div>
  );
}

function Nav({ config, buttonStyle }: SectionProps) {
  const fonts = typographyFontVars[config.typography];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--lab-divider)] pb-4">
      <span className="wp-heading text-lg font-bold text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.display }}>
        Mari Media
      </span>
      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--lab-text-primary)]" style={{ fontFamily: fonts.body }}>
        <span>Home</span>
        <span>Health Articles</span>
        <span>About</span>
        <button type="button" className="mm-motion-demo inline-flex h-9 items-center justify-center px-4 text-xs font-semibold transition-colors duration-200" style={buttonStyle}>
          Partner With Us
        </button>
      </div>
    </div>
  );
}

export function WebsitePreview({
  config,
  featuredArticle,
}: {
  config: LabConfig;
  featuredArticle: ArticleSummary | null;
}) {
  const fonts = typographyFontVars[config.typography];
  const radii = getRadiusScale(config.radius);
  const buttonRadius = getButtonRadius(config.buttonShape);
  const emphasis = colorEmphasisPresets[config.colorEmphasis];

  const buttonStyle: React.CSSProperties = {
    borderRadius: buttonRadius,
    backgroundColor: "var(--lab-action-primary)",
    color: "var(--lab-action-primary-text)",
  };
  const secondaryButtonStyle: React.CSSProperties = {
    borderRadius: buttonRadius,
    border: "2px solid var(--lab-text-primary)",
    backgroundColor: "transparent",
    color: "var(--lab-text-primary)",
  };
  const navButtonStyle: React.CSSProperties = {
    borderRadius: buttonRadius,
    backgroundColor: emphasis.navCtaBg,
    color: emphasis.navCtaText,
  };

  const sectionProps: SectionProps = { config, buttonStyle, secondaryButtonStyle };

  return (
    <div
      data-motion={config.motion}
      className="space-y-10 bg-[var(--lab-bg-page)] p-5 text-[var(--lab-text-primary)] sm:p-8"
      style={{ fontFamily: fonts.body }}
    >
      <Nav {...sectionProps} buttonStyle={navButtonStyle} />
      <Hero {...sectionProps} />
      <RibbonDivider config={config} />
      <WhatWeDo {...sectionProps} />
      <Pathways {...sectionProps} />
      <RibbonDivider config={config} />
      <Credibility {...sectionProps} />
      <FeaturedArticle {...sectionProps} article={featuredArticle} />
      <Founder {...sectionProps} />
      <InquiryCta {...sectionProps} />
      <RibbonDivider config={config} />
      <Footer {...sectionProps} />
    </div>
  );
}
