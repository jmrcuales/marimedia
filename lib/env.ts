/**
 * The only hostname that should ever be treated as Mari Media's public,
 * indexable production website. Comparing this against Vercel's own
 * system environment variables (rather than trusting `VERCEL_ENV` alone)
 * guards against a second Vercel project (for example a future dedicated
 * preprod project) whose own "Production" environment would otherwise
 * also report `VERCEL_ENV=production` for a different domain.
 */
const PRODUCTION_HOSTNAME = "marimedia.co";

/**
 * True only for the actual public production deployment of this site.
 *
 * - Local development and any `next build` run outside Vercel have no
 *   `VERCEL_ENV` at all, so this always resolves to `false` there.
 * - Vercel preview deployments report `VERCEL_ENV=preview`. This project
 *   currently deploys its `dev` and `preprod` branches as Vercel preview
 *   deployments (not as a second "production" environment), so both
 *   resolve to `false` here as well.
 * - `NODE_ENV=production` is intentionally never used as a signal by
 *   itself: Vercel preview builds are also built with
 *   `NODE_ENV=production`, so it cannot distinguish a preview deployment
 *   from the real production site.
 *
 * Used by `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx`, and
 * `next.config.ts` to keep indexing behavior environment-aware without
 * hardcoding individual Vercel preview URLs.
 */
export function isProductionDeployment(): boolean {
  if (process.env.VERCEL_ENV !== "production") {
    return false;
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  // Vercel always sets this for deployments running on Vercel, even for
  // preview deployments, so this branch should be unreachable there in
  // practice. If it is ever missing, fall back to trusting VERCEL_ENV
  // alone rather than accidentally de-indexing the real production site.
  if (!productionHost) {
    return true;
  }

  return productionHost === PRODUCTION_HOSTNAME;
}
