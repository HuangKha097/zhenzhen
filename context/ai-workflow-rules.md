# AI Workflow Rules

## Approach

Build ZhenZhen incrementally with a spec-driven workflow. The
six files in `context/` are the project cheat sheet and source
of truth for product scope, architecture, code standards, UI
direction, and progress. Work on one complete user outcome at a
time, beginning with invite-only access and then the
teacher-to-student practice loop. Always implement against these specs - do not infer or invent behavior from scratch.

## Scoping Rules

- Work on one feature unit at a time
- Prefer small, verifiable increments over large speculative changes
- Do not combine unrelated frontend, backend, data, and media concerns
  in a single implementation step
- Treat planning and documentation as setup, not completed product work
- Do not mark a feature complete without an end-to-end verification

## When to Split Work

Split an implementation step if it combines:

- More than one practice type, such as flashcards and voice recording
- Teacher authoring, student submission, and teacher review in one change
- Voice capture, Cloudinary upload, durable message creation, and
  Socket.IO delivery without separately verifiable steps
- Authentication, database persistence, and Cloudinary media handling
  without separately verifiable boundaries
- Behavior not clearly defined in the context files

If a change cannot be verified end to end quickly, the scope is too
broad and must be split.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files
- If a requirement is ambiguous, resolve it in the relevant context
  file before implementing
- If a requirement is missing, add it as an open question in
  `progress-tracker.md` before continuing
- Keep accent evaluation, leaderboard rules, and teacher feedback
  behavior explicit before building those features
- Keep Voice Conversation thread rules, audio limits, and retention
  behavior explicit before building real-time messaging

## Protected Files

Do not modify the following unless explicitly instructed:

- `node_modules/` and other third-party library internals
- Generated Next.js, NestJS, Clerk, or Cloudinary files
- Environment files or secrets containing credentials
- Production data, uploaded class resources, or student submissions

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- Product scope or a teacher/student workflow
- System architecture, API boundaries, or authorization rules
- Clerk invitation/membership behavior or Socket.IO event contracts
- MongoDB data ownership or Cloudinary storage decisions
- Code conventions, validation rules, or UI tokens
- Feature status and verification evidence

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope
2. Teacher/student access rules and architecture invariants are preserved
3. Relevant inputs are validated with Zod
4. `progress-tracker.md` records the work and verification evidence
5. Frontend and backend checks pass for the affected applications
