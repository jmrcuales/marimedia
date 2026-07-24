import type { NextConfig } from "next";
import { isProductionDeployment } from "./lib/env";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Defense-in-depth for non-production deployments (local development,
  // Vercel previews, and the `dev`/`preprod` branches): send an
  // X-Robots-Tag response header in addition to the HTML `robots` meta
  // tag set in `app/layout.tsx`, so indexing is blocked even for
  // responses a crawler might read before parsing the HTML. See
  // `lib/env.ts` for the production check.
  async headers() {
    if (isProductionDeployment()) {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
