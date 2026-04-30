"use client";

import { skills, skillsData } from "@/data/skills";
import Section from "./Section";
import GlassCard from "./ui/GlassCard";
import FadeIn from "./ui/FadeIn";
import { hoverPopSubtle } from "@/constants/animations";

/**
 * Skills Section - Client Component
 *
 * Displays technical skills grouped by category with:
 * - Skills grouped by category (End to End Testing, Automation, etc.)
 * - Motion-enabled skill tags with hover effects
 * - Responsive grid layout (2 cols tablet, 3 cols desktop)
 * - Staggered fade-in animations per skill group
 *
 * Each skill tag has interactive hover states with primary color highlight.
 *
 * @returns The skills section with categorized, animated skill tags
 */
export default function SkillsSection() {
  const { heading, categories } = skillsData;

  return (
    <Section id="skills" heading={heading} maxWidth="5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((skillGroup, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
                <GlassCard variant="card" className={`p-6 h-full ${hoverPopSubtle}`}>
                <h3
                  className="mb-4 flex items-center gap-2 text-foreground text-xl"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-sm transition-all duration-300 cursor-default bg-white/5 backdrop-blur-md border border-white/20 text-muted-foreground hover:bg-primary/30 hover:text-primary hover:border-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                </GlassCard>
              </FadeIn>
             ))}
           </div>
      </Section>
   );
  }
