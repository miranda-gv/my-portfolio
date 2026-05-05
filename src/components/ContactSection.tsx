import { contactData } from "@/data/contact";
import Section from "./Section";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  const { heading, subheading } = contactData;

  return (
    <Section id="contact" heading={heading} subheading={subheading} maxWidth="4xl">
      <div className="max-w-2xl mx-auto">
        <ContactForm />
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
        <div className="mt-6">
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
}
