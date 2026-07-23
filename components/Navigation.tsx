"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/components/design-system/tokens.css";
import { designSystemFontVariables } from "@/components/design-system/fonts";
import { Container } from "@/components/design-system/Container";
import { buttonClassName } from "@/components/design-system/Button";
import { Text, Caption } from "@/components/design-system/Typography";
import { homepageSectionIds } from "@/lib/content/homepage";
import { cn } from "@/lib/utils";

/**
 * Secondary descriptor shown under "Mari Media" in the nav logo lockup.
 * "Digital Media Company" mirrors the already-approved short descriptor
 * used in the page metadata title (`app/layout.tsx`), rather than the
 * legacy pre-Compass "Growth Partners" tagline this replaces: that phrase
 * predates the Compass rewrite and reads as generic agency language,
 * which Compass Section 6 explicitly rules out for how Mari Media
 * positions itself.
 */
const BRAND_DESCRIPTOR = "Digital Media Company";

type NavLink =
  | { kind: "section"; sectionId: string; href: `/#${string}`; label: string }
  | { kind: "route"; href: string; label: string };

const navLinks: NavLink[] = [
  { kind: "section", sectionId: homepageSectionIds.about, href: `/#${homepageSectionIds.about}`, label: "About" },
  {
    kind: "section",
    sectionId: homepageSectionIds.whatWeDo,
    href: `/#${homepageSectionIds.whatWeDo}`,
    label: "What We Do",
  },
  { kind: "route", href: "/blog", label: "Health Articles" },
  {
    kind: "section",
    sectionId: homepageSectionIds.contact,
    href: `/#${homepageSectionIds.contact}`,
    label: "Contact",
  },
];

const partnerHref = `/#${homepageSectionIds.contact}` as const;

/**
 * Global site navigation, re-skinned onto the Phase 2 production design
 * system tokens (MARIWEB-009). Self-scopes with the `.mm-ds` class and the
 * design-system font variables directly on the `<nav>` element (rather
 * than relying on `Scope` wrapping it from outside) so this component
 * renders correctly wherever it is used, including `/blog`, which does not
 * otherwise opt into the design system in this phase.
 *
 * Header chrome (MARIWEB-009 final polish): a `sticky`, full-width,
 * warm-white bar with a hairline bottom border and a light backdrop
 * blur, not the earlier floating rounded card. The floating-card
 * treatment let page content show through the gap around its rounded
 * corners while scrolling, which read as a dashboard/SaaS pattern
 * rather than the calm editorial header the Compass visual direction
 * calls for (Compass Section 16-17). Interactive behavior (mobile menu,
 * active-section highlighting via `IntersectionObserver`) is unchanged;
 * only the outer chrome and the scroll-shadow treatment changed, and the
 * scroll shadow itself is a single restrained `shadow-sm`, not a
 * dramatic elevation change.
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Section ids only exist in the DOM on the homepage; on other routes
    // this simply finds nothing and skips setting up the observer.
    if (!isHomepage) return;

    const sectionIds = navLinks
      .filter((link): link is Extract<NavLink, { kind: "section" }> => link.kind === "section")
      .map((link) => link.sectionId);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomepage]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const isLinkActive = useCallback(
    (link: NavLink) => {
      if (link.kind === "route") {
        return pathname === link.href || pathname?.startsWith(`${link.href}/`);
      }
      // Section links only ever represent the current location on the homepage.
      return isHomepage && activeSection === link.sectionId;
    },
    [activeSection, isHomepage, pathname]
  );

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "mm-ds sticky top-0 z-[var(--ds-z-nav)] w-full border-b border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-bg)]/95 backdrop-blur-sm transition-shadow duration-[var(--ds-duration-medium)]",
        isScrolled ? "shadow-[var(--ds-shadow-sm)]" : "shadow-none",
        designSystemFontVariables
      )}
      style={{ fontFamily: "var(--ds-font-body)" }}
    >
      <Container variant="wide">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/marimedia-logo.svg"
                alt="Mari Media"
                width={110}
                height={55}
                className="flex-shrink-0 object-contain"
                priority
                loading="eager"
              />
              <div className="hidden flex-col sm:flex">
                <Text as="span" variant="h6" className="whitespace-nowrap">
                  Mari Media
                </Text>
                <Caption className="-mt-0.5 whitespace-nowrap">{BRAND_DESCRIPTOR}</Caption>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? (link.kind === "route" ? "page" : "true") : undefined}
                  className={cn(
                    "relative rounded-[var(--ds-radius-sm)] px-4 py-2 font-medium transition-colors duration-[var(--ds-duration-fast)]",
                    isActive
                      ? "text-[var(--ds-color-primary)]"
                      : "text-[var(--ds-color-text)] hover:text-[var(--ds-color-primary)]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 rounded-[var(--ds-radius-full)] bg-[var(--ds-color-primary)]" />
                  )}
                </Link>
              );
            })}
            <Link href={partnerHref} className={cn(buttonClassName("primary", "sm"), "ml-4")}>
              Partner With Us
            </Link>
          </div>

          <button
            className="p-1 text-[var(--ds-color-text)] lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-1 border-t border-[var(--ds-color-border-subtle)] py-4 lg:hidden">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? (link.kind === "route" ? "page" : "true") : undefined}
                  onClick={closeMenu}
                  className={cn(
                    "block w-full px-6 py-3 text-left transition-colors duration-[var(--ds-duration-fast)]",
                    isActive
                      ? "bg-[var(--ds-color-surface-muted)] font-semibold text-[var(--ds-color-primary)]"
                      : "text-[var(--ds-color-text)] hover:bg-[var(--ds-color-surface-muted)] hover:text-[var(--ds-color-primary)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-6 pt-2">
              <Link href={partnerHref} onClick={closeMenu} className={cn(buttonClassName("primary", "lg"), "w-full")}>
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
