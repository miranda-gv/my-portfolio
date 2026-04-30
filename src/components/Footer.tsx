import { footerData } from "@/data/footer";

/**
 * Footer - Server Component
 *
 * Simple footer with:
 * - Dynamic copyright year calculation
 * - Configurable copyright text from footer data
 * - Subtle top border for visual separation
 *
 * @returns Footer with copyright information
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-background border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © {year}. {footerData.copyright.text}.
        </p>
      </div>
    </footer>
  );
}
