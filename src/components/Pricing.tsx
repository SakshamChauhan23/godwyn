const tiers = [
  {
    name: "Blueprint",
    price: "$2,900",
    period: "one time",
    desc: "A scoped workflow map and technical plan before any build starts.",
    features: [
      "Workflow discovery with your internal owner",
      "Data and systems audit",
      "Read / decide / create / act architecture",
      "Fixed scope proposal for the Build phase",
    ],
    cta: "Start a Blueprint",
    featured: false,
  },
  {
    name: "Build",
    price: "$14,500",
    period: "per workflow",
    desc: "The full pipeline, built against your real data and shipped into your stack.",
    features: [
      "End to end read, decide, create, act system",
      "Integrated with your existing tools",
      "You own the code and the data",
      "Launch support included",
    ],
    cta: "Show Us the Workflow",
    featured: true,
  },
  {
    name: "Evolve",
    price: "$1,800",
    period: "monthly",
    desc: "Ongoing extension and maintenance as the workflow changes.",
    features: [
      "Monitoring and reliability",
      "Changes as the process evolves",
      "Priority support",
      "Cancel anytime, never locked in",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Pricing
            </p>
            <h2 className="max-w-xl text-3xl font-extrabold uppercase leading-tight tracking-tightest sm:text-4xl">
              Fixed scope, not billed hours
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Three engagements that map to the build lifecycle: plan it,
            build it, keep it running.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-2xl border p-8 ${
                tier.featured
                  ? "border-accent bg-accent/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div>
                <h3 className="mb-1 text-lg font-extrabold uppercase tracking-wide">
                  {tier.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/55">
                  {tier.desc}
                </p>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">
                    {tier.price}
                  </span>
                  <span className="text-sm text-white/50">
                    {tier.period}
                  </span>
                </div>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-0.5 text-accent">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#intake"
                className={`inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                {tier.cta}
                <span aria-hidden>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
