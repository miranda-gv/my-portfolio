import Section from "@/components/Section";

/**
 * Terms & Conditions Page - Server Component
 *
 * Simple terms page with standard legal sections.
 * Linked from global footer.
 */
export default function TermsPage() {
  return (
    <Section id="terms" heading="TERMS & CONDITIONS" maxWidth="4xl">
      <div className="glass-card p-8 md:p-12 space-y-8 text-muted-foreground text-sm leading-relaxed">
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using this website (mirandageorge.us), you accept and agree to be bound by the terms and provision of this agreement.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">3. Disclaimer</h2>
          <p>The materials on this website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">4. Limitations</h2>
          <p>In no event shall Miranda George or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">5. Contact Information</h2>
          <p>For any questions regarding these Terms & Conditions, please contact us through the contact form on this website.</p>
        </div>
        <p className="text-xs text-muted-foreground/60 pt-4 border-t border-white/10">Last updated: January 1, 2026</p>
      </div>
    </Section>
  );
}
