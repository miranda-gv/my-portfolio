/**
 * Primary Navigation Links
 * Shown in main navbar - all top-level pages
 */
export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
] as const;

/**
 * Homepage Section Links
 * Shown in secondary nav - all homepage sections (theme-aware: anchors = muted, pages = primary)
 */
export const sectionLinks = [
  { href: "#about", label: "About", type: "anchor" },
  { href: "#services", label: "Services", type: "anchor" },
  { href: "#portfolio", label: "Portfolio", type: "anchor" },
  { href: "#experience", label: "Experience", type: "anchor" },
  { href: "#skills", label: "Skills", type: "anchor" },
  { href: "#clients", label: "Clients", type: "anchor" },
  { href: "#testimonials", label: "Testimonials", type: "anchor" },
  { href: "#blog", label: "Blog", type: "anchor" },
  { href: "#contact", label: "Contact", type: "anchor" },
] as const;
