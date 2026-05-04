import { services, servicesData } from "@/data/services";
import Section from "@/components/Section";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";

/**
 * Services Page - Server Component
 *
 * Full services page displaying all service offerings with:
 * - Detailed service cards with features
 * - Icon representation for each service area
 * - Responsive 3-column grid
 *
 * Uses same data file as ServicesSection for consistency.
 */
export default function ServicesPage() {
  const { heading, subHeading } = servicesData;

  return (
    <Section id="services" heading={heading} subheading={subHeading} maxWidth="6xl">
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1} className="h-full">
            <GlassCard variant="card" className={`h-full p-8 ${hoverPopSubtle}`}>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {service.icon === "shield-check" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {service.icon === "code" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    )}
                    {service.icon === "layout-dashboard" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    )}
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
