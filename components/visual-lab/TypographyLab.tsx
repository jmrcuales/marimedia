import { cn } from "@/lib/utils";

type TypographySystem = {
  id: string;
  label: string;
  displayFontLabel: string;
  bodyFontLabel: string;
  /** CSS `var(...)` reference for the display/heading typeface. */
  displayFontVar: string;
  /** CSS `var(...)` reference for the body/interface typeface. */
  bodyFontVar: string;
  summary: string;
  readability: string;
  warmth: string;
  authority: string;
  editorialCharacter: string;
  smallSizeClarity: string;
  weights: string;
  variableFont: string;
  loadingImpact: string;
  fallback: string;
};

const systems: TypographySystem[] = [
  {
    id: "system-a",
    label: "System A — Current baseline",
    displayFontLabel: "Poppins",
    bodyFontLabel: "Inter",
    displayFontVar: "var(--font-poppins)",
    bodyFontVar: "var(--font-inter)",
    summary:
      "What production already loads today. Included as the control, not as a foregone conclusion.",
    readability: "Good at body sizes. Inter was purpose-built for UI legibility.",
    warmth: "Geometric and even; reads more neutral-tech than editorial-warm.",
    authority: "Poppins' rounded terminals soften authority a little at large display sizes.",
    smallSizeClarity: "Inter remains clear at small sizes; Poppins numerals are distinct.",
    editorialCharacter: "Low. Poppins is a common SaaS/startup display face, which is part of the debt Phase 0 flagged.",
    weights: "Both ship 400 to 700+ and are already loaded in this exact weight range in production.",
    variableFont: "Google's Inter build used here is static per-weight, not the variable axis version; Poppins is static only.",
    loadingImpact: "Zero additional cost: both are already loaded globally by app/layout.tsx.",
    fallback: "system-ui, -apple-system, sans-serif (already configured in app/globals.css).",
  },
  {
    id: "system-b",
    label: "System B — Contemporary option",
    displayFontLabel: "Manrope",
    bodyFontLabel: "Inter",
    displayFontVar: "var(--lab-font-manrope)",
    bodyFontVar: "var(--font-inter)",
    summary:
      "Keeps Inter for body copy (already proven in this codebase) and swaps only the display/heading face for something with more geometric confidence and less generic-SaaS association than Poppins.",
    readability: "Comparable to System A at body sizes since body copy is identical (Inter).",
    warmth: "Manrope's slightly condensed, high-x-height letterforms feel more confident than warm.",
    authority: "Higher than Poppins at large sizes: squarer terminals, less bubbly.",
    smallSizeClarity: "Manrope headings stay crisp down to section-heading sizes; not intended for body text.",
    editorialCharacter: "Moderate. Common in contemporary product and editorial sites; less startup-generic than Poppins, but not distinctive on its own.",
    weights: "200 to 800, including a true 800 for compact hero eyebrows.",
    variableFont: "Manrope ships as a variable font upstream; this Google Fonts build is loaded as static per-weight for consistency with the rest of the stack.",
    loadingImpact: "One new family, headings only. Approximate added weight: roughly 15 to 25 KB per used weight (woff2, subset to latin), only on this route.",
    fallback: "system-ui, -apple-system, sans-serif.",
  },
  {
    id: "system-c",
    label: "System C — Editorial-contemporary option",
    displayFontLabel: "Plus Jakarta Sans",
    bodyFontLabel: "Source Sans 3",
    displayFontVar: "var(--lab-font-plus-jakarta-sans)",
    bodyFontVar: "var(--lab-font-source-sans-3)",
    summary:
      "A full pairing swap. Plus Jakarta Sans has more editorial warmth in its curves than Manrope; Source Sans 3 is a longer-form reading face with a slightly larger x-height than Inter, aimed squarely at article body copy.",
    readability: "Source Sans 3 was designed for long-form reading (originally for Adobe's own documentation and later refined for general use); comfortable at article body sizes.",
    warmth: "The warmest of the three options. Plus Jakarta Sans has rounder, friendlier curves without becoming playful.",
    authority: "Slightly less blunt than Manrope at display sizes, more approachable, still confident.",
    smallSizeClarity: "Source Sans 3 holds up well in captions and metadata; slightly wider than Inter at the same size.",
    editorialCharacter: "Highest of the three. This pairing reads as a considered editorial choice rather than a default UI kit.",
    weights: "Plus Jakarta Sans: 200 to 800. Source Sans 3: 200 to 900.",
    variableFont: "Both have upstream variable versions; this build loads static weights, matching the project's existing next/font pattern.",
    loadingImpact: "Two new families. Approximate added weight: roughly 30 to 45 KB total (woff2, subset to latin, only the weights actually used), only on this route.",
    fallback: "system-ui, -apple-system, sans-serif.",
  },
];

