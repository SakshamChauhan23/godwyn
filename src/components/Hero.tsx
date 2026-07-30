"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50"
          >
            AI native workflows &amp; platforms
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-4xl text-[2.75rem] font-extrabold uppercase leading-[0.95] tracking-tightest sm:text-6xl lg:text-7xl"
          >
            Built to read,
            <br />
            decide, create
            <br />
            &amp; <span className="text-accent">act</span>
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="ml-2 inline-flex h-[0.6em] w-[0.6em] items-center justify-center rounded-md bg-accent align-middle text-[0.4em] text-white"
            >
              ↗
            </motion.span>
          </motion.h1>
          <motion.a
            href="#intake"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Work with us
            <span aria-hidden>↗</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
