/**
 * Editable homepage copy, in one typed module (MARIWEB-009, Phase 3;
 * revised MARIWEB-009.5, Homepage Experience Optimization).
 *
 * Every homepage section component imports its copy from here instead of
 * hardcoding strings, per the Homepage Experience Blueprint
 * (`docs/homepage-experience-blueprint.md`, Section 15: "place editable
 * homepage copy in a clearly named typed content module... do not scatter
 * final copy across many presentational components").
 *
 * MARIWEB-009.5 is an optimization pass, not a redesign: it keeps the
 * blueprint's audience research, trust strategy, and CTA rules, but
 * revises the section order and some copy based on a first-time-visitor
 * UX review (see the MARIWEB-009.5 report for the full rationale). Two
 * sections were added (`principles`, `howWeWork`) to resolve gaps the
 * review found: the homepage previously asked for trust before showing
 * any evidence for it, and "For Our Partners" promised a real person
 * would respond without ever saying what happens next. Dedicated routes
 * for About, What We Do, Partner With Us, and Contact still do not exist
 * (Phase 4), so cross-section CTAs still point at in-page anchors.
 */

/** In-page anchor IDs, shared between section components, `Navigation`, and `Footer` so no id string is duplicated by hand in more than one place. */
export const homepageSectionIds = {
  principles: "principles",
  whatWeDo: "what-we-do",
  forPartners: "for-partners",
  howWeWork: "how-we-work",
  forReaders: "for-readers",
  articles: "articles",
  about: "about",
  contact: "contact",
} as const;

/** Primary conversion target everywhere on the homepage. Becomes `/partner-with-us` in Phase 4. */
const partnerAnchor = `#${homepageSectionIds.contact}`;

