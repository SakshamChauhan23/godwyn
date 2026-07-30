const links = [
  { href: "#what-we-build", label: "What We Build" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#born-inside-rouze", label: "Born Inside Rouze" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-sm font-extrabold text-white">
            G
          </span>
          <span className="text-lg font-extrabold tracking-tight">godwyn</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#intake"
          className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90 lg:inline-flex"
        >
          Show Us the Workflow
          <span aria-hidden>↗</span>
        </a>

        <a
          href="#intake"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-white lg:hidden"
        >
          Get Started ↗
        </a>
      </div>
    </header>
  );
}
