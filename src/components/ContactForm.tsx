"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactData } from "@/data/contact";

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-foreground placeholder:text-muted-foreground text-base transition-colors focus:outline-none focus:border-primary/50";

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className={inputClasses} />
      <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className={inputClasses} />
      <textarea name="message" placeholder="Your message..." value={formData.message} onChange={handleChange} required rows={6} className={`${inputClasses} resize-none`} />
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]",
          status === "sent"
            ? "bg-green-500/20 text-green-400"
            : status === "error"
              ? "bg-destructive/20 text-destructive"
              : "bg-primary text-primary-foreground shadow-[0_4px_15px_rgba(var(--color-primary-glow),0.3)] hover:shadow-[0_6px_20px_rgba(var(--color-primary-glow),0.5)]"
        )}
      >
        {status === "sending" ? (
          <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : status === "sent" ? (
          "Sent! ✓"
        ) : status === "error" ? (
          "Error - Try Again"
        ) : (
          <>
            <Send className="w-4 h-4" />
            {contactData.sendButtonLabel}
          </>
        )}
      </button>
    </form>
  );
}
