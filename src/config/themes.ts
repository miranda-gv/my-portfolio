/**
 * Theme Configuration
 *
 * Defines all available themes for the portfolio.
 * Each theme specifies colors, fonts, and design tokens.
 * To add a new theme, add an entry to the `themes` object and update the ThemeName type.
 *
 * Usage:
 * - Build-time: Set `activeTheme` below and update layout.tsx
 * - Runtime: Use the ThemeSwitcher component (dev only)
 */

export type ThemeName = "gold" | "emerald" | "rose";

interface ThemeDefinition {
  /** Theme display name */
  name: string;
  /** Color tokens */
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    primaryGlow: string; // RGB format without "rgb()" for use in rgba()
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    glassBg: string;
    glassBgStrong: string;
    glassBorder: string;
    border: string;
    input: string;
    destructive: string;
    destructiveForeground: string;
  };
  /** Font variables (must match layout.tsx font variables) */
  fonts: {
    heading: string; // CSS variable name
    sans: string;
    mono: string;
  };
}

export const themes: Record<ThemeName, ThemeDefinition> = {
  gold: {
    name: "Metallic Gold",
    colors: {
      background: "#0a0a0f",
      foreground: "#ffffff",
      primary: "#C5A059",
      primaryForeground: "#0a0a0f",
      primaryGlow: "197, 160, 89",
      secondary: "#A68B3C",
      secondaryForeground: "#ffffff",
      accent: "#C5A059",
      accentForeground: "#0a0a0f",
      muted: "rgba(255, 255, 255, 0.05)",
      mutedForeground: "#b4b4b4",
      card: "rgba(255, 255, 255, 0.05)",
      cardForeground: "#ffffff",
      popover: "rgba(255, 255, 255, 0.05)",
      popoverForeground: "#ffffff",
      glassBg: "rgba(255, 255, 255, 0.05)",
      glassBgStrong: "rgba(255, 255, 255, 0.1)",
      glassBorder: "rgba(255, 255, 255, 0.18)",
      border: "rgba(255, 255, 255, 0.18)",
      input: "rgba(255, 255, 255, 0.18)",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
    fonts: {
      heading: "var(--font-space-grotesk)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  emerald: {
    name: "Emerald",
    colors: {
      background: "#0a0f0d",
      foreground: "#ffffff",
      primary: "#10b981",
      primaryForeground: "#0a0f0d",
      primaryGlow: "16, 185, 129",
      secondary: "#059669",
      secondaryForeground: "#ffffff",
      accent: "#10b981",
      accentForeground: "#0a0f0d",
      muted: "rgba(255, 255, 255, 0.05)",
      mutedForeground: "#b4b4b4",
      card: "rgba(255, 255, 255, 0.05)",
      cardForeground: "#ffffff",
      popover: "rgba(255, 255, 255, 0.05)",
      popoverForeground: "#ffffff",
      glassBg: "rgba(255, 255, 255, 0.05)",
      glassBgStrong: "rgba(255, 255, 255, 0.1)",
      glassBorder: "rgba(255, 255, 255, 0.18)",
      border: "rgba(255, 255, 255, 0.18)",
      input: "rgba(255, 255, 255, 0.18)",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
    fonts: {
      heading: "var(--font-plus-jakarta)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  rose: {
    name: "Rose",
    colors: {
      background: "#0f0a0f",
      foreground: "#ffffff",
      primary: "#f43f5e",
      primaryForeground: "#0f0a0f",
      primaryGlow: "244, 63, 94",
      secondary: "#e11d48",
      secondaryForeground: "#ffffff",
      accent: "#f43f5e",
      accentForeground: "#0f0a0f",
      muted: "rgba(255, 255, 255, 0.05)",
      mutedForeground: "#b4b4b4",
      card: "rgba(255, 255, 255, 0.05)",
      cardForeground: "#ffffff",
      popover: "rgba(255, 255, 255, 0.05)",
      popoverForeground: "#ffffff",
      glassBg: "rgba(255, 255, 255, 0.05)",
      glassBgStrong: "rgba(255, 255, 255, 0.1)",
      glassBorder: "rgba(255, 255, 255, 0.18)",
      border: "rgba(255, 255, 255, 0.18)",
      input: "rgba(255, 255, 255, 0.18)",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
    },
    fonts: {
      heading: "var(--font-space-grotesk)",
      sans: "var(--font-plus-jakarta)",
      mono: "var(--font-dm-sans)",
    },
  },
};

/** Active theme - change this to switch themes at build time */
export const activeTheme: ThemeName = "gold";
