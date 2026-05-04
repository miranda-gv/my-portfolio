import { PortfolioProject } from "@/data/portfolio";
import GlassCard from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIconLink";
import FadeIn from "@/components/ui/FadeIn";
import { hoverPopSubtle } from "@/constants/animations";

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  variant?: "compact" | "full";
}

const tagClass = "px-2 py-1 text-xs rounded-md bg-primary/10 text-primary";

export default function PortfolioCard({ project, index, variant = "compact" }: PortfolioCardProps) {
  const isFull = variant === "full";
  const padding = isFull ? "p-8" : "p-6";
  const titleClass = isFull ? "text-2xl mb-3" : "text-xl mb-2";
  const descClass = isFull ? "text-muted-foreground mb-4" : "text-sm text-muted-foreground mb-4";
  const gap = isFull ? "gap-4" : "gap-3";
  const iconSize = isFull ? "w-4 h-4" : "w-3 h-3";
  const linkGap = isFull ? "gap-2" : "gap-1";
  const mb = isFull ? "mb-6" : "mb-4";

  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <GlassCard variant="card" className={`h-full ${padding} ${hoverPopSubtle}`}>
        <div className={mb}>
          <h3 className={`font-heading text-foreground ${titleClass}`}>{project.title}</h3>
          <p className={descClass}>{isFull ? project.details : project.description}</p>
        </div>
        <div className={`flex flex-wrap gap-2 ${mb}`}>
          {project.tags.map((tag) => (
            <span key={tag} className={tagClass}>{tag}</span>
          ))}
        </div>
        <div className={`flex ${gap} mt-auto`}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center ${linkGap} text-sm text-primary hover:underline`}>
              <ExternalLink className={iconSize} />
              {isFull ? "Live Demo" : "Live Demo"}
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center ${linkGap} text-sm text-muted-foreground hover:text-foreground`}>
              <GithubIcon className={iconSize} />
              {isFull ? "Source Code" : "Source"}
            </a>
          )}
        </div>
      </GlassCard>
    </FadeIn>
  );
}
