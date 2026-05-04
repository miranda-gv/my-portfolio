import { contactData } from "@/data/contact";
import Section from "./Section";
import GlassCard from "./ui/GlassCard";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  const { heading, subheading, formHeading } = contactData;

  return (
    <Section id="contact" heading={heading} subheading={subheading} maxWidth="4xl">
      <GlassCard variant="base" className="p-6 md:p-8 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-lg mb-4 text-primary">
              {formHeading}
            </h3>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </GlassCard>
    </Section>
  );
}
