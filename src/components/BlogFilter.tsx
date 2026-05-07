"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

interface BlogFilterProps {
  selectedTags: string[];
  selectedYear: string;
  allTags: string[];
  allYears: string[];
}

export default function BlogFilter({
  selectedTags,
  selectedYear,
  allTags,
  allYears,
}: BlogFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    const params = new URLSearchParams(searchParams.toString());
    if (newTags.length > 0) {
      params.set("tags", newTags.join(","));
    } else {
      params.delete("tags");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const setYear = (year: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedYear === year) {
      params.delete("year");
    } else {
      params.set("year", year);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => router.push(pathname);

  const hasFilters = selectedTags.length > 0 || selectedYear;

  if (allTags.length === 0 && allYears.length === 0) return null;

  return (
    <GlassCard variant="card" className="p-4 mb-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Filter Posts</span>
        {hasFilters && (
          <button onClick={clearFilters} className="text-xs text-primary hover:underline inline-flex items-center gap-1">
            <X className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {allYears.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center mb-3">
          <span className="text-xs text-muted-foreground mr-1">Year:</span>
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setYear(year)}
              className={`px-2 py-1 text-xs rounded-md transition-colors ${
                selectedYear === year
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-muted-foreground mr-1">Tags:</span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-2 py-1 text-xs rounded-md transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