const serifAccent = {
  label: "Optional serif accent — Newsreader",
  fontVar: "var(--lab-font-newsreader)",
  note: "Shown once, independent of the three systems above, since Section 23 only allows a serif as a controlled accent, never as the main body or interface font. Any of the three systems could pair with this accent for pull quotes and editorial statements if approved.",
};

function Specimen({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[var(--lab-divider)] py-4 first:border-t-0 first:pt-0">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--lab-text-subtle)]">
        {label}
      </p>
      {children}
    </div>
  );
}

function TypographySystemPanel({ system }: { system: TypographySystem }) {
  const displayStyle = { fontFamily: system.displayFontVar } as React.CSSProperties;
  const bodyStyle = { fontFamily: system.bodyFontVar } as React.CSSProperties;

  return (
    <div className="flex flex-col rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[var(--lab-text-primary)]" style={displayStyle}>
          {system.label}
        </h3>
        <p className="mt-1 text-xs text-[var(--lab-text-secondary)]">
          Display: <strong>{system.displayFontLabel}</strong> &middot; Body:{" "}
          <strong>{system.bodyFontLabel}</strong>
        </p>
        <p className="mt-2 text-sm text-[var(--lab-text-secondary)]" style={bodyStyle}>
          {system.summary}
        </p>
      </div>

      <Specimen label="Small navigation">
        <div
          className="flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--lab-text-primary)]"
          style={bodyStyle}
        >
          <span>Home</span>
          <span>Health Articles</span>
          <span>About</span>
          <span className="rounded-full bg-[var(--lab-action-primary)] px-3 py-1 text-xs font-semibold text-[var(--lab-action-primary-text)]">
            Partner With Us
          </span>
        </div>
      </Specimen>

      <Specimen label="Compact hero eyebrow">
        <p
          className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]"
          style={bodyStyle}
        >
          Mari Media — Digital Media Company
        </p>
      </Specimen>

      <Specimen label="Hero heading">
        <h4
          className="text-2xl font-bold leading-tight text-[var(--lab-text-primary)] sm:text-3xl"
          style={displayStyle}
        >
          A trusted media partner for the brands people rely on.
        </h4>
      </Specimen>

      <Specimen label="Hero body copy">
        <p className="max-w-md text-sm text-[var(--lab-text-secondary)]" style={bodyStyle}>
          We build and operate digital brands that earn attention through useful content, careful
          partnerships, and consistent follow-through. Health is where we&apos;re proving that
          approach first.
        </p>
      </Specimen>

      <Specimen label="Primary and secondary buttons">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--lab-action-primary)] px-5 text-sm font-semibold text-[var(--lab-action-primary-text)]"
            style={bodyStyle}
          >
            Partner With Us
          </span>
          <span
            className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--lab-text-primary)] px-5 text-sm font-semibold text-[var(--lab-text-primary)]"
            style={bodyStyle}
          >
            Explore Health Articles
          </span>
        </div>
      </Specimen>

      <Specimen label="Section heading">
        <h5 className="text-xl font-bold text-[var(--lab-text-primary)]" style={displayStyle}>
          How we work with partners
        </h5>
      </Specimen>

      <Specimen label="Capability statement">
        <p className="text-sm text-[var(--lab-text-secondary)]" style={bodyStyle}>
          Editorial content, audience development, and email and affiliate partnerships, built
          around outcomes we can actually measure.
        </p>
      </Specimen>

      <Specimen label="Article headline">
        <h5 className="text-lg font-bold text-[var(--lab-text-primary)]" style={displayStyle}>
          What Is Functional Medicine? A Practical, Evidence-Based Introduction
        </h5>
      </Specimen>

      <Specimen label="Article metadata">
        <p className="text-xs text-[var(--lab-text-subtle)]" style={bodyStyle}>
          Functional Medicine &middot; 9 min read &middot; Published July 10, 2026
        </p>
      </Specimen>

      <Specimen label="Long-form body paragraph">
        <p className="max-w-md text-sm leading-relaxed text-[var(--lab-text-secondary)]" style={bodyStyle}>
          Readers arrive with a specific question and limited time. The job of the body copy is to
          answer that question plainly, cite where the claim comes from, and get out of the way.
          Every paragraph should earn the next one.
        </p>
      </Specimen>

      <Specimen label="Pull quote">
        <blockquote
          className="border-l-2 border-[var(--lab-action-primary)] pl-4 text-base italic text-[var(--lab-text-primary)]"
          style={bodyStyle}
        >
          Good health content should make people feel informed, not sold to.
        </blockquote>
      </Specimen>

      <Specimen label="Caption">
        <p className="text-xs text-[var(--lab-text-subtle)]" style={bodyStyle}>
          Editorial placeholder image. Final photography pending art-direction approval.
        </p>
      </Specimen>

      <Specimen label="Form label, input, and helper text">
        <label className="block text-sm" style={bodyStyle}>
          <span className="mb-1.5 block font-medium text-[var(--lab-text-primary)]">
            Work email
          </span>
          <span className="block w-full max-w-xs rounded-md border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-3 py-2 text-[var(--lab-text-secondary)]">
            you@company.com
          </span>
        </label>
        <p className="mt-1.5 text-xs text-[var(--lab-text-subtle)]" style={bodyStyle}>
          We&apos;ll only use this to respond to your inquiry.
        </p>
      </Specimen>

      <Specimen label="Footer copy">
        <p className="text-xs text-[var(--lab-text-subtle)]" style={bodyStyle}>
          © 2026 Mari Media. All rights reserved.
        </p>
      </Specimen>

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1 border-t border-[var(--lab-divider)] pt-4 text-xs text-[var(--lab-text-secondary)] sm:grid-cols-2">
        <p>
          <strong className="text-[var(--lab-text-primary)]">Readability:</strong>{" "}
          {system.readability}
        </p>
        <p>
          <strong className="text-[var(--lab-text-primary)]">Perceived warmth:</strong>{" "}
          {system.warmth}
        </p>
        <p>
          <strong className="text-[var(--lab-text-primary)]">Perceived authority:</strong>{" "}
          {system.authority}
        </p>
        <p>
          <strong className="text-[var(--lab-text-primary)]">Editorial character:</strong>{" "}
          {system.editorialCharacter}
        </p>
        <p>
          <strong className="text-[var(--lab-text-primary)]">Small-size clarity:</strong>{" "}
          {system.smallSizeClarity}
        </p>
        <p>
          <strong className="text-[var(--lab-text-primary)]">Available weights:</strong>{" "}
          {system.weights}
        </p>
        <p>
          <strong className="text-[var(--lab-text-primary)]">Variable-font support:</strong>{" "}
          {system.variableFont}
        </p>
        <p>
          <strong className="text-[var(--lab-text-primary)]">Loading impact:</strong>{" "}
          {system.loadingImpact}
        </p>
        <p className="sm:col-span-2">
          <strong className="text-[var(--lab-text-primary)]">Fallback stack:</strong>{" "}
          {system.fallback}
        </p>
      </div>
    </div>
  );
}

