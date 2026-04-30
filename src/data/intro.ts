/**
 * About Section Data
 *
 * Contains biographical information and highlights.
 * Used by AboutSection component to display personal introduction.
 */
export const introData = {
  heading: "ABOUT ME",  
  highlights: [
    { icon: '✓', title: 'Quality First', desc: 'Committed to delivering flawless software through rigorous testing' },
    { icon: '⚡', title: 'Automation Expert', desc: 'Building robust test frameworks that save time and improve reliability' },
    { icon: '👥', title: 'Team Player', desc: 'Collaborating with developers to build better products together' },
  ],
  paragraphs: [
    "Senior SDET & Automation Architect with 15+ years of experience engineering scalable quality ecosystems and high-performance developer tools. I bridge the gap between QA and Engineering by combining deep automation expertise with a full-stack development background in TypeScript and Next.js.",
    "I specialize in architecting modern Playwright frameworks and building custom web applications and portfolios that streamline the SDLC. By leveraging a \"Shift-Left\" philosophy across Agile and DevOps environments, I drive a 99.9% production success rate. My expertise spans healthcare, logistics, and eCommerce, focusing on robust API validation, CI/CD integration, and delivering flawless, user-centric product launches."
  ],
} as const;
