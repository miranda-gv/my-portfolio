/**
 * Experience Interface
 * Represents a single work experience entry
 */
export interface Experience {
  /** Company or organization name */
  company: string;
  /** Job title held at the company */
  title: string;
  /** Employment dates (e.g., "2015 - Present") */
  dates: string;
  /** Work location (city, state or "Remote") */
  location: string;
  /** List of key responsibilities and achievements */
  responsibilities: string[];
}

/**
 * Experience Section Data
 *
 * Contains section heading and work history entries.
 * Used by ExperienceSection and ExperienceItem components.
 */
export const experienceData = {
  heading: "EXPERIENCE",
  items: [
    {
      company: "SmartBug Media",
      title: "Sr. QA Specialist",
      dates: "2015 - Present",
      location: "Remote",
      responsibilities: [
        "Led end-to-end QA process for manual and automation, building and mentoring the QA team on best practices",
        "Conducted thorough testing of websites and web/cloud applications for design UI/UX, content, SEO, functionality, regression, exploratory, responsiveness, usability, performance, Section 508, and accessibility",
        "Leveraged automated testing tools such as Selenium and Playwright to enhance testing efficiency for regression tests",
        "Implemented CI/CD process using GitHub Actions on several projects",
        "Implemented effective defect management, test reporting, root cause analysis, and closure activities",
      ],
    },
    {
      company: "Synchronoss Technologies",
      title: "QA Analyst",
      dates: "Mar 2015 - Jul 2015",
      location: "Bridgewater, NJ",
      responsibilities: [
        "Led comprehensive functional and regression QA efforts for a high-profile mobile cloud application on Android and iOS",
        "Conducted test design, execution, and reporting with a focus on detail, efficiency, and accuracy",
        "Collaborated closely with developers to identify and resolve defects promptly",
        "Contributed to root cause analysis (RCA) and process improvement initiatives",
      ],
    },
    {
      company: "Chubb & Sons Insurance",
      title: "Sr. QA Analyst",
      dates: "2008 - 2010",
      location: "Warren, NJ",
      responsibilities: [
        "Demonstrated expertise in requirement analysis, test design, and creating comprehensive test plans for personal property insurance application",
        "Executed meticulous functional and regression testing of both new features and existing test cases",
        "Conducted Mainframe Database testing, ensuring seamless integration and reliability",
        "Took charge of end-to-end testing including Client server application, UNIX database, and users' website accounts",
      ],
    },
    {
      company: "Cognizant Technology Solutions",
      title: "QA Analyst",
      dates: "2004 - 2008",
      location: "India & US",
      responsibilities: [
        "Prepared comprehensive Test plans, Test cases and test scripts based on design documents and business requirements",
        "Conducted meticulous Functional and Regression Testing of new and existing features",
        "Successfully led, trained, and mentored a dynamic 12 member QA team",
        "Provided invaluable UAT support facilitating successful product launches",
        "Spearheaded Automation Test script creation and Framework development utilizing QTP, Silk Test and Rational Robot",
      ],
    },
  ] as Experience[],
};

export const experience = experienceData.items;
