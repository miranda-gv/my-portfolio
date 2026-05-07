import type { SkillCategory } from "@/data/skills";
import GlassCard from "@/components/ui/GlassCard";
import FadeIn from "./ui/FadeIn";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
  variant?: "compact" | "full";
}

const skillTagClasses = {
  compact: "px-3 py-1.5 rounded-lg text-sm bg-white/5 backdrop-blur-md border border-white/20 text-muted-foreground hover:bg-primary/30 hover:text-primary hover:border-primary transition-all duration-300 cursor-default",
  full: "px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20",
};

/**
 * SkillCard Component
 *
 * Reusable card displaying a skill category with:
 * - Category title with accent dot
 * - Skill tags with hover effects (compact) or static (full)
 * - Glassmorphism card styling
 *
 * Used by both SkillsSection (homepage) and SkillsPage.
 */
export default function SkillCard({ category, index, variant = "compact" }: SkillCardProps) {
  const padding = variant === "full" ? "p-8" : "p-6";
  const titleSize = variant === "full" ? "text-xl mb-6" : "text-xl mb-4";

  return (
    <FadeIn key={category.category} delay={index * 0.1} className="h-full">
      <GlassCard variant="card" className={`h-full ${padding}`}>
        <h3 className={`font-heading text-foreground flex items-center gap-2 ${titleSize}`}>
          <span className="w-2 h-2 rounded-full bg-primary" />
          {category.category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.items.map((skill) => (
            <span key={skill} className={skillTagClasses[variant]}>
              {skill}
            </span>
          ))}
        </div>
      </GlassCard>
    </FadeIn>
  );
}
