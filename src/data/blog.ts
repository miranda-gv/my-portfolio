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
      id: "building-ci-artfact-dashboards-with-nextjs",
      title: "Building QA Dashboards with Next.js & Playwright",
      date: "2026-04-15",
      excerpt:
        "How I built DashWright to transform Playwright test artifacts into interactive stakeholder dashboards.",
      tags: ["Next.js", "Playwright", "QA", "Dashboards"],
      readTime: 8,
      published: true,
      images: [
        {
          src: "/blog/dashwright/dashwright-dashboard1.png",
          alt: "DashWright dashboard image",
        },
      ],
      contentFile:
        "@/data/blog/posts/building-ci-artfact-dashboards-with-nextjs",
    },
    {
      id: "shift-left-testing-cicd",
      title: "Shift-Left Testing: Integrating QA into CI/CD Pipelines",
      date: "2026-05-05",
      excerpt:
        "Practical strategies for implementing shift-left testing with GitHub Actions and Playwright.",
      tags: ["CI/CD", "Playwright", "GitHub Actions", "QA Strategy"],
      readTime: 6,
      published: true,
      contentFile: "@/data/blog/posts/shift-left-testing-cicd",
    },
     {
       id: "glassmorphism-design-nextjs",
       title: "Implementing Glassmorphism Design in Next.js",
       date: "2026-05-20",
       excerpt:
         "A deep dive into creating modern glassmorphism effects with Tailwind CSS and Framer Motion.",
       tags: ["Design", "Next.js", "Tailwind CSS", "Framer Motion"],
       readTime: 5,
       published: true,
        contentFile: "@/data/blog/posts/glassmorphism-design-nextjs",
     },
     {
       id: "mastering-playwright-steps",
       title: "Mastering Playwright Steps: From test.step to Custom Decorators",
       date: "2026-06-01",
       excerpt:
         "Organize E2E tests with native test.step and scalable Step Decorators for cleaner Page Object Models.",
       tags: ["Playwright", "TypeScript", "QA", "Testing Patterns"],
       readTime: 7,
       published: true,
       contentFile: "@/data/blog/posts/mastering-playwright-steps",
     },
   ],
};

export const blogPosts = blogData.items;
