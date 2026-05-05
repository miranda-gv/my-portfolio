import { MapPin } from "lucide-react";
import { contactData } from "@/data/contact";

export default function ContactInfo() {
  return (
    <div className="flex justify-center">
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.location)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
        aria-label="View on Google Maps"
      >
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{contactData.location}</span>
      </a>
    </div>
  );
}
