import type { ReactNode } from "react";
import BlogSidebar from "@/components/BlogSidebar";

interface BlogPostLayoutProps {
  children: ReactNode;
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return (
    <div className="w-full mx-auto px-4 pt-24 md:pt-28 pb-8 md:pb-12">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="flex-[3] min-w-0">
          {children}
        </div>
        <aside className="w-full lg:w-[18rem] xl:w-[21.6rem] shrink-0">
          <div className="sticky top-[220px] md:top-[260px]">
            <BlogSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
