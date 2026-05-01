import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

/**
 * Google Fonts configuration for the portfolio
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

/** Primary heading font - used for headings and display text */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

/** Secondary body font - used for UI elements and smaller text */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

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
    <html lang="en" suppressHydrationWarning className={`h-full antialiased ${spaceGrotesk.variable} ${plusJakarta.variable} ${dmSans.variable}`}>
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
      </body>
    </html>
  );
}