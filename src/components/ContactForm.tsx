"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Contact Form Component - Client Component
 *
 * A compact, modern contact form with:
 * - Name, email, and message fields
 * - Client-side validation
 * - Submits via API route to send email using Resend
 * - Glassmorphism styling consistent with design system
 *
 * @returns A compact contact form with modern UI
 *
 * @example
 * <ContactForm />
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-foreground placeholder:text-muted-foreground text-sm transition-colors focus:outline-none focus:border-primary/50"
      />
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-foreground placeholder:text-muted-foreground text-sm transition-colors focus:outline-none focus:border-primary/50"
      />
      <textarea
        name="message"
        placeholder="Your message..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-foreground placeholder:text-muted-foreground text-sm transition-colors focus:outline-none focus:border-primary/50 resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02]",
          status === "sent"
            ? "bg-green-500/20 text-green-400"
            : status === "error"
            ? "bg-destructive/20 text-destructive"
            : "bg-gradient-to-br from-[#D4AF37] to-[#C9A961] text-[#0A0A0F] shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)]"
        )}
      >
        {status === "sending" ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : status === "sent" ? (
          "Sent!"
        ) : status === "error" ? (
          "Error"
        ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              Send Message
            </>
        )}
      </button>
    </form>
  );
}
