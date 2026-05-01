import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Generates robots.txt rules for search engines.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
