import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Sections, {
  type EducationEntry,
  type ExperienceEntry,
  type RecognitionEntry,
} from "./Sections";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Nonprofit founding, computational biology research, UC Berkeley M.E.T., and national recognition — the story so far.",
};

/* ---------- data ---------- */

const experience: ExperienceEntry[] = [
  {
    role: "Computational Biology (CFD) Researcher",
    org: "University of Wisconsin–Milwaukee",
    dates: "Aug 2025 – Dec 2025",
    location: "Remote",
    category: "research",
    body: "Simulated blood flow in brain aneurysm geometries with ANSYS. Supervised by Dr. Roshan D'Souza.",
    tags: ["ANSYS", "CFD", "aneurysm modeling"],
  },
  {
    role: "Computational Neurobiology Research Intern",
    org: "Boston University · RISE",
    dates: "Jun 2025 – Aug 2025",
    location: "Boston, MA",
    category: "research",
    body: "Modeled BDNF signaling with an ODE-based dynamical system in Python to identify a potential biomarker for neurodegeneration. Presented @ SfN 2025.",
    tags: ["Python", "ODE modeling", "BDNF", "SfN 2025"],
  },
  {
    role: "Co-Founder",
    org: "TextbooksForTomorrow · 501(c)(3)",
    dates: "Jul 2024 – Jul 2026",
    location: "Frisco, TX",
    category: "management",
    body: "~$65k worth of books donated to underprivileged kids and prisons in 4 countries. Led a team of 11 to engage 200+ volunteers. Authored, filed, and advocated TX SB203 with Texas Senator Jose Menendez.",
    tags: ["$65k donated", "4 countries", "200+ volunteers", "TX SB203"],
  },
  {
    role: "Data Analytics Research Intern",
    org: "University of Texas at Dallas",
    dates: "Jun 2024 – Aug 2024",
    location: "Richardson, TX",
    category: "research",
    body: "Constructed a comprehensive dataset of Ballon d'Or top-three nominees. Found four defining factors of Ballon d'Or winners.",
    tags: ["data analysis", "sports analytics"],
  },
  {
    role: "Student Mentor",
    org: "5C Leadership Foundation",
    dates: "Sep 2023 – May 2026",
    location: "Plano, TX",
    category: "management",
    body: "Organized 3 youth leadership forums with 300+ attendees, raising $6,500+ for Scottish Rite Dallas.",
    tags: ["3 forums", "300+ attendees", "$6.5k+ raised"],
  },
];

const recognition: RecognitionEntry[] = [
  {
    title: "Jane Street M3C International Finalist & Top Presenter",
    dates: "2026",
    body: "Top 6 out of 770. $5,500 prize.",
  },
  {
    title: "DECA ICDC 3rd Place Glass Winner (TTDM)",
    dates: "2025–26",
    body: "First in school history to win ICDC Glass. 3rd out of ~150k. 2x ICDC qualifier.",
  },
  {
    title: "BPA 2nd Place @ National Leadership Conference",
    dates: "2025",
    body: "SQL Database Programming. 2nd out of ~5,000.",
  },
  {
    title: "Authored Texas State Bill 203",
    dates: "2025",
    body: "In collaboration with Texas Senator Jose Menendez.",
  },
];

const education: EducationEntry[] = [
  {
    school: "UC Berkeley — M.E.T. Program",
    degree: "B.S. Bioengineering + B.S. Business Administration, Minor in EECS",
    dates: "Aug 2026 – May 2030",
    body: "A prestigious and highly selective dual-degree program (~1% acceptance rate) uniting UC Berkeley's College of Engineering with the Haas School of Business. Selected as one of approximately 50 students worldwide.",
    tags: ["~1% acceptance", "~50 students worldwide", "dual degree"],
  },
  {
    school: "Liberty High School",
    degree: "High School Diploma",
    dates: "Aug 2022 – May 2026",
    body: "Top 1% | GPA 4.0/4.0 | SAT: 1570. Varsity Soccer, DECA (Co-President), CS Club (VP of Curriculum), BPA, Math UIL, PTSA, Red Cross IHL, National Honor Society.",
    tags: ["Top 1%", "4.0 GPA", "1570 SAT"],
  },
];

/* ---------- page ---------- */

const stagger = (i: number) => ({ "--stagger": i } as CSSProperties);

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="rise" style={stagger(0)}>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Experience
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Roles I&apos;ve held and things I&apos;ve done.
        </p>
      </header>

      <Sections
        experience={experience}
        recognition={recognition}
        education={education}
      />
    </div>
  );
}
