import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "@/components/design-system/tokens.css";
import { designSystemFontVariables } from "@/components/design-system/fonts";
import { Container } from "@/components/design-system/Container";
import { homepageSectionIds } from "@/lib/content/homepage";
import { cn } from "@/lib/utils";

const quickLinks = [
  { href: `/#${homepageSectionIds.about}`, label: "About" },
  { href: `/#${homepageSectionIds.whatWeDo}`, label: "What We Do" },
  { href: "/blog", label: "Health Articles" },
  { href: `/#${homepageSectionIds.contact}`, label: "Contact" },
];

const CONTACT_EMAIL = "hello@marimedia.co";

/**
 * Global footer, re-skinned onto the Phase 2 production design system
 * tokens (MARIWEB-009), self-scoped the same way as `Navigation` so it
 * renders correctly on every route that includes it. The previous
 * "Current Services" / "Future Vision" ("Coming soon") lists are removed:
 * they presented future capabilities as decorative proof, which Compass
 * Section 26/50 and the blueprint (Section 15, item 2) both rule out.
 * No new fabricated links are added in their place; the footer links only
 * to sections and routes that exist today (Compass Section 43's fuller
 * policy-link set — Privacy, Terms, Affiliate Disclosure, etc. — is
 * Phase 6 scope, once those pages exist).
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("mm-ds border-t border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-text)]", designSystemFontVariables)}
      style={{ fontFamily: "var(--ds-font-body)" }}
    >
      <Container variant="wide" className="py-16">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/marimedia-logo.svg" alt="Mari Media" width={80} height={40} className="object-contain" />
              <span className="font-[var(--ds-font-display)] text-[length:var(--ds-text-h5)] font-bold text-[var(--ds-color-surface)]">
                Mari Media
              </span>
            </div>
            <p className="font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] leading-[var(--ds-leading-body-sm)] text-[var(--ds-palette-warm-sand)]">
              A digital media company building trusted digital brands, starting with health and wellness.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-[var(--ds-font-body)] text-[length:var(--ds-text-eyebrow)] font-semibold uppercase tracking-[var(--ds-tracking-wider)] text-[var(--ds-palette-warm-sand)]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--ds-text-body-sm)] text-[var(--ds-palette-warm-sand)] transition-colors duration-[var(--ds-duration-fast)] hover:text-[var(--ds-palette-pastel-red)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-[var(--ds-font-body)] text-[length:var(--ds-text-eyebrow)] font-semibold uppercase tracking-[var(--ds-tracking-wider)] text-[var(--ds-palette-warm-sand)]">
              Contact
            </h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-[length:var(--ds-text-body-sm)] font-medium text-[var(--ds-palette-warm-sand)] transition-colors duration-[var(--ds-duration-fast)] hover:text-[var(--ds-palette-pastel-red)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--ds-palette-warm-charcoal)] pt-8 text-center">
          <p className="text-[length:var(--ds-text-caption)] text-[var(--ds-palette-warm-sand)]">
            &copy; {currentYear} Mari Media. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
