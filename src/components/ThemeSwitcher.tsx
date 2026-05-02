"use client";

import { useState } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { themes, type ThemeName } from "@/config/themes";

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

export default function ThemeSwitcher() {
  const [isExpanded, setIsExpanded] = useState(false);

  const applyTheme = (themeName: ThemeName) => {
    const vars = themeVarEntries(themeName);
    const root = document.documentElement;
    Object.entries(vars).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
  };

  if (process.env.NODE_ENV === "production") return null;

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
            className="absolute bottom-14 right-0 flex gap-2 p-2 rounded-lg glass-strong"
          >
            {(Object.keys(themes) as ThemeName[]).map((key) => (
              <button
                key={key}
                onClick={() => applyTheme(key)}
                className="px-3 py-1.5 rounded-md text-xs font-medium uppercase tracking-wider transition-transform hover:scale-105"
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
        className="w-10 h-10 rounded-full glass-strong flex items-center justify-center shadow-lg"
        aria-label="Switch theme"
      >
        <Palette size={16} />
      </motion.button>
    </div>
  );
}
