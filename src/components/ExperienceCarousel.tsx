"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/experience";
import FadeIn from "./ui/FadeIn";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function ExperienceCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const itemsPerPage = 1;
  const totalPages = Math.ceil(experience.length / itemsPerPage);

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + totalPages) % totalPages;
    setPage([newPage, newDirection]);
  };

  const currentIndex = page % experience.length;
  const currentExp = experience[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 400 : -400,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (direction: number) => ({
                x: direction < 0 ? 400 : -400,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="glass-base rounded-2xl p-8 md:p-10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-primary-glow/30 text-primary w-fit">
                  {currentExp.dates}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {currentExp.location}
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-medium mb-2 leading-tight">
                {currentExp.title}
              </h3>

              <p className="font-heading text-lg md:text-xl font-medium text-primary mb-6 leading-tight">
                {currentExp.company}
              </p>

              <ul className="space-y-3">
                {currentExp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-primary" />
                    <span className="leading-snug text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full glass-base hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
          aria-label="Previous experience"
        >
          <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-primary"
                  : "bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to experience ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full glass-base hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
          aria-label="Next experience"
        >
          <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>

      <FadeIn delay={0.4} yOffset={20} className="mt-6 text-center">
        <a
          href="/experience"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
        >
          View all experience
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </FadeIn>
    </div>
  );
}