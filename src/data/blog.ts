import type { BlogPost, BlogData } from "@/data/blog/types";
export type { BlogPost } from "@/data/blog/types";

/**
 * Blog Section Data
 *
 * Contains section heading and blog post entries.
 * Content is stored in separate files under /src/data/blog/posts/
 * for better maintainability and future expansion.
 */
export const blogData: BlogData = {
  heading: "BLOG",
  subHeading: "Thoughts on QA, automation, and modern web development",
  items: [
    {
      id: "building-qa-dashboards-with-nextjs",
      title: "Building QA Dashboards with Next.js & Playwright",
      date: "2025-12-15",
      excerpt: "How I built DashWright to transform Playwright test artifacts into interactive stakeholder dashboards.",
      tags: ["Next.js", "Playwright", "QA", "Dashboards"],
      readTime: 8,
      published: true,
       images: [{ src: "/blog/dashwright-hero.png", alt: "DashWright homepage hero image" }],
      contentFile: "@/data/blog/posts/building-qa-dashboards-with-nextjs",
    },
    {
      id: "shift-left-testing-cicd",
      title: "Shift-Left Testing: Integrating QA into CI/CD Pipelines",
      date: "2025-11-20",
      excerpt: "Practical strategies for implementing shift-left testing with GitHub Actions and Playwright.",
      tags: ["CI/CD", "Playwright", "GitHub Actions", "QA Strategy"],
      readTime: 6,
      published: false,
      contentFile: "./posts/shift-left-testing-cicd",
    },
    {
      id: "glassmorphism-design-nextjs",
      title: "Implementing Glassmorphism Design in Next.js",
      date: "2025-10-10",
      excerpt: "A deep dive into creating modern glassmorphism effects with Tailwind CSS and Framer Motion.",
      tags: ["Design", "Next.js", "Tailwind CSS", "Framer Motion"],
      readTime: 5,
      published: false,
      contentFile: "./posts/glassmorphism-design-nextjs",
    },
  ],
};

export const blogPosts = blogData.items;
