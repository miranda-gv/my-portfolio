"use client";

import { useState, useMemo } from "react";
import { portfolioProjects, portfolioData, PortfolioCategory, portfolioCategories } from "@/data/portfolio";
import Section from "./Section";
import FadeIn from "./ui/FadeIn";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import CardGrid, { GlassCardItem } from "./CardGrid";
import ViewAllLink from "./ViewAllLink";

/**
 * Portfolio Section - Client Component
 *
 * Displays portfolio projects with:
 * - Theme-aware category filter
 * - Responsive project cards with glassmorphism
 * - Live demo and repo links
 * - Overview on homepage linking to full Portfolio page
 */
export default function PortfolioSection() {
  const { heading, subHeading } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");

  const filteredProjects = useMemo(() =>
    activeFilter === "all"
      ? portfolioProjects.filter(p => p.featured)
      : portfolioProjects.filter(p => p.category === activeFilter && p.featured)
  , [activeFilter]);

  return (
    <Section id="portfolio" heading={heading} subheading={subHeading} maxWidth="6xl">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {portfolioCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === cat.value
                ? "bg-primary text-background"
                : "glass-pill text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <CardGrid columns="2" gap="gap-6">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1} className="h-full">
            <GlassCardItem className="p-6">
              <div className="mb-4">
                <h3 className="font-heading text-xl text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source
                  </a>
                )}
              </div>
            </GlassCardItem>
          </FadeIn>
        ))}
      </CardGrid>

      <ViewAllLink href="/portfolio" label="View Full Portfolio" />
    </Section>
  );
}
