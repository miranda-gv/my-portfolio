"use client";

import { useState, useMemo } from "react";
import { portfolioProjects, portfolioData, PortfolioCategory, portfolioCategories } from "@/data/portfolio";
import Section from "@/components/Section";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";
import { ExternalLink } from "lucide-react";

/**
 * Portfolio Page - Client Component
 *
 * Full portfolio page displaying all projects with:
 * - Theme-aware category filter
 * - Responsive project grid
 * - Project details, tags, and links
 * - All projects from data file
 *
 * Uses same data file as PortfolioSection for consistency.
 */
export default function PortfolioPage() {
  const { heading, subHeading } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");

  const filteredProjects = useMemo(() =>
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(p => p.category === activeFilter)
  , [activeFilter]);

  return (
    <Section id="portfolio" heading={heading} subheading={subHeading} maxWidth="6xl">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {portfolioCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === cat.value
                ? "bg-primary text-background"
                : "glass-pill text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1} className="h-full">
            <GlassCard variant="card" className={`h-full p-8 ${hoverPopSubtle}`}>
              <div className="mb-6">
                <h3 className="font-heading text-2xl text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.details}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source Code
                  </a>
                )}
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
