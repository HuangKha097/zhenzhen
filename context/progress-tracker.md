# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Student practice video library UI preview complete

## Current Goal

- Select the next scoped video playback or tracking feature before implementation

## Completed

- `01-design-system`: initialized shadcn/ui with Radix primitives and
  installed Button, Card, Dialog, Input, Tabs, Textarea, and ScrollArea
- Installed and configured Lucide React as the icon library
- Added the reusable `cn()` helper and verified Tailwind conflict merging
- Activated the generated dark theme and corrected the Geist font tokens
- Verified the design system with ESLint, TypeScript, production build,
  dependency checks, and a browser reload with no active error overlay
- Named the project ZhenZhen
- Defined the teacher-to-student post-lesson practice concept
- Defined the initial practice types: flashcards, multiple choice,
  writing, and voice/accent recording
- Selected Next.js, NestJS, Clerk, Zod, MongoDB, and Cloudinary
- Defined the restricted-avatar, daily-streak, and ranking direction
- Defined one teacher/admin with invite-only Gmail student membership
- Selected Clerk Organizations for invitations and member removal
- Defined Voice Conversation as persistent, voice-only chat with
  Cloudinary audio and real-time Socket.IO delivery
- Updated all six context files without implementing product features
- Replaced the starter screen with a responsive student dashboard preview
- Added role-appropriate desktop and mobile navigation, a primary lesson card,
  all four supported practice activity previews, weekly progress, ranking, and
  Voice Conversation entry points
- Mapped shadcn/ui theme values to the semantic ZhenZhen product tokens and
  added derived surface, accent, and shadow tokens
- Kept the dashboard as Server Components with static preview content only;
  no unresolved scoring, unlocking, or authorization behavior was implemented
- Verified the dashboard with ESLint, TypeScript, a production build, and
  Chrome checks at desktop and 390px mobile viewport sizes
- `03-student-lesson-page-ui`: added a responsive `/lesson` overview with a
  lesson header, progress, a four-activity roadmap, learning goals, a teacher
  note, and a lesson-resource preview
- Made the shared student navigation route-aware and replaced dashboard hash
  placeholders with Next.js links to the lesson overview
- Kept the lesson page as static Server Components without adding assignment,
  activity-player, resource-download, completion, or reward behavior
- Verified direct Lesson loading and dashboard-to-Lesson navigation in Chrome
  at desktop and 390px mobile viewport sizes
- `04-student-practice-video-library`: added a responsive `/practice` page with
  a featured teacher video and a six-video class library
- Connected the shared Practice navigation item to `/practice` and preserved
  the same 1480px content shell and responsive gutters across pages
- Kept playback, teacher publishing, real data, and progress tracking out of
  this static Server Component preview
- Verified the Practice page with ESLint, TypeScript, a production build, and
  Chrome checks at 1920px, 1440px, and 390px viewport widths

## In Progress

- None

## Next Up

- Specify the teacher-video source and playback contract before connecting
  real posts, then scope progress tracking as a separate subfeature

## Open Questions

- Can teachers combine multiple practice types in one assignment?
- What teacher feedback and grading tools are required for submissions?
- Is accent feedback teacher-reviewed, automatically evaluated, or both?
- Which actions preserve a streak, and how are points and ties ranked?
- What file types, sizes, and retention limits apply to lesson resources
  and voice recordings?
- Which five or six avatar designs will be available at launch?
- Is Voice Conversation class-wide, teacher-to-student, or organized
  into teacher-created conversation groups?
- Who can start a Voice Conversation thread?
- What are the maximum voice-message length, file size, and retention period?
- Should removed students' submissions and voice messages remain visible
  to the teacher, and for how long?

## Architecture Decisions

- Next.js is the frontend and NestJS is the backend to keep UI and
  server-owned learning rules separate
- Clerk provides email and Google authentication
- Clerk Organizations provides Gmail invitations, one admin role, student
  membership, invitation revocation, and student removal
- Zod validates input and shared frontend/backend contracts
- MongoDB stores application data and ownership relationships
- Cloudinary stores images, videos, and voice-recording media
- Socket.IO through a NestJS gateway delivers new voice-message events;
  MongoDB remains the durable conversation history
- Users choose from a fixed avatar set instead of uploading avatars
- Streak and ranking calculations remain server-authoritative

## Session Notes

- `01-design-system` was implemented; generated `components/ui/*` files
  were not manually modified after installation
- “Shortcut” was interpreted as Socket.IO for real-time delivery
- Preserve the current context-file structure in later updates
- The existing boilerplate branding can be replaced when implementation
  is explicitly started
- `02-student-dashboard-ui` is presentation-only; visible names, progress,
  points, and rankings are sample content and are not connected to backend rules
- Noto Sans SC remains first in the CJK fallback stack without a remote font
  request, so production builds do not depend on Google Fonts network access
- `03-student-lesson-page-ui` uses sample goals, progress, resource metadata,
  and teacher guidance; none of it is connected to a real assignment
- Do not run `next build` while `next dev` is active in this checkout. Both use
  `.next`, and the overlap produced a stale dev CSS/runtime state that stretched
  the Lesson hero until the dev server was restarted.
- Keep Dashboard and Lesson on the same `max-w-[1480px]` page shell and
  responsive horizontal gutters; reserve the scrollbar gutter so that the
  content block stays aligned when moving between short and long pages.
- `04-student-practice-video-library` uses static sample titles, teacher names,
  dates, and durations; no video player, upload flow, or tracking rule exists.
