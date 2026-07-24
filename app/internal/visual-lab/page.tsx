import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isProductionDeployment } from "@/lib/env";
import { getFeaturedArticles, getPublishedArticles } from "@/lib/articles";
import { LabShell } from "@/components/visual-lab/LabShell";
import { LabNav } from "@/components/visual-lab/LabNav";
import { LabSection } from "@/components/visual-lab/LabSection";
import { LiveConfigurator } from "@/components/visual-lab/LiveConfigurator";
import { TypographyLab } from "@/components/visual-lab/TypographyLab";
import { ColorLab } from "@/components/visual-lab/ColorLab";
import { CompositionLab } from "@/components/visual-lab/CompositionLab";
import { RibbonLab } from "@/components/visual-lab/RibbonLab";
import { ShapeSurfaceLab } from "@/components/visual-lab/ShapeSurfaceLab";
import { ButtonLab } from "@/components/visual-lab/ButtonLab";
import { PhotographyLab } from "@/components/visual-lab/PhotographyLab";
import { MotionLab } from "@/components/visual-lab/MotionLab";

/**
 * Phase 1 visual-direction and typography approval lab (MARIWEB-007).
 *
 * This route is intentionally not part of the public site:
 * - it is never linked from navigation, the footer, or any production page;
 * - it carries its own `noindex, nofollow` metadata, in addition to the
 *   global non-production `robots` behavior from MARIWEB-006;
 * - it 404s outright on the verified production deployment (see the
 *   `isProductionDeployment()` check below), so even a guessed URL
 *   resolves to nothing on marimedia.co;
 * - `app/sitemap.ts` never lists it, since that file only ever returns
 *   the home route, the blog index, and published articles.
 */
export const metadata: Metadata = {
  title: "Visual Lab (Internal)",
  description: "Internal, development-only visual-direction review. Not part of the public site.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function VisualLabPage() {
  if (isProductionDeployment()) {
    notFound();
  }

  const featured = await getFeaturedArticles();
  const published = await getPublishedArticles();
  const featuredArticle = featured[0] ?? published[0] ?? null;

  return (
    <LabShell>
      <LabNav />

      <header className="border-b border-[var(--lab-divider)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
            MARIWEB-007 &middot; Phase 1
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[var(--lab-text-primary)] sm:text-4xl">
            Visual direction approval lab
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--lab-text-secondary)]">
            Use the controls below the live preview to try typography, layout, ribbon, shape, and
            color directions on one realistic Mari Media composition. Detailed reference material
            for each topic, including the full typography and contrast reports, sits further down
            in collapsed sections. Nothing on this page changes the production homepage, blog, or
            navigation.
          </p>
        </div>
      </header>

      <LabSection
        id="live-preview"
        navLabel="Live preview"
        title="Live Website Preview"
        description="Change any control and the composition below updates immediately, with no reload. See the current-selections summary for a plain-text copy of your choices."
      >
        <LiveConfigurator featuredArticle={featuredArticle} />
      </LabSection>

      <LabSection
        id="typography"
        navLabel="Typography"
        title="Detailed typography specimens"
        description="The same three systems shown in the live preview above, broken out per element with readability, warmth, authority, and loading-impact notes."
        tone="surface-alt"
        collapsibleSummary="Show detailed typography specimens"
      >
        <TypographyLab />
      </LabSection>

      <LabSection
        id="color"
        navLabel="Color"
        title="Color and contrast report"
        description="The Section 19 palette translated into proposed UI roles, with real calculated contrast ratios."
        collapsibleSummary="Show the color and contrast report"
      >
        <ColorLab />
      </LabSection>

      <LabSection
        id="composition"
        navLabel="Layout & composition"
        title="Layout and editorial composition reference"
        description="The individual sample blocks the live preview composition is drawn from, shown in isolation. Illustrative only; app/page.tsx is not modified by this phase."
        tone="surface-alt"
        collapsibleSummary="Show individual composition samples"
      >
        <CompositionLab featuredArticle={featuredArticle} />
      </LabSection>

      <LabSection
        id="ribbon"
        navLabel="Ribbon"
        title="Ribbon details"
        description="Three directions for Mari Media's fluid ribbon motif (Compass Section 21), none of which trace or extend the logo mark."
        collapsibleSummary="Show ribbon details"
      >
        <RibbonLab />
      </LabSection>

      <LabSection
        id="shape-surface"
        navLabel="Shape & surface"
        title="Shape and surface reference"
        description="Radius scale, shadow scale, borders vs. shadows, and editorial image-frame treatments."
        tone="surface-alt"
        collapsibleSummary="Show the shape and surface reference"
      >
        <ShapeSurfaceLab />
      </LabSection>

      <LabSection
        id="buttons"
        navLabel="Buttons"
        title="Button states"
        description="Primary, secondary, link, destructive, disabled, and keyboard-focus states."
        collapsibleSummary="Show button states"
      >
        <ButtonLab />
      </LabSection>

      <LabSection
        id="photography"
        navLabel="Photography direction"
        title="Photography guidance"
        description="Labeled structural placeholders and art-direction notes only. No photography is sourced in this phase."
        tone="surface-alt"
        collapsibleSummary="Show photography guidance"
      >
        <PhotographyLab />
      </LabSection>

      <LabSection
        id="motion"
        navLabel="Motion"
        title="Motion and accessibility notes"
        description="Restrained, reduced-motion-safe examples. Nothing here is required to understand the page."
        collapsibleSummary="Show motion and accessibility notes"
      >
        <MotionLab />
      </LabSection>
    </LabShell>
  );
}
