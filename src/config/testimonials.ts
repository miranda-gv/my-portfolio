/**
 * Testimonials Display Configuration
 *
 * Controls how testimonials are grouped into frames (pages) for display.
 * - frameTiers: Defines frame groups with specific per-frame counts
 * - defaultPerFrame: Fallback for testimonials not covered by tiers
 *
 * Example: First 8 frames show 2 testimonials each, rest show 3 each
 */
export const testimonialConfig = {
  frameTiers: [{ count: 6, perFrame: 2 }],
  defaultPerFrame: 3,
} as const;
