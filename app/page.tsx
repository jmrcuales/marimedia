import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Scope } from "@/components/design-system/Scope";
import { Hero } from "@/components/homepage/Hero";
import { WhatWeDo } from "@/components/homepage/WhatWeDo";
import { ForPartners } from "@/components/homepage/ForPartners";
import { ForReaders } from "@/components/homepage/ForReaders";
import { HealthArticlesSpread } from "@/components/homepage/HealthArticlesSpread";
import { CompanyFounders } from "@/components/homepage/CompanyFounders";
import { FinalAction } from "@/components/homepage/FinalAction";

/**
 * Homepage (MARIWEB-009, Phase 3), composed exactly per the Homepage
 * Experience Blueprint (`docs/homepage-experience-blueprint.md`, Section 4)
 * from the Phase 2 production design system. Section order is fixed by
 * the blueprint and must not be reordered without revisiting that
 * document: Hero, What We Do, For Our Partners, For Our Readers, Health
 * Articles, Company & Founders, Calm Final Action. The optional
 * full-width photographic pause (blueprint Section 5.5) is omitted, per
 * its own explicit condition, until an approved photograph exists.
 */
export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <Scope className="block">
        <main id="main-content" className="overflow-x-hidden pt-24 lg:pt-28">
          <Hero />
          <WhatWeDo />
          <ForPartners />
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
