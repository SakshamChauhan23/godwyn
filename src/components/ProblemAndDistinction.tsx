import { IconLayers, IconCpu } from "@/components/icons";

const cards = [
  {
    title: "Automation moves data",
    body: "Traditional automation connects point A to point B. It triggers on an event and passes a payload along. Useful, but it can't read context or make a call.",
    Icon: IconLayers,
  },
  {
    title: "Godwyn builds judgment",
    body: "Godwyn's systems read the same context a person would, decide what it means, create the output, and act. The full loop, not just the handoff.",
    Icon: IconCpu,
  },
];

export default function ProblemAndDistinction() {
  return (
    <section id="how-it-works" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          The distinction
        </p>

        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 lg:grid-cols-2">
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tightest sm:text-3xl lg:text-4xl">
            If your team still does this by hand every week, you already
            know what a workflow costs
          </h2>
          <p className="self-end text-base leading-relaxed text-white/60">
            Someone pulls the data, makes a judgment call, then types up the
            result. The same shape, over and over. Godwyn is built for
            exactly that gap between a task that repeats and a system smart
            enough to actually run it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:mt-0">
          {cards.map((card) => (
            <div key={card.title} className="bg-ink p-8 sm:p-10">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-accent">
                <card.Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
