"use client";

import { skillsData } from "@/data/skills";
import Section from "./ui/Section";
import SkillCard from "./SkillCard";

/**
 * Skills Section - Client Component
 *
 * Displays technical skills grouped by category with:
 * - Skills grouped by category (End to End Testing, Automation, etc.)
 * - Motion-enabled skill tags with hover effects
 * - Responsive grid layout (2 cols tablet, 3 cols desktop)
 * - Staggered fade-in animations per skill group
 * - Reuses SkillCard component for consistency
 */
export default function SkillsSection() {
  const { heading, categories } = skillsData;

  return (
    <Section id="skills" heading={heading} maxWidth="5xl">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((skillGroup, index) => (
          <SkillCard key={skillGroup.category} category={skillGroup} index={index} variant="compact" />
        ))}
      </div>
    </Section>
  );
}
