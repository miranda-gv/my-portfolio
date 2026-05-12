"use client";

import { heroData } from "@/data/hero";
import { ArrowDown } from "lucide-react";
import { generateCV } from "@/lib/generate-cv";
import GlassCard from "./ui/GlassCard";
import Image from "next/image";
import Link from "next/link";

/**
 * Hero Section - Client Component
 *
 * The landing section of the portfolio featuring:
 * - Professional headshot with glass card styling
 * - Name, title, and introductory text
 * - Call-to-action buttons (Contact, Download CV)
 * - Animated scroll indicator
 *
 * Uses Next.js Image component for optimized headshot rendering with priority loading.
 *
 * @returns The hero section with personal branding and navigation CTAs
 */
export default function HeroSection() {
  const { name, title, headshotSrc, subheading, intro } = heroData;

  /** Triggers CV download via API route */
  const handleCVDownload = async () => {
    await generateCV();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-6 inline-block">
              <GlassCard
                variant="pill"
                className="px-4 py-2 rounded-full text-sm tracking-wide text-primary"
              >
                {title}
              </GlassCard>
            </div>
            <h1
              className="font-heading mb-6 tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none"
            >
              {name}
            </h1>
            <p
              className="font-heading mb-8 italic text-primary text-xl md:text-2xl"
            >
              {subheading}
            </p>
            <p
              className="mb-12 max-w-xl text-muted-foreground text-lg leading-relaxed"
            >
              {intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-lg bg-primary text-background font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 inline-block"
              >
                CONTACT ME
              </Link>

              <button
                onClick={handleCVDownload}
                className="px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-foreground glass-base border border-white/20 hover:border-primary hover:shadow-[0_4px_15px_rgba(var(--color-primary-glow),0.3)] font-bold uppercase tracking-wider"
              >
                DOWNLOAD CV
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <GlassCard
              variant="base"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30"
            >
              <Image
                src={headshotSrc}
                alt={name}
                fill
                sizes="(max-width: 768px) 320px, 384px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-primary/20 rounded-2xl" />
            </GlassCard>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce p-3 rounded-full hover:bg-primary/20 transition-all cursor-pointer z-20"
        aria-label="Scroll to content"
        type="button"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
}
