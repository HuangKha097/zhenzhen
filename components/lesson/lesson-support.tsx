import {
  CheckCircle2,
  FileText,
  MessageCircleHeart,
  Target,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const learningGoals = [
  "Nhận biết 12 từ về sinh hoạt hằng ngày",
  "Sắp xếp hoạt động theo trình tự thời gian",
  "Kể ngắn gọn về một ngày của em",
];

export function LearningGoals() {
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-[var(--bg-surface)] py-0 ring-1 ring-[var(--border-default)] shadow-[var(--shadow-card)]">
      <CardHeader className="px-5 pb-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent-secondary-strong)]">
              Sau bài học này
            </p>
            <CardTitle className="mt-1 text-xl font-black tracking-[-0.03em]">Mục tiêu của em</CardTitle>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--bg-secondary-soft)] text-[var(--accent-secondary-strong)]">
            <Target className="size-6" aria-hidden="true" />
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <ul className="space-y-3">
          {learningGoals.map((goal) => (
            <li key={goal} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--accent-primary-strong)]" aria-hidden="true" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function TeacherNote() {
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-[var(--bg-streak-soft)] py-0 ring-0 shadow-[var(--shadow-card)]">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--bg-surface)] text-[var(--accent-streak-strong)]">
            <MessageCircleHeart className="size-6" aria-hidden="true" />
          </span>
          <div>
            <p className="font-extrabold text-[var(--text-primary)]">Lời nhắn từ giáo viên</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              Nhớ đọc thành tiếng từng câu và chú ý thanh điệu trước khi ghi âm nhé!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function LessonResource() {
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-[var(--bg-surface)] py-0 ring-1 ring-[var(--border-default)] shadow-[var(--shadow-card)]">
      <CardHeader className="px-5 pb-3 pt-5">
        <CardTitle className="text-lg font-black tracking-[-0.02em]">Tài liệu buổi học</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="flex items-center gap-3 rounded-2xl bg-[var(--bg-subtle)] p-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--bg-surface)] text-[var(--accent-secondary-strong)]">
            <FileText className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-extrabold text-[var(--text-primary)]">Từ vựng · Bài 04</p>
            <p className="mt-1 text-xs font-medium text-[var(--text-muted)]">Tài liệu mẫu · PDF</p>
          </div>
          <span className="rounded-full bg-[var(--bg-surface)] px-2.5 py-1 text-[0.65rem] font-extrabold text-[var(--text-muted)]">
            Xem trước
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
