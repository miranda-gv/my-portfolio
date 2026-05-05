import type { ReactNode } from "react";
import Section from "@/components/ui/Section";
import BlogSidebar from "@/components/BlogSidebar";

interface BlogPostLayoutProps {
  children: ReactNode;
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return (
    <Section id="blog-post" heading="" className="pt-0">
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        <div className="flex-1 min-w-0">
          {children}
        </div>
        <aside className="w-full lg:w-80 xl:w-96 shrink-0">
          <div className="sticky top-24 md:top-28">
            <BlogSidebar />
          </div>
        </aside>
      </div>
    </Section>
  );
}