export const homepageContent = {
  hero: {
    focusBadge: "Current focus: health and wellness",
    headline:
      "A digital media company that publishes trusted content and connects audiences with carefully chosen partners.",
    subheadline:
      "Today that work lives in health and wellness: careful editorial writing, and selective partnerships with online health events we believe deserve people's attention. Health is our current focus, not our permanent boundary.",
    primaryCta: {
      audience: "For partners",
      label: "Partner With Us",
      href: partnerAnchor,
    },
    secondaryCta: {
      audience: "For readers",
      label: "Explore Health Articles",
      href: "/blog",
    },
    /**
     * No approved, provenance-documented hero photograph exists yet (see
     * blueprint Section 15, item 4). Leave `undefined` rather than using
     * stock imagery; `Hero` renders correctly, as a full-width editorial
     * composition, either way. Populate with a real `{ src, alt }` once an
     * image is approved to activate the image-led/split layouts.
     */
    image: undefined as { src: string; alt: string } | undefined,
  },

  /**
   * Editorial Principles (added MARIWEB-009.5). Sits directly after the
   * hero, before any capability or audience content, because the
   * first-time-visitor review found the homepage previously asked
   * visitors to trust Mari Media before showing any reason to. Three
   * specific, checkable commitments, not adjectives or badges.
   */
  principles: {
    eyebrow: "How We Operate",
    heading: "A few things we don't compromise on",
    items: [
      {
        title: "We say no more than we say yes.",
        description:
          "Most partnership inquiries we look at don't become partnerships. We'd rather turn down a mismatch than promote something we wouldn't stand behind.",
      },
      {
        title: "A person reviews everything before it publishes.",
        description:
          "Every article is checked for accuracy, sourcing, and tone by someone on our team before it goes live. Nothing publishes on its own.",
      },
      {
        title: "If it's commercial, we say so.",
        description:
          "When an article mentions a partner or an offer, we disclose it plainly, in the article itself, not just in a policy page in the footer.",
      },
    ],
  },

  whatWeDo: {
    eyebrow: "What We Do",
    heading: "Three things, done well.",
    intro:
      "We stay narrow on purpose. Everything else can wait until we've proven these.",
    capabilities: [
      {
        number: "01",
        title: "Editorial content",
        description:
          "We research and write health content that is careful with claims, clear about sources, and reviewed by a person before it publishes.",
      },
      {
        number: "02",
        title: "Audience development and partnerships",
        description:
          "We build real reader relationships through email and editorial work, then connect that audience with the online health events genuinely worth their time.",
      },
      {
        number: "03",
        title: "Campaign operations",
        description:
          "We track what's running as it runs, and report back on real numbers rather than vanity metrics, adjusting quickly when something isn't working.",
      },
    ],
  },

  forPartners: {
    eyebrow: "For Our Partners",
    heading: "A partner who checks whether it's actually a fit",
    body: [
      "We work with online health event organizers and summit hosts across the U.S. and Canada, and we stay open to the right adjacent partnerships too.",
      "Before we promote anything, we look at whether it's genuinely relevant to our audience. That's the only kind of promotion we do.",
      "Reaching out doesn't commit you to anything, and here's exactly what happens if you do.",
    ],
    cta: { label: "Partner With Us", href: partnerAnchor },
    /**
     * No approved partnership photograph exists yet (MARIWEB-009 final
     * polish, photography audit). Leave `undefined`, same pattern as
     * `hero.image`: the component already renders correctly either way,
     * and populating `{ src, alt }` here is the only change needed to
     * activate the two-column asymmetric image layout.
     */
    image: undefined as { src: string; alt: string } | undefined,
  },

  /**
   * How We Work (added MARIWEB-009.5). Answers the question "For Our
   * Partners" raises but previously left unanswered: what actually
   * happens after you reach out. A refined, honest version of the
   * previous site's four-step collaboration process; no step promises
   * anything operations can't back up (no response-time guarantee, no
   * CRM or backend exists yet, per Compass Section 33/46).
   */
  howWeWork: {
    eyebrow: "How We Work",
    heading: "What happens after you reach out",
    intro: "No pitch deck, no pressure. Just enough process to be dependable.",
    steps: [
      {
        number: "01",
        title: "You reach out",
        description: "Tell us about your event or offer. A real person reads it, not a form that disappears into a queue.",
      },
      {
        number: "02",
        title: "We check fit",
        description:
          "We look at whether our audience is genuinely relevant to what you're offering. If it isn't, we'll say so honestly instead of stringing things along.",
      },
      {
        number: "03",
        title: "We build a plan together",
        description: "If it's a fit, we agree on what we're promoting, how, and what success looks like, before anything goes out.",
      },
      {
        number: "04",
        title: "We run it and report honestly",
        description:
          "We track real numbers while the campaign runs and tell you what's working and what isn't, not just the numbers that look good.",
      },
    ],
  },

  forReaders: {
    eyebrow: "For Our Readers",
    heading: "Read something, not sold something",
    body: [
      "We write to help you understand a topic clearly, not to rush you toward a purchase.",
    ],
    disclosure:
      "Some articles mention partners or offers we work with. When that's true, we say so, and we only recommend what we'd stand behind ourselves.",
    cta: { label: "Explore Health Articles", href: "/blog" },
    /** Same not-yet-approved-imagery pattern as `forPartners.image` above. */
    image: undefined as { src: string; alt: string } | undefined,
  },

  healthArticles: {
    eyebrow: "Health Articles",
    heading: "From our health desk",
    description:
      "Practical, sourced writing on functional medicine and the wider health topics we cover.",
    viewAllCta: { label: "See all Health Articles", href: "/blog" },
  },

  companyFounders: {
    eyebrow: "Who We Are",
    heading: "Built by two people, on purpose",
    body: [
      "Mari Media started with a simple observation: there has never been more information available, yet it has never been harder to know what is genuinely worth our time and trust.",
      "James and Kaye built Mari Media around a simple standard: publish thoughtfully, choose partnerships carefully, and contribute something useful rather than add to the noise.",
      "Health and wellness is where we started, not where we intend to stop. Every brand we build after this one will be held to the same standard.",
    ],
  },

  finalAction: {
    heading: "Let's talk",
    body: "Whether you run a health event looking for the right promotional partner, or you just want to ask something, here are two honest ways to reach us.",
    partner: {
      label: "Partnering with us",
      body: "Tell us about your event or offer and how you think it might fit.",
      ctaLabel: "Partner With Us",
      mailto: "mailto:hello@marimedia.co?subject=Partnership%20inquiry",
    },
    general: {
      label: "Everything else",
      body: "Questions, feedback, or just saying hello: this goes to the same inbox we check ourselves.",
    },
    contactEmail: "hello@marimedia.co",
  },
} as const;
