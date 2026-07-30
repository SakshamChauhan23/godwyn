"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const words = ["marketers", "agencies", "founders", "companies"];

const cards = [
  {
    art: "signal",
    title: "No more manual reporting",
    body: "Godwyn reads the data and drafts the update before you've opened the dashboard.",
    detail:
      "It pulls from the tools your team already uses, reconciles the numbers, and writes the summary in the format you already circulate. Ready to review, not ready to be built.",
  },
  {
    art: "pipeline",
    title: "Judgment, not just automation",
    body: "Decisions get made the way your internal owner already makes them.",
    detail:
      "Blueprint maps how your internal owner actually reasons through the process, so the system's judgment matches theirs instead of applying generic rules.",
  },
  {
    art: "orbit",
    title: "Evolves with the workflow",
    body: "As the process changes, the system changes with it instead of falling behind.",
    detail:
      "Evolve keeps the system extended as your process shifts, so it doesn't quietly go stale the way a one time script or dashboard would.",
  },
] as const;

export default function Why() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const activeWord = words[index];

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-14 flex flex-wrap items-baseline gap-x-3 text-3xl font-extrabold uppercase leading-tight tracking-tightest sm:text-4xl lg:text-5xl">
          <span>Why</span>
          <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeWord}
                initial={{ y: "60%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-60%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-block whitespace-nowrap text-accent"
              >
                {activeWord}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>choose godwyn</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <FlipCard
              key={card.title}
              art={card.art}
              title={card.title}
              body={card.body}
              detail={card.detail}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {words.map((w, i) => (
            <button
              key={w}
              aria-label={`Show ${w}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({
  art,
  title,
  body,
  detail,
}: {
  art: (typeof cards)[number]["art"];
  title: string;
  body: string;
  detail: string;
}) {
  return (
    <div className="group h-[340px] [perspective:1400px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-2xl bg-ink [backface-visibility:hidden]">
          <CardArt variant={art} />
          <div className="relative z-10 p-7">
            <h3 className="mb-2 text-lg font-extrabold uppercase tracking-wide text-white">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-white/55">{body}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-accent/30 bg-ink p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent">
            ✦
          </span>
          <div>
            <h3 className="mb-2 text-lg font-extrabold uppercase tracking-wide text-white">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-white/60">{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardArt({ variant }: { variant: (typeof cards)[number]["art"] }) {
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={`fade-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b0b0d" stopOpacity="0" />
          <stop offset="100%" stopColor="#0b0b0d" stopOpacity="1" />
        </linearGradient>
        <radialGradient id={`glow-${variant}`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="#0b0b0d" />
      <rect width="400" height="260" fill={`url(#glow-${variant})`} />

      {variant === "signal" &&
        Array.from({ length: 6 }).map((_, i) => {
          const y = 40 + i * 28;
          const amp = 14 + (i % 3) * 6;
          return (
            <path
              key={i}
              d={`M0,${y} Q 100,${y - amp} 200,${y} T 400,${y}`}
              fill="none"
              stroke="#a78bfa"
              strokeWidth="1.2"
              opacity={0.2 + (i % 4) * 0.12}
            />
          );
        })}

      {variant === "pipeline" && (
        <g stroke="#a78bfa" strokeWidth="1.4" fill="none">
          <path d="M20,60 H140" opacity="0.5" />
          <path d="M140,60 V140" opacity="0.5" />
          <path d="M140,140 H260" opacity="0.5" />
          <path d="M260,140 V60" opacity="0.5" />
          <path d="M260,60 H380" opacity="0.5" />
          {[
            [20, 60],
            [140, 60],
            [140, 140],
            [260, 140],
            [260, 60],
            [380, 60],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={5} fill="#7c3aed" opacity={0.8} />
          ))}
        </g>
      )}

      {variant === "orbit" && (
        <g fill="none" stroke="#a78bfa">
          <circle cx="200" cy="100" r="30" strokeWidth="1.2" opacity="0.5" />
          <circle cx="200" cy="100" r="65" strokeWidth="1" opacity="0.35" />
          <circle cx="200" cy="100" r="100" strokeWidth="0.8" opacity="0.2" />
          <circle cx="200" cy="100" r="5" fill="#7c3aed" stroke="none" />
          <circle cx="265" cy="100" r="4" fill="#a78bfa" stroke="none" />
          <circle cx="200" cy="35" r="3" fill="#a78bfa" stroke="none" />
        </g>
      )}

      <rect width="400" height="260" fill={`url(#fade-${variant})`} />
    </svg>
  );
}
