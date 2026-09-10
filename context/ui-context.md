# UI Context

## Theme

ZhenZhen uses a clean, cheerful, student-friendly visual language
inspired by the clarity and encouragement of Duolingo without copying
its branded assets or layouts. Use bright learning accents, generous
white space, rounded surfaces, friendly illustrations, and obvious
progress feedback. The interface should feel energetic but never noisy,
with Chinese characters remaining the visual priority.

## Colors

All components must use semantic CSS custom properties. Do not hardcode
product colors inside components.

| Role | CSS Variable | Value |
| --- | --- | --- |
| Page background | `--bg-base` | `#F7FAFC` |
| Surface | `--bg-surface` | `#FFFFFF` |
| Primary text | `--text-primary` | `#243047` |
| Muted text | `--text-muted` | `#667085` |
| Primary accent | `--accent-primary` | `#58CC02` |
| Secondary accent | `--accent-secondary` | `#1CB0F6` |
| Streak accent | `--accent-streak` | `#FF9600` |
| Border | `--border-default` | `#E5E7EB` |
| Error | `--state-error` | `#FF4B4B` |
| Success | `--state-success` | `#46A302` |

## Typography

| Role | Font | Variable |
| --- | --- | --- |
| UI text | Geist Sans with Noto Sans SC and system fallbacks | `--font-sans` |
| Chinese learning text | Noto Sans SC with system CJK fallbacks | `--font-chinese` |
| Code/mono | Geist Mono | `--font-mono` |

Chinese prompts and answers must use comfortable line height, clear
character spacing, and a larger size than supporting UI labels.

## Border Radius

| Context | Class |
| --- | --- |
| Inline / small UI | `rounded-xl` |
| Cards / panels | `rounded-2xl` |
| Modals / overlays | `rounded-3xl` |

Buttons and answer choices should have a clear pressed state, visible
keyboard focus, and at least a 44px touch target.

## Component Library

Use shadcn/ui with Radix primitives and Tailwind CSS. Generated primitives
live in `components/ui/` and must not be manually edited after installation.
Components should be composable, accessible, and driven by semantic tokens.
Lucide React is the standard icon library.

## Layout Patterns

- Student practice: one primary task per screen with progress visible
- Teacher dashboard: class and assignment cards with clear status counts
- Answer choices: large stacked cards labeled A, B, C, and D
- Writing practice: generous distraction-free writing area
- Voice practice: prominent record control, elapsed time, playback,
  re-record, and submit states
- Voice Conversation: familiar chat timeline with avatars, timestamps,
  audio waveforms, playback controls, and a large hold/tap-to-record
  composer; no keyboard or text field
- Conversation delivery: sending, uploaded, delivered, failed, retrying,
  reconnecting, empty, and permission-denied states are visually distinct
- Student management: invitation status and a clearly confirmed remove action
- Lesson resources: clean document cards grouped by lesson
- Streak and ranking: celebratory but compact, never blocking practice
- Navigation: simple role-appropriate destinations with a clear primary action

## Icons

Use Lucide React for general interface icons with rounded stroke styling.
Use the fire emoji for the daily streak and simple celebratory graphics
for milestones. Default sizes are `h-4 w-4` inline and `h-5 w-5`
inside buttons. Every icon-only control requires an accessible label.
