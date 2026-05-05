import type { ReactNode } from "react";
import BlogSidebar from "@/components/BlogSidebar";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">{children}</div>
        <aside className="w-full lg:w-80 xl:w-96 shrink-0">
          <BlogSidebar />
        </aside>
      </div>
    </div>
  );
}
