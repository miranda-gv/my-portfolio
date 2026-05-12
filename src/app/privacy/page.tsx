import Section from "@/components/ui/Section";

/**
 * Privacy Policy Page - Server Component
 *
 * Simple privacy policy page with standard sections.
 * Linked from global footer.
 */
export default function PrivacyPage() {
  return (
    <Section id="privacy" heading="PRIVACY POLICY" headingMargin="lg" maxWidth="4xl">
      <div className="glass-card p-8 md:p-12 space-y-8 text-muted-foreground text-sm leading-relaxed">
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">1. Information Collection</h2>
          <p>This website does not collect personal information automatically. Information is only collected when you voluntarily submit it through the contact form, including your name, email address, and message content.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">2. Use of Information</h2>
          <p>Any information you provide via the contact form is used solely to respond to your inquiry. We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">3. Cookies & Analytics</h2>
          <p>This website may use cookies for analytics purposes via Google Analytics. These cookies help us understand how visitors engage with the site. You can disable cookies through your browser settings.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">4. Data Security</h2>
          <p>We implement appropriate security measures to maintain the safety of your personal information. All contact form submissions are transmitted via secure HTTPS protocol.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">5. Third-Party Links</h2>
          <p>This website may contain links to third-party sites (LinkedIn, GitHub, etc.). We are not responsible for the privacy practices or content of such external sites.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl text-foreground mb-3">6. Contact Information</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact us through the contact form on this website.</p>
        </div>
        <p className="text-xs text-muted-foreground/60 pt-4 border-t border-white/10">Last updated: May 1, 2026</p>
      </div>
    </Section>
  );
}
