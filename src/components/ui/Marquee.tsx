"use client";

import type { ReactNode } from "react";
import { useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Pause animation when a child is hovered */
  pauseOnHover?: boolean;
  /** Animation duration in seconds (lower = faster) */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Marquee - Infinite scrolling container
 *
 * Duplicates children to create seamless infinite scroll.
 * Uses CSS animation for smooth, performant scrolling.
 * When pauseOnHover is true, hovering any child pauses the entire marquee.
 *
 * @param props.pauseOnHover - Pause animation on child hover (default: true)
 * @param props.duration - Animation duration in seconds (default: 40)
 * @param props.className - Additional CSS classes
 */
export default function Marquee({
  children,
  pauseOnHover = true,
  duration = 40,
  className = "",
}: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`flex overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-8"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {children}
      </div>
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-8"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
