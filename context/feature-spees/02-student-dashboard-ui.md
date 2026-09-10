# 02 Student Dashboard UI

Read `AGENTS.md` and `context/AGENT.md` before starting.

## Outcome

Replace the starter page with a responsive student dashboard preview that
communicates the core post-lesson practice journey.

## In Scope

- A responsive application shell with desktop and mobile navigation
- A friendly student greeting and one visually dominant lesson action
- A lesson progress preview and the four supported activity types
- Compact streak, weekly-goal, and class-ranking previews
- Semantic product tokens from `context/ui-context.md`
- Accessible landmarks, labels, focus states, and 44px touch targets

## Out of Scope

- Clerk authentication or real student identity
- NestJS, MongoDB, Cloudinary, or Socket.IO integration
- Real lesson, submission, streak, point, or leaderboard calculations
- Practice routes and interactive activity behavior
- Final approved avatar artwork

## Implementation Rules

- Keep the route and presentation components as Server Components
- Treat all visible learning data as static preview content
- Do not encode unresolved reward, ranking, or activity-unlock rules
- Do not modify generated files in `components/ui/`
- Keep product colors in semantic CSS custom properties

## Acceptance Checks

- [x] The dashboard remains readable on mobile and desktop widths
- [x] The primary lesson action is visually obvious
- [x] Every supported practice type is represented
- [x] Desktop and mobile navigation expose the same destinations
- [x] ESLint, TypeScript, production build, and browser checks pass

## Verification

- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build` with `/` statically prerendered
- Chrome visual checks at 1440 x 1000 and an emulated 390 x 844 viewport
- Mobile document width matched the 390px viewport and no Next.js error
  overlay was present
