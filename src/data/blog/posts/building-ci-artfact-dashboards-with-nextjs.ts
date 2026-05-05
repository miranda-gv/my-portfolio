import type { BlogPostContent } from "../types";

export const buildingQADashboardsPost: BlogPostContent = {
  intro:
    "Testing is hard. Sharing test results shouldn't be. Here's how I built DashWright to turn Playwright test artifacts into beautiful, interactive dashboards that stakeholders actually want to look at.",
  sections: [
    {
      heading: "The Problem: Test Reports That Nobody Reads",
      content: `We've all been there. Your Playwright tests run in CI, generate HTML reports, and then... nothing.

Those reports sit in your pipeline artifacts, hidden behind authentication, impossible to share with product managers or executives.

The options were:
- Screenshot everything (boring, static)
- Share CI links (requires auth, confusing)
- Build custom reporters (time-consuming)

I wanted something better: **instant, shareable dashboards** that look great and work for everyone.`,
      images: [
        {
          src: "/blog/dashwright/dashwright-problem1.png",
          alt: "Screenshot showing Scattered Workflows",
        },
        {
          src: "/blog/dashwright/dashwright-problem2.png",
          alt: "Screenshot showing Buried CI artifacts",
        },
      ],
    },
    {
      heading: "Enter DashWright: The Solution",
      content: `DashWright is a Next.js app that transforms Playwright test artifacts into interactive dashboards. Here's what makes it special:

- **One-click import** from GitHub Actions, Azure DevOps, or GitLab CI
- **7+ design themes** from corporate to cyberpunk (because why should dashboards be boring?)
- **Ephemeral preview links** you can share instantly
- **Zero-setup visualization** - just point it at your artifacts

Built for QA teams who want to communicate test results effectively.`,
      images: [
        {
          src: "/blog/dashwright/dashwright-dashboard1.png",
          alt: "DashWright dashboard showing colorful test results visualization",
        },
      ],
    },
    {
      heading: "How It Works: The Architecture",
      content: `The magic happens in three steps:

### 1. Fetch Artifacts from CI
Using Octokit for GitHub, we grab the HTML report ZIP from your workflow run. No downloads to disk - everything streams.

### 2. Stream Process the ZIP
Here's the cool part - we don't load the entire ZIP into memory. Using \`unzipper\` with streaming, we process files entry-by-entry:

### 3. Generate the Dashboard
Apply your chosen design theme, inject the test data, and boom - instant dashboard.`,
      images: [
        {
          src: "/blog/dashwright/dashwright-architecture.svg",
          alt: "Architecture diagram showing CI → DashWright → Dashboard flow",
        },
      ],
    },
    {
      heading: "Key Technical Decisions",
      content: `Building this taught me a few things:

**Stream Processing is Non-Negotiable**
When you're processing 50MB+ artifacts on a free-tier Render instance (512MB RAM), you can't buffer everything. Streaming keeps memory usage predictable.

**ZIP Bomb Protection Matters**
Always validate uncompressed sizes before extraction. I learned this the hard way when someone uploaded a 200MB ZIP that expanded to 2GB.

**Ephemeral Storage > Database**
For previews, we store generated dashboards as temporary files with auto-cleanup. No database blobs, no complexity. Just files that expire after an hour.

**Next.js API Routes > Express**
Consolidating everything into Next.js App Router API routes eliminated the need for a separate backend server.`,
    },
    {
      heading: "Playwright: Both the Producer and Consumer",
      content: `Fun twist: DashWright uses Playwright to test itself. We run E2E tests that:

- Generate test artifacts
- Upload them to CI
- Pull them back through DashWright
- Verify the dashboard renders correctly

It's like Inception, but with test reports.

We even built a custom AI reporter that analyzes test failures and suggests fixes. Because why not let AI help debug your tests?`,
    },
    {
      heading: "The Result: Real Adoption",
      content: `DashWright is live at [dashwright.com](https://dashwright.com) with:

- **Free tier** for open-source projects
- **Premium themes** for teams that want branded dashboards
- **Real-time previews** that update as your tests run

The feedback from QA teams has been incredible. Finally, stakeholders can actually understand what's happening with test results.

No more "the tests are running" black hole. Now it's "here's exactly what passed, failed, and why."`,
    },
  ],
  conclusion: `Building DashWright taught me that great tools come from solving your own pain points. If you're tired of buried test reports, give it a try. And if you're building something similar, I hope this architecture helps you avoid the ZIP bomb I encountered!

**Want to try it?** Head to [dashwright.com](https://dashwright.com) and transform your test artifacts in minutes.

**Found this useful?** Follow me for more QA automation and Next.js content.`,
};
