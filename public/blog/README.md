# Blog Images

Place blog post screenshots in this directory.

## Naming Convention
Use the pattern: `blog/[post-id]-[description].png`

## Current Posts Need These Images:

### building-qa-dashboards-with-nextjs
- `dashwright-hero.png` - Hero image for blog card
- `dashwright-problem.png` - CI artifacts buried in pipeline
- `dashwright-dashboard.png` - Main dashboard view
- `dashwright-architecture.png` - Architecture diagram
- `dashwright-preview.png` - Mobile/desktop preview example

## Image Guidelines
- **Format:** PNG or WebP (preferred for smaller size)
- **Width:** 800px minimum for full-width images
- **Aspect Ratio:** 16:9 for screenshots, 1:1 for icons
- **Optimize:** Compress images before committing (use TinyPNG or similar)

## Adding New Posts
1. Create content file: `src/data/blog/posts/[post-id].ts`
2. Add entry to `src/data/blog.ts` with `contentFile` pointing to your file
3. Add images to `public/blog/`
4. Set `published: true` when ready
