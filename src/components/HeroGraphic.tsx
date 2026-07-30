"use client";

import { motion } from "motion/react";
import { IconRead, IconDecide, IconCreate, IconAct } from "@/components/icons";

const nodes = [
  { Icon: IconRead, label: "Read", x: 150, y: 36 },
  { Icon: IconDecide, label: "Decide", x: 264, y: 150 },
  { Icon: IconCreate, label: "Create", x: 150, y: 264 },
  { Icon: IconAct, label: "Act", x: 36, y: 150 },
];

const loopPath =
  "M150,36 C220,36 264,80 264,150 C264,220 220,264 150,264 C80,264 36,220 36,150 C36,80 80,36 150,36 Z";

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto h-[300px] w-[300px]">
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(124,58,237,0.18), transparent 30%, transparent 70%, rgba(124,58,237,0.18))",
        }}
      />

      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
        <path
          d={loopPath}
          fill="none"
          stroke="#7c3aed"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        <motion.path
          d={loopPath}
          fill="none"
          stroke="#7c3aed"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="26 700"
          animate={{ strokeDashoffset: [0, -726] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {nodes.map(({ Icon, label, x, y }, i) => (
        <motion.div
          key={label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ left: x, top: y }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-white text-accent shadow-[0_0_0_6px_rgba(124,58,237,0.06)]">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-ink/50">
            {label}
          </span>
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-[0.6rem] font-bold uppercase tracking-wide text-white">
        Godwyn
      </div>
    </div>
  );
}
