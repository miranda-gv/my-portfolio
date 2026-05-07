import { PortfolioProject } from "@/data/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  variant?: "compact" | "full";
}

const tagClass = "px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-muted-foreground";

export default function PortfolioCard({ project, index, variant = "compact" }: PortfolioCardProps) {
  const isFull = variant === "full";
  const padding = isFull ? "p-8" : "p-6";
  const titleClass = isFull ? "text-2xl mb-3" : "text-xl mb-2";
  const descClass = isFull ? "text-muted-foreground mb-4" : "text-sm text-muted-foreground mb-4";
  const mb = isFull ? "mb-6" : "mb-4";

  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <GlassCard
        variant="card"
        className={`h-full ${padding} group transition-all duration-300`}
        onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
      >
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-primary/10 text-primary">
            {project.category}
          </span>
          <ExternalLink className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <div className={mb}>
          <h3 className={`font-heading text-foreground ${titleClass}`}>{project.title}</h3>
          <p className={descClass}>{isFull ? project.details : project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className={tagClass}>{tag}</span>
          ))}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-auto">
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="flex-shrink-0 w-1 h-1 rounded-full bg-primary mt-2" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </GlassCard>
    </FadeIn>
  );
}
