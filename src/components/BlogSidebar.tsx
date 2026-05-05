"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import { Clock, X } from "lucide-react";

export default function BlogSidebar() {
  const pathname = usePathname();
  const currentPostId = pathname?.startsWith("/blog/") ? pathname.split("/blog/")[1] : undefined;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");

  const publishedPosts = blogPosts.filter(
    (p) => p.published && p.id !== currentPostId
  );

  const allTags = useMemo(
    () => [...new Set(publishedPosts.flatMap((p) => p.tags))].sort(),
    [publishedPosts]
  );

  const allYears = useMemo(
    () =>
      [...new Set(publishedPosts.map((p) => new Date(p.date).getFullYear().toString()))]
        .sort()
        .reverse(),
    [publishedPosts]
  );

  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post) => {
      if (selectedTags.length > 0 && !selectedTags.some((tag) => post.tags.includes(tag))) return false;
      if (selectedYear && new Date(post.date).getFullYear().toString() !== selectedYear) return false;
      return true;
    });
  }, [publishedPosts, selectedTags, selectedYear]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedYear("");
  };

  const hasFilters = selectedTags.length > 0 || selectedYear;

  return (
    <GlassCard variant="card" className="p-6 sticky top-24">
      <h3 className="font-heading text-lg mb-4">Blog Posts</h3>

      {hasFilters && (
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground">
            {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
          </span>
          <button onClick={clearFilters} className="text-xs text-primary hover:underline inline-flex items-center gap-1">
            <X className="w-3 h-3" />
            Clear
          </button>
        </div>
      )}

      {allYears.length > 0 && (
        <div className="mb-4">
          <span className="text-xs text-muted-foreground mb-2 block">Year</span>
          <div className="flex flex-wrap gap-2">
            {allYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear((prev) => (prev === year ? "" : year))}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}

      {allTags.length > 0 && (
        <div className="mb-6">
          <span className="text-xs text-muted-foreground mb-2 block">Tags</span>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {filteredPosts.length === 0 ? (
          <p className="text-sm text-muted-foreground">No posts match your filters.</p>
        ) : (
          filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <h4 className="font-heading text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime} min
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))
        )}
      </div>
    </GlassCard>
  );
}
