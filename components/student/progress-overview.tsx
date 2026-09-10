import { ArrowUpRight, Flame, Medal, MessageCircleMore, Trophy } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const week = [
  { day: "T2", date: "7", done: true },
  { day: "T3", date: "8", done: true },
  { day: "T4", date: "9", done: true },
  { day: "T5", date: "10", current: true },
  { day: "T6", date: "11" },
  { day: "T7", date: "12" },
  { day: "CN", date: "13" },
];

const learners = [
  { rank: 1, initials: "HL", name: "Hà Linh", points: 840, tone: "secondary" },
  { rank: 2, initials: "MA", name: "Minh Anh", points: 790, tone: "primary", current: true },
  { rank: 3, initials: "QT", name: "Quang Tú", points: 725, tone: "streak" },
];

const learnerTones: Record<string, string> = {
  primary: "bg-[var(--bg-primary-soft)] text-[var(--accent-primary-strong)]",
  secondary: "bg-[var(--bg-secondary-soft)] text-[var(--accent-secondary-strong)]",
  streak: "bg-[var(--bg-streak-soft)] text-[var(--accent-streak-strong)]",
};

export function WeeklyProgress() {
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-[var(--bg-surface)] py-0 ring-1 ring-[var(--border-default)] shadow-[var(--shadow-card)]">
      <CardHeader className="gap-0 px-5 pb-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-streak-strong)]">Chuỗi học tập</p>
            <CardTitle className="mt-1 text-xl font-black tracking-[-0.03em]">Tuần này</CardTitle>
          </div>
          <span className="grid size-11 place-items-center rounded-2xl bg-[var(--bg-streak-soft)] text-[var(--accent-streak-strong)]">
            <Flame className="size-6 fill-current" aria-hidden="true" />
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="grid grid-cols-7 gap-1" aria-label="Tiến độ học trong tuần">
          {week.map((item) => (
            <div key={item.day} className="text-center">
              <p className="mb-2 text-[0.65rem] font-bold text-[var(--text-muted)]">{item.day}</p>
              <span
                className={`mx-auto grid size-9 place-items-center rounded-xl text-xs font-extrabold ${
                  item.done
                    ? "bg-[var(--accent-primary)] text-[var(--bg-surface)]"
                    : item.current
                      ? "border-2 border-[var(--accent-streak)] bg-[var(--bg-streak-soft)] text-[var(--accent-streak-strong)]"
                      : "bg-[var(--bg-subtle)] text-[var(--text-muted)]"
                }`}
                aria-current={item.current ? "date" : undefined}
              >
                {item.done ? "✓" : item.date}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-[var(--bg-subtle)] px-4 py-3">
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)]">Mục tiêu tuần</p>
            <p className="mt-0.5 text-sm font-extrabold text-[var(--text-primary)]">3 / 5 ngày</p>
          </div>
          <div
            className="h-2 w-24 overflow-hidden rounded-full bg-[var(--border-default)]"
            role="progressbar"
            aria-label="Mục tiêu tuần"
            aria-valuemin={0}
            aria-valuemax={5}
            aria-valuenow={3}
          >
            <div className="h-full w-3/5 rounded-full bg-[var(--accent-primary)]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function LeaderboardPreview() {
  return (
    <Card id="ranking" className="scroll-mt-6 gap-0 rounded-3xl border-0 bg-[var(--bg-surface)] py-0 ring-1 ring-[var(--border-default)] shadow-[var(--shadow-card)]">
      <CardHeader className="gap-0 px-5 pb-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-secondary-strong)]">Lớp HSK 2</p>
            <CardTitle className="mt-1 text-xl font-black tracking-[-0.03em]">Bảng xếp hạng tuần</CardTitle>
          </div>
          <span className="grid size-11 place-items-center rounded-2xl bg-[var(--bg-secondary-soft)] text-[var(--accent-secondary-strong)]">
            <Trophy className="size-6" aria-hidden="true" />
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-3">
        <ol className="space-y-1">
          {learners.map((learner) => (
            <li
              key={learner.name}
              className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${
                learner.current ? "bg-[var(--bg-primary-soft)]" : ""
              }`}
            >
              <span className="w-5 text-center text-xs font-black text-[var(--text-muted)]">
                {learner.rank}
              </span>
              <span className={`grid size-10 place-items-center rounded-full text-xs font-black ${learnerTones[learner.tone]}`}>
                {learner.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-extrabold text-[var(--text-primary)]">
                  {learner.name}
                  {learner.current ? <span className="ml-1 font-semibold text-[var(--text-muted)]">(Bạn)</span> : null}
                </span>
                <span className="mt-0.5 block text-xs text-[var(--text-muted)]">{learner.points} điểm</span>
              </span>
              {learner.rank === 1 ? <Medal className="size-5 text-[var(--accent-streak-strong)]" aria-label="Hạng nhất" /> : null}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export function ConversationPreview() {
  return (
    <a
      id="conversation"
      href="#practice"
      className="group flex scroll-mt-6 items-center gap-4 rounded-3xl bg-[var(--text-primary)] p-5 text-[var(--bg-surface)] shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-secondary)]/35"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--bg-surface)]/12">
        <MessageCircleMore className="size-6" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-extrabold">Voice Conversation</span>
        <span className="mt-1 block text-xs leading-5 text-[var(--bg-surface)]/65">Luyện nghe và gửi tin nhắn thoại cùng lớp.</span>
      </span>
      <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </a>
  );
}
