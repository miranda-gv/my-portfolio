import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ViewAllLinkProps {
  href: string;
  label?: string;
}

/**
 * Reusable "View All" link component
 * Used across sections to link to full pages
 */
export default function ViewAllLink({ href, label = "View All" }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-pill text-primary border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-medium no-underline hover:no-underline"
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
