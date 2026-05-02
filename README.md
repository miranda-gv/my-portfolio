# Miranda George Portfolio

A modern, high-performance portfolio built with Next.js 16, showcasing 15+ years of SDET expertise and custom Next.js tool development.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router, Turbopack)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4 with glassmorphism design
- **Animations**: Framer Motion 12
- **Fonts**: Next.js Google Fonts (Space Grotesk, Plus Jakarta Sans, DM Sans)
- **UI Primitives**: Radix UI, Base UI, Class Variance Authority
- **PDF Generation**: jsPDF (CV download feature)
- **Email Service**: Resend (contact form API)
- **Testing**: Playwright (SDET expertise)

## Architecture

This portfolio follows a **modular, config-driven** architecture:

```
src/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   ├── generate-cv/    # PDF CV generation endpoint
│   └── contact/        # Contact form email endpoint (Resend)
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home page (composes sections)
│   ├── loading.tsx        # Loading UI
│   └── error.tsx          # Error UI
├── components/
│   ├── ui/                # Reusable UI primitives (Button, Card, GlassCard, etc.)
│   ├── Section.tsx         # Reusable section wrapper
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Landing section with headshot
│   ├── AboutSection.tsx    # Bio with highlights
│   ├── ExperienceSection.tsx # Timeline layout
│   ├── SkillsSection.tsx   # Grouped skills with animations
│   ├── ClientsSection.tsx  # Logo grid
│   ├── TestimonialsSection.tsx # Carousel with pagination
│   ├── ContactSection.tsx  # Form + contact methods
│   ├── ContactForm.tsx    # Compact form (API submission via Resend)
│   ├── SocialLinks.tsx    # Social media links
│   └── ...
├── data/                  # Config-driven content (SSG)
│   ├── hero.ts             # Personal branding
│   ├── intro.ts            # About section content
│   ├── experience.ts       # Work history + interface
│   ├── skills.ts           # Skills + interface
│   ├── clients.ts          # Client logos + interface
│   ├── testimonials.ts     # Testimonials + interface
│   ├── contact.ts          # Contact info (obfuscated for spam protection)
│   ├── navigation.ts       # Nav links
│   └── social-links.ts    # Social media URLs (single source of truth)
├── config/                # Configuration files
│   ├── site.ts            # Site metadata
│   └── testimonials.ts    # Testimonial display config
├── constants/             # Constants
│   ├── glass.ts           # Glassmorphism CSS classes
│   └── animations.ts     # Framer Motion variants + typography
└── lib/
    └── utils.ts           # Utility functions (cn())
```

## Design System

**Theme**: Modern Glassmorphism

- Translucent cards with `backdrop-blur-md` and white/20 borders
- Primary accent: Metallic Gold (`#C5A059`)
- Dark/neutral backgrounds for contrast
- Fluid, organic "liquid" shapes with soft motion

**Typography** (modular/swappable):

- **Space Grotesk**: Headings (via `--font-space-grotesk`)
- **Plus Jakarta Sans**: Secondary text (via `--font-plus-jakarta`)
- **DM Sans**: Body text (via `--font-dm-sans`)

## Key Features

- **Config-Driven Content**: All content managed via `src/data/` files
- **Spam Protection**: Email/phone obfuscated in source, reconstructed client-side
- **CV Download**: Generates PDF with jsPDF via API route
- **Responsive Design**: Mobile-first with progressive enhancement
- **Animations**: Framer Motion fade-in, scroll-triggered effects
- **Contact Form**: Sends email via Resend API with form data
- **Interactive Elements**: Clickable email (mailto:), phone (tel:), location (Google Maps)
- **Social Links**: LinkedIn & Facebook with glass effect
- **Comprehensive Comments**: Next.js idiomatic JSDoc/TSDoc on all 28+ files

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3010](http://localhost:3010) with your browser to see the result.

## Build

```bash
npm run build
```

## Code Quality

- **TypeScript Strict Mode**: Enabled
- **ESLint**: Next.js core-web-vitals + TypeScript config
- **Comments**: JSDoc/TSDoc on all components, interfaces, and complex logic
- **DRY**: Centralized data sources (no duplication)
- **Modular**: UI primitives separated from composite components

## About the Developer

**Miranda George** - Sr. Software Engineer in Test | QA Automation Engineer

- 15+ years building QA automation ecosystems
- SDET with full-stack development background
- Specializes in Playwright, Next.js, TypeScript
- Creates custom web tools that bridge Dev & QA

## License

MIT

---

Built with Next.js 16 + Tailwind CSS v4 + Framer Motion
