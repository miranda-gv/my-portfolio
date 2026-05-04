import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import GlassCard from "@/components/ui/GlassCard";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
  params: { id: string };
}

/**
 * Generate static params for all published blog posts
 */
export function generateStaticParams() {
  return blogPosts
    .filter(p => p.published)
    .map(post => ({ id: post.id }));
}

/**
 * Blog Post Page - Server Component
 *
 * Individual blog post page with:
 * - Full post content display
 * - Back link to blog listing
 * - Date, read time, and tags
 * - Meta information for SEO
 *
 * Each post creates its own page via dynamic route.
 */
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.id && p.published);

  if (!post) notFound();

  return (
    <Section id="blog-post" heading="" maxWidth="3xl">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      <GlassCard variant="card" className="p-8 md:p-12">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} min read
          </span>
        </div>

        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-6">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-foreground">
          <p>{post.content}</p>
        </div>
      </GlassCard>
    </Section>
  );
}
