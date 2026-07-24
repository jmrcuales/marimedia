/**
 * The only hostname that should ever be treated as Mari Media's public,
 * indexable production website. Comparing this against Vercel's own
 * system environment variables (rather than trusting `VERCEL_ENV` alone)
 * guards against a second Vercel project (for example a future dedicated
 * preprod project) whose own "Production" environment would otherwise
 * also report `VERCEL_ENV=production` for a different domain.
 */
const PRODUCTION_HOST = "marimedia.co";

/**
 * True only for the actual public production deployment of this site.
 *
 * This check fails closed: both conditions below must hold, and any
 * missing, malformed, or unverifiable value resolves to `false` rather
 * than `true`. It is safer to briefly noindex a real production
 * deployment (recoverable by fixing the Vercel project configuration)
 * than to accidentally index a preview, dev, or preprod deployment.
 *
 * 1. `VERCEL_ENV` must be exactly `"production"`.
 *    - Local development and any `next build` run outside Vercel have
 *      no `VERCEL_ENV` at all, so this always resolves to `false` there.
 *    - Vercel preview deployments report `VERCEL_ENV=preview`. This
 *      project currently deploys its `dev` and `preprod` branches as
 *      Vercel preview deployments (not as a second "production"
 *      environment), so both resolve to `false` here as well.
 *    - `NODE_ENV=production` is intentionally never used as a signal:
 *      Vercel preview builds are also built with `NODE_ENV=production`,
 *      so it cannot distinguish a preview deployment from the real
 *      production site.
 * 2. `VERCEL_PROJECT_PRODUCTION_URL`, after defensive normalization
 *    (trimmed, lowercased, protocol stripped, trailing slashes
 *    stripped), must resolve exactly to `marimedia.co`. Vercel always
 *    sets this variable for deployments running on Vercel, even for
 *    preview deployments. If it is ever missing or does not match,
 *    the deployment is treated as non-production.
 *
 * Used by `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx`, and
 * `next.config.ts` to keep indexing behavior environment-aware without
 * hardcoding individual Vercel preview URLs.
 */
export function isProductionDeployment(): boolean {
  const vercelEnvironment = process.env.VERCEL_ENV;

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/+$/, "");

  return (
    vercelEnvironment === "production" && productionHost === PRODUCTION_HOST
  );
}
