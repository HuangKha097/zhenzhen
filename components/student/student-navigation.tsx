import {
  BookOpenText,
  Flame,
  Headphones,
  Home,
  Medal,
  MessageCircleMore,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export type StudentNavigationItem =
  | "home"
  | "lessons"
  | "practice"
  | "conversation"
  | "ranking";

type NavigationItem = {
  id: StudentNavigationItem;
  label: string;
  href: string;
  icon: LucideIcon;
};

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Trang chủ", href: "/", icon: Home },
  { id: "lessons", label: "Bài học", href: "/lesson", icon: BookOpenText },
  { id: "practice", label: "Luyện tập", href: "/practice", icon: Headphones },
  { id: "conversation", label: "Trò chuyện", href: "/#conversation", icon: MessageCircleMore },
  { id: "ranking", label: "Xếp hạng", href: "/#ranking", icon: Medal },
];

function BrandMark() {
  return (
    <Link
      href="/"
      className="group inline-flex min-h-11 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-secondary)]/35"
      aria-label="ZhenZhen - về trang chủ"
    >
      <span className="grid size-11 rotate-[-4deg] place-items-center rounded-2xl bg-[var(--accent-primary)] text-xl font-black text-[var(--bg-surface)] shadow-[var(--shadow-button)] transition-transform group-hover:rotate-0">
        真
      </span>
      <span className="text-xl font-black tracking-[-0.04em] text-[var(--text-primary)]">
        Zhen<span className="text-[var(--accent-primary-strong)]">Zhen</span>
      </span>
    </Link>
  );
}

export function DesktopNavigation({ activeItem }: { activeItem: StudentNavigationItem }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-7 lg:flex">
      <div className="px-2">
        <BrandMark />
      </div>

      <nav className="mt-10" aria-label="Điều hướng chính">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeItem;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-secondary)]/35 ${
                    isActive
                      ? "bg-[var(--bg-primary-soft)] text-[var(--accent-primary-strong)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Icon className="size-5" strokeWidth={2.4} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto space-y-4">
        <div className="rounded-2xl bg-[var(--bg-streak-soft)] p-4">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-[var(--bg-surface)] text-xl shadow-sm" aria-hidden="true">
              🔥
            </span>
            <div>
              <p className="font-extrabold text-[var(--text-primary)]">7 ngày liên tiếp</p>
              <p className="mt-0.5 text-xs font-medium text-[var(--text-muted)]">Cứ thế phát huy nhé!</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-[var(--border-default)] px-1 pt-4">
          <span className="grid size-11 place-items-center rounded-full bg-[var(--bg-secondary-soft)] text-sm font-black text-[var(--accent-secondary-strong)]">
            MA
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold text-[var(--text-primary)]">Minh Anh</p>
            <p className="truncate text-xs text-[var(--text-muted)]">Lớp HSK 2</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-[var(--border-default)] bg-[var(--bg-surface)]/95 px-5 backdrop-blur lg:hidden">
      <BrandMark />
      <div className="flex items-center gap-2 rounded-xl bg-[var(--bg-streak-soft)] px-3 py-2 text-sm font-extrabold text-[var(--accent-streak-strong)]">
        <Flame className="size-4 fill-current" aria-hidden="true" />
        <span>7</span>
      </div>
    </header>
  );
}

export function MobileNavigation({ activeItem }: { activeItem: StudentNavigationItem }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border-default)] bg-[var(--bg-surface)]/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden" aria-label="Điều hướng di động">
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[0.65rem] font-bold focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--accent-secondary)]/35 ${
                  isActive
                    ? "text-[var(--accent-primary-strong)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                <Icon className="size-5" strokeWidth={2.35} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function StudentNavigation({ activeItem = "home" }: { activeItem?: StudentNavigationItem }) {
  return (
    <>
      <DesktopNavigation activeItem={activeItem} />
      <MobileHeader />
      <MobileNavigation activeItem={activeItem} />
    </>
  );
}
