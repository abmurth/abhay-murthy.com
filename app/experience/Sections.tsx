"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

/* ---------- types ---------- */

export type Category = "research" | "management";

export interface ExperienceEntry {
  role: string;
  org: string;
  orgSub?: string;
  dates: string;
  location?: string;
  category: Category;
  body: string;
  tags: string[];
}

export interface RecognitionEntry {
  title: string;
  dates: string;
  body: string;
}

export interface EducationEntry {
  school: string;
  degree: string;
  dates: string;
  body: string;
  tags: string[];
}

const categories: Record<Category, { label: string; color: string }> = {
  research: { label: "research", color: "#7da9d8" },
  management: { label: "management / industry", color: "#8b909a" },
};

const neutralDot = "#565b66";

const stagger = (i: number) => ({ "--stagger": i } as CSSProperties);

/* ---------- pieces ---------- */

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-open:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** Vertical rail that the entry dots sit on. */
function Rail({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-[3.5px] top-6 w-px bg-line"
      />
      {children}
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      aria-hidden="true"
      className="relative z-10 mt-[0.4rem] h-2 w-2 shrink-0 rounded-full outline outline-4 outline-bg"
      style={{ background: color }}
    />
  );
}

function DropdownItem({
  dotColor,
  title,
  titleSuffix,
  sub,
  dates,
  body,
  tags,
  index,
}: {
  dotColor: string;
  title: string;
  titleSuffix?: string;
  sub?: string;
  dates: string;
  body: string;
  tags?: string[];
  index: number;
}) {
  return (
    <details className="group rise" style={stagger(index)}>
      <summary className="flex cursor-pointer list-none items-start gap-4 py-5 [&::-webkit-details-marker]:hidden">
        <Dot color={dotColor} />
        <div className="min-w-0 flex-1">
          <p className="leading-snug">
            <span className="font-medium text-ink transition-colors group-hover:text-accent">
              {title}
            </span>
            {titleSuffix ? (
              <span className="text-sm text-muted"> · {titleSuffix}</span>
            ) : null}
          </p>
          {sub ? <p className="mt-0.5 text-sm text-faint">{sub}</p> : null}
          <p className="detail mt-1">{dates}</p>
        </div>
        <Chevron />
      </summary>

      <div className="pb-5 pl-6 pr-8">
        <p className="text-sm leading-relaxed text-muted">{body}</p>
        {tags && tags.length > 0 ? (
          <ul className="mt-3 flex list-none flex-wrap gap-1.5 p-0">
            {tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </details>
  );
}

/* ---------- tabbed sections ---------- */

type TabId = "roles" | "recognition" | "education";

const tabs: { id: TabId; label: string }[] = [
  { id: "roles", label: "roles" },
  { id: "recognition", label: "recognition" },
  { id: "education", label: "education" },
];

export default function Sections({
  experience,
  recognition,
  education,
}: {
  experience: ExperienceEntry[];
  recognition: RecognitionEntry[];
  education: EducationEntry[];
}) {
  const [active, setActive] = useState<TabId>("roles");

  return (
    <div>
      {/* sub-nav */}
      <nav aria-label="Experience sections" className="rise flex items-center gap-3 text-sm" style={stagger(1)}>
        {tabs.map((tab, i) => (
          <span key={tab.id} className="flex items-center gap-3">
            {i > 0 ? (
              <span aria-hidden="true" className="text-faint">
                |
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setActive(tab.id)}
              aria-current={active === tab.id ? "true" : undefined}
              className={`cursor-pointer border-b pb-0.5 transition-colors ${
                active === tab.id
                  ? "border-accent text-ink"
                  : "border-transparent text-faint hover:text-muted"
              }`}
            >
              {tab.label}
            </button>
          </span>
        ))}
      </nav>

      {/* key — only meaningful for roles */}
      {active === "roles" ? (
        <div className="rise mt-5 flex flex-wrap gap-x-6 gap-y-1.5" style={stagger(1.5)}>
          {(Object.keys(categories) as Category[]).map((key) => (
            <span key={key} className="detail flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ background: categories[key].color }}
              />
              {categories[key].label}
            </span>
          ))}
        </div>
      ) : null}

      {/* one section at a time; key remounts to replay the entrance */}
      <div key={active} className="mt-4">
        {active === "roles" ? (
          <Rail>
            {experience.map((entry, i) => (
              <DropdownItem
                key={entry.org}
                dotColor={categories[entry.category].color}
                title={entry.role}
                titleSuffix={entry.org}
                sub={entry.orgSub}
                dates={
                  entry.location
                    ? `${entry.dates} · ${entry.location}`
                    : entry.dates
                }
                body={entry.body}
                tags={entry.tags}
                index={i * 0.5}
              />
            ))}
          </Rail>
        ) : null}

        {active === "recognition" ? (
          <Rail>
            {recognition.map((award, i) => (
              <DropdownItem
                key={award.title}
                dotColor={neutralDot}
                title={award.title}
                dates={award.dates}
                body={award.body}
                index={i * 0.5}
              />
            ))}
          </Rail>
        ) : null}

        {active === "education" ? (
          <Rail>
            {education.map((entry, i) => (
              <DropdownItem
                key={entry.school}
                dotColor={neutralDot}
                title={entry.school}
                sub={entry.degree}
                dates={entry.dates}
                body={entry.body}
                tags={entry.tags}
                index={i * 0.5}
              />
            ))}
          </Rail>
        ) : null}
      </div>
    </div>
  );
}
