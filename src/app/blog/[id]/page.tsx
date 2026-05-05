import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { loadBlogContent } from "@/data/blog/loader";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

/**
 * Generate static params for all published blog posts
 */
export function generateStaticParams() {
  return blogPosts
    .filter((p: BlogPost) => p.published)
    .map((post: BlogPost) => ({ id: post.id }));
}

/**
 * Blog Post Page - Server Component
 *
 * Individual blog post page with:
 * - Rich content rendering from separate content files
 * - Image support for each section
 * - Back link to blog listing
 * - Date, read time, and tags
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p: BlogPost) => p.id === id && p.published);

  if (!post) notFound();

  const content = post.contentFile ? await loadBlogContent(post.contentFile) : null;

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
          {post.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>

        {content && (
          <article className="prose prose-invert prose-lg max-w-none text-foreground">
            {content.intro && (
              <p className="lead text-xl mb-8 text-foreground/90">{content.intro}</p>
            )}

            {content.sections.map((section, index) => (
              <div key={index} className="mb-10">
                {section.heading && (
                  <h2 className="font-heading text-2xl mt-8 mb-4">{section.heading}</h2>
                )}
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">{paragraph}</p>
                ))}
                {section.image && (
                  <div className="my-6 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.heading || 'Blog image'}
                      width={800}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            ))}

            {content.conclusion && (
              <div className="mt-10 pt-6 border-t border-white/10">
                <p className="text-foreground/90">{content.conclusion}</p>
              </div>
            )}
          </article>
        )}
      </GlassCard>
    </Section>
  );
}
