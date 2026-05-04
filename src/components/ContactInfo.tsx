"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { getEmail, getPhone } from "@/data/contact";

const iconClasses =
  "w-9 h-9 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-300";

export default function ContactInfo() {
  const emailAddress = getEmail();
  const phoneNumber = getPhone();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-6">
        <a
          href={`mailto:${emailAddress}`}
          className={iconClasses}
          aria-label="Email Miranda"
        >
          <Mail className="w-4 h-4 text-primary" />
        </a>
        <a
          href={`tel:${phoneNumber}`}
          className={iconClasses}
          aria-label="Call Miranda"
        >
          <Phone className="w-4 h-4 text-primary" />
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Breinigsville,+PA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          aria-label="View on Google Maps"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Breinigsville, PA</span>
        </a>
      </div>
      <div className="pt-3 border-t border-white/10">
        <SocialLinks />
      </div>
    </div>
  );
}
