type LogoProps = {
  className?: string;
};

const badge = "flex h-9 w-9 flex-none items-center justify-center rounded-lg";

export function LogoGmail({ className }: LogoProps) {
  return (
    <span className={`${badge} bg-white ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <rect x="3" y="6" width="18" height="12" rx="1.5" fill="#F2F2F2" />
        <path d="M3 6.5 12 13l9-6.5" fill="none" stroke="#EA4335" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M3.3 6.2 3 6.5v11a1 1 0 0 0 1 1h1V8.4Z" fill="#4285F4" />
        <path d="M20.7 6.2 21 6.5v11a1 1 0 0 1-1 1h-1V8.4Z" fill="#34A853" />
        <path d="M4 17.5v-9l4.2 3.1v5.9Z" fill="#FBBC05" />
        <path d="M20 17.5v-9l-4.2 3.1v5.9Z" fill="#FBBC05" />
      </svg>
    </span>
  );
}

export function LogoSheets({ className }: LogoProps) {
  return (
    <span className={`${badge} bg-[#0F9D58] ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <rect x="5" y="4" width="14" height="16" rx="1.5" fill="white" />
        <g stroke="#0F9D58" strokeWidth="1.1">
          <path d="M8 8h8M8 11.3h8M8 14.6h8" />
          <path d="M11 8v9M14.5 8v9" />
        </g>
      </svg>
    </span>
  );
}

export function LogoPython({ className }: LogoProps) {
  return (
    <span className={`${badge} bg-[#0d1117] ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="#3776AB"
          d="M12 2c-3 0-3.2 1.3-3.2 1.3v1.9h3.3v.5H7.4S5 5.4 5 8.9s2.1 3.6 2.1 3.6h1.4v-1.9s-.1-2.1 2.2-2.1h3.2s2.1 0 2.1-2V4.2S16.2 2 12 2Zm-1.9 1.1a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4Z"
        />
        <path
          fill="#FFD43B"
          d="M12 22c3 0 3.2-1.3 3.2-1.3v-1.9h-3.3v-.5h4.7s2.4.3 2.4-3.2-2.1-3.6-2.1-3.6h-1.4v1.9s.1 2.1-2.2 2.1H10s-2.1 0-2.1 2v3.3S7.8 22 12 22Zm1.9-1.1a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z"
        />
      </svg>
    </span>
  );
}

export function LogoOpenAI({ className }: LogoProps) {
  return (
    <span className={`${badge} bg-[#0b0b0d] ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M21.55 10.1a5.1 5.1 0 0 0-.44-4.2 5.2 5.2 0 0 0-5.6-2.5 5.16 5.16 0 0 0-8.7 1.9 5.1 5.1 0 0 0-3.4 2.5 5.2 5.2 0 0 0 .64 6.1 5.1 5.1 0 0 0 .44 4.2 5.2 5.2 0 0 0 5.6 2.5 5.16 5.16 0 0 0 8.7-1.9 5.1 5.1 0 0 0 3.4-2.5 5.2 5.2 0 0 0-.64-6.1ZM13.4 20a3.8 3.8 0 0 1-2.44-.89l.12-.07 4.06-2.35a.68.68 0 0 0 .34-.59v-5.73l1.72 1v4.7A3.83 3.83 0 0 1 13.4 20ZM4.9 16.3a3.8 3.8 0 0 1-.46-2.56l.12.07 4.06 2.35a.67.67 0 0 0 .68 0l4.96-2.87v1.98l-4.12 2.38a3.83 3.83 0 0 1-5.24-1.35Zm-1.07-8.9a3.8 3.8 0 0 1 2-1.67v4.83a.67.67 0 0 0 .34.59l4.96 2.87-1.72 1-4.12-2.38A3.83 3.83 0 0 1 3.83 7.4ZM17.9 9.9l-4.96-2.87 1.72-1 4.12 2.38a3.83 3.83 0 0 1-.58 6.9v-4.83a.67.67 0 0 0-.3-.58Zm1.7-2.58-.12-.07-4.06-2.35a.67.67 0 0 0-.68 0L9.78 7.77V5.79l4.12-2.37a3.83 3.83 0 0 1 5.7 3.9ZM8.87 12.87 7.15 11.9V7.2a3.83 3.83 0 0 1 6.28-2.94l-.12.07-4.06 2.35a.68.68 0 0 0-.34.59v5.6Zm.93-2.02L12 9.4l2.2 1.27v2.53L12 14.47l-2.2-1.27V10.85Z" />
      </svg>
    </span>
  );
}

export function LogoJira({ className }: LogoProps) {
  return (
    <span className={`${badge} bg-white ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <defs>
          <linearGradient id="jiraGrad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
        </defs>
        <path
          fill="url(#jiraGrad)"
          d="M12 2 6.6 7.4a1.3 1.3 0 0 0 0 1.9L12 14.7l5.4-5.4a1.3 1.3 0 0 0 0-1.9L12 2Z"
        />
        <path
          fill="#2684FF"
          d="M12 9.3 6.6 14.7a1.3 1.3 0 0 0 0 1.9L12 22l5.4-5.4a1.3 1.3 0 0 0 0-1.9L12 9.3Z"
          opacity="0.55"
        />
      </svg>
    </span>
  );
}

export function LogoSlack({ className }: LogoProps) {
  return (
    <span className={`${badge} bg-white ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="#36C5F0"
          d="M9.3 2a1.9 1.9 0 1 0 0 3.8h1.9V3.9A1.9 1.9 0 0 0 9.3 2Z"
        />
        <path fill="#36C5F0" d="M4 9.3a1.9 1.9 0 0 0 1.9 1.9h4.8V7.4H5.9A1.9 1.9 0 0 0 4 9.3Z" />
        <path
          fill="#2EB67D"
          d="M14.7 4v1.9a1.9 1.9 0 1 0 1.9-1.9h-1.9Z"
        />
        <path fill="#2EB67D" d="M13.3 9.3a1.9 1.9 0 0 0 1.9 1.9h4.8a1.9 1.9 0 1 0 0-3.8h-4.8a1.9 1.9 0 0 0-1.9 1.9Z" />
        <path
          fill="#ECB22E"
          d="M14.7 22a1.9 1.9 0 1 0 0-3.8h-1.9V20a1.9 1.9 0 0 0 1.9 1.9Z"
        />
        <path fill="#ECB22E" d="M20 14.7a1.9 1.9 0 0 0-1.9-1.9h-4.8v3.8h4.8a1.9 1.9 0 0 0 1.9-1.9Z" />
        <path
          fill="#E01E5A"
          d="M9.3 20a1.9 1.9 0 1 0-1.9-1.9v1.9h1.9Z"
        />
        <path fill="#E01E5A" d="M9.3 14.7A1.9 1.9 0 0 0 7.4 12.8H2.6a1.9 1.9 0 1 0 0 3.8h4.8a1.9 1.9 0 0 0 1.9-1.9Z" />
      </svg>
    </span>
  );
}
