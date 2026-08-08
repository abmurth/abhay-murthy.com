import { MapPin } from "lucide-react";

const socials = [
  { href: "https://github.com/abmurth", label: "github" },
  { href: "https://www.linkedin.com/in/abhay-murthy", label: "linkedin" },
  { href: "https://www.instagram.com/abhaymuurthy", label: "instagram" },
  { href: "mailto:abhaymurthy1@gmail.com", label: "email" },
];

export default function StatusBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-[var(--header-bg)] text-[0.7rem] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[820px] items-center justify-between gap-3 overflow-x-auto px-3 py-1.5 sm:px-5">
        <span className="hidden shrink-0 items-center gap-1 font-mono text-muted sm:flex">
          <MapPin size={11} aria-hidden="true" />
          frisco, tx → berkeley, ca
        </span>

        <nav aria-label="Social links" className="flex items-center gap-3 font-mono">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <span className="hidden shrink-0 font-mono text-faint md:inline">© 2026</span>
      </div>
    </footer>
  );
}
