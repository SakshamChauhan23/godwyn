type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconRead({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconDecide({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v6" />
      <circle cx="6" cy="15" r="3" />
      <circle cx="18" cy="15" r="3" />
      <path d="M9 12c-1 0-1.7.7-2.3 1.7M15 12c1 0 1.7.7 2.3 1.7" />
    </svg>
  );
}

export function IconCreate({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5L15 9M9 15l-2.5 2.5" />
    </svg>
  );
}

export function IconAct({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 18 18 6" />
      <path d="M9 6h9v9" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export function IconCpu({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.2-3.8 4.2-6 7.5-6s6.3 2.2 7.5 6" />
    </svg>
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}
