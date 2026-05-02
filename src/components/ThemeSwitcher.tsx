"use client";

import { themes, type ThemeName } from "@/config/themes";

/**
 * Theme Switcher - Client Component (Development Only)
 *
 * Allows switching between themes at runtime.
 * Only renders in development mode.
 *
 * @returns Theme selection buttons or null in production
 */
export default function ThemeSwitcher() {
  /** Applies selected theme by setting CSS variables on <html> */
  const applyTheme = (themeName: ThemeName) => {
    const theme = themes[themeName];
    const root = document.documentElement;

    Object.entries({
      "--theme-background": theme.colors.background,
      "--theme-foreground": theme.colors.foreground,
      "--theme-primary": theme.colors.primary,
      "--theme-primary-foreground": theme.colors.primaryForeground,
      "--theme-primary-glow": theme.colors.primaryGlow,
      "--theme-secondary": theme.colors.secondary,
      "--theme-secondary-foreground": theme.colors.secondaryForeground,
      "--theme-accent": theme.colors.accent,
      "--theme-accent-foreground": theme.colors.accentForeground,
      "--theme-muted": theme.colors.muted,
      "--theme-muted-foreground": theme.colors.mutedForeground,
      "--theme-card": theme.colors.card,
      "--theme-card-foreground": theme.colors.cardForeground,
      "--theme-popover": theme.colors.popover,
      "--theme-popover-foreground": theme.colors.popoverForeground,
      "--theme-glass-bg": theme.colors.glassBg,
      "--theme-glass-bg-strong": theme.colors.glassBgStrong,
      "--theme-glass-border": theme.colors.glassBorder,
      "--theme-border": theme.colors.border,
      "--theme-input": theme.colors.input,
      "--theme-destructive": theme.colors.destructive,
      "--theme-destructive-foreground": theme.colors.destructiveForeground,
      "--theme-font-heading": theme.fonts.heading,
      "--theme-font-sans": theme.fonts.sans,
      "--theme-font-mono": theme.fonts.mono,
    }).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
  };

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 p-2 rounded-lg glass-strong">
      {(Object.keys(themes) as ThemeName[]).map((key) => (
        <button
          key={key}
          onClick={() => applyTheme(key)}
          className="px-3 py-1.5 rounded-md text-xs font-medium uppercase tracking-wider transition-colors hover:scale-105"
          style={{
            backgroundColor: themes[key].colors.primary,
            color: themes[key].colors.primaryForeground,
          }}
          aria-label={`Switch to ${themes[key].name} theme`}
        >
          {themes[key].name}
        </button>
      ))}
    </div>
  );
}
