import { services, servicesData } from "@/data/services";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import ServiceCard from "@/components/ServiceCard";

/**
 * Services Page - Server Component
 *
 * Full services page displaying all service offerings with:
 * - Reuses ServiceCard component for consistency with homepage
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
            <ServiceCard service={service} index={index} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
