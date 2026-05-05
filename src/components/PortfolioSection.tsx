"use client";

import { useState, useMemo } from "react";
import { portfolioProjects, portfolioData, PortfolioCategory, portfolioCategories } from "@/data/portfolio";
import Section from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import CardGrid, { GlassCardItem } from "./CardGrid";
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
          <PortfolioCard key={project.id} project={project} index={index} variant="compact" />
        ))}
      </CardGrid>

      <ViewAllLink href="/portfolio" label="View Full Portfolio" />
    </Section>
  );
}
