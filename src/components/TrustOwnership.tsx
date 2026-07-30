const principles = [
  {
    title: "Your data stays yours",
    body: "Nothing we build trains a shared model or leaves your environment without a documented reason you approved.",
  },
  {
    title: "You own the system",
    body: "The code, the pipeline, and the outcome belong to you at launch, not to a platform you keep renting.",
  },
  {
    title: "Not locked in",
    body: "Evolve is a subscription for ongoing changes, not a requirement to keep the system running.",
  },
];

export default function TrustOwnership() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Trust &amp; ownership
        </p>
        <h2 className="mb-14 max-w-xl text-3xl font-extrabold uppercase leading-tight tracking-tightest sm:text-4xl">
          What we build is yours, from day one
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="mb-3 text-base font-extrabold uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/55">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
