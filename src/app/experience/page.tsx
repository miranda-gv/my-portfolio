import { experience, experienceData } from "@/data/experience";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import ExperienceItem from "@/components/ExperienceItem";

/**
 * Experience Page - Server Component
 *
 * Full experience page displaying complete work history with:
 * - Vertical timeline layout
 * - All experience items in chronological order
 * - Fade-in animations with staggered delays
 * - Same layout as homepage but showing all entries
 *
 * Uses same data file as ExperienceSection for consistency.
 */
export default function ExperiencePage() {
  const { heading } = experienceData;

  return (
    <Section id="experience" heading={heading} headingMargin="lg" maxWidth="4xl">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line" />
        {experience.map((exp, index) => (
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
    </Section>
  );
}
