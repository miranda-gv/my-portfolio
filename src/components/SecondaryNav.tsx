"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sectionLinks } from "@/data/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * SecondaryNav - Ribbon Component
 *
 * Appears immediately on homepage (/) as user starts scrolling.
 * Shows all homepage section links styled as theme-aware pills.
 */
export default function SecondaryNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Only show on homepage
  if (pathname !== "/") return null;

  useEffect(() => {
    const handleScroll = () => {
      // Show immediately when user starts scrolling
      setIsVisible(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-2.5">
        <ul className="flex items-center gap-1.5 overflow-x-auto" role="list">
          {sectionLinks.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const Component = isAnchor ? Link : "a";
            return (
              <li key={link.href} role="listitem">
                <Component
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap",
                    isAnchor
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
