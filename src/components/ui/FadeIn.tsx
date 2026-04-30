"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Props for the FadeIn animation wrapper
 */
interface FadeInProps {
  /** Content to be animated */
  children: ReactNode;
  /** Additional CSS classes for the motion div */
  className?: string;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Initial vertical offset in pixels (animation starts from this Y position) */
  yOffset?: number;
  /** If true, animation triggers only once when element enters viewport */
  once?: boolean;
  /** Animation duration in seconds */
  transitionDuration?: number;
}

/**
 * FadeIn Component - Client Component
 *
 * Scroll-triggered fade-in animation using Framer Motion.
 * Wraps children in a motion.div that animates when entering the viewport.
 *
 * @param props - Component props
 * @param props.children - Content to animate
 * @param props.className - Additional CSS classes
 * @param props.delay - Animation delay in seconds (default: 0)
 * @param props.yOffset - Starting Y offset in pixels (default: 20)
 * @param props.once - Animate only once (default: true)
 * @param props.transitionDuration - Animation duration in seconds (default: 0.5)
 * @returns A motion div with viewport-triggered fade-in animation
 *
 * @example
 * <FadeIn delay={0.2} yOffset={30}>
 *   <p>Content that fades in</p>
 * </FadeIn>
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  yOffset = 20,
  once = true,
  transitionDuration = 0.5,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: transitionDuration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
