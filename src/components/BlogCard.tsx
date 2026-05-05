import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import GlassCard from "@/components/ui/GlassCard";
import { Clock, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { hoverPopSubtle } from "@/constants/animations";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  variant?: "compact" | "full";
}

const tagClass = "px-2 py-1 text-xs rounded-md bg-primary/10 text-primary";

export default function BlogCard({ post, index, variant = "compact" }: BlogCardProps) {
  const isFull = variant === "full";
  const padding = isFull ? "p-8" : "p-6";
  const titleSize = isFull ? "text-xl mb-3" : "text-lg mb-2";
  const metaMb = isFull ? "mb-4" : "mb-3";

  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <Link href={`/blog/${post.id}`}>
        <GlassCard variant="card" className={`h-full ${padding} ${hoverPopSubtle} cursor-pointer`}>
          <div className={isFull ? "mb-4" : "mb-4"}>
            <div className={`flex items-center gap-2 text-xs text-muted-foreground ${metaMb}`}>
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} min read
              </span>
            </div>
            <h3 className={`font-heading text-foreground ${titleSize} line-clamp-2`}>{post.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(isFull ? post.tags : post.tags.slice(0, 3)).map((tag: string) => (
              <span key={tag} className={tagClass}>{tag}</span>
            ))}
          </div>
          {isFull && (
            <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-4">
              Read More
              <ArrowRight className="w-3 h-3" />
            </span>
          )}
        </GlassCard>
      </Link>
    </FadeIn>
  );
}
