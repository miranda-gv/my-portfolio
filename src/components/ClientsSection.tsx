"use client";

import { clients, clientsData } from "@/data/clients";
import Section from "./Section";
import GlassCard from "./ui/GlassCard";
import FadeIn from "./ui/FadeIn";
import Image from "next/image";
import { hoverPop } from "@/constants/animations";

/**
 * Clients Section - Client Component
 *
 * Displays client logos in a responsive grid with:
 * - Optimized images using Next.js Image component
 * - Hover effects (scale and opacity transitions)
 * - Staggered fade-in animations
 * - Glass card styling with strong variant for logo visibility
 *
 * Logos are responsive: 2 cols mobile, 3 cols tablet, 4 cols desktop.
 *
 * @returns The clients section with logo grid and animations
 */
/** Logo image dimensions */
const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 64;

export default function ClientsSection() {
  const { heading } = clientsData;
  return (
    <Section id="clients" heading={heading} maxWidth="5xl">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <FadeIn
              key={client.name}
              delay={index * 0.05}
            >
               <a href={client.url} target="_blank" rel="noopener noreferrer" className="block">
                 <GlassCard variant="cardStrong" className={`p-4 ${hoverPop}`}>
                     <div className="relative h-12 md:h-16 w-full flex items-center justify-center">
                       <Image
                          src={client.logoSrc}
                          alt={client.name}
                          width={LOGO_WIDTH}
                          height={LOGO_HEIGHT}
                          className="object-contain"
                          style={{ width: 'auto', height: '100%' }}
                        />
                     </div>
                  </GlassCard>
               </a>
            </FadeIn>
          ))}
        </div>
  </Section>
  );
}