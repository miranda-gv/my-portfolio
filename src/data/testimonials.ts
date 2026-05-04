/**
 * Testimonial Interface
 * Represents a single client/colleague testimonial
 */
export interface Testimonial {
  /** Person providing the testimonial */
  name: string;
  /** Job title and company of the person */
  title: string;
  /** Company name (optional, for display on cards) */
  company?: string;
  /** Date the testimonial was given */
  date: string;
  /** Working relationship to Miranda */
  relationship: string;
  /** Testimonial text content */
  text: string;
  /** Star rating (1-5) */
  rating: number;
}

/**
 * Testimonials Section Data
 *
 * Contains section heading and testimonial entries.
 * Used by TestimonialsSection component with pagination.
 */
export const testimonialsData = {
  heading: "TESTIMONIALS",
  subHeading: "What colleagues and clients say about working with me",
  items: [] as Testimonial[],
};

export const testimonials: Testimonial[] = (testimonialsData.items = [
  {
    name: "Alen Čapelja",
    title: "Founder at dellik | former E-Commerce SDM, SME at SmartBug Media",
    date: "July 29, 2023",
    relationship:
      "Alen was senior to Miranda but didn't manage Miranda directly",
    text: "It is my pleasure to wholeheartedly recommend Miranda for her exceptional expertise as a QA Analyst. Her skill set spans manual and automation testing, digital marketing QA, and website QA, making her an invaluable asset to any team. Miranda's technical proficiency is unmatched, and her meticulous approach to manual testing has uncovered critical defects, enhancing product quality and user experience. She has also been instrumental in implementing automated testing, optimizing efficiency and meeting tight deadlines. Apart from technical excellence, Miranda is an approachable team player who communicates effectively across departments. Her adaptability further strengthens the team dynamic. In summary, Miranda is a standout professional with a versatile skill set and a positive attitude. I highly recommend her for any QA-related role.",
    rating: 5,
  },
  {
    name: "Sarah Mead",
    title: "Associate Vice President, Client Services at SmartBug Media",
    date: "September 7, 2023",
    relationship: "Sarah worked with Miranda but on different teams",
    text: "I worked with Miranda for many years at SmartBug and was continually impressed by her dedicated to QA and process improvement. During her time, she successfully implemented and maintained the QA process across all client projects—always finding efficiencies and mitigating issues in a timeline manner. Miranda always stepped up and seized opportunities to train others across the organization on best practices in QA. Above everything, she was always a collaborative team member. She was a great communicator (notably in a remote environment,) was receptive to feedback, and knew how to develop proceses and guidelines that support the greater good of the organization. Any company would be lucky to have Miranda on their team!",
    rating: 5,
  },
  {
    name: "Jennifer Huyenh-Cho",
    title: "Senior Director, Program Management at SmartBug Media",
    date: "August 18, 2023",
    relationship:
      "Jennifer was senior to Miranda but didn't manage Miranda directly",
    text: "Miranda is an outstanding professional. I've worked with Miranda closely in both an individual contributor and leadership role. I've had the pleasure of working with Miranda on projects and seeing her expertise shine through in ensuring our end products we're always top notch. I've also had the pleasure of seeing Miranda grow and succeed a leadership role. Miranda has not only achieved excellence in her expertise but also in her leadership and management of others. Consistently Miranda seeks constructive feedback and improvements, she strives to identify new opportunities to grow herself and team. Her tenacity for improvement and reach for excellence raises the bar of all products we produced. What sets Miranda apart is not only her success and leadership skills but also her passion for people. She treats others as she'd like to be treated, she's clear and direct with feedback and pushes her team to grow. She brings passion and quality to everything she does. I'm so excited to see where Miranda takes her career, she is an asset to any organization.",
    rating: 5,
  },
  {
    name: "Jen Spencer",
    title: "Former CEO of SmartBug, HubSpot Elite Solutions Partner",
    date: "July 25, 2023",
    relationship:
      "Jen was senior to Miranda but didn't manage Miranda directly",
    text: "During her tenure at SmartBug, Miranda demonstrated remarkable expertise and dedication in implementing and maintaining the QA process across all projects. Her efforts resulted in an impressive 99.9% success rate for production, showcasing her ability to optimize efficiency and minimize QA issues. Miranda's leadership skills were evident as she established comprehensive training and onboarding programs for new QA team members, ensuring seamless project integration and knowledge transfer. Moreover, her effective collaboration with the development team allowed for proactive identification and resolution of potential issues during the development process, leading to expedited bug fixes and streamlined project timelines. Miranda's dedication, skills, and ability to inspire others make her an invaluable asset to any organization.",
    rating: 5,
  },
  {
    name: "John Suarez",
    title:
      "Director of Client Services | Revenue-Driven Marketer | AI Power User",
    date: "August 3, 2023",
    relationship: "John worked with Miranda but on different teams",
    text: "I had the pleasure of working with Miranda and I can confidently say that she is one of the most dedicated and detail-oriented professionals I've worked with. Her ability to communicate effectively, both in terms of articulating their own ideas and understanding others, is very strong. Miranda's attention to detail is also exceptional - she has an innate ability to spot the smallest inconsistencies or errors, ensuring the wider team is aware so that the final output is always of the highest quality. But what sets Miranda apart is not just her professional skills, but also her positive attitude and team spirit. She's a delight to work with - always bringing a positive energy to the team, and inspiring others with her passion and dedication. I wholeheartedly recommend Miranda for any team that values communication, attention to detail, and a positive work environment. I have no doubt that she will continue to excel in their future endeavors.",
    rating: 5,
  },
  {
    name: "Cassie Schauble",
    title: "Senior Web Content Strategist at SmartBug Media",
    date: "August 2, 2023",
    relationship: "Cassie worked with Miranda on the same team",
    text: "I worked with Miranda for more than 2 years on SmartBug Media's web production team. Miranda is meticulous in her approach to quality assurance. Her work ethic and organizational skills are top-notch and were instrumental in the success of many large web projects (some totaling 400+ pages). During her time at SmartBug, Miranda led trainings to educate the web production team about our internal quality assurance processes. Miranda is a true team player and is always willing to step in when timelines are tight. As a long-time SmartBug, Miranda is beloved by many of her colleagues for her deep knowledge of QA best practices, timely delivery, and warm, friendly personality. I'm excited to see what's next for Miranda!",
    rating: 5,
  },
  {
    name: "Tim Schwartz",
    title:
      "Digital Transformation | Business Operations | Technology Enablement",
    date: "August 2, 2023",
    relationship: "Tim managed Miranda directly",
    text: "Miranda set a high standard for QA at SmartBug Media. She has a steadfast focus on continuous improvement and that is reflected in how she has refined QA processes. Her efforts have resulted in bringing greater efficiency to the team while minimizing lost launch QA issues. She is a joy to work with and collaborates well with the development team. She is proactive and vocal in identifying and addressing issues in the development process and that regularly results in a cost savings for the organization. Most impressively, Miranda developed a comprehensive training program for new QA team members to accelerate the onboarding process. I am confident that her experience at SmartBug Media has set her up to contribute valuable insight wherever she goes.",
    rating: 5,
  },
  {
    name: "Kevin Apgar",
    title: "Senior QA Specialist at SmartBug Media",
    date: "July 31, 2023",
    relationship: "Kevin reported directly to Miranda",
    text: "Miranda is a class act. She is a very talented manual website QA specialist and manager who is very knowledgable and dedicated to keeping her team on top of new trends and technologies. She is great about turning around a quality product on time, but is also good about delegating work as necessary and making sure those to whom she delegates are working at the same level as she does. But what struck me as one of her greatest assets is that she listens to the people she works with and for. She knows that there are people who may have more knowledge of a subject than she does so she will take their experience and knowledge into consideration when making decisions. Additionally, she is a genuinely empathetic person who cares about the people she works with and especially those who report to her.",
    rating: 5,
  },
  {
    name: "Paulina Sanchez, CAPM",
    title: "Manager, Program Management at SmartBug Media",
    date: "August 21, 2023",
    relationship: "Paulina worked with Miranda on the same team",
    text: "I worked with Miranda for over 2 years. Miranda was an excellent leader and QA specialist. She was an incredible listener and had amazing attention to detail. She was always dedicated to make sure the work happened and to a very high standard. She was also always there to help lead process improvement to ensure successful projects! Can't recommend her enough!",
    rating: 5,
  },
  {
    name: "Megan Golden",
    title: "Senior Marketing Strategist at SmartBug Media",
    date: "August 10, 2023",
    relationship: "Megan worked with Miranda on the same team",
    text: "I worked with Miranda for nearly four years at SmartBug Media. I was always impressed with her attention to detail, organization skills, and her ability to meet deadlines! Even with complicated projects and quick turnaround times. Miranda was able to thoroughly QA the project or ensure the proper member of her team could. I would absolutely recommend Miranda and any team would be lucky to have her!",
    rating: 5,
  },
  {
    name: "Alejandra Melara",
    title: "Sr. Content Marketing Manager at SmartBug Media",
    date: "July 31, 2023",
    relationship: "Alejandra worked with Miranda on the same team",
    text: "Miranda is one of the most talented and dedicated QA analyst I've had the pleasure of working with. She is extremely detail-oriented and would go above and beyond her own team responsibilities to make sure nothing missed the mark on any team, not just her own. She would be an incredible asset to any company, as she is a team player, results oriented professional who cares not only for her daily duties but also for the company overarching goals.",
    rating: 5,
  },
  {
    name: "Aubreigh Blair",
    title: "VP, Client Strategy and Growth at SmartBug Media",
    date: "July 31, 2023",
    relationship: "Aubreigh worked with Miranda on the same team",
    text: "I have worked with Miranda over the last 5 years and I am constantly impressed by her work ethic and attention to detail. Miranda managed our quality assurance initiatives, and I always had full trust sending her projects to review and sign off on before they went to our clients. Miranda is punctual and always hit deadlines, often completing work before it was due—I never had to worry if a project would be completed on time.",
    rating: 5,
  },
  {
    name: "Tessa Flores",
    title: "Developer at SmartBug Media",
    date: "July 28, 2023",
    relationship: "Tessa worked with Miranda on the same team",
    text: "I have had the pleasure of working with Miranda since my very first day at SmartBug, and I can confidently say that she is the most exceptional QA specialist one could hope for. With a keen eye for detail, nothing escapes Miranda's reviews, ensuring that every project she touches is of the highest quality. Her meticulous attention to detail, excellent communication, and unwavering commitment to delivering high-quality results make her a true gem. Beyond that, her friendly, hardworking, and thoughtful nature creates a work environment that everyone is grateful to be a part of.",
    rating: 5,
  },
  {
    name: "Diana Hyland (Wahl)",
    title: "Senior Project Manager at SmartBug Media",
    date: "July 26, 2023",
    relationship: "Diana worked with Miranda on the same team",
    text: "Miranda is a great colleague to work with. She goes above and beyond with her work and is very detail oriented. She communicates often and early. Miranda is also a great manager. She is able to assess project risk and resource her team accordingly when new or urgent requests come in. Miranda is on a lot of accounts at one time and can content switch easily to make sure her work is efficiently complete. And she always hits her due dates. She is also a great team member to have. She is personable and makes work enjoyable.",
    rating: 5,
  },
  {
    name: "Heather Hiltzik, MBA",
    title: "Senior Director of Account Strategy | MBA",
    date: "July 31, 2023",
    relationship: "Heather worked with Miranda on the same team",
    text: "I worked with Miranda for nearly three years at SmartBug Media. She was always quick, efficient, responsive, and kind. I always knew I could count on her to catch and adjust the most complex web glitches. Any team would be lucky to have her!",
    rating: 5,
  },
  {
    name: "Alice Easter Kennedy",
    title: "Freelance Software and Embedded Systems Engineer",
    date: "July 30, 2023",
    relationship: "Alice worked with Miranda on the same team",
    text: "I worked with Miranda for around a year at SmartBug Media. As fellow managers of different technical teams, we worked in tandem quite often, and Miranda was never one to let me down. She was always coming up with new innovative ways to stay ahead of the curve. Her eagle eyes for QA and ability to lead her team flawlessly made any interaction with her extraordinarily productive, with a personality that made those same interactions a joy as well.",
    rating: 5,
  },
  {
    name: "Tony Strack",
    title: "Senior Web Developer at SmartBug Media",
    date: "July 26, 2023",
    relationship: "Tony worked with Miranda on the same team",
    text: "Miranda is meticulous in her quality assurance. Her keen eye for detail was of the utmost importance in ensuring a quality product was presented to our clients. We worked together on many development and QA efficiencies to streamline our processes which resulted in many time-saving measures and quality improvements. Miranda is a joy to work with. She would be a valuable asset to any company.",
    rating: 5,
  },
  {
    name: "Vivian Lumbley",
    title: "Web Development Manager",
    date: "March 30, 2022",
    relationship:
      "Vivian was senior to Miranda but didn't manage Miranda directly",
    text: "I cannot recommend Miranda more! Miranda is one of the most thorough QA specialists I have ever worked with, and her attention to details is impeccable. She adapts to the ever-changing agency world extremely well, yet stays true to her technical processes and improve upon them. She is one of those truly loves QA and her passion shows through her work. As a bonus, she is also one of the warmest persons and I love her as a colleague and as a friend! I would jump on any chance to work with Miranda!",
    rating: 5,
  },
  {
    name: "Alison Lillie",
    title: "Growth Marketing @ Seismic | Driving pipeline and revenue",
    date: "July 25, 2023",
    relationship: "Alison worked with Miranda but on different teams",
    text: "I worked with Miranda directly on client web projects for four years. She never once missed a deadline for QA and always was extremely thorough. She was the first QA hire at our company and defined what excellence looked like for that role so we could scale it out. She is also a joy to work with and always willing to help out colleagues in need.",
    rating: 5,
  },
  {
    name: "Joe Brannen",
    title: "Sr. Marketing Campaign Ops Manager at Waystar",
    date: "July 30, 2023",
    relationship: "Joe worked with Miranda but on different teams",
    text: 'Whenever I had a project assigned to Miranda, I knew I was in good hands. She is incredibly detailed and thorough and skillful in her project execution. Sometimes in my current role and when I see a web page just browsing the Internet I think "goodness, Miranda would never have let this page slide." Any organization would do well to have her onboard.',
    rating: 5,
  },
  {
    name: "Brooke Tomasetti",
    title: "Personal Finance Coach & Educator",
    date: "July 31, 2023",
    relationship: "Brooke worked with Miranda on the same team",
    text: "I had the pleasure of working with Miranda at SmartBug Media, and she's an exceptionally detail-oriented QA Analyst. Her dedication to ensuring top-notch digital marketing QA and website testing was evident in every project. With her strong attention to detail and proactive approach, Miranda consistently delivered as a valuable asset to the team.",
    rating: 5,
  },
  {
    name: "Stephen Lackey",
    title: "VP of Marketing @ SmartBug Media",
    date: "July 30, 2023",
    relationship: "Stephen worked with Miranda on the same team",
    text: "Miranda is a fantastic team member. She is thorough and timely with her QA activities. On top of that, she is a joy to work with. Always look forward to cross-departmental work with Miranda.",
    rating: 5,
  },
  {
    name: "Drew Cohen",
    title: "Revenue Operations Leader | CRM Strategy",
    date: "July 29, 2023",
    relationship: "Drew worked with Miranda on the same team",
    text: "Miranda was always a pleasure to work with. She brought a fantastic mentality to every project, and she consistently drove great results for clients. I'd undoubtedly recommend Miranda!",
    rating: 5,
  },
  {
    name: "Brittany Fleck",
    title: "Sr. Account Specialist, SmartBug Media",
    date: "July 26, 2023",
    relationship: "Brittany worked with Miranda but on different teams",
    text: "I had the privilege of working with Miranda over the last 4 years during my time at SmartBug Media and I highly recommend her as an outstanding QA professional. She always had a positive attitude and her meticulous approach to testing, technical skills, and ability to identify critical issues have played a crucial role in the success of our projects. Her dedication to continuous improvement and passion for quality assurance make them an asset to any team. I am certain that Miranda will continue to excel and make a significant contribution in any QA role she undertakes.",
    rating: 5,
  },
  {
    name: "Kyle James",
    title: "Problem Solver through Building Product",
    date: "December 14, 2020",
    relationship: "Kyle managed Miranda directly",
    text: "I had the pleasure of working with Miranda to QA and review well over 50+ website redesigns that I project managed and launched. Her attention to detail and ability to find and point out all the issues was something that I came to rely on without needing to think or worry that it would get done. Miranda had it! She's a great team player and someone that I would highly recommend.",
    rating: 5,
  },
  {
    name: "Charly Mostert",
    title: "Inbound Marketing Leader | CRM Surgeon",
    date: "July 31, 2023",
    relationship: "Charly worked with Miranda on the same team",
    text: "I had the privilege of working with Miranda for nearly five years, and she's one of the most detail-oriented testers I've ever met. I can't count the times that Miranda has pulled through on a client rush request and delivered exceptional results. She is amazing to work with, and any team would be lucky to have Miranda.",
    rating: 5,
  },
  {
    name: "Brent Worley",
    title: "Technical Leader | Software Development Manager",
    date: "July 30, 2023",
    relationship:
      "Brent was senior to Miranda but didn't manage Miranda directly",
    text: "Miranda is a thorough, meticulous Quality Assurance guru. She led her team to focus on accurate projects reaching the hands of our clients.",
    rating: 5,
  },
  {
    name: "Ali Orlando Wert",
    title: "Content Marketing Strategist & Speaker",
    date: "July 29, 2023",
    relationship:
      "Ali was senior to Miranda but didn't manage Miranda directly",
    text: "Miranda is an amazingly detailed QA manager - I was always happy when Miranda was on a project, because I knew she would make sure everything was done carefully and correctly. She is also a great teammate and pleasure to work with. I would highly recommend Miranda!",
    rating: 5,
  },
  {
    name: "Bret Morin",
    title: "Tech & Business Leader | PMP | 15+ Years",
    date: "May 11, 2023",
    relationship: "Bret managed Miranda directly",
    text: "Miranda was an excellent part of our team. She demonstrates great leadership capabilities and is an expert within her QA background. Any team would be lucky to have her.",
    rating: 5,
  },
  {
    name: "Evan Futterman",
    title: "Technophile with a strong interest in finance",
    date: "April 5, 2021",
    relationship: "Evan managed Miranda directly",
    text: "I worked with Miranda for over 3 years, and she is excellent to work with. She has been able to work in environments often with ambiguity and able to produce quality work consistently. Miranda is a great QA analyst and always has constructive feedback for how to improve processes.",
    rating: 5,
  },
  {
    name: "Aaron Riddle",
    title: "Project Manager",
    date: "December 22, 2020",
    relationship:
      "Aaron was senior to Miranda but didn't manage Miranda directly",
    text: "Working with Miranda over a span of almost 5 years, there was never a challenge or timeline that she wasn't able to complete. Her willingness to keep up with web development best practices, browsers and their associated support windows and her attention to detail made her a valuable asset to the web team at SmartBug.",
    rating: 5,
  },
  {
    name: "Annapoorani Sivakumar",
    title: "Quality Engineer at Service Now",
    date: "March 3, 2016",
    relationship:
      "Miranda was senior to Annapoorani but didn't manage directly",
    text: "Miranda is a very dedicated and knowledgeable professional. She has proven to be highly reliable, easy to work with, and very organized. We worked at Orbitz, she was my onsite lead, I would recommend her as one of the top QA engineers I have worked with.",
    rating: 5,
  },
  {
    name: "Balasubramanya Bhat",
    title: "Senior QA Manager",
    date: "April 27, 2015",
    relationship: "Balasubramanya worked with Miranda but on different teams",
    text: "Excellent communication skills, sound QA concepts, and a great Resource to work with. She will be an asset to any team working on large QA engagements.",
    rating: 5,
  },
  {
    name: "Jagdish Nerva",
    title: "Deliver Innovation and Continuous Improvement",
    date: "April 4, 2010",
    relationship: "Jagdish managed Miranda directly",
    text: "Miranda is a very dedicated and hard working individual. Her ability to get the job done with quality and on time makes her more dependable. She has good interpersonal skills and works with the team at all times. Wish her good luck for all future endeavours.",
    rating: 5,
  },
  {
    name: "Sujith John Kuriakose",
    title: "Senior Director",
    date: "August 25, 2009",
    relationship:
      "Sujith John was senior to Miranda but didn't manage Miranda directly",
    text: "Miranda has a great personality and winning attitude which allows her to establish deep rooted relationships with her collegues and business partners. She is an extremely dedicated professional who always puts in the extra effort required to find answers and resolve issues. She learns very quickly and is able to take on new tasks with a minimum of startup time. She is always available to assist in any situation. She is a true asset to anyone who works with her.",
    rating: 5,
  },
  {
    name: "Balaji Nagarajan",
    title: "Digital Consulting Manager @ Huron Consulting Group",
    date: "January 1, 2009",
    relationship: "Balaji worked with Miranda but on different teams",
    text: "I have known Miranda for close to 5 years now and we have worked together, she is one of the most dedicated and hard working people i have seen. Her yearning to achieve perfection in what she does always made her an outstanding performer. Along with good professional and technical skills she is very efficient in her soft skills too, both written and verbal. Her subtle and soft communication was always accompanied by the beautiful voice she has which makes her approachable and communicative. All in all she is an asset to the profession.",
    rating: 5,
  },
  {
    name: "Rob Ticho",
    title: "Marketing Operations Specialist at White Cup",
    date: "July 31, 2023",
    relationship: "Rob worked with Miranda on the same team",
    text: "Miranda is fantastic in QA and testing. She is reliable and a pleasure to work with!",
    rating: 5,
  },
]);
