import Link from "next/link";
import { footerData } from "@/data/footer";

/**
 * Footer - Server Component
 *
 * Simple footer with:
 * - Dynamic copyright year calculation
 * - Configurable copyright text from footer data
 * - Terms & Privacy policy links
 * - Subtle top border for visual separation
 *
 * @returns Footer with copyright and legal links
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-background border-t border-white/10">
       <div className="container mx-auto px-4 text-center space-y-3">
         <p className="text-muted-foreground text-sm">
           © {year}. {footerData.copyright.lines[0]}
         </p>
         <p className="text-muted-foreground text-sm">
           {footerData.copyright.lines[1]}
         </p>
         <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground/60">
           <Link href="/terms" className="hover:text-primary transition-colors">
             Terms & Conditions
           </Link>
           <span>·</span>
           <Link href="/privacy" className="hover:text-primary transition-colors">
             Privacy Policy
           </Link>
         </div>
       </div>
    </footer>
  );
}
