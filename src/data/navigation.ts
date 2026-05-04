/**
 * Navigation Links Data
 *
 * Contains site navigation links used by Navbar component.
 * Top-level pages link to their own routes; others link to homepage sections.
 */
export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/experience", label: "Experience" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
] as const;
