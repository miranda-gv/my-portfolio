"use client";

import type { ReactNode } from "react";

/** Available glassmorphism style variants */
type GlassVariant = "base" | "strong" | "card" | "cardStrong" | "pill";

const glassClasses: Record<GlassVariant, string> = {
  base: "glass-base shadow-glass",
  strong: "glass-strong shadow-glass",
  card: "glass-card shadow-glass",
  cardStrong: "glass-card-strong shadow-glass",
  pill: "glass-pill shadow-glass",
};

interface GlassCardProps {
  variant?: GlassVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export default function GlassCard({
  variant = "base",
  children,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <div className={`${glassClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
