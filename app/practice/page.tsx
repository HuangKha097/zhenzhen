import { LibraryBig } from "lucide-react";

import { FeaturedVideo, VideoLibrary } from "@/components/practice/video-library";
import { StudentNavigation } from "@/components/student/student-navigation";

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <StudentNavigation activeItem="practice" />

      <main className="pb-24 lg:ml-64 lg:pb-0">
        <div className="mx-auto max-w-[1480px] px-4 py-7 sm:px-6 sm:py-9 lg:px-10 xl:px-12">
          <header className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-secondary-strong)]">
                <LibraryBig className="size-4" aria-hidden="true" />
                Góc luyện tập
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl">
                Video từ cô giáo
              </h1>
              <p className="mt-2 text-sm font-medium leading-6 text-[var(--text-muted)] sm:text-base">
                Xem lại bài giảng, hội thoại mẫu và các video luyện phát âm cô đã đăng cho lớp HSK 2.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--bg-primary-soft)] px-4 py-3 text-sm font-bold text-[var(--accent-primary-strong)]">
              Cập nhật mới nhất · Hôm nay
            </div>
          </header>

          <FeaturedVideo />

          <div className="mt-9">
            <VideoLibrary />
          </div>
        </div>
      </main>
    </div>
  );
}
