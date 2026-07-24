import { MetadataRoute } from 'next'
import { isProductionDeployment } from '@/lib/env'
import { siteUrl } from '@/lib/site'

/**
 * Non-production deployments (local development, Vercel previews, and
 * the `dev`/`preprod` branches) must not invite crawling of themselves
 * or advertise a sitemap, so only the real production deployment gets
 * the permissive rule set. See `lib/env.ts` for the production check.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
