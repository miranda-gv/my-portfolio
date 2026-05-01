import { siteConfig } from '@/config/site';

/**
 * JSON-LD structured data for Person/Portfolio rich snippets.
 * Pulls from siteConfig to avoid duplication.
 * @see https://schema.org/Person
 */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.links),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
