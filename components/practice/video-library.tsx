import {
  CalendarDays,
  Clock3,
  LibraryBig,
  Play,
  Sparkles,
  Video,
} from "lucide-react";

import { Card } from "@/components/ui/card";

type VideoPost = {
  title: string;
  topic: string;
  description: string;
  duration: string;
  postedAt: string;
  chineseMark: string;
  tone: "primary" | "secondary" | "streak" | "violet";
};

const videoPosts: VideoPost[] = [
  {
    title: "Buổi sáng của em",
    topic: "Sinh hoạt hằng ngày",
    description: "Nghe đoạn hội thoại ngắn và ghi nhớ cách kể các hoạt động buổi sáng.",
    duration: "08:24",
    postedAt: "Hôm qua",
    chineseMark: "早",
    tone: "secondary",
  },
  {
    title: "Hỏi giờ trong tiếng Trung",
    topic: "Thời gian",
    description: "Ôn cách hỏi giờ, trả lời giờ và dùng các mốc thời gian trong ngày.",
    duration: "10:12",
    postedAt: "08/09/2026",
    chineseMark: "时",
    tone: "primary",
  },
  {
    title: "Luyện thanh điệu cùng cô",
    topic: "Phát âm",
    description: "Phân biệt bốn thanh điệu qua những cặp từ thường gặp ở trình độ HSK 2.",
    duration: "06:48",
    postedAt: "06/09/2026",
    chineseMark: "声",
    tone: "streak",
  },
  {
    title: "Mua đồ ở cửa hàng",
    topic: "Giao tiếp",
    description: "Theo dõi hội thoại mẫu về số lượng, giá tiền và cách hỏi mua đồ.",
    duration: "11:05",
    postedAt: "03/09/2026",
    chineseMark: "买",
    tone: "violet",
  },
  {
    title: "Từ vựng về gia đình",
    topic: "Từ vựng",
    description: "Học cách giới thiệu các thành viên trong gia đình bằng câu ngắn, dễ nhớ.",
    duration: "07:36",
    postedAt: "31/08/2026",
    chineseMark: "家",
    tone: "primary",
  },
  {
    title: "Ôn tập bài 03",
    topic: "Bài ôn tập",
    description: "Tổng hợp mẫu câu và từ mới quan trọng trước khi chuyển sang bài tiếp theo.",
    duration: "13:20",
    postedAt: "28/08/2026",
    chineseMark: "习",
    tone: "secondary",
  },
];

const toneClasses: Record<VideoPost["tone"], string> = {
  primary: "bg-[var(--bg-primary-soft)] text-[var(--accent-primary-strong)]",
  secondary: "bg-[var(--bg-secondary-soft)] text-[var(--accent-secondary-strong)]",
  streak: "bg-[var(--bg-streak-soft)] text-[var(--accent-streak-strong)]",
  violet: "bg-[var(--bg-violet-soft)] text-[var(--accent-violet)]",
};

