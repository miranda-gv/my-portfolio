/**
 * JSON-LD structured data for Person/Portfolio rich snippets.
 * @see https://schema.org/Person
 */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Miranda George',
    jobTitle: 'Senior QA Engineer',
    description:
      'Portfolio of Miranda George, a Senior QA Engineer specializing in manual and automated testing using Playwright.',
    url: 'https://mirandageorge.us',
    sameAs: [
      'https://www.linkedin.com/in/mirandageorge/',
      'https://facebook.com/miranda.geov',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
