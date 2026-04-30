"use client";

import type { ReactNode } from "react";
import { glass } from "@/constants/glass";

/** Available glassmorphism style variants */
type GlassVariant = keyof typeof glass;

/**
 * Props for the GlassCard component
 */
interface GlassCardProps {
  /** Glassmorphism variant style (base, strong, card, pill) */
  variant?: GlassVariant;
  /** Card content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional props spread to div element */
  [key: string]: unknown;
}

/**
 * GlassCard Component - Client Component
 *
 * Applies glassmorphism effects using predefined variants from constants.
 * Variants provide different levels of transparency and blur for design system consistency.
 *
 * @param props - Component props
 * @param props.variant - Glass style variant (default: "base")
 * @param props.children - Card content
 * @param props.className - Additional CSS classes
 * @param props.onClick - Optional click handler
 * @returns A div with glassmorphism styling
 *
 * @example
 * <GlassCard variant="base" className="p-6">Content</GlassCard>
 * <GlassCard variant="pill" className="px-4 py-2">Badge style</GlassCard>
 */
export default function GlassCard({
  variant = "base",
  children,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <div className={`${glass[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
