"use client";

import { motion } from "motion/react";
import { IconClock, IconUser, IconPlay, IconDecide } from "@/components/icons";
import {
  LogoGmail,
  LogoSheets,
  LogoPython,
  LogoOpenAI,
  LogoJira,
  LogoSlack,
} from "@/components/logos";

type Point = { x: number; y: number };

const start: Point = { x: 8, y: 4 };
const trigger: Point = { x: 8, y: 15 };
const sourceA: Point = { x: 91, y: 8 };
const sourceB: Point = { x: 91, y: 24 };
const read: Point = { x: 33, y: 28 };
const decide: Point = { x: 33, y: 46 };
const router: Point = { x: 33, y: 64 };
const pillA: Point = { x: 10, y: 74 };
const pillB: Point = { x: 58, y: 74 };
const createA: Point = { x: 8, y: 82 };
const notifyA: Point = { x: 8, y: 94 };
const actB: Point = { x: 60, y: 82 };
const ownerB: Point = { x: 60, y: 94 };

const line = (a: Point, b: Point) => `M ${a.x} ${a.y} L ${b.x} ${b.y}`;

function Joint({ p }: { p: Point }) {
  return (
    <g transform={`translate(${p.x} ${p.y})`}>
      <circle r="1.6" fill="#0b0b0d" stroke="#7c3aed" strokeWidth="0.3" />
      <path d="M-0.7 0h1.4M0 -0.7v1.4" stroke="#7c3aed" strokeWidth="0.3" />
    </g>
  );
}