export function FeaturedVideo() {
  return (
    <Card className="grid gap-0 overflow-hidden rounded-3xl border-0 bg-[var(--bg-surface)] p-0 ring-1 ring-[var(--border-default)] shadow-[var(--shadow-card)] lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
      <div className="relative isolate min-h-72 overflow-hidden bg-[var(--text-primary)] p-6 sm:min-h-80 sm:p-8">
        <div className="pointer-events-none absolute -left-20 -top-28 size-72 rounded-full bg-[var(--accent-secondary)]/25" />
        <div className="pointer-events-none absolute -bottom-36 right-6 size-80 rounded-full bg-[var(--accent-primary)]/25" />

        <div className="relative flex h-full min-h-60 flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-surface)]/12 px-3 py-1.5 text-xs font-extrabold tracking-wide text-[var(--bg-surface)]">
              <Sparkles className="size-4" aria-hidden="true" />
              VIDEO NỔI BẬT
            </span>
            <span className="rounded-xl bg-[var(--text-primary)]/75 px-3 py-1.5 text-xs font-extrabold text-[var(--bg-surface)]">
              12:48
            </span>
          </div>

          <div className="grid place-items-center" aria-hidden="true">
            <span className="grid size-20 place-items-center rounded-full bg-[var(--bg-surface)] text-[var(--accent-primary-strong)] shadow-[var(--shadow-floating)]">
              <Play className="ml-1 size-8 fill-current" />
            </span>
          </div>

          <div className="flex items-end justify-between gap-4 text-[var(--bg-surface)]">
            <div>
              <p className="text-xs font-bold text-[var(--bg-surface)]/65">BÀI 04 · SINH HOẠT HẰNG NGÀY</p>
              <p className="mt-1 font-[family-name:var(--font-chinese)] text-4xl font-black">我的一天</p>
            </div>
            <span className="font-[family-name:var(--font-chinese)] text-6xl font-black text-[var(--bg-surface)]/12">日</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-primary-strong)]">Cô giáo vừa đăng</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--text-primary)] sm:text-3xl">
          Nghe và nói: Một ngày của em
        </h2>
        <p className="mt-3 text-sm font-medium leading-6 text-[var(--text-muted)]">
          Xem hội thoại mẫu, nghe cách nối câu và luyện kể lại lịch sinh hoạt trong một ngày.
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-[var(--border-default)] pt-5">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--bg-primary-soft)] text-sm font-black text-[var(--accent-primary-strong)]">
            CT
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold text-[var(--text-primary)]">Cô Thanh</p>
            <p className="mt-0.5 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                Hôm nay
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5" aria-hidden="true" />
                12 phút
              </span>
            </p>
          </div>
        </div>

        <p className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[var(--bg-subtle)] px-4 py-3 text-xs font-semibold leading-5 text-[var(--text-muted)]">
          <Video className="size-4 shrink-0 text-[var(--accent-secondary-strong)]" aria-hidden="true" />
          Trình phát video sẽ được kết nối ở bước triển khai nội dung.
        </p>
      </div>
    </Card>
  );
}

function VideoCard({ video }: { video: VideoPost }) {
  return (
    <Card className="group gap-0 overflow-hidden rounded-3xl border-0 bg-[var(--bg-surface)] p-0 ring-1 ring-[var(--border-default)] shadow-[var(--shadow-card)]">
      <div className={`relative isolate flex aspect-video items-center justify-center overflow-hidden ${toneClasses[video.tone]}`}>
        <span className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-current opacity-[0.07]" />
        <span className="pointer-events-none absolute -bottom-20 -left-10 size-44 rounded-full bg-current opacity-[0.06]" />
        <span className="font-[family-name:var(--font-chinese)] text-7xl font-black opacity-30" aria-hidden="true">
          {video.chineseMark}
        </span>
        <span className="absolute inset-0 grid place-items-center" aria-hidden="true">
          <span className="grid size-14 place-items-center rounded-full bg-[var(--bg-surface)]/95 shadow-[var(--shadow-button)] transition-transform duration-200 group-hover:scale-105">
            <Play className="ml-0.5 size-5 fill-current" />
          </span>
        </span>
        <span className="absolute bottom-3 right-3 rounded-lg bg-[var(--text-primary)]/80 px-2 py-1 text-[0.7rem] font-extrabold text-[var(--bg-surface)]">
          {video.duration}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-[var(--accent-secondary-strong)]">{video.topic}</p>
        <h3 className="mt-1.5 text-lg font-black tracking-[-0.02em] text-[var(--text-primary)]">{video.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{video.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--border-default)] pt-4">
          <span className="inline-flex min-w-0 items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--bg-primary-soft)] text-[0.65rem] font-black text-[var(--accent-primary-strong)]">
              CT
            </span>
            <span className="truncate">Cô Thanh</span>
          </span>
          <span className="shrink-0 text-xs font-semibold text-[var(--text-muted)]">{video.postedAt}</span>
        </div>
      </div>
    </Card>
  );
}

export function VideoLibrary() {
  return (
    <section aria-labelledby="video-library-heading">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-primary-strong)]">
            <LibraryBig className="size-4" aria-hidden="true" />
            Thư viện của lớp
          </p>
          <h2 id="video-library-heading" className="mt-1 text-2xl font-black tracking-[-0.03em] text-[var(--text-primary)]">
            Video mới đăng
          </h2>
        </div>
        <span className="rounded-full bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-bold text-[var(--text-muted)] ring-1 ring-[var(--border-default)]">
          6 video
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {videoPosts.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
    </section>
  );
}
