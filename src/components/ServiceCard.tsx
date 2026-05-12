import type { Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";
import CheckIcon from "@/components/ui/CheckIcon";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

/**
 * ServiceCard Component
 *
 * Reusable card displaying a service offering with:
 * - Service icon with glassmorphism styling
 * - Title and description
 * - Feature list with checkmarks
 * - Technology badges
 * - "Get Started" button linking to contact section
 *
 * Used by both ServicesSection (homepage) and ServicesPage.
 */
export default function ServiceCard({ service, index, className = "" }: ServiceCardProps) {
  return (
    <GlassCard variant="card" className={`h-full p-6 md:p-8 flex flex-col ${className}`}>
      <div className="mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
          <ServiceIcon icon={service.icon} className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>
        <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 md:mb-3">{service.title}</h3>
        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.description}</p>
      </div>
      <ul className="space-y-2 md:space-y-3 mb-6 flex-grow">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
            <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-border">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Technologies</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs border border-border bg-muted/80 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link
        href="#contact"
        className="mt-auto block w-full text-center px-6 py-3 rounded-lg border border-primary text-primary text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
      >
        Get Started
      </Link>
    </GlassCard>
  );
}
