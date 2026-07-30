"use client";

import { motion, type Variants } from "motion/react";
import { IconRead, IconDecide, IconCreate, IconAct } from "@/components/icons";

const steps = [
  { label: "Read", Icon: IconRead },
  { label: "Decide", Icon: IconDecide },
  { label: "Create", Icon: IconCreate },
  { label: "Act", Icon: IconAct },
];

const STEP_GAP = 0.16;
const STEP_START = 0.1;

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: steps.length * STEP_GAP, ease: "easeInOut" },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: STEP_START + i * STEP_GAP, duration: 0.4, ease: "backOut" },
  }),
};

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: STEP_START + i * STEP_GAP + 0.08, duration: 0.35, ease: "easeOut" },
  }),
};

export default function WorkflowStrip() {
  return (
    <section className="bg-background pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-2xl border border-black/10 bg-white px-6 py-8 sm:px-10">
          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={lineVariants}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 top-5 h-[2px] rounded-full bg-gradient-to-r from-accent via-accent to-accent/30 sm:top-7"
            />

            <div className="relative grid grid-cols-4">
              {steps.map(({ label, Icon }, i) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center sm:gap-3">
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={nodeVariants}
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-white text-accent sm:h-14 sm:w-14"
                  >
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </motion.div>
                  <motion.span
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={labelVariants}
                    className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-ink sm:text-xs sm:tracking-[0.15em]"
                  >
                    {label}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
