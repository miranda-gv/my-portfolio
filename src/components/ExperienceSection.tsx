"use client";

import { useState } from "react";
import { experience, experienceData } from "@/data/experience";
import Section from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import ExperienceItem from "./ExperienceItem";
import ViewAllLink from "./ViewAllLink";

/**
 * Experience Section - Client Component
 *
 * Displays work history overview on homepage with:
 * - Only the most recent/top experience item
 * - "View more" link to expand below (client-side toggle)
 * - "View all Experience" link to dedicated Experience page
 * - Vertical timeline layout with fade-in animations
 *
 * @returns The experience section with top item and view more option
 */
export default function ExperienceSection() {
  const { heading } = experienceData;
  const [showAll, setShowAll] = useState(false);
  const visibleExperience = showAll ? experience : experience.slice(0, 1);

  return (
    <Section id="experience" heading={heading} maxWidth="4xl">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line" />

            {visibleExperience.map((exp, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                yOffset={30}
                className="relative mb-12"
              >
                <ExperienceItem experience={exp} index={index} />
              </FadeIn>
             ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {!showAll && experience.length > 1 && (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-pill text-primary border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-medium"
              >
                View More Experience
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
            <ViewAllLink href="/experience" label="View All Experience" />
          </div>
      </Section>
   );
  }
