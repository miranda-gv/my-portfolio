import { skillsData } from "@/data/skills";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";

/**
 * Skills Page - Server Component
 *
 * Full skills page displaying:
 * - All skill categories
 * - Detailed skill lists per category
 */
export default function SkillsPage() {
  const { heading, categories } = skillsData;

  return (
    <Section id="skills" heading={heading} maxWidth="6xl">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <FadeIn key={category.category} delay={index * 0.1}>
            <GlassCard variant="card" className={`p-8 ${hoverPopSubtle}`}>
              <h3 className="font-heading text-xl text-foreground mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
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
