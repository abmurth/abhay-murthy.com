import type { CSSProperties } from "react";

export const metadata = {
  title: "Work",
  description:
    "Projects and research by Abhay Murthy — computational neuroscience, CRISPR data analysis, machine learning, and policy work.",
};

/* ------------------------------------------------------------------ types */

type Project = {
  name: string;
  meta: string;
  blurb: string;
  topics: string[];
  url: string;
};

type Venue = {
  label: string;
  color: string;
  href?: string;
};

type Research = {
  title: string;
  org: string;
  period: string;
  status: string;
  blurb: string;
  topics: string[];
  venue?: Venue;
  link?: { href: string; label: string };
};

/* ------------------------------------------------------------------- data */

const projects: Project[] = [
  {
    name: "Cas9 Insertion Tolerance",
    meta: "Jupyter Notebook · Active · 2026",
    blurb:
      "Predicting which spots inside Cas9 — the protein behind CRISPR gene editing — can have a second protein tucked into them without breaking it. Trained on the position-by-position screen from Oakes et al., Nature Biotechnology (2016).",
    topics: ["CRISPR", "protein engineering", "data analysis"],
    url: "https://github.com/abmurth/cas9-insertion-tolerance",
  },
  {
    name: "Micrograd",
    meta: "Python · In progress · 2026",
    blurb:
      "A tiny neural network library written from scratch, with no outside libraries — rebuilding the math that lets a model learn from its own mistakes, to understand how it actually works.",
    topics: ["machine learning", "built from scratch"],
    url: "https://github.com/abmurth/micrograd",
  },
  {
    name: "TurnOn",
    meta: "Python · Shipped · 2024",
    blurb:
      "A model that listens for the phrase “turn on” and nothing else. Hooked up to a computer, it wakes the machine from sleep without anyone touching the keyboard.",
    topics: ["speech recognition", "audio", "deep learning"],
    url: "https://github.com/abmurth/TurnOn",
  },
];

const research: Research[] = [
  {
    title: "Cerebral Aneurysm Blood-Flow Simulation",
    org: "University of Wisconsin–Milwaukee (remote)",
    period: "Aug – Dec 2025",
    status: "Supervised by Dr. Roshan D'Souza",
    blurb:
      "Simulated how blood moves through a bulge in a brain artery, using computational fluid dynamics in ANSYS across different aneurysm geometries.",
    topics: ["fluid dynamics", "ANSYS", "biomedical engineering"],
  },
  {
    title:
      "A Multiscale Systems Biology Framework to Model mBDNF–proBDNF-Mediated Bifurcation Dynamics in CNS Neurotrophin Signaling",
    org: "Boston University, RISE program",
    period: "Jun – Aug 2025",
    status: "Presented at SfN 2025",
    blurb:
      "Built an ODE-based dynamical system to model BDNF signaling in the CNS to identify a potential biomarker for neurodegeneration.",
    topics: ["neuroscience", "mathematical modeling", "Python"],
    venue: {
      label: "Society for Neuroscience",
      color: "#7da9d8",
      href: "https://www.sfn.org/-/media/SfN/Documents/NEW-SfN/Meetings/Neuroscience-2025/Abstracts-and-Sessions/Abstract-PDFs/SFN25_Abstracts-PDF-LB_Final.pdf",
    },
    link: {
      href: "/sfn-2025-poster.png",
      label: "View the poster",
    },
  },
  {
    title: "The Rise of Online Gambling: What's at Stake?",
    org: "MathWorks Math Modeling Challenge · Liberty High School team",
    period: "2026",
    status: "Finalist — Top 6 of 770 · Outstanding Communication of Results",
    blurb:
      "Modeled the personal and financial fallout of online sports gambling for the U.S. Treasury. Estimated how much disposable income Americans actually have from federal spending data, then used statistical models to predict who is most likely to bet.",
    topics: ["mathematical modeling", "statistics", "economics"],
    venue: { label: "M3C", color: "#d4b06a" },
    link: {
      href: "https://m3challenge.siam.org/wp-content/uploads/19018.pdf",
      label: "Read the paper",
    },
  },
  {
    title: "What Makes a Ballon d'Or Winner",
    org: "University of Texas at Dallas",
    period: "Jun – Aug 2024",
    status: "Complete",
    blurb:
      "Constructed a comprehensive dataset of Ballon d'Or top three nominees. Found four defining factors of Ballon d'Or winners.",
    topics: ["statistics", "sports analytics", "datasets"],
  },
  {
    title: "Texas Senate Bill 203",
    org: "With Senator Jose Menendez, via TextbooksForTomorrow",
    period: "2025",
    status: "Filed — 89th Legislature",
    blurb:
      "Wrote, filed, and advocated for a Texas state bill alongside Senator Jose Menendez.",
    topics: ["policy", "legislation", "advocacy"],
  },
];

