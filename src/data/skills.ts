/**
 * Skill Category Interface
 * Represents a category with multiple skill items
 */
export interface SkillCategory {
  /** Category name (e.g., "End to End Testing", "Automation") */
  category: string;
  /** Array of skill items in this category */
  items: string[];
}

/**
 * Skills Section Data
 *
 * Contains section heading and categorized skill entries.
 * Used by SkillsSection component to display grouped skills.
 */
export const skillsData = {
  heading: "SKILLS & EXPERTISE",
  categories: [
    {
      category: "End to End Testing",
      items: [
        "UI/UX Design",
        "Cross-browser Compatibility",
        "Functional Testing",
        "Accessibility Testing",
        "SEO Testing",
        "Regression Testing",
        "Exploratory Testing",
        "UAT",
      ],
    },
    {
      category: "Automation",
      items: [
        "Playwright",
        "Selenium WebDriver",
        "Cypress.io",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "Page Object Model",
        "GitHub Actions",
      ],
    },
    {
      category: "Development",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Accessibility",
      items: [
        "WCAG",
        "ADA",
        "Section 508",
        "VoiceOver",
        "JAWS",
        "ZoomText",
        "Lighthouse",
        "Axe Dev Tools",
        "WAVE",
      ],
    },
    {
      category: "Test Management",
      items: [
        "Jira",
        "Zephyr",
        "TestRail",
        "Xray",
        "Azure DevOps",
        "Monday.com",
        "ClickUp",
      ],
    },
    {
      category: "API & Performance",
      items: ["Postman", "REST API", "JMeter", "SQL", "Oracle"],
    },
    {
      category: "CMS Platforms",
      items: [
        "Drupal 9/10",
        "WordPress",
        "HubSpot",
        "Shopify",
        "Squarespace",
        "SharePoint",
        "Adobe Marketo Engage",
      ],
    },
    {
      category: "Methodologies",
      items: ["Agile-Scrum", "Kanban", "V-Model", "Waterfall", "CI/CD"],
    },
  ] as SkillCategory[],
};

export const skills = skillsData.categories;
