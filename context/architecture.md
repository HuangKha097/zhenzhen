# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Frontend | Next.js + TypeScript | Student and teacher web application |
| Backend | NestJS + TypeScript | API, business rules, submissions, conversations, and ranking logic |
| UI | Tailwind CSS + shadcn/ui | Responsive, token-based interface primitives |
| Authentication | Clerk + Organizations | Email/Google sign-in, Gmail invitations, and membership |
| Validation | Zod | Validate forms, API payloads, and shared contracts |
| Database | MongoDB | Learning data, submissions, voice messages, streaks, and rankings |
| Media | Cloudinary | Lesson images/videos, practice recordings, and voice messages |
| Real-time | Socket.IO with a NestJS gateway | Deliver Voice Conversation events in real time |

## System Boundaries

- `app/` — Next.js routes, layouts, and frontend screens
- `components/` — reusable student and teacher UI components
- `server/` — planned NestJS API, Socket.IO gateway, and server-owned rules
- `shared/` — planned Zod schemas and safe cross-application types
- `context/` — project decisions, scope, standards, UI rules, and progress

## Storage Model

- **MongoDB**: app profiles, classes, lesson resources, activities,
  attempts, submissions, feedback, voice-message records, streak
  history, leaderboard results, and restricted avatar choices
- **Cloudinary**: lesson images/videos, practice recordings, and Voice
  Conversation audio; MongoDB stores media identifiers, URLs, and metadata
- **Clerk**: identity, email/Google login, the single Organization,
  Gmail invitation lifecycle, and active teacher/student membership

## Auth and Access Model

- ZhenZhen has one teacher account, which is the only administrator
- The teacher is the Clerk Organization admin; students are members
- The teacher invites a student's Gmail address through a Clerk
  Organization invitation
- The student accepts the email invitation and signs in with the matching
  email or Google account before gaining access
- The NestJS API verifies Clerk session tokens; the frontend is never
  trusted to authorize a mutation
- The teacher can revoke a pending invitation or remove an active student
- Removing a student immediately blocks new API and Socket.IO access;
  existing work is retained until the retention policy is finalized
- The teacher manages all classes, lessons, activities, resources,
  conversations, and enrolled students
- Students can access assigned class content and mutate only their own
  attempts, submissions, and voice messages
- Users select from a fixed approved avatar set; custom avatar uploads
  are not allowed

## Invariants

1. There is exactly one active teacher/admin; students cannot grant roles,
   invite members, remove members, or promote themselves
2. Every external input is parsed with Zod before business logic runs
3. Every protected HTTP request and Socket.IO connection requires an
   active Clerk Organization membership
4. Streaks, points, and leaderboard positions are calculated by the
   backend from eligible completed practice, never trusted from clients
5. A student cannot read or change another student's private submission
6. Voice Conversation accepts voice messages only; there is no text-message
   payload or text composer
7. Audio is uploaded to Cloudinary and its message record is committed to
   MongoDB before Socket.IO announces it to authorized conversation members
