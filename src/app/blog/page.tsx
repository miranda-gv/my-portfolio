import { blogPosts, blogData } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import BlogFilter from "@/components/BlogFilter";

interface BlogPageProps {
  searchParams: Promise<{ tags?: string; year?: string; month?: string }>;
}

/**
 * Blog Page - Server Component
 *
 * Full blog page displaying all published posts with:
 * - Horizontal filter bar (tags, year)
 * - Date and read time display
 * - Links to individual blog post pages
 * - Responsive grid layout
 * - URL-driven filtering
 */
export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { heading, subHeading } = blogData;
  const params = await searchParams;

  const selectedTags = params.tags?.split(",").filter(Boolean) ?? [];
  const selectedYear = params.year ?? "";
  const selectedMonth = params.month ?? "";

  let publishedPosts = blogPosts.filter((p: BlogPost) => p.published);

  if (selectedTags.length > 0) {
    publishedPosts = publishedPosts.filter((p) =>
      selectedTags.some((tag) => p.tags.includes(tag))
    );
  }

  if (selectedYear) {
    publishedPosts = publishedPosts.filter(
      (p) => new Date(p.date).getFullYear().toString() === selectedYear
    );
  }

  if (selectedMonth) {
    publishedPosts = publishedPosts.filter(
      (p) => new Date(p.date).getMonth().toString().padStart(2, '0') === selectedMonth
    );
  }

  const allTags = [...new Set(blogPosts.filter(p => p.published).flatMap(p => p.tags))].sort();
  const allYears = [...new Set(blogPosts.filter(p => p.published).map(p => new Date(p.date).getFullYear().toString()))].sort().reverse();

  return (
    <>
      <div className="mb-12 mt-12">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
          {heading}
        </h2>
        <p className="text-center text-muted-foreground text-lg">{subHeading}</p>
      </div>

      <BlogFilter
        selectedTags={selectedTags}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        allTags={allTags}
        allYears={allYears}
      />

      {publishedPosts.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          No posts match your filters.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publishedPosts.map((post: BlogPost, index: number) => (
            <BlogCard key={post.id} post={post} index={index} variant="full" />
          ))}
        </div>
      )}
    </>
  );
}
