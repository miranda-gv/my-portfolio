import type { Variants } from "framer-motion";

/**
 * Fade In Up Animation Variant
 * Element fades in while moving up from 20px below
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Fade In Left Animation Variant
 * Element fades in while sliding in from left (50px)
 */
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

/**
 * Fade In Right Animation Variant
 * Element fades in while sliding in from right (50px)
 */
export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

/**
 * Stagger Container Variant
 * Children animate with 0.1s stagger delay between each
 */
export const staggerContainer: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

/** Scale effect on hover (2% increase) */
export const scaleOnHover = {
  whileHover: { scale: 1.02 },
};

/** Hover effect for cards - 5% scale + golden border (Clients, Figma: hover:scale-105) */
export const hoverPop = "transition-all duration-300 hover:scale-105 hover:border-primary";

/** Subtle hover effect - 2% scale + golden border (Skills/Testimonials, Figma: hover:scale-[1.02]) */
export const hoverPopSubtle = "transition-all duration-300 hover:scale-[1.02] hover:border-primary";

/**
 * Responsive Typography Scale
 *
 * Uses CSS clamp() for fluid typography that scales with viewport.
 * Applied to heading, subheading, body, and small text elements.
 */
export const typography = {
  hero: { fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1' },
  heading: { fontSize: 'clamp(2rem, 4vw, 3.5rem)' },
  subheading: { fontSize: 'clamp(1.25rem, 3vw, 2rem)' },
  body: { fontSize: '1.2rem', lineHeight: '1.8' },
  small: { fontSize: '0.90rem', lineHeight: '1.6' },
} as const;
