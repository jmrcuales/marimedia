import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";
import { isProductionDeployment } from "@/lib/env";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Matches the Phase 2 design-system "Warm White" page background
  // (`--ds-palette-warm-white`, tokens.css) now that the homepage renders
  // against it (MARIWEB-009).
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mari Media | A Digital Media Company",
    template: "%s | Mari Media",
  },
  description:
    "Mari Media is a digital media company building trusted digital brands. Health and wellness is our current focus: careful editorial content and honest partnerships with the online health events we work with, primarily across the U.S. and Canada.",
  keywords: [
    "digital media company",
    "health and wellness media",
    "affiliate marketing",
    "email marketing",
    "online health event marketing",
    "health event affiliate partner",
  ],
  authors: [{ name: "Mari Media" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mari Media | A Digital Media Company",
    description:
      "A digital media company building trusted digital brands, proving itself today through careful health and wellness content and honest partnerships with online health events.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mari Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mari Media | A Digital Media Company",
    description:
      "A digital media company building trusted digital brands, proving itself today through careful health and wellness content and honest partnerships with online health events.",
  },
  // Non-production deployments (local development, Vercel previews, and
  // the `dev`/`preprod` branches) must not be indexable. This is set
  // once here because every route inherits `robots` from the root
  // layout unless it explicitly overrides the field. See `lib/env.ts`.
  robots: isProductionDeployment()
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

// Corrected for MARIWEB-009 (blueprint Section 15, item 6): the previous
// description and `knowsAbout` list described only the affiliate/email
// service line and omitted the parent-company positioning (Compass
// Sections 2-4 and 7), which no longer matches the homepage copy.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mari Media",
  description:
    "Mari Media is a digital media company that builds trusted digital brands. Health and wellness is its current focus, proven through editorial content and affiliate and email marketing partnerships with online health events across the U.S. and Canada.",
  url: siteUrl,
  email: "hello@marimedia.co",
  foundingDate: "2026",
  knowsAbout: [
    "Health and Wellness Content",
    "Affiliate Marketing",
    "Email Marketing",
    "Online Health Events",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
