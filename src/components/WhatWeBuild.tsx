"use client";

import { motion, type Variants } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Read",
    tag: "Ingest",
    body: "Pulls in the same messy, real world inputs a person would: emails, records, transcripts, spreadsheets.",
  },
  {
    n: "02",
    title: "Decide",
    tag: "Judgment",
    body: "Applies the judgment your internal owner uses today: what matters, what's urgent, what's next.",
  },
  {
    n: "03",
    title: "Create",
    tag: "Output",
    body: "Produces the real output (a draft, a summary, a plan) in the format your team already works in.",
  },
  {
    n: "04",
    title: "Act",
    tag: "Close the loop",
    body: "Pushes the result into your existing tools instead of leaving a task for someone to finish by hand.",
  },
];

const STEP_GAP = 0.22;
const STEP_START = 0.15;

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: steps.length * STEP_GAP, ease: "easeInOut" },
  },
};

const verticalLineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: steps.length * STEP_GAP, ease: "easeInOut" },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: STEP_START + i * STEP_GAP, duration: 0.45, ease: "backOut" },
  }),
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: STEP_START + i * STEP_GAP + 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What we build
            </p>
            <h2 className="max-w-xl text-3xl font-extrabold uppercase leading-tight tracking-tightest sm:text-4xl">
              A working <span className="text-accent">system</span>, not an
              AI presentation
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            Every Godwyn build runs the same pipeline: read the context,
            decide what it means, create the output, act on it. No step is
            optional and no step is a human waiting on a dashboard.
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white px-6 py-10 sm:px-10 sm:py-12">
          {/* Desktop / tablet horizontal timeline */}
          <div className="relative hidden pb-6 sm:block">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={lineVariants}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 top-[38px] h-[3px] rounded-full bg-gradient-to-r from-accent via-accent to-accent/40"
            />

            <div className="relative grid grid-cols-4">
              {steps.map((step, i) => (
                <div key={step.n} className="flex flex-col items-center px-3 text-center">
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={i}
                    variants={textVariants}
                    className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent"
                  >
                    {step.tag}
                  </motion.span>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={i}
                    variants={nodeVariants}
                    className="relative z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border-[3px] border-accent bg-background text-xs font-extrabold text-accent"
                  >
                    {step.n}
                  </motion.div>
                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={i}
                    variants={textVariants}
                    className="mt-6 text-lg font-extrabold uppercase tracking-wide"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={i}
                    variants={textVariants}
                    className="mt-2 max-w-[13rem] text-sm leading-relaxed text-ink/55"
                  >
                    {step.body}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="relative flex flex-col gap-10 sm:hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={verticalLineVariants}
              style={{ transformOrigin: "top" }}
              className="absolute left-[18px] top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-accent via-accent to-accent/40"
            />
            {steps.map((step, i) => (
              <div key={step.n} className="relative flex gap-5 pl-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                  custom={i}
                  variants={nodeVariants}
                  className="relative z-10 flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full border-[3px] border-accent bg-background text-xs font-extrabold text-accent"
                >
                  {step.n}
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                  custom={i}
                  variants={textVariants}
                >
                  <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent">
                    {step.tag}
                  </span>
                  <h3 className="text-lg font-extrabold uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {step.body}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
