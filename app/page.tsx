import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Scope } from "@/components/design-system/Scope";
import { Hero } from "@/components/homepage/Hero";
import { TrustPrinciples } from "@/components/homepage/TrustPrinciples";
import { WhatWeDo } from "@/components/homepage/WhatWeDo";
import { ForPartners } from "@/components/homepage/ForPartners";
import { HowWeWork } from "@/components/homepage/HowWeWork";
import { ForReaders } from "@/components/homepage/ForReaders";
import { HealthArticlesSpread } from "@/components/homepage/HealthArticlesSpread";
import { CompanyFounders } from "@/components/homepage/CompanyFounders";
import { FinalAction } from "@/components/homepage/FinalAction";

/**
 * Homepage (MARIWEB-009, Phase 3; reordered under MARIWEB-009.5, Homepage
 * Experience Optimization). The original Phase 3 order came from the
 * Homepage Experience Blueprint (`docs/homepage-experience-blueprint.md`,
 * Section 4). MARIWEB-009.5 revised that order after a first-time-visitor
 * UX review found two gaps: trust was asked for before any evidence of it
 * appeared, and the partner journey ended at "reach out" without saying
 * what happens next. See the MARIWEB-009.5 report (and the addendum at
 * the bottom of the blueprint doc) for the full before/after rationale.
 *
 * Current order: Hero, Editorial Principles, What We Do, For Our
 * Partners, How We Work, For Our Readers, Health Articles, Company &
 * Founders, Calm Final Action. The optional full-width photographic
 * pause (blueprint Section 5.5) remains omitted until an approved
 * photograph exists.
 *
 * Section tone sequence (each section's own file sets its `tone`; this
 * is the reference for why): page, surface, page, surface, surface-muted,
 * page, surface-muted, page, surface-muted. No two adjacent sections
 * share a background tone.
 */
export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <Scope className="block">
        <main id="main-content" className="overflow-x-hidden">
          <Hero />
          <TrustPrinciples />
          <WhatWeDo />
          <ForPartners />
          <HowWeWork />
          <ForReaders />
          <HealthArticlesSpread />
          <CompanyFounders />
          <FinalAction />
        </main>
      </Scope>
      <Footer />
    </>
  );
}
