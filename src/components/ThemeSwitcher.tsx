"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { themes, type ThemeName, activeTheme } from "@/config/themes";

const THEME_STORAGE_KEY = "selected-theme";

const themeOrder: ThemeName[] = [
  "gold",
  "amber",
  "rose",
  "coral",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
  "teal",
  "lime",
  "storm",
];

const themeVarEntries = (themeName: ThemeName) => {
  const t = themes[themeName];
  return {
    "--theme-background": t.colors.background,
    "--theme-foreground": t.colors.foreground,
    "--theme-primary": t.colors.primary,
    "--theme-primary-foreground": t.colors.primaryForeground,
    "--theme-primary-glow": t.colors.primaryGlow,
    "--theme-secondary": t.colors.secondary,
    "--theme-secondary-foreground": t.colors.secondaryForeground,
    "--theme-accent": t.colors.accent,
    "--theme-accent-foreground": t.colors.accentForeground,
    "--theme-muted": t.colors.muted,
    "--theme-muted-foreground": t.colors.mutedForeground,
    "--theme-card": t.colors.card,
    "--theme-card-foreground": t.colors.cardForeground,
    "--theme-popover": t.colors.popover,
    "--theme-popover-foreground": t.colors.popoverForeground,
    "--theme-glass-bg": t.colors.glassBg,
    "--theme-glass-bg-strong": t.colors.glassBgStrong,
    "--theme-glass-border": t.colors.glassBorder,
    "--theme-border": t.colors.border,
    "--theme-input": t.colors.input,
    "--theme-destructive": t.colors.destructive,
    "--theme-destructive-foreground": t.colors.destructiveForeground,
    "--theme-font-heading": t.fonts.heading,
    "--theme-font-sans": t.fonts.sans,
    "--theme-font-mono": t.fonts.mono,
  } as React.CSSProperties;
};

const applyTheme = (themeName: ThemeName) => {
  const vars = themeVarEntries(themeName);
  const root = document.documentElement;
  Object.entries(vars).forEach(([prop, value]) => {
    root.style.setProperty(prop, value);
  });
  localStorage.setItem(THEME_STORAGE_KEY, themeName);
};

export default function ThemeSwitcher() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
    applyTheme(savedTheme && savedTheme in themes ? savedTheme : activeTheme);
    setMounted(true);
  }, []);

  if (process.env.NODE_ENV === "production" || !mounted) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-12 right-0 flex flex-col gap-1 p-1.5 rounded-lg glass-strong"
          >
            {themeOrder.map((key) => (
              <button
                key={key}
                onClick={() => applyTheme(key)}
                className="px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wide transition-transform hover:scale-105"
                style={{
                  backgroundColor: themes[key].colors.primary,
                  color: themes[key].colors.primaryForeground,
                }}
                aria-label={`Switch to ${themes[key].name} theme`}
              >
                {themes[key].name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-8 h-8 rounded-full glass-strong flex items-center justify-center shadow-lg"
        aria-label="Switch theme"
      >
        <Palette size={16} />
      </motion.button>
    </div>
  );
}
