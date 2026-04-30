/**
 * Site Configuration
 *
 * Central site metadata used across the application.
 * Used by layout metadata, navigation, and SEO optimization.
 */
export const siteConfig = {
  name: "Miranda George",
  title: "Miranda George | Sr. QA Engineer Portfolio",
  description:
    "Portfolio of Miranda George, a Senior QA Engineer specializing in manual and automated testing using Playwright.",
  url: "https://mirandageorge.us",
  ogImage: "https://mirandageorge.us/og-image.png",
  links: {
    linkedin: "https://www.linkedin.com/in/mirandageorge/",
    facebook: "https://facebook.com/miranda.geov",
  },
} as const;
