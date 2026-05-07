import { skillsData } from "@/data/skills";
import Section from "@/components/ui/Section";
import SkillCard from "@/components/SkillCard";

/**
 * Skills Page - Server Component
 *
 * Full skills page displaying:
 * - All skill categories using shared SkillCard component
 * - Detailed skill lists per category
 */
export default function SkillsPage() {
  const { heading, categories } = skillsData;

  return (
    <Section id="skills" heading={heading} maxWidth="6xl">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <SkillCard key={category.category} category={category} index={index} variant="full" />
        ))}
      </div>
    </Section>
  );
}
