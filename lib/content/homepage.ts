/**
 * Editable homepage copy, in one typed module (MARIWEB-009, Phase 3).
 *
 * Every homepage section component imports its copy from here instead of
 * hardcoding strings, per the Homepage Experience Blueprint
 * (`docs/homepage-experience-blueprint.md`, Section 15: "place editable
 * homepage copy in a clearly named typed content module... do not scatter
 * final copy across many presentational components").
 *
 * Section order, anchors, and CTA targets follow the blueprint's
 * Information Architecture (Section 4) and CTA Strategy (Section 8)
 * exactly. Dedicated routes for About, What We Do, Partner With Us, and
 * Contact do not exist yet (Phase 4), so every cross-section CTA below
 * points at an in-page anchor on this homepage rather than a route that
 * does not exist. Each such link notes its eventual Phase 4 target.
 */

/** In-page anchor IDs, shared between section components, `Navigation`, and `Footer` so no id string is duplicated by hand in more than one place. */
export const homepageSectionIds = {
  whatWeDo: "what-we-do",
  forPartners: "for-partners",
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
    headline: "A digital media company, proving itself one careful brand at a time.",
    subheadline:
      "Right now, that means health and wellness: writing people can trust, and honest partnerships with the online health events we work with. It's where we started, not where we stop.",
    primaryCta: { label: "Partner With Us", href: partnerAnchor },
    secondaryCta: { label: "Explore Health Articles", href: "/blog" },
    /**
     * No approved, provenance-documented hero photograph exists yet (see
     * blueprint Section 15, item 4). Leave `undefined` rather than using
     * stock imagery; `Hero` renders correctly, as a full-width editorial
     * composition, either way. Populate with a real `{ src, alt }` once an
     * image is approved to activate the image-led/split layouts.
     */
    image: undefined as { src: string; alt: string } | undefined,
  },

  whatWeDo: {
    eyebrow: "What We Do",
    heading: "Real capabilities, not a long list",
    intro: "We keep our work focused on what we can actually execute well today.",
    capabilities: [
      {
        number: "01",
        title: "Editorial content",
        description:
          "We research and write health content that is careful with claims, clear about sources, and reviewed by a person before it publishes.",
      },
      {
        number: "02",
        title: "Audience development",
        description:
          "We build genuine reader relationships over time. That means writing worth returning for, not a one-time traffic spike.",
      },
      {
        number: "03",
        title: "Email marketing",
        description:
          "We build segmented, sequenced campaigns using GoHighLevel to manage sends, track results, and adjust quickly when something isn't working.",
      },
      {
        number: "04",
        title: "Affiliate and event promotion",
        description:
          "We partner with online health event organizers to put relevant offers in front of audiences that are already looking for them.",
      },
      {
        number: "05",
        title: "Campaign operations",
        description:
          "We track what's running and what's working, and report back honestly, on real numbers rather than vanity metrics.",
      },
    ],
  },

  forPartners: {
    eyebrow: "For Our Partners",
    heading: "A partner who checks whether it's actually a fit",
    body: [
      "We work with online health event organizers and summit hosts across the U.S. and Canada, and we stay open to the right adjacent partnerships too.",
      "Before we promote anything, we look at whether it's genuinely relevant to our audience. That's the only kind of promotion we do.",
      "If you reach out, a real person reads it and responds. We don't promise reach or results we can't back up, and reaching out doesn't commit you to anything.",
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
      "Mari Media began with a simple observation: there has never been more information available, yet it has never been harder to know what truly deserves our time and trust.",
      "Every day, we're surrounded by articles, events, products, and recommendations competing for our attention. Some are genuinely valuable. Many are not. We wanted to create a place where people wouldn't have to sort through all of that alone.",
      "Mari Media wasn't created because the internet needed more content. It was created because people deserve a more thoughtful way to discover the ideas, events, and organizations that are genuinely worth paying attention to.",
      "Everything we publish begins with the same belief: trust is earned slowly. We'd rather publish fewer things with care than add to the noise. Every article, recommendation, and partnership should reflect that standard.",
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
