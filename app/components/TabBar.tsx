"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "home" },
  { href: "/experience", label: "experience" },
  { href: "/courses", label: "courses" },
  { href: "/work", label: "work" },
  { href: "/quotes", label: "quotes" },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[rgba(14,15,18,0.85)] backdrop-blur-md">
      <nav
        aria-label="Pages"
        className="mx-auto flex w-full max-w-[820px] items-center gap-1 overflow-x-auto px-3 sm:px-5"
        style={{ scrollbarWidth: "none" }}
      >
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`relative whitespace-nowrap px-3 py-3.5 text-[0.82rem] transition-colors ${
                active ? "text-ink" : "text-faint hover:text-muted"
              }`}
            >
              {tab.label}
              {active ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-0 h-px bg-ink"
                />
              ) : null}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
