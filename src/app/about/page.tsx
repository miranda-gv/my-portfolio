import { aboutData } from "@/data/about";
import Section from "@/components/Section";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";

/**
 * About Page - Server Component
 *
 * Full about page with:
 * - Bio information from paragraphs
 * - Highlights grid
 */
export default function AboutPage() {
  const { heading, paragraphs, highlights } = aboutData;

  return (
    <Section id="about" heading={heading} maxWidth="4xl">
      <FadeIn>
        <GlassCard variant="card" className={`p-8 md:p-12 ${hoverPopSubtle}`}>
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-primary/10 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </FadeIn>
    </Section>
  );
}
