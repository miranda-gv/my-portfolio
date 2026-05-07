import { BlogPostContent } from "./types";

type ContentModule = {
  default: BlogPostContent;
};

/**
 * Dynamic content loader for blog posts
 * Maps contentFile paths to their corresponding imports
 */
const contentMap: Record<string, () => Promise<ContentModule>> = {
  "@/data/blog/posts/building-ci-artfact-dashboards-with-nextjs": () =>
    import("@/data/blog/posts/building-ci-artfact-dashboards-with-nextjs"),
  "@/data/blog/posts/shift-left-testing-cicd": () =>
    import("@/data/blog/posts/shift-left-testing-cicd"),
  "@/data/blog/posts/mastering-playwright-steps": () =>
    import("@/data/blog/posts/mastering-playwright-steps"),
  "@/data/blog/posts/glassmorphism-design-nextjs": () =>
    import("@/data/blog/posts/glassmorphism-design-nextjs"),
};

export async function loadBlogContent(
  contentFile: string,
): Promise<BlogPostContent | null> {
  try {
    const loader = contentMap[contentFile];
    if (!loader) {
      console.error(`No content loader found for ${contentFile}`);
      return null;
    }
    const module = await loader();
    return module.default;
  } catch (error) {
    console.error(`Failed to load blog content from ${contentFile}:`, error);
    return null;
  }
}
