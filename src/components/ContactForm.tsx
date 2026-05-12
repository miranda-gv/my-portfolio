"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { contactData } from "@/data/contact";
import GlassCard from "./ui/GlassCard";

const inputClasses =
  "w-full px-4 py-3 rounded-lg bg-muted/80 border border-border text-foreground placeholder:text-muted-foreground text-base transition-colors focus:outline-none focus:border-primary/50";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <GlassCard variant="card" className="p-8 rounded-2xl">
      <h3 className="font-heading text-2xl text-center uppercase tracking-wider text-primary mb-6">
        {contactData.formHeading}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputClasses} />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className={inputClasses} />
        </div>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={4} className={`${inputClasses} resize-none`} />
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "w-full px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wider text-base",
            status === "sent"
              ? "bg-green-500/20 text-green-400"
              : status === "error"
                ? "bg-destructive/20 text-destructive"
                : "bg-primary text-primary-foreground shadow-[0_4px_15px_rgba(var(--color-primary-glow),0.3)]"
          )}
        >
          {status === "sending" ? (
            <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : status === "sent" ? (
            "Sent! ✓"
          ) : status === "error" ? (
            "Error - Try Again"
          ) : (
            contactData.sendButtonLabel
          )}
        </button>
      </form>
    </GlassCard>
  );
}
