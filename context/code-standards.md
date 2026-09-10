# Code Standards

## General

- Keep modules small, single-purpose, and named by domain behavior
- Fix root causes instead of layering workarounds
- Do not mix teacher authoring, student practice, conversations, and ranking
  concerns
- Prefer clear learning-domain language over generic technical names
- Add tests around authorization, submissions, and reward calculations

## TypeScript

- Use strict TypeScript throughout the frontend, backend, and shared code
- Do not use `any`; use explicit types or `unknown` with validation
- Parse unknown external input with Zod at every system boundary
- Infer types from shared Zod schemas when the same contract is used
  by Next.js and NestJS
- Model roles, activity types, and submission states as constrained types

## Next.js and NestJS

- Default Next.js pages and layouts to Server Components
- Add `use client` only where browser interactivity requires it
- Keep frontend components focused on presentation and interaction;
  server-owned rules belong in NestJS
- Organize NestJS modules by domain, such as classes, activities,
  submissions, media, conversations, memberships, streaks, and rankings
- Keep controllers thin and place business rules in services
- Do not expose database models directly as API response contracts

## Styling

- Use the CSS custom-property tokens defined in `ui-context.md`
- Do not hardcode product colors inside components
- Follow the border-radius and interaction rules in `ui-context.md`
- Keep layouts responsive, touch-friendly, and readable for Chinese text
- Use motion to confirm progress, not to distract from practice

## API Routes

- NestJS owns the application API; Next.js route handlers are reserved
  for frontend-specific integration only
- Validate and parse request input before any business logic runs
- Verify Clerk authentication, role, enrollment, and ownership before
  every protected read or mutation
- Return consistent success and error response shapes
- Use idempotent submission/media workflows where retries are possible
- Authenticate Socket.IO connections and authorize every room join/event
- Use Socket.IO for real-time notification, not as the durable message store
- Upload audio through an authorized media flow; do not send audio binaries
  as Socket.IO events

## Data and Storage

- Store application state and Cloudinary media references in MongoDB
- Store lesson media, practice recordings, and voice-message files in Cloudinary
- Never store media binaries, Clerk secrets, or Cloudinary secrets in MongoDB
- Award streak and ranking credit only through backend-controlled rules
- Keep student submissions private to the student and authorized teacher
- Store a voice-message record before broadcasting it, so reconnecting
  clients can recover conversation history from MongoDB
- Treat student removal as access revocation, not automatic data deletion

## File Organization

- `app/` — Next.js routes, layouts, and route-level composition
- `components/` — reusable UI grouped by product domain
- `server/` — planned NestJS modules, controllers, and services
- `shared/` — planned Zod schemas and shared contract types
- `context/` — the six maintained project cheat-sheet documents