function mid(a: Point, b: Point): Point {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

export default function WorkflowDiagram() {
  return (
    <section className="bg-background pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            An example workflow
          </p>
          <p className="text-xs text-ink/40">
            Illustrative build, not a specific client configuration
          </p>
        </div>

        {/* Desktop canvas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative hidden h-[980px] overflow-hidden rounded-2xl border border-white/10 bg-ink lg:block"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.12), transparent 55%)",
            }}
          />

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <g stroke="#7c3aed" strokeOpacity="0.35" strokeWidth="0.18" strokeDasharray="1 2" fill="none">
              <path d={line(start, trigger)} />
              <path d={line(trigger, read)} />
              <path d={line(sourceA, read)} />
              <path d={line(sourceB, read)} />
              <path d={line(read, decide)} />
              <path d={line(decide, router)} />
              <path d={line(router, createA)} />
              <path d={line(createA, notifyA)} />
              <path d={line(router, actB)} />
              <path d={line(actB, ownerB)} />
            </g>
            <Joint p={mid(trigger, read)} />
            <Joint p={mid(read, decide)} />
            <Joint p={mid(decide, router)} />
            <Joint p={mid(createA, notifyA)} />
            <Joint p={mid(actB, ownerB)} />
          </svg>

          {/* Start */}
          <Node point={start} anchor="center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
              <IconPlay className="h-4 w-4" />
            </div>
          </Node>

          {/* Trigger */}
          <Node point={trigger} anchor="left">
            <Card icon={<IconClock className="h-4 w-4" />} title="New feedback" subtitle="Every 15 minutes" />
          </Node>

          {/* Sources */}
          <Node point={sourceA} anchor="right">
            <Chip logo={<LogoGmail />} title="Inbox" subtitle="Support emails" />
          </Node>
          <Node point={sourceB} anchor="right">
            <Chip logo={<LogoSheets />} title="Survey replies" subtitle="Google Sheets" />
          </Node>

          {/* Read */}
          <Node point={read} anchor="left">
            <Card logo={<LogoPython />} title="Parse & clean" subtitle="Strip PII, normalize text" />
          </Node>

          {/* Decide */}
          <Node point={decide} anchor="left">
            <Card
              logo={<LogoOpenAI />}
              title="Godwyn AI"
              subtitle="Severity & topic check"
              highlight
            />
          </Node>

          {/* Router */}
          <Node point={router} anchor="center">
            <Diamond title="Router" subtitle="By severity" />
          </Node>

          {/* Path labels */}
          <Node point={pillA} anchor="center">
            <Pill tone="warm">High severity</Pill>
          </Node>
          <Node point={pillB} anchor="center">
            <Pill tone="cool">Low severity</Pill>
          </Node>

          {/* Path A */}
          <Node point={createA} anchor="left">
            <Card logo={<LogoJira />} title="Create ticket" subtitle="Engineering board" />
          </Node>
          <Node point={notifyA} anchor="left">
            <Card icon={<IconUser className="h-4 w-4" />} title="Notify reporter" subtitle="Auto-reply sent" />
          </Node>

          {/* Path B */}
          <Node point={actB} anchor="left">
            <Card logo={<LogoSlack />} title="Post to #feedback" subtitle="Notify the team" />
          </Node>
          <Node point={ownerB} anchor="left">
            <Card icon={<IconUser className="h-4 w-4" />} title="Assign owner" subtitle="Product lead reviews" />
          </Node>
        </motion.div>

        {/* Mobile / tablet fallback: simple vertical list */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink p-5 lg:hidden">
          <MobileRow icon={<IconClock className="h-4 w-4" />} title="New feedback" subtitle="Every 15 minutes" />
          <MobileRow logo={<LogoGmail />} title="Inbox + survey replies" subtitle="Gmail & Google Sheets" />
          <MobileRow logo={<LogoPython />} title="Parse & clean" subtitle="Strip PII, normalize text" />
          <MobileRow logo={<LogoOpenAI />} title="Godwyn AI" subtitle="Severity & topic check" highlight />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3">
              <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-wide text-amber-300">
                High severity
              </p>
              <MobileRow logo={<LogoJira />} title="Create ticket" subtitle="Engineering board" compact />
              <div className="mt-3">
                <MobileRow icon={<IconUser className="h-4 w-4" />} title="Notify reporter" subtitle="Auto-reply sent" compact />
              </div>
            </div>
            <div className="rounded-xl border border-sky-400/20 bg-sky-400/5 p-3">
              <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-wide text-sky-300">
                Low severity
              </p>
              <MobileRow logo={<LogoSlack />} title="Post to #feedback" subtitle="Notify the team" compact />
              <div className="mt-3">
                <MobileRow icon={<IconUser className="h-4 w-4" />} title="Assign owner" subtitle="Product lead reviews" compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({
  point,
  anchor,
  children,
}: {
  point: Point;
  anchor: "left" | "right" | "center";
  children: React.ReactNode;
}) {
  const translate =
    anchor === "left"
      ? "translate(0, -50%)"
      : anchor === "right"
        ? "translate(-100%, -50%)"
        : "translate(-50%, -50%)";
  return (
    <div
      className="absolute z-10"
      style={{ left: `${point.x}%`, top: `${point.y}%`, transform: translate }}
    >
      {children}
    </div>
  );
}

function Card({
  logo,
  icon,
  title,
  subtitle,
  highlight,
}: {
  logo?: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex w-64 items-center gap-3.5 rounded-xl border px-4 py-3.5 ${
        highlight
          ? "border-accent bg-accent/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      {logo ?? (
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/10 text-accent">
          {icon}
        </span>
      )}
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-white">{title}</p>
        <p className="truncate text-xs text-white/50">{subtitle}</p>
      </div>
    </div>
  );
}

function Chip({
  logo,
  title,
  subtitle,
}: {
  logo: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex w-56 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-2 pr-5">
      {logo}
      <div className="min-w-0">
        <p className="truncate text-xs font-bold text-white">{title}</p>
        <p className="truncate text-[0.65rem] text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

function Diamond({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-14 w-14 rotate-45 items-center justify-center rounded-lg border-2 border-accent bg-accent/15 text-accent">
        <IconDecide className="h-5 w-5 -rotate-45" />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-white">{title}</p>
        <p className="text-[0.65rem] text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

function Pill({ tone, children }: { tone: "warm" | "cool"; children: React.ReactNode }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${
        tone === "warm"
          ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
          : "border-sky-400/30 bg-sky-400/10 text-sky-300"
      }`}
    >
      {children}
    </span>
  );
}

function MobileRow({
  logo,
  icon,
  title,
  subtitle,
  highlight,
  compact,
}: {
  logo?: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  highlight?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
        highlight ? "border-accent bg-accent/10" : "border-white/10 bg-white/[0.04]"
      } ${compact ? "px-2.5 py-2" : ""}`}
    >
      {logo ?? (
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white/10 text-accent">
          {icon}
        </span>
      )}
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-white">{title}</p>
        <p className="truncate text-xs text-white/50">{subtitle}</p>
      </div>
    </div>
  );
}
