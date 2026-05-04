/**
 * Theme Configuration
 *
 * Defines the active theme for the portfolio.
 * Each theme specifies colors, fonts, and design tokens.
 *
 * Usage:
 * - Build-time: Set `activeTheme` below and update layout.tsx
 */

export type ThemeName = "gold";

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
    name: "Gold",
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
};

/** Active theme - change this to switch themes at build time */
export const activeTheme: ThemeName = "gold";
