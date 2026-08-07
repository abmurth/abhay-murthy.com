import type { CSSProperties } from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Courses",
  description:
    "Coursework of Abhay Murthy — first-semester bioengineering and business classes at UC Berkeley M.E.T., plus dual-credit and Stanford Online work from high school.",
};

/* ---------- content ---------- */

type Subject = "chem" | "bioe" | "business" | "math" | "ml";

const subjects: Record<Subject, { label: string; color: string }> = {
  chem: { label: "chem", color: "#6cc5cf" },
  bioe: { label: "bioe", color: "#8fb8a2" },
  business: { label: "bus", color: "#d4b06a" },
  math: { label: "math", color: "#7da9d8" },
  ml: { label: "ml", color: "#b39fd8" },
};

type Course = {
  code: string;
  name: string;
  subject: Subject;
};

const berkeleyCourses: Course[] = [
  {
    code: "CHEM 1A",
    name: "General Chemistry",
    subject: "chem",
  },
  {
    code: "CHEM 1AL",
    name: "General Chemistry Laboratory",
    subject: "chem",
  },
  {
    code: "BIOENG 10",
    name: "Introduction to Biomedicine for Engineers",
    subject: "bioe",
  },
  {
    code: "BIOENG 26",
    name: "Introduction to Bioengineering",
    subject: "bioe",
  },
  {
    code: "UGBA 10",
    name: "Principles of Business",
    subject: "business",
  },
  {
    code: "UGBA 196.1",
    name: "Special Topics: M.E.T. Introductory Topics",
    subject: "business",
  },
];

const highSchoolCourses: Course[] = [
  { code: "MATH 2415", name: "Multivariable Calculus", subject: "math" },
  { code: "MATH 2320", name: "Differential Equations", subject: "math" },
];

const stanfordCourses: Course[] = [
  { code: "ISLP", name: "Statistical Learning with Python", subject: "ml" },
];

/* ---------- page ---------- */

const stagger = (i: number) => ({ "--stagger": i } as CSSProperties);

function CourseRow({
  course,
  staggerIndex,
}: {
  course: Course;
  staggerIndex: number;
}) {
  const subject = subjects[course.subject];

  return (
    <li
      className="rise group -mx-3 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-md px-3 py-3 transition-colors duration-150 hover:bg-surface"
      style={stagger(staggerIndex)}
    >
      <span className="detail w-24 shrink-0">{course.code}</span>
      <span className="min-w-0 break-words text-[0.95rem] text-muted transition-colors duration-150 group-hover:text-ink">
        {course.name}
      </span>
      <span
        className="chip ml-auto shrink-0"
        style={{ color: subject.color, borderColor: `${subject.color}55` }}
      >
        {subject.label}
      </span>
    </li>
  );
}

function CourseSection({
  title,
  aside,
  current,
  courses,
  baseStagger,
}: {
  title: string;
  aside: string;
  current?: boolean;
  courses: Course[];
  baseStagger: number;
}) {
  return (
    <section aria-label={title}>
      <div
        className="rise flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3"
        style={stagger(baseStagger)}
      >
        <h2 className="label">{title}</h2>
        <span className="detail flex items-center gap-2">
          {current ? (
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          ) : null}
          {aside}
        </span>
      </div>

      <ul className="mt-2 divide-y divide-line">
        {courses.map((course, i) => (
          <CourseRow
            key={course.code}
            course={course}
            staggerIndex={baseStagger + 0.5 + i * 0.25}
          />
        ))}
      </ul>
    </section>
  );
}

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-14">
      <header className="rise" style={stagger(0)}>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Courses
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          What I&apos;m studying at Berkeley this fall, plus the college-level
          work I finished in high school.
        </p>
      </header>

      <CourseSection
        title="UC Berkeley · M.E.T. Program"
        aside="Fall 2026"
        current
        courses={berkeleyCourses}
        baseStagger={1}
      />

      <CourseSection
        title="Liberty High School (Collin College Dual Credit)"
        aside="Class of 2026"
        courses={highSchoolCourses}
        baseStagger={3.5}
      />

      <CourseSection
        title="Stanford Online"
        aside="2025"
        courses={stanfordCourses}
        baseStagger={5}
      />
    </div>
  );
}
