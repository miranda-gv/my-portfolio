"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import Link from "next/link";

/**
 * Navbar - Client Component
 *
 * Fixed header with responsive navigation featuring:
 * - Scroll detection for transparent/scrolled background states
 * - Desktop horizontal nav links from navigation data
 * - Mobile hamburger menu with slide-down animation
 * - Glassmorphism effect when scrolled
 * - Full ARIA accessibility (aria-label, aria-expanded, role attributes)
 *
 * Uses Framer Motion for mobile menu animations and entrance animation.
 *
 * @returns Fixed navigation header with responsive menu
 */
/** Design system colors - DRY */
const navTextColor = "text-[rgb(180,180,180)]";

/** Shared nav link styles matching design spec: gray text with gold underline */
const navLinkClasses = cn(
  "text-base uppercase tracking-wider font-extrabold transition-colors duration-300 py-2 px-3 relative",
  "after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full",
  navTextColor,
  "hover:text-[#D4AF37]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
);

export default function Navbar() {
  /** Tracks scroll position for navbar background state */
  const [isScrolled, setIsScrolled] = useState(false);
  /** Controls mobile menu open/closed state */
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Adds scroll listener with passive event for performance */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between h-16" aria-label="Main navigation">
          <Link href="#" className={cn("text-2xl font-bold transition-colors hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm", navTextColor)} aria-label={`${siteConfig.name} - Home`}>
          {siteConfig.name}
        </Link>

         <ul className="hidden md:flex items-center gap-[22px]" role="list">
           {navLinks.map((link) => (
             <li key={link.href} role="listitem">
               <Link
                  href={link.href}
                  className={navLinkClasses}
                  tabIndex={0}
                >
                  {link.label.toUpperCase()}
                </Link>
             </li>
           ))}
         </ul>

        <button
          className="md:hidden p-3 min-h-[44px] min-w-[44px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t overflow-hidden"
          >
               <ul className="flex flex-col py-4 px-4 gap-2">
                 {navLinks.map((link) => (
                   <li key={link.href}>
                 <Link
                        href={link.href}
                        className={cn("block py-2 px-4", navLinkClasses)}
                        onClick={() => setMobileOpen(false)}
                      >
                       {link.label.toUpperCase()}
                     </Link>
                   </li>
                 ))}
               </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}