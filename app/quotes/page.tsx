import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Quotes",
  description: "Words worth keeping around.",
};

const stagger = (i: number) => ({ "--stagger": i } as CSSProperties);

// add quotes here as they earn their place
const quotes: { text: string; author?: string; source?: string }[] = [
  {
    text: "If your goals don't scare you, they aren't ambitious enough.",
  },
];

export default function QuotesPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="rise" style={stagger(0)}>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Quotes
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Words worth keeping around.
        </p>
      </header>

      <div className="flex flex-col gap-14">
        {quotes.map((quote, i) => (
          <figure key={quote.text} className="rise m-0" style={stagger(1 + i)}>
            <blockquote className="m-0">
              <p className="max-w-[30ch] text-[clamp(1.4rem,3.5vw,2rem)] font-medium leading-snug text-ink">
                &ldquo;{quote.text}&rdquo;
              </p>
            </blockquote>
            {quote.author ? (
              <figcaption className="mt-4 text-sm text-muted">
                &mdash; {quote.author}
                {quote.source ? (
                  <span className="text-faint"> · {quote.source}</span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}
