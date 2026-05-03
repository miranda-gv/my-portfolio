"use client";

import { type Testimonial, testimonials, testimonialsData } from "@/data/testimonials";
import { glass } from "@/constants/glass";
import { testimonialConfig } from "@/config/testimonials";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section";
import GlassCard from "./ui/GlassCard";
import StarRating from "./ui/StarRating";
import { typography, hoverPopSubtle } from "@/constants/animations";

const { frameTiers, defaultPerFrame } = testimonialConfig;

/** Returns grid column class based on number of testimonials in frame */
const getGridClass = (count: number) => {
  if (count === 1) return 'md:grid-cols-1 max-w-2xl mx-auto';
  if (count === 2) return 'md:grid-cols-2';
  return 'md:grid-cols-3';
};

/**
 * Builds testimonial frames based on configuration tiers
 *
 * Creates frames (pages) of testimonials where:
 * - First tier: specified number of frames with configured per-frame count
 * - Remaining testimonials: grouped using defaultPerFrame
 *
 * @returns Array of testimonial arrays, each representing one frame/page
 */
const buildFrames = () => {
  const frames: Testimonial[][] = [];
  let i = 0;

  // Build frames according to tier configuration
  for (const tier of frameTiers) {
    const end = i + tier.count;
    for (; i < end && i < testimonials.length; i += tier.perFrame) {
      frames.push(testimonials.slice(i, i + tier.perFrame));
    }
  }

  // Remaining testimonials use default frame size
  for (; i < testimonials.length; i += defaultPerFrame) {
    frames.push(testimonials.slice(i, i + defaultPerFrame));
  }

  return frames;
};

/** Pre-built frames from testimonial data */
const frames = buildFrames();

/**
 * Testimonials Section - Client Component
 *
 * Carousel-style testimonials display with:
 * - Config-driven frame building (variable testimonials per frame)
 * - Smooth slide animations using Framer Motion
 * - Pagination dots with ARIA tablist role
 * - Responsive grid within frames (1-3 columns based on count)
 * - Star rating display for each testimonial
 * - Full keyboard navigation support
 *
 * Frame structure is determined by testimonialConfig in src/config/testimonials.ts
 *
 * @returns The testimonials section with interactive carousel
 */
export default function TestimonialsSection() {
  const { heading } = testimonialsData;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalFrames = frames.length;

  /** Returns the testimonials array for the current frame */
  const getCurrentFrame = () => frames[currentFrame];

  /** Calculates the start and end indices for ARIA labeling */
  const getFrameIndices = () => {
    let start = 0;
    for (let i = 0; i < currentFrame; i++) start += frames[i].length;
    return { start, end: start + frames[currentFrame].length };
  };

  /** Navigates to the next frame with forward direction */
  const next = useCallback(() => {
    setDirection(1);
    setCurrentFrame((prev) => (prev + 1) % totalFrames);
  }, [setDirection, setCurrentFrame, totalFrames]);

  /** Navigates to the previous frame with backward direction */
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames);
  }, [setDirection, setCurrentFrame, totalFrames]);

  /** Jumps to a specific frame with appropriate direction */
  const goToFrame = (frame: number) => {
    setDirection(frame > currentFrame ? 1 : -1);
    setCurrentFrame(frame);
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  /** Handles arrow key navigation when focused within testimonial section */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  }, [prev, next]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.addEventListener('keydown', handleKeyDown);
    return () => section.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Section id="testimonials" heading={heading} maxWidth="6xl">
          <div
            ref={sectionRef}
            className="relative"
            tabIndex={0}
            role="region"
            aria-label="Testimonials carousel - use arrow keys to navigate"
          >
            <AnimatePresence mode="wait">
               <motion.div
                 key={currentFrame}
                 initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                 transition={{ duration: 0.3 }}
                  className={`grid gap-6 ${getGridClass(frames[currentFrame].length)}`}
                 role="tabpanel"
                 aria-label={`Testimonials ${getFrameIndices().start + 1}-${getFrameIndices().end} of ${testimonials.length}`}
               >
                {getCurrentFrame().map((testimonial, idx) => (
                  <GlassCard
                     key={idx}
                     variant="card"
                     className={`h-full p-6 md:p-8 ${hoverPopSubtle}`}
                     tabIndex={0}
                   >
                     <StarRating rating={testimonial.rating} />

                       <p
                          className="mb-6 italic text-muted-foreground"
                          style={typography.small}
                        >
                         &quot;{testimonial.text}&quot;
                       </p>

                     <div className="mt-auto">
                       <p className="font-semibold text-foreground">
                         {testimonial.name}
                       </p>
                       <p className="text-sm text-primary">
                         {testimonial.title}
                       </p>
                       </div>
                    </GlassCard>
                 ))}
               </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-8">
               <button
                 onClick={prev}
                 className={`flex items-center justify-center p-2 min-h-[44px] min-w-[44px] rounded-full transition-all duration-300 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary ${glass.pill} text-muted-foreground`}
                 aria-label="Previous testimonials"
               >
                 <ChevronLeft className="w-5 h-5" />
               </button>

              <div className="flex gap-2" role="tablist" aria-label="Testimonial pages">
                {[...Array(totalFrames)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToFrame(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                      i === currentFrame ? 'bg-primary' : 'bg-white/20'
                    }`}
                    role="tab"
                    aria-selected={i === currentFrame}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>

               <button
                 onClick={next}
                 className={`flex items-center justify-center p-2 min-h-[44px] min-w-[44px] rounded-full transition-all duration-300 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary ${glass.pill} text-muted-foreground`}
                 aria-label="Next testimonials"
               >
                 <ChevronRight className="w-5 h-5" />
               </button>
              </div>
            </div>
      </Section>
   );
 }