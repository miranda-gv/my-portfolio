"use client";

import { services, servicesData } from "@/data/services";
import Section from "./Section";
import FadeIn from "./ui/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CardGrid, { GlassCardItem } from "./CardGrid";
import ViewAllLink from "./ViewAllLink";

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
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <h3 className="font-heading text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              </div>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
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
