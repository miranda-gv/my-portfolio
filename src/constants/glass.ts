/**
 * Glassmorphism CSS Classes
 *
 * Predefined Tailwind class strings for consistent glass effects.
 * Uses Tailwind v4 theme variables via custom utilities defined in globals.css.
 * Used by GlassCard component to apply varying levels of transparency and blur.
 *
 * - base: Standard glass effect for most uses
 * - strong: Enhanced opacity for better visibility
 * - card/cardStrong: Card-specific variants with rounded corners
 * - pill: Fully rounded for pill/badge shapes
 */
export const glass = {
  base: "glass-base shadow-glass",
  strong: "glass-strong shadow-glass",
  card: "glass-card shadow-glass",
  cardStrong: "glass-card-strong shadow-glass",
  pill: "glass-pill shadow-glass",
} as const;
