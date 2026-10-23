import type { ReactNode } from "react";

/**
 * Single line-icon set (24px grid, 1.5 stroke). Data files refer to icons by
 * the keys below, e.g. `icon: "ticket"` in src/data/services.ts.
 */
const paths: Record<string, ReactNode> = {
  family: (
    <>
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3.5 19v-3.5a4.5 4.5 0 0 1 9 0V19" />
      <path d="M14.5 19v-2.5a3 3 0 0 1 5.5-1.7" />
    </>
  ),
  group: (
    <>
      <circle cx="12" cy="7" r="2.5" />
      <circle cx="5.5" cy="9.5" r="2" />
      <circle cx="18.5" cy="9.5" r="2" />
      <path d="M7.5 19v-3a4.5 4.5 0 0 1 9 0v3" />
      <path d="M2 18v-2a3 3 0 0 1 3.5-3M22 18v-2a3 3 0 0 0-3.5-3" />
    </>
  ),
  private: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="1" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M10 20.5v-4h4v4" />
    </>
  ),
  ticket: (
    <>
      <path d="M3.5 8.5a1.5 1.5 0 0 0 0 7V18a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-2.5a1.5 1.5 0 0 1 0-7V6a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1z" />
      <path d="M14 5v14" strokeDasharray="2 2" />
    </>
  ),
  passport: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <circle cx="12" cy="10" r="3" />
      <path d="M9 17h6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  school: (
    <>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14z" />
      <path d="M6.5 11.5V16c0 1 2.5 2.5 5.5 2.5s5.5-1.5 5.5-2.5v-4.5" />
      <path d="M21.5 9.5V15" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11 4-4 4 1 3-1 4 3 3-1" />
      <path d="m7 16 3 2.5a1.5 1.5 0 0 0 2 0l4-3.5-3-3-2.5 1.5a1.5 1.5 0 0 1-2-.3L7 9" />
      <path d="M3 11v5l4 1M21 10v6l-4 1" />
    </>
  ),
  "arrow-right": <path d="M5 12h14m-5-5 5 5-5 5" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 18.8z" />
      <path d="M9.3 8.8c.2 2.7 2.4 4.9 5.1 5.3l1-1.2-1.7-.9-.7.6c-.9-.3-1.8-1.2-2.1-2.1l.6-.7-.9-1.7z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

export function Icon({
  name,
  className = "size-6",
}: {
  name: string;
  className?: string;
}) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {content}
    </svg>
  );
}
