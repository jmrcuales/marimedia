import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isProductionDeployment } from "@/lib/env";
import { getFeaturedArticles, getPublishedArticles } from "@/lib/articles";
import { LabShell } from "@/components/visual-lab/LabShell";
import { LabNav } from "@/components/visual-lab/LabNav";
import { LabSection } from "@/components/visual-lab/LabSection";
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
            Visual direction and typography approval lab
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--lab-text-secondary)]">
            A development-only space to compare typography, the Compass color palette translated
            into semantic roles, ribbon directions, shape and surface treatments, buttons,
            photography direction, and motion, before any of it is applied to production. Nothing
            on this page changes the production homepage, blog, or navigation.
          </p>
        </div>
      </header>

      <LabSection
        id="typography"
        navLabel="Typography"
        title="Typography comparison"
        description="Three systems, identical content throughout. Poppins/Inter is the current baseline, not a foregone winner."
      >
        <TypographyLab />
      </LabSection>

      <LabSection
        id="color"
        navLabel="Color"
        title="Semantic color lab"
        description="The Section 19 palette translated into proposed UI roles, with real calculated contrast ratios."
        tone="surface-alt"
      >
        <ColorLab />
      </LabSection>

      <LabSection
        id="composition"
        navLabel="Layout & composition"
        title="Layout and editorial composition lab"
        description="Illustrative sample compositions only. app/page.tsx is not modified by this phase."
      >
        <CompositionLab featuredArticle={featuredArticle} />
      </LabSection>

      <LabSection
        id="ribbon"
        navLabel="Ribbon"
        title="Ribbon exploration"
        description="Three directions for Mari Media's fluid ribbon motif (Compass Section 21), none of which trace or extend the logo mark."
        tone="surface-alt"
      >
        <RibbonLab />
      </LabSection>

      <LabSection
        id="shape-surface"
        navLabel="Shape & surface"
        title="Shape and surface lab"
        description="Radius scale, shadow scale, borders vs. shadows, and editorial image-frame treatments."
      >
        <ShapeSurfaceLab />
      </LabSection>

      <LabSection
        id="buttons"
        navLabel="Buttons"
        title="Button lab"
        description="Primary, secondary, link, destructive, disabled, and keyboard-focus states."
        tone="surface-alt"
      >
        <ButtonLab />
      </LabSection>

      <LabSection
        id="photography"
        navLabel="Photography direction"
        title="Photography direction lab"
        description="Labeled structural placeholders and art-direction notes only. No photography is sourced in this phase."
      >
        <PhotographyLab />
      </LabSection>

      <LabSection
        id="motion"
        navLabel="Motion"
        title="Motion lab"
        description="Restrained, reduced-motion-safe examples. Nothing here is required to understand the page."
        tone="surface-alt"
      >
        <MotionLab />
      </LabSection>
    </LabShell>
  );
}
