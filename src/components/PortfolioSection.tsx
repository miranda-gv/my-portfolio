"use client";

import { useState, useMemo } from "react";
import { portfolioProjects, portfolioData, PortfolioCategory, portfolioCategories } from "@/data/portfolio";
import Section from "./ui/Section";
import ViewAllLink from "./ViewAllLink";
import PortfolioCard from "./PortfolioCard";

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
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {portfolioCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 uppercase tracking-wider ${
              activeFilter === cat.value
                ? "text-background"
                : "glass-pill text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary"
            }`}
            style={
              activeFilter === cat.value
                ? {
                    background: "var(--color-primary)",
                    color: "var(--color-primary-foreground)",
                  }
                : undefined
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <PortfolioCard key={project.id} project={project} index={index} variant="compact" />
        ))}
      </div>

      <div className="text-center mt-12">
        <ViewAllLink href="/portfolio" label="View All Projects" />
      </div>
    </Section>
  );
}
