import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "@/components/design-system/tokens.css";
import { designSystemFontVariables } from "@/components/design-system/fonts";
import { Container } from "@/components/design-system/Container";
import { Divider } from "@/components/design-system/Divider";
import { Body, BodySmall, Caption, Eyebrow } from "@/components/design-system/Typography";
import { homepageSectionIds } from "@/lib/content/homepage";
import { cn } from "@/lib/utils";

const quickLinks = [
  { href: `/#${homepageSectionIds.about}`, label: "About Mari Media" },
  { href: "/blog", label: "Health Articles" },
  { href: `/#${homepageSectionIds.contact}`, label: "Partner With Us" },
  { href: `/#${homepageSectionIds.contact}`, label: "Contact" },
];

const CONTACT_EMAIL = "hello@marimedia.co";

/** Distinct from the Hero/Founders copy elsewhere on the homepage; not a repeat of existing sections. */
const BRAND_STATEMENT =
  "We connect readers with careful health writing, and partners with audiences that are a genuine fit.";

/** A quiet closing line, not a slogan; sits above the copyright as the page's last word. */
const CLOSING_STATEMENT = "We'd rather be useful than loud, and we're building this to last.";

/**
 * Global footer (MARIWEB-009 follow-up refinement). Re-skinned a second
 * time from the initial Phase 3 pass: the dark, near-black band read as
 * a hard cut against the warm, light sections above it, so this version
 * uses the same light "page" surface token as the rest of the homepage
 * (`--ds-color-bg`) with a subtle top border, which transitions gently
 * from the Calm Final Action section's muted surface instead of jumping
 * to a contrasting dark block. No new colors are introduced; every value
 * still resolves to a `tokens.css` token.
 *
 * The legacy "Current Services" / "Future Vision" lists remain removed
 * (Compass Section 26/50, blueprint Section 15 item 2): they presented
 * future capabilities as decorative proof. No fabricated links are added;
 * the footer only links to sections and routes that exist today.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("mm-ds border-t border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-bg)]", designSystemFontVariables)}
      style={{ fontFamily: "var(--ds-font-body)" }}
    >
      <Container variant="wide" className="py-[var(--ds-space-section-y-sm)]">
        <div className="grid gap-[var(--ds-space-12)] sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-[var(--ds-space-16)]">
          <div className="flex flex-col gap-[var(--ds-space-stack-md)] sm:col-span-2 lg:col-span-1">
            <Image
              src="/marimedia-logo.svg"
              alt="Mari Media"
              width={140}
              height={70}
              className="object-contain"
            />
            <Body className="max-w-[28rem] text-[var(--ds-color-text-muted)]">{BRAND_STATEMENT}</Body>
          </div>

          <div className="flex flex-col gap-[var(--ds-space-stack-md)]">
            <Eyebrow>Quick Links</Eyebrow>
            <ul className="flex flex-col gap-[var(--ds-space-stack-sm)]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[length:var(--ds-text-body-sm)] text-[var(--ds-color-text-muted)] transition-colors duration-[var(--ds-duration-fast)] hover:text-[var(--ds-color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[var(--ds-space-stack-md)]">
            <Eyebrow>Contact</Eyebrow>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-[length:var(--ds-text-body)] font-medium text-[var(--ds-color-text)] transition-colors duration-[var(--ds-duration-fast)] hover:text-[var(--ds-color-primary)]"
            >
              <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="break-all">{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>

        <Divider className="my-[var(--ds-space-10)]" />

        <div className="flex flex-col gap-[var(--ds-space-stack-xs)]">
          <BodySmall>{CLOSING_STATEMENT}</BodySmall>
          <Caption>&copy; {currentYear} Mari Media. All rights reserved.</Caption>
        </div>
      </Container>
    </footer>
  );
}
