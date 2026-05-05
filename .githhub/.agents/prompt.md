make sure code is dry, modular, ideomatic , futuristic.
Remove unused code etc if the strategy changes.

I want to rebrand myselft as an sr, SDET and a web developer.

Before everything else, I want to copy current homepage as it is in a different endpoint as a single page portfolio. say /resume

Then Refactor Homepage as a page linking most sections to their own new pages. header should have all these new pages included.

Make sure code is dry, modular, ideomatic , futuristic, no dead code or config
I want the following (new/modify) secions on homepage that links out to their own pages for detailed information.

look at these figma design files for new section reference - FigmaReference/src

- Services section
  - Overview section on homepage, that links to a services page with the following in detaill
  - QA services - Automation framework development in playwright, typescript, CI/CD implemetation
  - Static webpage development using javascipt, React/Next.js
  - Full stack web app develpment using React/Next.js

- Experience section
  - Only show the top most experience in the overview section
  - view more link should show all experience on homepage
  - Add 'View all Experience' link below to linkout to a new Experience page where all experiences are listed like how it is now on the homepage.

- Portfolio section
  - Should have theme aware filter below H2,
  - Add this website as an example and there is another web app that I am working on and any other future projects.
  - Give overview of both projects in seperate cards
  - View Full Portfolio link out to the new portfolio page to list everything in detail

- Testimonial section
  - Add a 'View all testimonails' button below, linking out to the main Testimonial page
  - Show all the testimonials in Testimonial page, left and right aligned, full width testimonials with 1rem font size
  - Testimonial page should have a modal for users to add testimonials to the page
  - Clicking on 'Add Testimonial' button opens Testimonial modal.
  - Modal should have the following inputs
    - Star selection - 5 star borders, user can click on a star, if they click on 5th, I get 5 stars.
    - Name
    - Title
    - Company
  - Should show Title, Company on he card like existing once added.
  - Need an admin module for me to moderate Testimonials, only on approval, they should show

- Blog Section
  - Each blog should create its own page
  - Everything should be content driven like now.
  - Blog page should host blog posts
  - homepage to show 3 blog posts, linkout to blog page to read more

- Currently there are already data files for each section. can we add use the same file for new pages?

- Terms and Policy Pages - Add simple Terms and policy pages linked from global footer.
