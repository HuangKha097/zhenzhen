import { LessonHero, PracticeList } from "@/components/student/lesson-overview";
import {
  ConversationPreview,
  LeaderboardPreview,
  WeeklyProgress,
} from "@/components/student/progress-overview";
import { StudentNavigation } from "@/components/student/student-navigation";

export default function Home() {
  return (
    <div id="dashboard" className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <StudentNavigation activeItem="home" />

      <main className="pb-24 lg:ml-64 lg:pb-0">
        <div className="mx-auto max-w-[1480px] px-4 py-7 sm:px-6 sm:py-9 lg:px-10 xl:px-12">
          <header className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-9">
            <div>
              <p className="text-sm font-bold text-[var(--accent-primary-strong)]">Hành trình tiếng Trung của bạn</p>
              <h1 className="mt-1 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                <span className="font-[family-name:var(--font-chinese)]">你好</span>, Minh Anh! <span aria-hidden="true">👋</span>
              </h1>
              <p className="mt-2 text-sm font-medium text-[var(--text-muted)] sm:text-base">
                Mỗi ngày một chút, tiếng Trung sẽ gần hơn rất nhiều.
              </p>
            </div>
            <div className="hidden items-center gap-2 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 shadow-[var(--shadow-card)] sm:flex">
              <span className="text-xl" aria-hidden="true">🌱</span>
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)]">Cấp độ hiện tại</p>
                <p className="text-sm font-extrabold">HSK 2 · Sơ cấp</p>
              </div>
            </div>
          </header>

          <div className="grid items-start gap-7 xl:grid-cols-[minmax(0,1fr)_340px]">
            <div className="min-w-0 space-y-8">
              <LessonHero />
              <PracticeList />
            </div>

            <aside className="grid gap-5 sm:grid-cols-2 xl:sticky xl:top-8 xl:grid-cols-1" aria-label="Tiến độ học tập">
              <WeeklyProgress />
              <LeaderboardPreview />
              <div className="sm:col-span-2 xl:col-span-1">
                <ConversationPreview />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
