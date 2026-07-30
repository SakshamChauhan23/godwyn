const stages = [
  {
    n: "01",
    title: "Blueprint",
    body: "We map the workflow end to end with your internal owner: inputs, judgment calls, current tools, and what success looks like measured.",
  },
  {
    n: "02",
    title: "Build",
    body: "We build the read, decide, create, act pipeline against your real data and real tools, not a sandbox demo.",
  },
  {
    n: "03",
    title: "Launch & own",
    body: "The system goes live inside your stack. You own the code, the data, and the outcome from day one.",
  },
  {
    n: "04",
    title: "Evolve",
    body: "As the workflow changes, we extend the system with it, so it keeps matching how the team actually works.",
  },
];

export default function EngagementModel() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Engagement model
        </p>
        <h2 className="mb-14 max-w-xl text-3xl font-extrabold uppercase leading-tight tracking-tightest sm:text-4xl">
          Four stages, one continuous build
        </h2>

        <div className="grid grid-cols-1 divide-y divide-black/10 border-t border-black/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {stages.map((stage) => (
            <div key={stage.n} className="px-2 py-8 first:pl-0 sm:px-8">
              <span className="mb-6 block text-xs font-bold text-accent">
                {stage.n}
              </span>
              <h3 className="mb-2 text-base font-extrabold uppercase tracking-wide">
                {stage.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/55">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
