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
  themeColor: "#FFF5F7",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mari Media | Affiliate Marketing & Email Marketing Partner",
    template: "%s | Mari Media",
  },
  description:
    "Mari Media is an affiliate marketing media company focused on online health events, with select partnerships in SaaS, education, and digital products. We work with businesses across the U.S. and Canada through strategic affiliate partnerships and targeted email marketing.",
  keywords: [
    "affiliate marketing",
    "email marketing",
    "affiliate marketing agency",
    "email marketing partner",
    "online health event marketing",
    "digital product promotion",
    "summit affiliate marketing",
  ],
  authors: [{ name: "Mari Media" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mari Media | Affiliate Marketing & Email Marketing Partner",
    description:
      "We help online health events and select partners across the U.S. and Canada extend their reach through strategic affiliate partnerships and targeted email marketing.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mari Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mari Media | Affiliate Marketing & Email Marketing Partner",
    description:
      "We help online health events and select partners across the U.S. and Canada extend their reach through strategic affiliate partnerships and targeted email marketing.",
  },
  // Non-production deployments (local development, Vercel previews, and
  // the `dev`/`preprod` branches) must not be indexable. This is set
  // once here because every route inherits `robots` from the root
  // layout unless it explicitly overrides the field. See `lib/env.ts`.
  robots: isProductionDeployment()
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mari Media",
  description:
    "Mari Media is an affiliate marketing media company focused on online health events, helping businesses across the U.S. and Canada grow through strategic affiliate partnerships and targeted email marketing.",
  url: siteUrl,
  email: "hello@marimedia.co",
  foundingDate: "2026",
  knowsAbout: [
    "Affiliate Marketing",
    "Email Marketing",
    "Business Partnerships",
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
