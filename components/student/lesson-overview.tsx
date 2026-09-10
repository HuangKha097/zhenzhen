import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Mic2,
  PenLine,
  Play,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type PracticeItem = {
  title: string;
  description: string;
  meta: string;
  href: string;
  icon: LucideIcon;
  tone: "primary" | "secondary" | "streak" | "violet";
  status?: "done" | "next";
};

const practiceItems: PracticeItem[] = [
  {
    title: "Thẻ từ vựng",
    description: "Ôn 12 từ mới của bài học",
    meta: "5 phút",
    href: "/lesson#activity-flashcards",
    icon: BookOpen,
    tone: "secondary",
    status: "done",
  },
  {
    title: "Trắc nghiệm nhanh",
    description: "Chọn đáp án đúng cho 8 câu hỏi",
    meta: "8 câu",
    href: "/lesson#activity-quiz",
    icon: CircleHelp,
    tone: "primary",
    status: "next",
  },
  {
    title: "Luyện viết",
    description: "Viết về một ngày thường của em",
    meta: "10 phút",
    href: "/lesson#activity-writing",
    icon: PenLine,
    tone: "streak",
  },
  {
    title: "Luyện phát âm",
    description: "Ghi âm và gửi cho cô giáo",
    meta: "5 câu",
    href: "/lesson#activity-speaking",
    icon: Mic2,
    tone: "violet",
  },
];

const toneClasses: Record<PracticeItem["tone"], string> = {
  primary: "bg-[var(--bg-primary-soft)] text-[var(--accent-primary-strong)]",
  secondary: "bg-[var(--bg-secondary-soft)] text-[var(--accent-secondary-strong)]",
  streak: "bg-[var(--bg-streak-soft)] text-[var(--accent-streak-strong)]",
  violet: "bg-[var(--bg-violet-soft)] text-[var(--accent-violet)]",
};

export function LessonHero() {
  return (
    <Card
      id="lesson"
      className="relative isolate gap-0 overflow-hidden rounded-3xl border-0 bg-[var(--accent-secondary)] p-0 text-[var(--bg-surface)] ring-0 shadow-[var(--shadow-hero)]"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-[var(--bg-surface)]/12" />
      <div className="pointer-events-none absolute -bottom-24 right-24 size-52 rounded-full bg-[var(--bg-surface)]/10" />

      <div className="relative grid min-h-[320px] gap-8 p-6 sm:p-8 md:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.75fr)] md:items-center lg:p-10">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--bg-surface)]/18 px-3 py-1.5 text-xs font-extrabold tracking-wide">
            <Sparkles className="size-4" aria-hidden="true" />
            BÀI HỌC TIẾP THEO
          </div>

          <p className="text-sm font-bold text-[var(--bg-surface)]/80">Chủ đề 04 · Sinh hoạt hằng ngày</p>
          <h1 className="mt-2 font-[family-name:var(--font-chinese)] text-4xl font-black tracking-wide sm:text-5xl">
            我的一天
          </h1>
          <p className="mt-3 max-w-md text-sm font-medium leading-6 text-[var(--bg-surface)]/85 sm:text-base">
            Kể về một ngày của em bằng những mẫu câu vừa học trên lớp.
          </p>

          <div className="mt-6 max-w-md">
            <div className="mb-2 flex items-center justify-between text-xs font-bold">
              <span>Tiến độ bài học</span>
              <span>1 / 4 hoạt động</span>
            </div>
            <div
              className="h-2.5 overflow-hidden rounded-full bg-[var(--bg-surface)]/25"
              role="progressbar"
              aria-label="Tiến độ bài học"
              aria-valuemin={0}
              aria-valuemax={4}
              aria-valuenow={1}
            >
              <div className="h-full w-1/4 rounded-full bg-[var(--bg-surface)]" />
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-7 min-h-12 rounded-2xl bg-[var(--bg-surface)] px-5 font-extrabold text-[var(--accent-secondary-strong)] shadow-[var(--shadow-button)] hover:bg-[var(--bg-surface)]/90"
          >
            <Link href="/lesson">
              Tiếp tục học
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="relative mx-auto hidden h-56 w-full max-w-xs md:block" aria-hidden="true">
          <div className="absolute left-2 top-8 w-36 rotate-[-8deg] rounded-3xl bg-[var(--bg-surface)] p-5 text-[var(--text-primary)] shadow-[var(--shadow-floating)]">
            <p className="font-[family-name:var(--font-chinese)] text-4xl font-black text-[var(--accent-streak-strong)]">早</p>
            <p className="mt-3 text-xs font-bold text-[var(--text-muted)]">buổi sáng</p>
          </div>
          <div className="absolute bottom-2 right-0 w-40 rotate-[7deg] rounded-3xl bg-[var(--bg-surface)] p-5 text-[var(--text-primary)] shadow-[var(--shadow-floating)]">
            <p className="font-[family-name:var(--font-chinese)] text-4xl font-black text-[var(--accent-primary-strong)]">学</p>
            <p className="mt-3 text-xs font-bold text-[var(--text-muted)]">học tập</p>
          </div>
          <span className="absolute right-6 top-0 grid size-12 rotate-12 place-items-center rounded-2xl bg-[var(--accent-streak)] text-2xl shadow-lg">
            ✨
          </span>
        </div>
      </div>
    </Card>
  );
}

export function PracticeList() {
  return (
    <section id="practice" aria-labelledby="practice-heading" className="scroll-mt-6">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-primary-strong)]">Lộ trình hôm nay</p>
          <h2 id="practice-heading" className="mt-1 text-2xl font-black tracking-[-0.03em] text-[var(--text-primary)]">
            Hoạt động luyện tập
          </h2>
        </div>
        <span className="hidden text-sm font-semibold text-[var(--text-muted)] sm:inline">1 trong 4 hoàn thành</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {practiceItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex min-h-28 items-center gap-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-secondary)]/45 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-secondary)]/35"
            >
              <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${toneClasses[item.tone]}`}>
                <Icon className="size-6" strokeWidth={2.3} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="font-extrabold text-[var(--text-primary)]">{item.title}</span>
                  {item.status === "done" ? (
                    <span className="grid size-5 place-items-center rounded-full bg-[var(--accent-primary)] text-[var(--bg-surface)]" aria-label="Đã hoàn thành">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 block text-xs leading-5 text-[var(--text-muted)]">{item.description}</span>
                <span className="mt-2 block text-xs font-bold text-[var(--text-primary)]/70">{item.meta}</span>
              </span>
              {item.status === "next" ? (
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--accent-primary)] text-[var(--bg-surface)] shadow-[var(--shadow-button)] transition-transform group-hover:translate-x-0.5">
                  <Play className="ml-0.5 size-4 fill-current" aria-hidden="true" />
                </span>
              ) : (
                <ChevronRight className="size-5 shrink-0 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
