"use client";

import { aboutData } from "@/data/about";
import Section from "./Section";
import GlassCard from "./ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";

/** Highlight icon container classes */
const highlightIconClasses =
  "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/20 text-primary text-2xl";

/**
 * About Section - Client Component
 *
 * Displays professional biography with:
 * - Section heading from config
 * - Multiple paragraph text from intro data
 * - Highlight grid with icons (years of experience, expertise, approach)
 *
 * Wrapped in a glass card with responsive 3-column highlight layout.
 *
 * @returns The about section with bio and key highlights
 */
export default function AboutSection() {
  const { heading, paragraphs, highlights } = aboutData;

  return (
    <Section id="about" heading={heading} maxWidth="4xl">
      <GlassCard variant="base" className="p-8 md:p-12 rounded-2xl">
        {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`${index > 0 ? "mt-4" : ""} text-muted-foreground text-lg leading-relaxed`}
            >
            {paragraph}
          </p>
        ))}

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {highlights.map((item) => (
            <div key={item.title} className="text-center">
              <div className={highlightIconClasses}>{item.icon}</div>
              <h3 className="mb-2 text-foreground text-xl">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </Section>
  );
}
