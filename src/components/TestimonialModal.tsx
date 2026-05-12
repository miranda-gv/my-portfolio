"use client";

import { useState } from "react";
import { type Testimonial } from "@/data/testimonials";
import { X } from "lucide-react";

/**
 * Props for TestimonialModal component
 */
interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (testimonial: Omit<Testimonial, "date" | "relationship">) => void;
}

/**
 * Testimonial Modal Component
 *
 * Handles new testimonial submission with:
 * - Interactive star rating (1-5 stars)
 * - Required fields: name, title, testimonial text
 * - Optional: company
 * - Glassmorphism modal with backdrop blur
 */
export default function TestimonialModal({ isOpen, onClose, onSubmit }: TestimonialModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !name || !title || !text) return;
    onSubmit({ name, title, company: company || undefined, text, rating } as Omit<Testimonial, "date" | "relationship">);
    setName(""); setTitle(""); setCompany(""); setText(""); setRating(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg glass-card-strong p-8 rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-heading text-2xl text-foreground mb-6">Add Testimonial</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Rating *</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className={`p-1 ${(hoveredStar || rating) >= star ? 'text-primary' : 'text-muted-foreground/40'}`}
                  aria-label={`${star} star${star > 1 ? 's' : ''}`}
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill={(hoveredStar || rating) >= star ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.87L12 17.77l-6.18 3.24L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Name *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 rounded-lg bg-muted/80 border border-border text-foreground focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Title *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. CEO at Company" className="w-full px-4 py-2 rounded-lg bg-muted/80 border border-border text-foreground focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Company</label>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-muted/80 border border-border text-foreground focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Testimonial *</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} required rows={4} className="w-full px-4 py-2 rounded-lg bg-muted/80 border border-border text-foreground focus:outline-none focus:border-primary resize-none" />
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-lg glass-pill text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
            <button type="submit" className="flex-1 py-2.5 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition-colors">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
