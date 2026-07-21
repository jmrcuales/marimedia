"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLink =
  | { kind: "section"; sectionId: string; href: `/#${string}`; label: string }
  | { kind: "route"; href: string; label: string };

const navLinks: NavLink[] = [
  { kind: "section", sectionId: "about", href: "/#about", label: "About" },
  { kind: "section", sectionId: "services", href: "/#services", label: "Services" },
  { kind: "section", sectionId: "approach", href: "/#approach", label: "Approach" },
  { kind: "route", href: "/blog", label: "Health Articles" },
  { kind: "section", sectionId: "contact", href: "/#contact", label: "Contact" },
];

const ctaClassName =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-white hover:bg-primary-hover focus:ring-primary hover:shadow-xl hover:-translate-y-0.5";

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
      className="fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300"
    >
      <Container
        size="wide"
        className={cn(
          "rounded-2xl transition-all duration-300",
          isScrolled
            ? "bg-white shadow-2xl"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
        )}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/marimedia-logo.svg"
                alt="Mari Media"
                width={110}
                height={55}
                className="object-contain flex-shrink-0"
                priority
                loading="eager"
              />
              <div className="hidden sm:block whitespace-nowrap">
                <div className="text-xl font-bold text-[#222222]">
                  Mari Media
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Growth Partners
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? (link.kind === "route" ? "page" : "true") : undefined}
                  className={cn(
                    "relative px-4 py-2 font-medium transition-colors rounded-lg",
                    isActive
                      ? "text-primary"
                      : "text-[#222222] hover:text-primary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
            <Link href="/#contact" className={cn(ctaClassName, "ml-4 h-10 px-6 text-sm")}>
              Partner With Us
            </Link>
          </div>

          <button
            className="lg:hidden text-[#222222] p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 rounded-b-2xl py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? (link.kind === "route" ? "page" : "true") : undefined}
                  onClick={closeMenu}
                  className={cn(
                    "block w-full text-left px-6 py-3 transition-colors",
                    isActive
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-[#222222] hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-6 pt-2">
              <Link
                href="/#contact"
                onClick={closeMenu}
                className={cn(ctaClassName, "w-full h-12 px-8 text-base")}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