/* ------------------------------------------------------------- primitives */

function stagger(i: number): CSSProperties {
  return { "--stagger": i } as CSSProperties;
}

const PROJECT_OFFSET = 2;
const RESEARCH_OFFSET = PROJECT_OFFSET + projects.length + 2;

function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="rise border-t border-line py-6"
      style={stagger(PROJECT_OFFSET + index)}
    >
      <h3 className="text-[1.02rem] font-medium leading-snug">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-baseline gap-1.5 text-ink no-underline transition-colors hover:text-accent"
        >
          <span className="break-words">{project.name}</span>
          <span
            aria-hidden="true"
            className="text-faint transition-colors group-hover:text-accent"
          >
            ↗
          </span>
        </a>
      </h3>

      <p className="detail mt-1.5">{project.meta}</p>

      <p className="mt-3 max-w-[62ch] text-[0.92rem] leading-relaxed text-muted">
        {project.blurb}
      </p>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {project.topics.map((topic) => (
          <span key={topic} className="chip">
            {topic}
          </span>
        ))}
      </div>
    </article>
  );
}

function ResearchItem({ entry, index }: { entry: Research; index: number }) {
  return (
    <article
      className="rise border-t border-line py-6"
      style={stagger(RESEARCH_OFFSET + index)}
    >
      <h3 className="max-w-[54ch] text-[1.02rem] font-medium leading-snug text-ink">
        {entry.title}
      </h3>

      <p className="detail mt-2.5">
        {entry.org} · {entry.period}
      </p>
      <p className="detail mt-1 text-faint">{entry.status}</p>

      <p className="mt-3 max-w-[62ch] text-[0.92rem] leading-relaxed text-muted">
        {entry.blurb}
      </p>

      <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex flex-wrap gap-1.5">
          {entry.venue ? (
            entry.venue.href ? (
              <a
                href={entry.venue.href}
                target="_blank"
                rel="noreferrer"
                className="chip transition-opacity hover:opacity-80"
                style={{
                  color: entry.venue.color,
                  borderColor: `${entry.venue.color}55`,
                }}
              >
                {entry.venue.label} ↗
              </a>
            ) : (
              <span
                className="chip"
                style={{
                  color: entry.venue.color,
                  borderColor: `${entry.venue.color}55`,
                }}
              >
                {entry.venue.label}
              </span>
            )
          ) : null}
          {entry.topics.map((topic) => (
            <span key={topic} className="chip">
              {topic}
            </span>
          ))}
        </div>

        {entry.link ? (
          <a
            href={entry.link.href}
            target="_blank"
            rel="noreferrer"
            className="link text-[0.85rem]"
          >
            {entry.link.label} ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------- page */

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="rise" style={stagger(0)}>
        <h1 className="text-[clamp(1.9rem,6vw,2.5rem)] font-semibold leading-tight tracking-tight text-ink">
          Work
        </h1>
        <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-relaxed text-muted">
          Research, publications, and things I&apos;ve built.
        </p>
      </header>

      <section aria-labelledby="projects-heading">
        <div className="rise" style={stagger(1)}>
          <h2 className="label" id="projects-heading">
            Projects
          </h2>
        </div>

        <div className="mt-6">
          {projects.map((project, i) => (
            <ProjectItem key={project.name} project={project} index={i} />
          ))}
        </div>

        <p
          className="rise border-t border-line pt-6 text-[0.88rem]"
          style={stagger(PROJECT_OFFSET + projects.length)}
        >
          <a
            href="https://github.com/abmurth"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            See more on GitHub ↗
          </a>
        </p>
      </section>

      <section aria-labelledby="research-heading">
        <div className="rise" style={stagger(RESEARCH_OFFSET - 1)}>
          <h2 className="label" id="research-heading">
            Research
          </h2>
        </div>

        <div className="mt-6">
          {research.map((entry, i) => (
            <ResearchItem key={entry.title} entry={entry} index={i} />
          ))}
          <div className="border-t border-line" />
        </div>
      </section>
    </div>
  );
}
