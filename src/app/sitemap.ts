import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Generates the site sitemap for search engines.
 * Add new routes here as the site grows.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];
}
