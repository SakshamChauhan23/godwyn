const columns = [
  { label: "What We Build", href: "#what-we-build" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Born Inside Rouze", href: "#born-inside-rouze" },
  { label: "Pricing", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-12 border-b border-white/10 pb-12 sm:flex-row">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-extrabold text-white">
                G
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                godwyn
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              AI native workflows and platforms for SMB and mid market
              companies. Built to read, decide, create, and act.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            {columns.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                {c.label}
                <span aria-hidden className="text-xs">
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Godwyn.ai. All rights reserved.</p>
          <a
            href="https://rouze.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70"
          >
            The intelligence behind Rouze
          </a>
        </div>
      </div>
    </footer>
  );
}
