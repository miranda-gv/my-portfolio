# Blog Content & Images Guide

## File Structure

Each blog post content file lives in `src/data/blog/posts/` as a TypeScript file exporting a `BlogPostContent` object.

## Image Guidelines

Place blog post screenshots in `public/blog/[post-id]/` using per-post folders.

### Directory Structure

```
public/blog/
└── dashwright/
    ├── dashwright-problem1.png
    ├── dashwright-problem2.png
    ├── dashwright-dashboard1.png
    └── dashwright-architecture.svg
```

### Naming Convention

Use the pattern: `[post-id]/[post-id]-[description].png`

### Current Posts

#### building-ci-artfact-dashboards-with-nextjs

Images in `public/blog/dashwright/`:

- `dashwright-problem1.png` - Scattered Workflows screenshot
- `dashwright-problem2.png` - Buried CI artifacts screenshot
- `dashwright-dashboard1.png` - Main dashboard view
- `dashwright-architecture.svg` - Architecture diagram

### Image Specifications

- **Format:** PNG or WebP (preferred for smaller size)
- **Width:** 800px minimum for full-width images
- **Aspect Ratio:** 16:9 for screenshots, 1:1 for icons
- **Optimize:** Compress images before committing (use TinyPNG or similar)

## Adding New Posts

1. Create content file: `src/data/blog/posts/[post-id].ts`
2. Add entry to `src/data/blog.ts` with `contentFile` pointing to your file
3. Create folder `public/blog/[post-id]/` and add images
4. Set `published: true` when ready

## Markdown Formatting

Content uses **template literals** (backticks) to preserve newlines and supports full markdown via `react-markdown` with `remark-gfm` and `rehype-highlight`.

### Paragraphs & Spacing

Double newline creates a new paragraph:

```typescript
content: `First paragraph.

Second paragraph with more text.`;
```

### Headings

Use markdown heading syntax (rendered as HTML within sections):

```typescript
content: `### Step 1: Setup

Follow these instructions.`;
```

### Bullet Points

Use `- ` prefix for unordered lists:

```typescript
content: `- First item
- Second item
- Third item`;
```

Nested bullets (2 spaces indent):

```typescript
content: `- Main item
  - Sub item
  - Sub item`;
```

### Numbered Lists

```typescript
content: `1. First step
2. Second step
3. Third step`;
```

### Bold & Italic

```typescript
content: `**bold text** and *italic text*`;
```

### Links

```typescript
content: `[Link text](https://example.com)`;
```

### Inline Code

```typescript
content: `Use the \`npm install\` command to get started.`;
```

### Code Blocks

Use triple backticks with language identifier:

```typescript
content: `\`\`\`typescript
const zip = await unzipper.Open.url(url);
for await (const entry of zip) {
  // process
}
\`\`\``;
```

### Blockquotes

```typescript
content: `> This is a blockquote
> spanning multiple lines`;
```

### Images in Content

Images are handled via the `images` array, not markdown:

```typescript
images: [
  {
    src: "/blog/example.png",
    alt: "Description of image",
  },
];
```

## Content Structure

```typescript
export const examplePost: BlogPostContent = {
  intro: "Short intro paragraph (supports markdown).",
  sections: [
    {
      heading: "Section Title",
      content: `Markdown content here.

Supports all formatting above.`,
      images: [{ src: "/blog/image.png", alt: "Description" }],
    },
  ],
  conclusion: "Closing thoughts (supports markdown).",
};
```

## Tips

- Use template literals (backticks) for all `content` strings to preserve newlines
- Keep lines under 80 chars when possible by breaking at natural points
- Escape backticks in code blocks: `\``
- `remark-gfm` adds GitHub Flavored Markdown (tables, strikethrough, task lists)
- `rehype-highlight` adds syntax highlighting to code blocks
