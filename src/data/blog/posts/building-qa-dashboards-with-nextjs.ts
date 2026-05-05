import type { BlogPostContent } from "../types";

export const buildingQADashboardsPost: BlogPostContent = {
  intro:
    "Testing is hard. Sharing test results shouldn't be. Here's how I built DashWright to turn Playwright test artifacts into beautiful, interactive dashboards that stakeholders actually want to look at.",
  sections: [
    {
      heading: "The Problem: Test Reports That Nobody Reads",
      content:
        "We've all been there. Your Playwright tests run in CI, generate HTML reports, and then... nothing. Those reports sit in your pipeline artifacts, hidden behind authentication, impossible to share with product managers or executives.\n\nThe options were:\n- Screenshot everything (boring, static)\n- Share CI links (requires auth, confusing)\n- Build custom reporters (time-consuming)\n\nI wanted something better: **instant, shareable dashboards** that look great and work for everyone.",
      image: "/blog/dashwright-problem.png",
      imageAlt:
        "Screenshot showing buried CI artifacts that are hard to access",
    },
    {
      heading: "Enter DashWright: The Solution",
      content:
        "DashWright is a Next.js app that transforms Playwright test artifacts into interactive dashboards. Here's what makes it special:\n\n- **One-click import** from GitHub Actions, Azure DevOps, or GitLab CI\n- **7+ design themes** from corporate to cyberpunk (because why should dashboards be boring?)\n- **Ephemeral preview links** you can share instantly\n- **Zero-setup visualization** - just point it at your artifacts\n\nBuilt for QA teams who want to communicate test results effectively.",
      image: "/blog/dashwright-dashboard.png",
      imageAlt:
        "DashWright dashboard showing colorful test results visualization",
    },
    {
      heading: "How It Works: The Architecture",
      content:
        "The magic happens in three steps:\n\n### 1. Fetch Artifacts from CI\nUsing Octokit for GitHub, we grab the HTML report ZIP from your workflow run. No downloads to disk - everything streams.\n\n### 2. Stream Process the ZIP\nHere's the cool part - we don't load the entire ZIP into memory. Using `unzipper` with streaming, we process files entry-by-entry:\n\n```typescript\nconst zip = await unzipper.Open.url(url, { forceStream: true });\nfor await (const entry of zip) {\n  if (entry.type === 'File') {\n    const buffer = await entry.buffer();\n    // Process each file\n  }\n}\n```\n\n### 3. Generate the Dashboard\nApply your chosen design theme, inject the test data, and boom - instant dashboard.",
      image: "/blog/dashwright-architecture.svg",
      imageAlt: "Architecture diagram showing CI → DashWright → Dashboard flow",
    },
    {
      heading: "Key Technical Decisions",
      content:
        "Building this taught me a few things:\n\n**Stream Processing is Non-Negotiable**\nWhen you're processing 50MB+ artifacts on a free-tier Render instance (512MB RAM), you can't buffer everything. Streaming keeps memory usage predictable.\n\n**ZIP Bomb Protection Matters**\nAlways validate uncompressed sizes before extraction. I learned this the hard way when someone uploaded a 200MB ZIP that expanded to 2GB.\n\n**Ephemeral Storage > Database**\nFor previews, we store generated dashboards as temporary files with auto-cleanup. No database blobs, no complexity. Just files that expire after an hour.\n\n**Next.js API Routes > Express**\nConsolidating everything into Next.js App Router API routes eliminated the need for a separate backend server.",
    },
    {
      heading: "Playwright: Both the Producer and Consumer",
      content:
        "Fun twist: DashWright uses Playwright to test itself. We run E2E tests that:\n\n- Generate test artifacts\n- Upload them to CI\n- Pull them back through DashWright\n- Verify the dashboard renders correctly\n\nIt's like Inception, but with test reports.\n\nWe even built a custom AI reporter that analyzes test failures and suggests fixes. Because why not let AI help debug your tests?",
    },
    {
      heading: "The Result: Real Adoption",
      content:
        'DashWright is live at [dashwright.com](https://dashwright.com) with:\n\n- **Free tier** for open-source projects\n- **Premium themes** for teams that want branded dashboards\n- **Real-time previews** that update as your tests run\n\nThe feedback from QA teams has been incredible. Finally, stakeholders can actually understand what\'s happening with test results.\n\nNo more "the tests are running" black hole. Now it\'s "here\'s exactly what passed, failed, and why."',
      image: "/blog/dashwright-preview.png",
      imageAlt:
        "Example of a shared DashWright preview link on mobile and desktop",
    },
  ],
  conclusion:
    "Building DashWright taught me that great tools come from solving your own pain points. If you're tired of buried test reports, give it a try. And if you're building something similar, I hope this architecture helps you avoid the ZIP bomb I encountered!\n\n**Want to try it?** Head to [dashwright.com](https://dashwright.com) and transform your test artifacts in minutes.\n\n**Found this useful?** Follow me for more QA automation and Next.js content.",
};
