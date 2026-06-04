// Simple, single-purpose UI line icons (stroke).
import type { CSSProperties } from "react";

export const ICONS = {
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm6.5 13.5L21 21",
  plane: "M21.5 2.5 10.5 13.5M21.5 2.5l-7 19-4-8.5-8.5-4 19.5-6.5Z",
  car: "M5 11l1.6-4.2A2 2 0 0 1 8.5 5.5h7a2 2 0 0 1 1.9 1.3L19 11m-14 0h14m-14 0a2 2 0 0 0-2 2v3h2m14-5a2 2 0 0 1 2 2v3h-2M7 16h10M6.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm14 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  pin: "M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  cal: "M7 3v3m10-3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  arrow: "M5 12h14m-6-7 7 7-7 7",
  arrowUpRight: "M7 17 17 7m0 0H8m9 0v9",
  check: "M5 12.5l4.2 4.2L19 7",
  star: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z",
  shield: "M12 3l7 2.5v5.5c0 4.6-3 8.4-7 9.5-4-1.1-7-4.9-7-9.5V5.5L12 3Z",
  bolt: "M13 3 5 13h5l-1 8 8-10h-5l1-8Z",
  users: "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1m6.5-9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10.5 9v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8",
  swap: "M7 4 3 8l4 4M3 8h13m1 12 4-4-4-4m4 4H8",
  chevron: "M6 9l6 6 6-6",
  menu: "M4 7h16M4 12h16M4 17h16",
  x: "M6 6l12 12M18 6 6 18",
  clock: "M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  tag: "M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Zm5-5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.3 4-5.6 4-9s-1.5-6.7-4-9m0 18c-2.5-2.3-4-5.6-4-9s1.5-6.7 4-9M3.5 9h17m-17 6h17",
  heart: "M12 20s-7-4.4-9.2-8.5C1.2 8.6 2.6 5 6 5c2 0 3 1.3 6 4 3-2.7 4-4 6-4 3.4 0 4.8 3.6 3.2 6.5C19 15.6 12 20 12 20Z",
  arrowLeft: "M19 12H5m6 7-7-7 7-7",
  fuel: "M5 21V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15M3 21h13M14 9h2.5a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 0 3 0V9l-2.5-2.5M7 9h4",
  gauge: "M12 14l3-3M5.6 18a9 9 0 1 1 12.8 0M12 14a1.4 1.4 0 1 0 0 .01Z",
  seat: "M7 4h4a3 3 0 0 1 3 3v6H8a3 3 0 0 1-3-3V6m0 8h8m1 6v-3a3 3 0 0 0-3-3M6 14v6",
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 20,
  stroke = 2,
  className = "",
  style = {},
}: {
  name: IconName;
  size?: number;
  stroke?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flex: "none", ...style }}
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}
