"use client";

import { experience, experienceData } from "@/data/experience";
import Section from "./Section";
import FadeIn from "./ui/FadeIn";
import ExperienceItem from "./ExperienceItem";

/**
 * Experience Section - Client Component
 *
 * Displays work history in a timeline layout with:
 * - Vertical timeline line centered on desktop
 * - Alternating left/right experience items
 * - Fade-in animations with staggered delays
 * - Responsive: single column on mobile, alternating on desktop
 *
 * Each experience item is wrapped in FadeIn for scroll-triggered animation.
 *
 * @returns The experience section with animated timeline
 */
export default function ExperienceSection() {
  const { heading } = experienceData;

  return (
    <Section id="experience" heading={heading} maxWidth="4xl">
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
