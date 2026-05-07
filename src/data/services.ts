/**
 * Services Interface
 * Represents a single service offering
 */
export interface Service {
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** List of key features or capabilities */
  features: string[];
  /** Icon name or identifier */
  icon: string;
  /** Technologies used in this service */
  technologies: string[];
}

/**
 * Services Section Data
 *
 * Contains section heading and service offerings.
 * Used by ServicesSection component and Services page.
 */
export const servicesData = {
  heading: "SERVICES",
  subHeading: "Specialized expertise in QA automation and modern web development",
  items: [
    {
      title: "QA & Test Automation",
      description: "Building robust automation ecosystems with modern frameworks and CI/CD integration.",
      features: [
        "Playwright automation framework development",
        "TypeScript-based test architecture",
        "CI/CD pipeline implementation (GitHub Actions, Jenkins)",
        "API & E2E testing strategies",
        "Test reporting & analytics dashboards",
      ],
      icon: "shield-check",
      technologies: ["Playwright", "TypeScript", "Selenium", "Cypress", "GitHub Actions", "Docker", "Jest"],
    },
    {
      title: "Static Web Development",
      description: "High-performance static sites and landing pages with modern frameworks.",
      features: [
        "JavaScript & TypeScript development",
        "React / Next.js SSG/SSR",
        "Responsive & accessible design",
        "SEO optimization & Core Web Vitals",
        "Glassmorphism & modern UI trends",
      ],
      icon: "code",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
    {
      title: "Full-Stack Web Apps",
      description: "End-to-end web application development with scalable architecture.",
      features: [
        "React / Next.js application development",
        "RESTful & GraphQL API integration",
        "Database design & ORM integration",
        "Authentication & authorization flows",
        "Deployment & cloud infrastructure (Vercel, Railway)",
      ],
      icon: "layout-dashboard",
      technologies: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "GraphQL", "Docker"],
    },
  ] as Service[],
};

export const services = servicesData.items;
