# 03 Student Lesson Page UI

Read `AGENTS.md` and `context/AGENT.md` before starting.

## Outcome

Add a responsive `/lesson` overview page that helps a student understand the
current post-lesson practice and choose the next activity.

## In Scope

- A lesson header with the topic, learning progress, and primary next step
- A four-step roadmap covering flashcards, multiple choice, writing, and voice
- A compact learning-goal panel and a teacher-note preview
- A lesson-resource preview without file download or upload behavior
- Route-aware student navigation shared with the dashboard
- Next.js `Link` navigation from the dashboard to `/lesson`

## Out of Scope

- Activity-player routes and answer submission
- Real assignment, progress, document, or teacher-message data
- Unlocking, grading, reward, or completion rules
- Authentication and backend integration
- Resource download, upload, preview, or retention behavior

## Implementation Rules

- Keep the page and presentation components as Server Components
- Treat visible lesson data as static preview content
- Do not encode unresolved completion or reward rules
- Do not modify generated files in `components/ui/`
- Keep product colors in semantic CSS custom properties

## Acceptance Checks

- [x] `/lesson` loads directly and through dashboard navigation
- [x] The current navigation item is correct on both routes
- [x] The four supported practice types appear in a clear sequence
- [x] The page remains readable on mobile and desktop widths
- [x] ESLint, TypeScript, production build, and browser checks pass

## Verification

- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build` with `/` and `/lesson` statically prerendered
- Chrome production visual check at 1440 x 1000
- Chrome emulated 390 x 844 navigation check from `/` to `/lesson`
- Mobile document width matched the 390px viewport, all four activities were
  present, the Lesson nav item was active, and no error overlay was present
- Dashboard and Lesson use the same `max-w-[1480px]` page shell and responsive
  horizontal gutters; a stable scrollbar gutter prevents route-to-route shift
