/**
 * Blog Post Interface
 * Represents a single blog post
 */
export interface BlogPost {
  /** Post ID for URL slug */
  id: string;
  /** Post title */
  title: string;
  /** Publication date */
  date: string;
  /** Post excerpt for cards */
  excerpt: string;
  /** Full post content (markdown or rich text) */
  content: string;
  /** Post tags */
  tags: string[];
  /** Featured image */
  image?: string;
  /** Reading time in minutes */
  readTime: number;
  /** Published status */
  published: boolean;
}

/**
 * Blog Section Data
 *
 * Contains section heading and blog post entries.
 * Used by BlogSection component and Blog page.
 */
export const blogData = {
  heading: "BLOG",
  subHeading: "Thoughts on QA, automation, and modern web development",
  items: [
    {
      id: "building-qa-dashboards-with-nextjs",
      title: "Building QA Dashboards with Next.js & Playwright",
      date: "2025-12-15",
      excerpt: "How I built DashWright to transform Playwright test artifacts into interactive stakeholder dashboards.",
      content: "Full blog post content here...",
      tags: ["Next.js", "Playwright", "QA", "Dashboards"],
      readTime: 8,
      published: true,
    },
    {
      id: "shift-left-testing-cicd",
      title: "Shift-Left Testing: Integrating QA into CI/CD Pipelines",
      date: "2025-11-20",
      excerpt: "Practical strategies for implementing shift-left testing with GitHub Actions and Playwright.",
      content: "Full blog post content here...",
      tags: ["CI/CD", "Playwright", "GitHub Actions", "QA Strategy"],
      readTime: 6,
      published: true,
    },
    {
      id: "glassmorphism-design-nextjs",
      title: "Implementing Glassmorphism Design in Next.js",
      date: "2025-10-10",
      excerpt: "A deep dive into creating modern glassmorphism effects with Tailwind CSS and Framer Motion.",
      content: "Full blog post content here...",
      tags: ["Design", "Next.js", "Tailwind CSS", "Framer Motion"],
      readTime: 5,
      published: true,
    },
  ] as BlogPost[],
};

export const blogPosts = blogData.items;
