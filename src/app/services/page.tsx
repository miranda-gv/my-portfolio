import { services, servicesData } from "@/data/services";
import Section from "@/components/Section";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { hoverPopSubtle } from "@/constants/animations";
import ServiceIcon from "@/components/ServiceIcon";
import CheckIcon from "@/components/CheckIcon";

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
                  <ServiceIcon icon={service.icon} className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <CheckIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
