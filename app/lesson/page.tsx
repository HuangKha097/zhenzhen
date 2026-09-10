import {
  ArrowDown,
  ArrowLeft,
  BookOpenCheck,
  Clock3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { LessonRoadmap } from "@/components/lesson/lesson-roadmap";
import {
  LearningGoals,
  LessonResource,
  TeacherNote,
} from "@/components/lesson/lesson-support";
import { StudentNavigation } from "@/components/student/student-navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <StudentNavigation activeItem="lessons" />

      <main className="pb-24 lg:ml-64 lg:pb-0">
        <div className="mx-auto max-w-[1480px] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 xl:px-12">
          <Link
            href="/"
            className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-xl px-1 text-sm font-bold text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-secondary)]/35"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Quay lại trang chủ
          </Link>

          <Card className="relative isolate gap-0 overflow-hidden rounded-3xl border-0 bg-[var(--bg-surface)] p-0 ring-1 ring-[var(--border-default)] shadow-[var(--shadow-card)]">
            <div className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-[var(--bg-primary-soft)]" />
            <div className="pointer-events-none absolute -bottom-32 right-40 size-64 rounded-full bg-[var(--bg-secondary-soft)]" />

            <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[minmax(0,1.25fr)_minmax(250px,0.75fr)] md:items-center lg:p-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-primary-soft)] px-3 py-1.5 text-xs font-extrabold tracking-wide text-[var(--accent-primary-strong)]">
                  <Sparkles className="size-4" aria-hidden="true" />
                  BÀI HỌC 04
                </div>
                <p className="mt-5 text-sm font-bold text-[var(--accent-secondary-strong)]">Sinh hoạt hằng ngày</p>
                <h1 className="mt-1 font-[family-name:var(--font-chinese)] text-4xl font-black tracking-wide sm:text-5xl">
                  我的一天
                </h1>
                <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-[var(--text-muted)] sm:text-base">
                  Ôn từ vựng, mẫu câu và luyện kể về những hoạt động trong một ngày của em.
                </p>

                <div className="mt-6 max-w-lg">
                  <div className="mb-2 flex items-center justify-between gap-4 text-xs font-bold">
                    <span>Tiến độ bài học</span>
                    <span className="text-[var(--accent-primary-strong)]">25%</span>
                  </div>
                  <div
                    className="h-2.5 overflow-hidden rounded-full bg-[var(--border-default)]"
                    role="progressbar"
                    aria-label="Tiến độ bài học"
                    aria-valuemin={0}
                    aria-valuemax={4}
                    aria-valuenow={1}
                  >
                    <div className="h-full w-1/4 rounded-full bg-[var(--accent-primary)]" />
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="min-h-12 rounded-2xl px-5 font-extrabold shadow-[var(--shadow-button)]"
                  >
                    <Link href="#activity-quiz">
                      Tiếp tục: Trắc nghiệm
                      <ArrowDown className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)]">
                    <Clock3 className="size-4" aria-hidden="true" />
                    Khoảng 25 phút
                  </span>
                </div>
              </div>

              <div className="relative mx-auto hidden h-56 w-full max-w-xs md:block" aria-hidden="true">
                <div className="absolute inset-x-8 top-2 grid aspect-square place-items-center rounded-full bg-[var(--accent-primary)] text-[var(--bg-surface)] shadow-[var(--shadow-hero)]">
                  <span className="font-[family-name:var(--font-chinese)] text-7xl font-black">日</span>
                </div>
                <span className="absolute left-0 top-8 rotate-[-7deg] rounded-2xl bg-[var(--bg-surface)] px-4 py-3 font-[family-name:var(--font-chinese)] text-lg font-black text-[var(--accent-streak-strong)] shadow-[var(--shadow-floating)]">
                  早上
                </span>
                <span className="absolute bottom-5 right-0 rotate-[6deg] rounded-2xl bg-[var(--bg-surface)] px-4 py-3 font-[family-name:var(--font-chinese)] text-lg font-black text-[var(--accent-secondary-strong)] shadow-[var(--shadow-floating)]">
                  晚上
                </span>
                <span className="absolute bottom-1 left-6 grid size-11 place-items-center rounded-2xl bg-[var(--bg-violet-soft)] text-[var(--accent-violet)] shadow-[var(--shadow-button)]">
                  <BookOpenCheck className="size-6" />
                </span>
              </div>
            </div>
          </Card>

          <div className="mt-8 grid items-start gap-7 xl:grid-cols-[minmax(0,1fr)_340px]">
            <LessonRoadmap />
            <aside className="grid gap-5 sm:grid-cols-2 xl:sticky xl:top-8 xl:grid-cols-1" aria-label="Thông tin hỗ trợ bài học">
              <LearningGoals />
              <TeacherNote />
              <div className="sm:col-span-2 xl:col-span-1">
                <LessonResource />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
