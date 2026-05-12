"use client";

import { services, servicesData } from "@/data/services";
import Section from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import CardGrid from "./CardGrid";
import ViewAllLink from "./ViewAllLink";
import ServiceCard from "./ServiceCard";

/**
 * Services Section - Client Component
 *
 * Displays service offerings in a responsive grid with:
 * - Overview on homepage with link to full Services page
 * - Reuses ServiceCard component for consistency
 * - Glassmorphism cards with hover animations
 */
export default function ServicesSection() {
  const { heading, subHeading } = servicesData;

  return (
    <Section id="services" heading={heading} subheading={subHeading} maxWidth="6xl">
      <CardGrid columns="3" gap="gap-6">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1} className="h-full">
            <ServiceCard service={service} index={index} />
          </FadeIn>
        ))}
      </CardGrid>
      <div className="text-center mt-12">
        <ViewAllLink href="/services" label="View All Services" />
      </div>
    </Section>
  );
}
