# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Design system foundation complete

## Current Goal

- Select the next feature specification before beginning more implementation

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

## In Progress

- None

## Next Up

- Read and scope the next feature specification before implementation

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
