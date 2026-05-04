import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

/**
 * Contact Page - Server Component
 *
 * Full contact page with:
 * - Large contact form spanning full width
 * - Contact information (email, social links) below form
 */
export default function ContactPage() {
  return (
    <Section id="contact" heading="CONTACT" maxWidth="4xl">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-heading text-3xl text-foreground mb-4 text-center">Get In Touch</h3>
        <p className="text-muted-foreground mb-10 text-center">
          Have a project in mind or want to discuss opportunities? Feel free to reach out.
        </p>
        <ContactForm />
        <div className="mt-12 pt-8 border-t border-white/10">
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
}
