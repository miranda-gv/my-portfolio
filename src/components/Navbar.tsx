"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import Link from "next/link";

/**
 * Navbar - Client Component
 *
 * Fixed header with responsive navigation featuring:
 * - Primary nav links to top-level pages
 * - Contact button with icon
 * - Mobile hamburger menu with all nav links
 * - Glassmorphism effect when scrolled
 */
const navLinkClasses = cn(
  "text-sm uppercase tracking-wider font-extrabold transition-colors duration-300 py-2 px-3 relative",
  "after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
  "text-muted-foreground",
  "hover:text-primary",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
);

function NavLink({ href, children, isActive, onClick }: { href: string; children: React.ReactNode; isActive: boolean; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className={cn(navLinkClasses, isActive && "text-primary after:w-full")}
      tabIndex={0}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between h-16" aria-label="Main navigation">
        <Link href="/" className="text-2xl font-bold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm" aria-label={`${siteConfig.name} - Home`}>
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden min-[1010px]:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href} role="listitem">
              <NavLink href={link.href} isActive={pathname === link.href}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li role="listitem" className="ml-2">
            <Link href="#contact" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all text-sm font-medium" tabIndex={0}>
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="min-[1010px]:hidden p-3 min-h-[44px] min-w-[44px]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="min-[1010px]:hidden bg-background/95 backdrop-blur-md border-t overflow-hidden">
            <ul className="flex flex-col py-4 px-4 gap-1">
              <p className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground/60">Pages</p>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} isActive={pathname === link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <div className="border-t border-border my-2" />
              <li>
                <Link href="/contact" className="flex items-center gap-2 py-2 px-4 text-primary" onClick={() => setMobileOpen(false)}>
                  <Mail className="w-4 h-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}