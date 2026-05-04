"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sectionLinks } from "@/data/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SecondaryNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  if (pathname !== "/") return null;

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => setSelectedItem(href);

  if (!isVisible) return null;

  return (
    <div className="secondary-nav fixed top-16 left-0 right-0 z-40 w-full bg-background/95 overflow-hidden transition-all duration-300">
      <div className="container mx-auto px-4 py-2.5 overflow-hidden">
        <ul className="flex items-center gap-1.5 overflow-hidden" role="list">
          {sectionLinks.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const Component = isAnchor ? Link : "a";
            const isSelected = selectedItem === link.href;
            
            return (
              <li key={link.href} role="listitem">
                <Component
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                    if (isAnchor) {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "text-xs uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap border-none outline-none",
                    isSelected
                      ? isAnchor
                        ? "text-primary bg-primary/20"
                        : "text-foreground bg-accent/50"
                      : isAnchor
                        ? "text-primary hover:bg-primary/15 hover:text-primary/90"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {link.label}
                </Component>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
