import { blogPosts, blogData } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import BlogFilter from "@/components/BlogFilter";

interface BlogPageProps {
  searchParams: Promise<{ tags?: string; year?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { heading, subHeading } = blogData;
  const params = await searchParams;

  const selectedTags = params.tags?.split(",").filter(Boolean) ?? [];
  const selectedYear = params.year ?? "";

  let publishedPosts = blogPosts.filter((p: BlogPost) => p.published);

  if (selectedTags.length > 0) {
    publishedPosts = publishedPosts.filter((p) =>
      selectedTags.some((tag) => p.tags.includes(tag)),
    );
  }

  if (selectedYear) {
    publishedPosts = publishedPosts.filter(
      (p) => new Date(p.date).getFullYear().toString() === selectedYear,
    );
  }

  const allTags = [
    ...new Set(blogPosts.filter((p) => p.published).flatMap((p) => p.tags)),
  ].sort();
  const allYears = [
    ...new Set(
      blogPosts
        .filter((p) => p.published)
        .map((p) => new Date(p.date).getFullYear().toString()),
    ),
  ]
    .sort()
    .reverse();

  return (
    <>
      <div className="mb-12 mt-36 max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
          {heading}
        </h2>
        <p className="text-center text-muted-foreground text-lg">
          {subHeading}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <BlogFilter
          selectedTags={selectedTags}
          selectedYear={selectedYear}
          allTags={allTags}
          allYears={allYears}
        />

        {publishedPosts.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No posts match your filters.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {publishedPosts.map((post: BlogPost, index: number) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                variant="full"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
