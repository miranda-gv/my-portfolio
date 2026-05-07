import type { BlogPostContent } from "../types";

const content: BlogPostContent = {
  intro:
    "As end-to-end (E2E) tests grow in complexity, a single 100-line test script becomes a nightmare to debug. For Senior QA Engineers, the goal isn't just to make the test pass, but to make the failure readable. Playwright offers two powerful ways to organize your logic: the native test.step API and the more advanced Step Decorator pattern.",
  sections: [
    {
      heading: "The Native Way: test.step",
      content: `The test.step function is the quickest way to add structure to your test scripts. It wraps a block of code and gives it a human-readable name that appears in your HTML reports.

\`\`\`typescript
import { test, expect } from '@playwright/test';

test('End-to-end checkout flow', async ({ page }) => {
  await test.step('Log into application', async () => {
    await page.goto('/login');
    await page.fill('#user', 'miranda');
    await page.click('#submit');
  });

  await test.step('Add items to cart', async () => {
    await page.click('.add-to-cart');
  });
});
\`\`\`

**Why use it?** If a test fails in the "Add items to cart" section, your CI logs will explicitly state which step failed, rather than just giving you a generic line number.`,
    },
    {
      heading: "The Advanced Way: The Step Decorator",
      content: `If you are using the Page Object Model (POM), wrapping every method call in test.step within your test files becomes repetitive. This is where the Step Decorator shines. It allows you to "annotate" your class methods so that they are automatically treated as steps.

While TypeScript doesn't have a "native" Playwright decorator yet, SDETs often implement a custom wrapper like this:

\`\`\`typescript
// decorators.ts
import { test } from '@playwright/test';

export function step(stepName?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const name = stepName || propertyKey;

    descriptor.value = async function (...args: any[]) {
      return await test.step(name, async () => {
        return await originalMethod.apply(this, args);
      });
    };
  };
}
\`\`\`

Using it in your POM:

\`\`\`typescript
import { step } from './decorators';

export class LoginPage {
  @step('User logs in with credentials')
  async login(user: string) {
    await this.page.fill('#user', user);
    await this.page.click('#submit');
  }
}
\`\`\``,
    },
    {
      heading: "Impact on Reporting & DashWright",
      content: `For tools like DashWright, utilizing steps is a game-changer. When you convert raw Playwright JSON/HTML artifacts into a dashboard:

- **Granular Failure Analysis:** You can see exactly which business logic step failed without opening the source code.
- **Documentation as Code:** Your test results effectively become a "User Journey" map.
- **Cleaner Visuals:** DashWright can collapse successful steps and highlight the specific "red" step, saving minutes of scrolling through logs.`,
    },
  ],
  conclusion: `**Which should you choose?**

Use test.step for quick, one-off scripts or when logic is contained entirely within the test block.

Use Decorators if you are building a scalable, professional framework using Playwright and TypeScript. It keeps your Page Objects clean and ensures your reporting is consistently high-quality across the entire team.`,
};

export default content;
