"use client";

import { blogPosts, blogData } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import Section from "./ui/Section";
import CardGrid, { GlassCardItem } from "./CardGrid";
import ViewAllLink from "./ViewAllLink";
import BlogCard from "./BlogCard";

/**
 * Blog Section - Client Component
 *
 * Displays recent blog posts with:
 * - 3 most recent published posts on homepage
 * - Read time and date display
 * - Link to full Blog page
 */
export default function BlogSection() {
  const { heading, subHeading } = blogData;
  const recentPosts = blogPosts.filter((p: BlogPost) => p.published).slice(0, 3);

  return (
    <Section id="blog" heading={heading} subheading={subHeading} maxWidth="6xl">
      <CardGrid columns="3" gap="gap-6">
        {recentPosts.map((post: BlogPost, index: number) => (
          <BlogCard key={post.id} post={post} index={index} variant="compact" />
        ))}
      </CardGrid>
      <ViewAllLink href="/blog" label="Read All Posts" />
    </Section>
  );
}
