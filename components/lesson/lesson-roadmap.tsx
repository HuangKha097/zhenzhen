import {
  ArrowRight,
  BookOpen,
  Check,
  CircleHelp,
  Mic2,
  PenLine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

type LessonActivity = {
  id: string;
  step: number;
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
  tone: "primary" | "secondary" | "streak" | "violet";
  status: "completed" | "next" | "ready";
};

const activities: LessonActivity[] = [
  {
    id: "flashcards",
    step: 1,
    title: "Thẻ từ vựng",
    description: "Ôn lại 12 từ về các hoạt động trong ngày.",
    meta: "12 thẻ · Khoảng 5 phút",
    icon: BookOpen,
    tone: "secondary",
    status: "completed",
  },
  {
    id: "quiz",
    step: 2,
    title: "Trắc nghiệm nhanh",
    description: "Chọn đáp án đúng để củng cố từ vựng và mẫu câu.",
    meta: "8 câu · Khoảng 6 phút",
    icon: CircleHelp,
    tone: "primary",
    status: "next",
  },
  {
    id: "writing",
    step: 3,
    title: "Luyện viết",
    description: "Viết một đoạn ngắn kể về ngày thường của em.",
    meta: "1 bài viết · Khoảng 10 phút",
    icon: PenLine,
    tone: "streak",
    status: "ready",
  },
  {
    id: "speaking",
    step: 4,
    title: "Luyện phát âm",
    description: "Đọc 5 câu mẫu, ghi âm và gửi cho giáo viên.",
    meta: "5 câu · Khoảng 5 phút",
    icon: Mic2,
    tone: "violet",
    status: "ready",
  },
];

const toneClasses: Record<LessonActivity["tone"], string> = {
  primary: "bg-[var(--bg-primary-soft)] text-[var(--accent-primary-strong)]",
  secondary: "bg-[var(--bg-secondary-soft)] text-[var(--accent-secondary-strong)]",
  streak: "bg-[var(--bg-streak-soft)] text-[var(--accent-streak-strong)]",
  violet: "bg-[var(--bg-violet-soft)] text-[var(--accent-violet)]",
};

const statusLabels: Record<LessonActivity["status"], string> = {
  completed: "Đã hoàn thành",
  next: "Tiếp theo",
  ready: "Sẵn sàng",
};

export function LessonRoadmap() {
  return (
    <section id="activities" aria-labelledby="activities-heading" className="scroll-mt-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-primary-strong)]">
            4 bước ngắn gọn
          </p>
          <h2 id="activities-heading" className="mt-1 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
            Lộ trình bài học
          </h2>
        </div>
        <p className="text-sm font-semibold text-[var(--text-muted)]">1 trong 4 hoàn thành</p>
      </div>

      <ol className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon;
          const isNext = activity.status === "next";

          return (
            <li key={activity.id}>
              <Card
                id={`activity-${activity.id}`}
                className={`scroll-mt-6 gap-0 rounded-3xl border-0 px-4 py-4 ring-1 shadow-[var(--shadow-card)] sm:px-5 ${
                  isNext
                    ? "bg-[var(--bg-primary-soft)] ring-[var(--accent-primary)]/45"
                    : "bg-[var(--bg-surface)] ring-[var(--border-default)]"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-xl text-xs font-black ${
                      activity.status === "completed"
                        ? "bg-[var(--accent-primary)] text-[var(--bg-surface)]"
                        : "border border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-muted)]"
                    }`}
                    role="img"
                    aria-label={`Bước ${activity.step}${activity.status === "completed" ? ", đã hoàn thành" : ""}`}
                  >
                    {activity.status === "completed" ? (
                      <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                    ) : (
                      activity.step
                    )}
                  </span>

                  <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${toneClasses[activity.tone]}`}>
                    <Icon className="size-6" strokeWidth={2.3} aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-extrabold text-[var(--text-primary)] sm:text-base">{activity.title}</span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.65rem] font-extrabold ${
                          activity.status === "completed"
                            ? "bg-[var(--bg-surface)] text-[var(--state-success)]"
                            : isNext
                              ? "bg-[var(--accent-primary)] text-[var(--bg-surface)]"
                              : "bg-[var(--bg-subtle)] text-[var(--text-muted)]"
                        }`}
                      >
                        {statusLabels[activity.status]}
                      </span>
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[var(--text-muted)] sm:text-sm">
                      {activity.description}
                    </span>
                    <span className="mt-2 block text-xs font-bold text-[var(--text-primary)]/65">{activity.meta}</span>
                  </span>

                  {isNext ? (
                    <span className="hidden size-10 shrink-0 place-items-center rounded-2xl bg-[var(--accent-primary)] text-[var(--bg-surface)] shadow-[var(--shadow-button)] sm:grid">
                      <ArrowRight className="size-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
