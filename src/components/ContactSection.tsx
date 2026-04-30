"use client";

import { contactData, getEmail, getPhone } from "@/data/contact";
import SocialLinks from "./SocialLinks";
import { Mail, Phone, MapPin } from "lucide-react";
import Section from "./Section";
import GlassCard from "./ui/GlassCard";
import ContactForm from "./ContactForm";

/**
 * Maps icon names to Lucide icon components - compact size
 */
const iconMap = {
  Mail: <Mail className="w-4 h-4" />,
  Phone: <Phone className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
};

/**
 * Contact Section - Client Component
 *
 * Displays contact information with:
 * - Email, phone (icon-only for privacy) with mailto:/tel: links
 * - Compact contact form (left) submitting via mailto:
 * - Social media links with glass effect (LinkedIn, Facebook)
 * - Glass card wrapper
 *
 * Contact info is reconstructed client-side to prevent scraping.
 *
 * @returns The contact section with form (left) and contact info (right)
 */
export default function ContactSection() {
  const { heading, subheading } = contactData;

  // Reconstruct obfuscated values client-side
  const emailAddress = getEmail();
  const phoneNumber = getPhone();

  return (
    <Section id="contact" heading={heading} subheading={subheading} maxWidth="4xl">
      <GlassCard variant="base" className="p-6 md:p-8 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Compact Contact Form - Left */}
          <div>
            <h3 className="font-heading text-lg mb-4 text-foreground">Send Message</h3>
            <ContactForm />
          </div>

          {/* Contact Info - Right */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              {/* Email - Icon only, clickable */}
              <a
                href={`mailto:${emailAddress}`}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-300"
                aria-label="Email Miranda"
              >
                <span className="text-primary">{iconMap.Mail}</span>
              </a>

              {/* Phone - Icon only, clickable */}
              <a
                href={`tel:${phoneNumber}`}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-300"
                aria-label="Call Miranda"
              >
                <span className="text-primary">{iconMap.Phone}</span>
              </a>

              {/* Location - Google Maps link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Breinigsville,+PA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on Google Maps"
              >
                {iconMap.MapPin}
                <span className="text-sm">Breinigsville, PA</span>
              </a>
            </div>

             {/* Social Links - LinkedIn & Facebook matching Figma */}
             <div className="pt-3 border-t border-white/10">
               <SocialLinks />
             </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
