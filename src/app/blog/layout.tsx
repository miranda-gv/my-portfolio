import type { ReactNode } from "react";
import Section from "@/components/ui/Section";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <Section id="blog-index" maxWidth="6xl">
      {children}
    </Section>
  );
}
