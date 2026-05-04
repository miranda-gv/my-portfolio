/**
 * Contact Section Data
 *
 * Contains contact information and section text.
 * Email and phone are obfuscated to prevent scraping/spam.
 * Used by ContactSection component to display contact methods.
 * Social links imported from social-links.ts to avoid duplication.
 */
export const contactData = {
  heading: "GET IN TOUCH",
  subheading: "Feel free to reach out for opportunities or collaborations",
  formHeading: "SEND MESSAGE",
  sendButtonLabel: "SEND MESSAGE",
  email: {
    user: "miranda.wqa",
    domain: "gmail.com",
  },
  phone: {
    parts: ["484", "306", "3944"],
  },
  location: "Breinigsville, PA 18031",
} as const;

/**
 * Reconstruct email from obfuscated parts
 */
export const getEmail = (): string => {
  return `${contactData.email.user}@${contactData.email.domain}`;
};

/**
 * Reconstruct phone from obfuscated parts
 */
export const getPhone = (): string => {
  return contactData.phone.parts.join("-");
};
