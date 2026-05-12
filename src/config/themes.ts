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

export type ThemeName = "gold" | "blue" | "rose" | "teal" | "cyan" | "coral" | "purple" | "fuchsia" | "indigo" | "amber" | "sky" | "violet" | "lime" | "storm";

interface ThemeDefinition {
  /** Theme display name */
  name: string;
  /** Color tokens */
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    primaryGlow: string;
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
    heading: string;
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

  blue: {
    name: "Blue",
    colors: {
      background: "#0a0f14",
      foreground: "#ffffff",
      primary: "#3b82f6",
      primaryForeground: "#0a0f14",
      primaryGlow: "59, 130, 246",
      secondary: "#2563eb",
      secondaryForeground: "#ffffff",
      accent: "#3b82f6",
      accentForeground: "#0a0f14",
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
      heading: "var(--font-sora)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  rose: {
    name: "Rose",
    colors: {
      background: "#0f0a0f",
      foreground: "#ffffff",
      primary: "#B76E79",
      primaryForeground: "#0f0a0f",
      primaryGlow: "183, 110, 121",
      secondary: "#E8B4A2",
      secondaryForeground: "#0f0a0f",
      accent: "#B76E79",
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
      heading: "var(--font-cormorant-garamond)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  teal: {
    name: "Teal",
    colors: {
      background: "#0a0f0f",
      foreground: "#ffffff",
      primary: "#14b8a6",
      primaryForeground: "#0a0f0f",
      primaryGlow: "20, 184, 166",
      secondary: "#0d9488",
      secondaryForeground: "#ffffff",
      accent: "#14b8a6",
      accentForeground: "#0a0f0f",
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
      heading: "var(--font-outfit)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  cyan: {
    name: "Cyan",
    colors: {
      background: "#0a0f12",
      foreground: "#ffffff",
      primary: "#06b6d4",
      primaryForeground: "#0a0f12",
      primaryGlow: "6, 182, 212",
      secondary: "#0891b2",
      secondaryForeground: "#ffffff",
      accent: "#06b6d4",
      accentForeground: "#0a0f12",
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
      heading: "var(--font-urbanist)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  coral: {
    name: "Coral",
    colors: {
      background: "#0f0a0a",
      foreground: "#ffffff",
      primary: "#f472b6",
      primaryForeground: "#0f0a0a",
      primaryGlow: "244, 114, 182",
      secondary: "#db2777",
      secondaryForeground: "#ffffff",
      accent: "#f472b6",
      accentForeground: "#0f0a0a",
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
      heading: "var(--font-playfair-display)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  purple: {
    name: "Purple",
    colors: {
      background: "#0f0a14",
      foreground: "#ffffff",
      primary: "#a855f7",
      primaryForeground: "#0f0a14",
      primaryGlow: "168, 85, 247",
      secondary: "#9333ea",
      secondaryForeground: "#ffffff",
      accent: "#a855f7",
      accentForeground: "#0f0a14",
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
      heading: "var(--font-syne)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  fuchsia: {
    name: "Fuchsia",
    colors: {
      background: "#0f0a12",
      foreground: "#ffffff",
      primary: "#ec4899",
      primaryForeground: "#0f0a12",
      primaryGlow: "236, 72, 153",
      secondary: "#db2777",
      secondaryForeground: "#ffffff",
      accent: "#ec4899",
      accentForeground: "#0f0a12",
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
      heading: "var(--font-bebas-neue)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  indigo: {
    name: "Indigo",
    colors: {
      background: "#0a0a14",
      foreground: "#ffffff",
      primary: "#6366f1",
      primaryForeground: "#0a0a14",
      primaryGlow: "99, 102, 241",
      secondary: "#4f46e5",
      secondaryForeground: "#ffffff",
      accent: "#6366f1",
      accentForeground: "#0a0a14",
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
      heading: "var(--font-archivo)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  amber: {
    name: "Amber",
    colors: {
      background: "#0f0a0a",
      foreground: "#ffffff",
      primary: "#f59e0b",
      primaryForeground: "#0f0a0a",
      primaryGlow: "245, 158, 11",
      secondary: "#d97706",
      secondaryForeground: "#ffffff",
      accent: "#f59e0b",
      accentForeground: "#0f0a0a",
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
      heading: "var(--font-cormorant-garamond)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  sky: {
    name: "Sky",
    colors: {
      background: "#0a0f14",
      foreground: "#ffffff",
      primary: "#0ea5e9",
      primaryForeground: "#0a0f14",
      primaryGlow: "14, 165, 233",
      secondary: "#0284c7",
      secondaryForeground: "#ffffff",
      accent: "#0ea5e9",
      accentForeground: "#0a0f14",
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
      heading: "var(--font-work-sans)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  violet: {
    name: "Violet",
    colors: {
      background: "#0f0a14",
      foreground: "#ffffff",
      primary: "#8b5cf6",
      primaryForeground: "#0f0a14",
      primaryGlow: "139, 92, 246",
      secondary: "#7c3aed",
      secondaryForeground: "#ffffff",
      accent: "#8b5cf6",
      accentForeground: "#0f0a14",
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
      heading: "var(--font-syne)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  lime: {
    name: "Lime",
    colors: {
      background: "#0a0f0a",
      foreground: "#ffffff",
      primary: "#84cc16",
      primaryForeground: "#0a0f0a",
      primaryGlow: "132, 204, 22",
      secondary: "#65a30d",
      secondaryForeground: "#ffffff",
      accent: "#84cc16",
      accentForeground: "#0a0f0a",
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
      heading: "var(--font-outfit)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },

  storm: {
    name: "Storm",
    colors: {
      background: "#0a0f14",
      foreground: "#ffffff",
      primary: "#94a3b8",
      primaryForeground: "#0a0f14",
      primaryGlow: "148, 163, 184",
      secondary: "#64748b",
      secondaryForeground: "#ffffff",
      accent: "#94a3b8",
      accentForeground: "#0a0f14",
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
      heading: "var(--font-urbanist)",
      sans: "var(--font-dm-sans)",
      mono: "var(--font-dm-sans)",
    },
  },
};

/** Active theme - change this to switch themes at build time */
export const activeTheme: ThemeName = "gold";
