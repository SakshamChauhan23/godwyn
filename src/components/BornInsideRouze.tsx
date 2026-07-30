export default function BornInsideRouze() {
  return (
    <section id="born-inside-rouze" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Born inside Rouze
        </p>
        <h2 className="mb-14 max-w-2xl text-3xl font-extrabold uppercase leading-tight tracking-tightest sm:text-4xl">
          The read, decide, create, act loop was proven in production
          before it had a name
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-8 lg:col-span-2">
            <p className="mb-6 text-lg leading-relaxed text-ink/80">
              Godwyn is the team that built Rouze, a deal intelligence
              platform that reads live sales conversations, decides what
              matters in them, and creates the next best action for the rep
              in real time. That system is the proof: the same architecture
              Godwyn now builds for other companies was first stress tested
              running its own product.
            </p>
            <a
              href="https://rouze.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              See Rouze
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-ink p-8 text-white">
            <p className="text-sm font-medium uppercase tracking-wide text-white/50">
              Built, not bought
            </p>
            <div>
              <p className="text-5xl font-extrabold text-accent">1</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                architecture, shipped first as a real product, now the
                foundation every Godwyn build starts from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
