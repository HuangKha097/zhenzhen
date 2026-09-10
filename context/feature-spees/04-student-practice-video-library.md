# 04 Student Practice Video Library

Read `AGENTS.md` and `context/AGENT.md` before starting.

## Outcome

Add a responsive `/practice` page where students can browse video lessons
posted by their teacher.

## In Scope

- A featured teacher-posted video preview
- A clear library of recent and earlier video posts
- Teacher, topic, posted-date, and duration metadata
- Route-aware student navigation shared with the other student pages
- The same responsive page container and gutters as Dashboard and Lesson

## Out of Scope

- Video playback, upload, hosting, or signed media URLs
- Watch-history, completion, progress tracking, or submissions
- Search, filters, pagination, and backend data fetching
- Teacher publishing tools and role authorization

## Implementation Rules

- Keep the page and presentation components as Server Components
- Treat all visible videos and metadata as static preview content
- Make preview-only controls visually honest; do not imply working playback
- Do not modify generated files in `components/ui/`
- Use Lucide React for interface icons

## Acceptance Checks

- [x] `/practice` loads directly and from shared navigation
- [x] Practice is the active navigation item on the page
- [x] Featured and library video cards remain readable on mobile and desktop
- [x] Page width and right gutter match Dashboard and Lesson
- [x] ESLint, TypeScript, production build, and browser checks pass

## Verification

- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build` with `/`, `/lesson`, and `/practice` statically prerendered
- Chrome checks at 1440 x 1000, 1920 x 1080, and 390 x 844
- Mobile navigation reached `/practice`; the document width matched the 390px
  viewport, six video cards were present, and no browser errors were detected
- At 1920px, Dashboard and Practice both used the same 1480px content shell
