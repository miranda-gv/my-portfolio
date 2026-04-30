import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

/**
 * Home Page - Server Component
 *
 * Composes all portfolio sections in a single scrollable page.
 * This is the main entry point for the portfolio, using the Next.js App Router.
 * All sections are client components with their own hydration boundaries.
 *
 * @returns The complete portfolio page with all sections
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}