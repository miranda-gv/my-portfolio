import { BlogPostContent } from "./types";

type ContentModule = {
  default?: BlogPostContent;
  buildingQADashboardsPost?: BlogPostContent;
  [key: string]: unknown;
};

/**
 * Dynamic content loader for blog posts
 * Maps contentFile paths to their corresponding imports
 */
const contentMap: Record<string, () => Promise<ContentModule>> = {
  "@/data/blog/posts/building-ci-artfact-dashboards-with-nextjs": () =>
    import("@/data/blog/posts/building-ci-artfact-dashboards-with-nextjs"),
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
    return module.buildingQADashboardsPost || module.default || null;
  } catch (error) {
    console.error(`Failed to load blog content from ${contentFile}:`, error);
    return null;
  }
}
