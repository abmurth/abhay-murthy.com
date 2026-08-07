"use client";

import { useEffect, useState } from "react";
import { Shuffle } from "lucide-react";

export type Quote = {
  text: string;
  author: string;
  source?: string;
};

export default function FeaturedQuote({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0);

  // deterministic "quote of the day" — resolves on the client so the
  // server-rendered HTML (index 0) always matches at hydration.
  useEffect(() => {
    // scheduled instead of set synchronously (react-hooks/set-state-in-effect)
    const timer = setTimeout(() => {
      const now = new Date();
      const dayOfYear = Math.floor(
        (Date.now() - Date.UTC(now.getUTCFullYear(), 0, 0)) / 86_400_000,
      );
      setIndex(dayOfYear % quotes.length);
    }, 0);
    return () => clearTimeout(timer);
  }, [quotes.length]);

  const shuffle = () => {
    setIndex((current) => {
      if (quotes.length < 2) return current;
      let next = current;
      while (next === current) {
        next = Math.floor(Math.random() * quotes.length);
      }
      return next;
    });
  };

  const quote = quotes[index];

  return (
    <section
      aria-label="Quote of the day"
      className="rounded-lg border border-line px-5 py-6 sm:px-7 sm:py-7"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="label">Quote of the day</span>
        <button
          type="button"
          onClick={shuffle}
          className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-[0.75rem] text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Shuffle aria-hidden="true" className="h-3 w-3" />
          shuffle
        </button>
      </div>

      {/* key re-triggers the .rise entrance on shuffle; globals.css
          disables the animation under prefers-reduced-motion */}
      <figure key={index} className="rise m-0 mt-5">
        <blockquote className="m-0">
          <p className="m-0 text-[clamp(1.2rem,3vw,1.55rem)] font-medium leading-snug text-ink">
            &ldquo;{quote.text}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-4 text-[0.82rem] text-muted">
          — {quote.author}
          {quote.source ? (
            <span className="text-faint"> · {quote.source}</span>
          ) : null}
        </figcaption>
      </figure>
    </section>
  );
}
