"use client";

import { useState, useCallback, useEffect } from "react";
import { type Testimonial, testimonials, testimonialsData } from "@/data/testimonials";
import Section from "@/components/Section";
import GlassCard from "@/components/ui/GlassCard";
import StarRating from "@/components/ui/StarRating";
import TestimonialModal from "@/components/TestimonialModal";
import { Plus } from "lucide-react";

/**
 * Testimonials Page - Client Component
 *
 * Full testimonials page with:
 * - All testimonials in full-width layout, left/right aligned
 * - 1rem font size for testimonial text
 * - Modal for adding new testimonials
 * - Admin section for moderating testimonials (server-side auth via HTTP-only cookie)
 */
export default function TestimonialsPage() {
  const { heading, subHeading } = testimonialsData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingTestimonials, setPendingTestimonials] = useState<Array<Testimonial & { id: string }>>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin auth on mount
  useEffect(() => {
    fetch("/api/admin-verify")
      .then(res => res.json())
      .then(data => { if (data.isAdmin) setIsAdmin(true); });
  }, []);

  const handleSubmit = useCallback((data: Omit<Testimonial, "date" | "relationship">) => {
    const newTestimonial: Testimonial & { id: string } = {
      ...data,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      relationship: "New submission",
      id: Math.random().toString(36).substring(7),
    };
    setPendingTestimonials(prev => [...prev, newTestimonial]);
  }, []);

  const handleApprove = useCallback((id: string) => {
    setPendingTestimonials(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleReject = useCallback((id: string) => {
    setPendingTestimonials(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: adminPassword }),
    });
    const data = await res.json();
    if (data.success) {
      setIsAdmin(true);
      setShowAdmin(false);
    }
  };

  const handleAdminLogout = async () => {
    await fetch("/api/admin-login", { method: "DELETE" });
    setIsAdmin(false);
  };

  return (
    <Section id="testimonials" heading={heading} subheading={subHeading} maxWidth="6xl">
      <div className="flex justify-between items-center mb-10">
        <p className="text-muted-foreground">All testimonials from colleagues and clients</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill text-primary border border-primary/30 hover:bg-primary/10 transition-all duration-300 font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <GlassCard key={index} variant="card" className={`p-8 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'} max-w-3xl`}>
            <StarRating rating={testimonial.rating} />
            <p className="my-4 text-foreground text-base leading-relaxed">
              &quot;{testimonial.text}&quot;
            </p>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-primary">{testimonial.title}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {!isAdmin && (
        <div className="mt-12 pt-8 border-t border-white/10">
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAdmin ? 'Hide' : 'Admin'} Login
          </button>
          {showAdmin && (
            <form onSubmit={handleAdminLogin} className="mt-4 flex gap-3 max-w-sm">
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Admin password"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-primary text-sm"
              />
              <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-background text-sm font-medium">Login</button>
            </form>
          )}
        </div>
      )}

      {isAdmin && (
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-heading text-xl text-foreground">Pending Testimonials (Admin)</h3>
            <button onClick={handleAdminLogout} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Logout</button>
          </div>
          {pendingTestimonials.length === 0 ? (
            <p className="text-muted-foreground">No pending testimonials.</p>
          ) : (
            <div className="space-y-6">
              {pendingTestimonials.map((testimonial) => (
                <GlassCard key={testimonial.id} variant="card" className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.title}</p>
                      {testimonial.company && <p className="text-xs text-muted-foreground">{testimonial.company}</p>}
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-foreground mb-4 text-base">&quot;{testimonial.text}&quot;</p>
                  <div className="flex gap-3">
                    <button onClick={() => handleApprove(testimonial.id)} className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/30 transition-colors">Approve</button>
                    <button onClick={() => handleReject(testimonial.id)} className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/30 transition-colors">Reject</button>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      )}

      <TestimonialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
    </Section>
  );
}
