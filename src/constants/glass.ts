/**
 * Glassmorphism CSS Classes
 *
 * Predefined Tailwind class strings for consistent glass effects.
 * Used by GlassCard component to apply varying levels of transparency and blur.
 *
 * - base: Standard glass effect for most uses
 * - strong: Enhanced opacity for better visibility
 * - card/cardStrong: Card-specific variants with rounded corners
 * - pill: Fully rounded for pill/badge shapes
 */
export const glass = {
  base: "bg-white/5 backdrop-blur-md border border-white/20",
  strong: "bg-white/10 backdrop-blur-md border border-white/20",
  card: "rounded-xl bg-white/5 backdrop-blur-md border border-white/20",
  cardStrong: "rounded-xl bg-white/10 backdrop-blur-md border border-white/20",
  pill: "rounded-full bg-white/5 backdrop-blur-md border border-white/20",
} as const;
