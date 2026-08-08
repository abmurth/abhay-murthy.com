import Image from "next/image";
import type { CSSProperties } from "react";

const stagger = (i: number) => ({ "--stagger": i }) as CSSProperties;

const updates: { year: string; text: string; detail?: string }[] = [
  {
    year: "Jul 2026",
    text: "YC Startup School",
  },
  {
    year: "Apr 2026",
    text: "M3 Finals Event at Jane Street",
    detail: "won Top Presenter + $5,500",
  },
  {
    year: "Nov 2025",
    text: "Society for Neuroscience Presentation",
  },
];

export default function Home() {
  return (
    <>
      {/* ---- hero ---- */}
      <section className="rise" style={stagger(0)}>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[33rem]">
            <h1 className="text-[2.1rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
              Hi <span aria-hidden="true" className="mx-1">&#x1F44B;</span>{" "}
              I&apos;m Abhay,
            </h1>
            <p className="mt-4 leading-relaxed text-muted">
              an incoming freshman at UC Berkeley studying Bioengineering,
              EECS, and Business in the{" "}
              <a
                href="https://met.berkeley.edu"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                M.E.T. Program
              </a>
              .
            </p>
            <div className="mt-7 space-y-4 text-[0.95rem] leading-[1.75] text-muted">
              <p>
                I&apos;m interested in working on problems in BioML, neural
                modeling, and product development to advance healthcare &mdash;
                both the treatments we build and the ways they actually reach
                people. Recently, I modeled BDNF signaling in the CNS to find
                a preliminary biomarker for neurodegeneration, which was
                presented at the{" "}
                <a
                  href="https://www.sfn.org/meetings/neuroscience-2025"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Society for Neuroscience Annual Meeting 2025
                </a>
                .
              </p>
              <p>
                Throughout high school, I dabbled in a variety of competitions;
                notably, I was a Finalist in the Jane Street&ndash;sponsored{" "}
                <a
                  href="https://m3challenge.siam.org"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  MathWorks Math Modeling Challenge
                </a>
                , a{" "}
                <a
                  href="https://www.deca.org"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  DECA
                </a>{" "}
                ICDC Winner, and a{" "}
                <a
                  href="https://bpa.org"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  BPA
                </a>{" "}
                Nationals Winner for the SQL programming event.
              </p>
            </div>
          </div>

          <figure className="shrink-0 sm:pt-2">
            <Image
              src="/abhay_headshot_new.jpg"
              alt="Abhay Murthy"
              width={2560}
              height={3072}
              preload
              quality={95}
              sizes="(min-width: 640px) 13rem, 11rem"
              className="aspect-[5/6] w-44 rounded-2xl object-cover object-center sm:w-52"
            />
          </figure>
        </div>
      </section>

      {/* ---- highlights ---- */}
      <section className="rise mt-16" style={stagger(2)}>
        <h2 className="label">Recent Updates</h2>
        <ul className="mt-5 space-y-4">
          {updates.map((item) => (
            <li key={item.text} className="flex items-baseline gap-4">
              <span className="detail w-16 shrink-0 text-right">
                {item.year}
              </span>
              <p className="min-w-0 text-[0.95rem] leading-relaxed text-ink">
                {item.text}
                {item.detail ? (
                  <span className="text-muted"> &mdash; {item.detail}</span>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- sign-off ---- */}
      <p className="rise mt-16 text-sm text-muted" style={stagger(3)}>
        Say hi through the links below.
      </p>
    </>
  );
}
