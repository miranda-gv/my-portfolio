"use client";

import { blogPosts, blogData } from "@/data/blog";
import Section from "./Section";
import FadeIn from "./ui/FadeIn";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import CardGrid, { GlassCardItem } from "./CardGrid";
import ViewAllLink from "./ViewAllLink";

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
  const recentPosts = blogPosts.filter(p => p.published).slice(0, 3);

  return (
    <Section id="blog" heading={heading} subheading={subHeading} maxWidth="6xl">
      <CardGrid columns="3" gap="gap-6">
        {recentPosts.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.1} className="h-full">
            <Link href={`/blog/${post.id}`}>
              <GlassCardItem className="p-6 cursor-pointer">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCardItem>
            </Link>
          </FadeIn>
        ))}
      </CardGrid>
      <ViewAllLink href="/blog" label="Read All Posts" />
    </Section>
  );
}
