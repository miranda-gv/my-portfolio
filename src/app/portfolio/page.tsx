"use client";

import { useState, useMemo } from "react";
import { portfolioProjects, portfolioData, PortfolioCategory, portfolioCategories } from "@/data/portfolio";
import Section from "@/components/Section";
import FadeIn from "@/components/ui/FadeIn";
import { hoverPopSubtle } from "@/constants/animations";
import PortfolioCard from "@/components/PortfolioCard";

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
          <PortfolioCard key={project.id} project={project} index={index} variant="full" />
        ))}
      </div>
    </Section>
  );
}
