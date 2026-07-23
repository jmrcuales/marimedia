import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ArticleSummary } from "@/types/article";
import { formatArticleDate } from "@/types/article";
import { InquiryFormSample } from "./InquiryFormSample";

function SubHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-5">
      <h3 className="text-lg font-bold text-[var(--lab-text-primary)]">{title}</h3>
      {note && <p className="mt-1 text-sm text-[var(--lab-text-subtle)]">{note}</p>}
    </div>
  );
}

function PlaceholderFrame({
  label,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex ${aspect} w-full items-center justify-center rounded-lg border border-dashed border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)] p-4 text-center`}
    >
      <span className="text-xs font-medium text-[var(--lab-text-subtle)]">{label}</span>
    </div>
  );
}

/** 1. Compact editorial hero: left-aligned, one primary + one restrained secondary action. */
function HeroSample() {
  return (
    <div className="grid grid-cols-1 items-center gap-8 rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
          Mari Media — Digital Media Company
        </p>
        <h4 className="mt-3 text-3xl font-bold leading-tight text-[var(--lab-text-primary)] sm:text-4xl">
          A trusted media partner for the brands people rely on.
        </h4>
        <p className="mt-4 max-w-md text-base text-[var(--lab-text-secondary)]">
          We build and operate digital brands that earn attention through useful content, careful
          partnerships, and consistent follow-through. Health is where we&apos;re proving that
          approach first.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--lab-action-primary)] px-6 text-sm font-semibold text-[var(--lab-action-primary-text)]">
            Partner With Us
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--lab-link)] underline-offset-4 hover:underline">
            Explore Health Articles
            <ArrowRight size={16} aria-hidden />
          </span>
        </div>
      </div>
      <PlaceholderFrame label="Editorial photography placeholder — human connection image" aspect="aspect-[4/3]" />
    </div>
  );
}

/** 2. What We Do: numbered editorial capability lines, not three identical cards (Compass Section 20/31). */
function WhatWeDoSample() {
  const capabilities = [
    {
      number: "01",
      title: "Editorial content",
      description: "Research-informed articles that answer a real question before they ask for anything.",
    },
    {
      number: "02",
      title: "Audience development",
      description: "Growing readerships that come back, not one-time traffic spikes.",
    },
    {
      number: "03",
      title: "Email and affiliate partnerships",
      description: "Promotion built on relevance and disclosure, not volume.",
    },
  ];

  return (
    <div className="divide-y divide-[var(--lab-divider)] rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)]">
      {capabilities.map((item) => (
        <div key={item.number} className="flex gap-5 p-5 sm:p-6">
          <span className="shrink-0 font-mono text-2xl font-bold text-[var(--lab-pastel-red)]">
            {item.number}
          </span>
          <div>
            <h4 className="text-base font-bold text-[var(--lab-text-primary)]">{item.title}</h4>
            <p className="mt-1 text-sm text-[var(--lab-text-secondary)]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** 3. Partner and reader pathways: equal importance, visually related but not identical. */
function PathwaysSample() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-lg border-t-4 border-[var(--lab-action-primary)] bg-[var(--lab-bg-surface)] p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
          For partners
        </p>
        <h4 className="mt-2 text-lg font-bold text-[var(--lab-text-primary)]">
          Reach an audience that reads before it acts.
        </h4>
        <p className="mt-2 text-sm text-[var(--lab-text-secondary)]">
          Programs and opportunities we evaluate for fit, transparency, and audience relevance.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--lab-link)] underline-offset-4 hover:underline">
          Partner With Us
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
      <div className="rounded-lg border-t-4 border-[var(--lab-muted-green)] bg-[var(--lab-bg-surface)] p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-text-secondary)]">
          For readers
        </p>
        <h4 className="mt-2 text-lg font-bold text-[var(--lab-text-primary)]">
          Understand a health topic without the noise.
        </h4>
        <p className="mt-2 text-sm text-[var(--lab-text-secondary)]">
          Research-informed articles written to be understood, not just published.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--lab-link)] underline-offset-4 hover:underline">
          Explore Health Articles
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </div>
  );
}

/** 4. Featured health-article module: one dominant real article, honestly labeled supporting slots. */
function FeaturedArticleSample({ article }: { article: ArticleSummary | null }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
      {article ? (
        <Link
          href={`/blog/${article.slug}`}
          className="group overflow-hidden rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)]"
        >
          <PlaceholderFrame label={article.heroImage.alt} aspect="aspect-[16/9]" />
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
              {article.category}
            </p>
            <h4 className="mt-2 text-xl font-bold text-[var(--lab-text-primary)] group-hover:underline">
              {article.title}
            </h4>
            <p className="mt-2 text-sm text-[var(--lab-text-secondary)]">{article.excerpt}</p>
            <p className="mt-3 text-xs text-[var(--lab-text-subtle)]">
              {formatArticleDate(article.publishedAt)} &middot; {article.readingTimeMinutes} min
              read
            </p>
          </div>
        </Link>
      ) : (
        <PlaceholderFrame label="Dominant article placeholder" aspect="aspect-[16/9]" />
      )}
      <div className="flex flex-col gap-4">
        {[1, 2].map((position) => (
          <div
            key={position}
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)] p-4 text-center"
          >
            <span className="text-xs font-medium text-[var(--lab-text-subtle)]">
              Supporting article position {position} — reserved for a future published article,
              not filled with placeholder content.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 5. Founder-context sample: compact, no inflated bio, honest placeholder frame. */
function FounderSample() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-6 sm:flex-row sm:items-start">
      <div className="w-full max-w-[160px] shrink-0">
        <PlaceholderFrame label="Founder photograph — pending" aspect="aspect-square" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-text-secondary)]">
          A note from our founders
        </p>
        <p className="mt-2 max-w-md text-sm text-[var(--lab-text-secondary)]">
          A short, honest note from JM and Kristine will go here once approved. This structural
          frame stands in until real copy and a real photograph are ready. No biography or
          portrait is fabricated for this sample.
        </p>
      </div>
    </div>
  );
}

export function CompositionLab({ featuredArticle }: { featuredArticle: ArticleSummary | null }) {
  return (
    <div className="space-y-14">
      <div>
        <SubHeading
          title="1. Compact editorial hero"
          note="Left-aligned, no full-screen height, no floating icon-card illustration."
        />
        <HeroSample />
      </div>
      <div>
        <SubHeading
          title="2. What We Do"
          note="Numbered editorial capability lines instead of three identical cards, per Compass Section 20."
        />
        <WhatWeDoSample />
      </div>
      <div>
        <SubHeading
          title="3. Partner and reader pathways"
          note="Equal in importance, visually related through shared structure, distinguished by accent color."
        />
        <PathwaysSample />
      </div>
      <div>
        <SubHeading
          title="4. Featured health-article module"
          note="One dominant, real published article. Supporting positions are honestly labeled as reserved, not filled with invented articles."
        />
        <FeaturedArticleSample article={featuredArticle} />
      </div>
      <div>
        <SubHeading
          title="5. Founder-context sample"
          note="Compact and human, with an honest placeholder frame rather than a fabricated portrait or biography."
        />
        <FounderSample />
      </div>
      <div>
        <SubHeading
          title="6. Inquiry form sample"
          note="Labels above fields, visible keyboard focus, and supporting privacy copy. Does not submit anywhere."
        />
        <InquiryFormSample />
      </div>
    </div>
  );
}
