import { blogPosts, blogData } from "@/data/blog";
import Section from "@/components/Section";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

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
  const publishedPosts = blogPosts.filter(p => p.published);

  return (
    <Section id="blog" heading={heading} subheading={subHeading} maxWidth="6xl">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {publishedPosts.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.1} className="h-full">
            <Link href={`/blog/${post.id}`}>
              <GlassCard variant="card" className={`h-full p-8 ${hoverPopSubtle} cursor-pointer`}>
                <div className="mb-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-4">{post.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </span>
              </GlassCard>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
