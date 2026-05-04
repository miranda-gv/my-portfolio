/** Hover effect for cards - 5% scale + golden border (ExperienceItem) */
export const hoverPop = "transition-all duration-300 hover:scale-105 hover:border-primary";

/** Subtle hover effect - 2% scale + golden border (Skills/Testimonials) */
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
