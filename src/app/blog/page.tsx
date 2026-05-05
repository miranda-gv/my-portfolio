import { blogPosts, blogData } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { hoverPopSubtle } from "@/constants/animations";
import BlogCard from "@/components/BlogCard";

/**
 * Blog Page - Server Component
 *
 * Full blog page displaying all published posts with:
 * - All blog posts from data file
 * - Date and read time display
 * - Links to individual blog post pages
 * - Responsive grid layout
 *
 * Uses same data file as BlogSection for consistency.
 */
export default function BlogPage() {
  const { heading, subHeading } = blogData;
  const publishedPosts = blogPosts.filter((p: BlogPost) => p.published);

  return (
    <Section id="blog" heading={heading} subheading={subHeading} maxWidth="none" className="px-0">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {publishedPosts.map((post: BlogPost, index: number) => (
          <BlogCard key={post.id} post={post} index={index} variant="full" />
        ))}
      </div>
    </Section>
  );
}
