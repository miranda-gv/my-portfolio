"use client";

import { services, servicesData } from "@/data/services";
import Section from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CardGrid, { GlassCardItem } from "./CardGrid";
import ViewAllLink from "./ViewAllLink";
import ServiceIcon from "./ServiceIcon";
import CheckIcon from "@/components/ui/CheckIcon";

/**
 * Services Section - Client Component
 *
 * Displays service offerings in a responsive grid with:
 * - Overview on homepage with link to full Services page
 * - Glassmorphism cards with hover animations
 * - Icon representation for each service
 * - Feature list with checkmarks
 */
export default function ServicesSection() {
  const { heading, subHeading } = servicesData;

  return (
    <Section id="services" heading={heading} subheading={subHeading} maxWidth="6xl">
      <CardGrid columns="3" gap="gap-6">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1} className="h-full">
            <GlassCardItem className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              </div>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCardItem>
          </FadeIn>
        ))}
      </CardGrid>
      <ViewAllLink href="/services" label="View All Services" />
    </Section>
  );
}
