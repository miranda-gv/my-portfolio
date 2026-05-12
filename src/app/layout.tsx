import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, DM_Sans, Playfair_Display, Syne, Outfit, Urbanist, Cormorant_Garamond, Bebas_Neue, Archivo, Sora, Work_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { themes, activeTheme } from "@/config/themes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair-display",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
});

/** Generate CSS custom properties from active theme */
const theme = themes[activeTheme];
const themeStyles = {
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
} as React.CSSProperties;

/**
 * Root layout metadata configuration
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "QA Engineer",
    "SDET",
    "Playwright",
    "Next.js",
    "TypeScript",
    "Test Automation",
    "Miranda George",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

/**
 * Root Layout - Server Component
 *
 * Wraps all pages with consistent HTML structure, fonts, and global styles.
 * This is a Next.js Server Component that doesn't send JavaScript to the client.
 *
 * @param props - Component props
 * @param props.children - Child routes rendered by the Next.js App Router
 * @returns The root HTML structure with fonts, navbar, main content, and footer
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`h-full antialiased ${spaceGrotesk.variable} ${plusJakarta.variable} ${dmSans.variable} ${playfairDisplay.variable} ${syne.variable} ${outfit.variable} ${urbanist.variable} ${cormorantGaramond.variable} ${bebasNeue.variable} ${archivo.variable} ${sora.variable} ${workSans.variable}`} style={themeStyles}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <GoogleAnalytics />
        <StructuredData />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:rounded-lg" tabIndex={0}>
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}