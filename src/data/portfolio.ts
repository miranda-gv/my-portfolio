/**
 * Portfolio Project Interface
 * Represents a single portfolio project
 */
export interface PortfolioProject {
  /** Project ID for URL slug */
  id: string;
  /** Project title */
  title: string;
  /** Short description for cards */
  description: string;
  /** Detailed description for project page */
  details: string;
  /** Tech stack tags */
  tags: string[];
  /** Project category for filtering */
  category: "qa" | "static" | "fullstack";
  /** Live demo URL */
  liveUrl?: string;
  /** Source code URL */
  repoUrl?: string;
  /** Project image or screenshot */
  image?: string;
  /** Project featured status */
  featured: boolean;
  /** Key highlights/achievements */
  highlights?: string[];
}

/**
 * Portfolio Section Data
 *
 * Contains section heading and project entries.
 * Used by PortfolioSection component and Portfolio page.
 */
export const portfolioData = {
  heading: "PORTFOLIO",
  subHeading:
    "A showcase of QA tools, web apps, and digital experiences I've built",
  items: [
    {
      id: "my-portfolio",
      title: "My Portfolio 2026",
      description:
        "A high-performance Next.js portfolio with glassmorphism design, TypeScript, and modular architecture.",
      details:
        "Rebuilt my entire portfolio using Next.js 14 App Router with TypeScript. Features glassmorphism design system, modular component architecture driven by config files in src/data, Framer Motion animations, and responsive layout. The site showcases SDET expertise while demonstrating modern web development practices.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "fullstack" as const,
      liveUrl: "https://mirandageorge.us",
      repoUrl: "https://github.com/miranda-gv/my-portfolio",
      featured: true,
      highlights: [
        "Modular, config-driven architecture with DRY components",
        "Glassmorphism design system with backdrop blur effects",
        "Framer Motion animations with intersection observer",
        "Fully responsive with TypeScript type safety",
      ],
    },
    {
      id: "dashwright",
      title: "DashWright",
      description:
        "Full-stack visualization engine that transforms Playwright test artifacts into interactive stakeholder dashboards.",
      details:
        "Architected and shipped DashWright, a comprehensive visualization engine built with Next.js and TypeScript. Aggregates Playwright test artifacts and transforms them into interactive, real-time dashboards for stakeholders. Features dark-themed UI with glassmorphism design, Playwright integration, and CI/CD pipeline support.",
      tags: ["Next.js", "TypeScript", "Playwright", "React", "Tailwind CSS"],
      category: "fullstack" as const,
      liveUrl: "https://dashwright.com",
      featured: true,
      highlights: [
        "Transforms Playwright artifacts into interactive dashboards",
        "Real-time data visualization with dark-themed glassmorphism UI",
        "CI/CD pipeline integration for automated test reporting",
        "Built with Next.js App Router and TypeScript",
      ],
    },
  ] as PortfolioProject[],
};

export const portfolioProjects = portfolioData.items;

/** Category filter options */
export const portfolioCategories = [
  { value: "all", label: "ALL" },
  { value: "qa", label: "AUTOMATION" },
  { value: "static", label: "WEBSITE" },
  { value: "fullstack", label: "WEB APPS" },
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number]["value"];