export function TypographyLab() {
  return (
    <div className="space-y-10">
      <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-3")}>
        {systems.map((system) => (
          <TypographySystemPanel key={system.id} system={system} />
        ))}
      </div>

      <div className="rounded-lg border border-dashed border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
        <h3 className="text-base font-bold text-[var(--lab-text-primary)]">{serifAccent.label}</h3>
        <p className="mt-1 max-w-2xl text-sm text-[var(--lab-text-secondary)]">{serifAccent.note}</p>
        <blockquote
          className="mt-4 max-w-xl border-l-2 border-[var(--lab-action-primary)] pl-4 text-xl italic text-[var(--lab-text-primary)]"
          style={{ fontFamily: serifAccent.fontVar, fontStyle: "italic" }}
        >
          Trust comes from actual usefulness, specificity, evidence, transparency, and consistent
          execution.
        </blockquote>
        <p className="mt-3 text-xs text-[var(--lab-text-subtle)]">
          Newsreader, italic, used only for the pull quote above. Not applied to body or interface
          text anywhere in this comparison.
        </p>
      </div>

      <div className="rounded-lg bg-[var(--lab-bg-surface-alt)] p-5 text-sm text-[var(--lab-text-secondary)]">
        <p>
          <strong className="text-[var(--lab-text-primary)]">Recommendation:</strong> System C
          (Plus Jakarta Sans / Source Sans 3) reads as the most distinct and editorially confident
          option of the three, and Source Sans 3&apos;s long-form legibility suits the article
          reading experience specifically. System B is the lower-risk, lower-cost move if JM wants
          to keep Inter and change only the display face. Neither is auto-applied. See the
          typography row of the JM approval form at the end of this report.
        </p>
      </div>
    </div>
  );
}
