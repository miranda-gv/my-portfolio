import type { ReactNode } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";

interface CardGridProps {
  children: ReactNode;
  columns?: "2" | "3";
  gap?: string;
  className?: string;
}

/**
 * Reusable card grid layout
 * Wraps children in a responsive grid with glass cards
 */
export default function CardGrid({ children, columns = "3", gap = "gap-6", className = "" }: CardGridProps) {
  const gridCols = columns === "2" ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`grid ${gap} ${gridCols} ${className}`}>
      {children}
    </div>
  );
}

interface GlassCardItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper for individual glass card items with hover effect
 */
export function GlassCardItem({ children, className = "" }: GlassCardItemProps) {
  return (
    <GlassCard variant="card" className={`h-full ${hoverPopSubtle} ${className}`}>
      {children}
    </GlassCard>
  );
}
