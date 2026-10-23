/**
 * Design tokens. Every value here is injected as a CSS variable in
 * src/app/layout.tsx and mapped to Tailwind utilities in globals.css.
 * Change a value here and the whole site follows.
 */
export const theme = {
  colors: {
    "navy-950": "#0b1a33",
    "navy-900": "#12284d",
    "navy-800": "#1a3666",
    "navy-700": "#27497f",
    "navy-100": "#dfe6f1",
    "navy-50": "#f1f4f9",
    "yellow-500": "#f6b82e",
    "yellow-400": "#fac95a",
    "yellow-100": "#fdf0cf",
    ink: "#141b29",
    muted: "#566074",
    line: "#dde1e8",
    paper: "#f7f6f2",
    white: "#ffffff",
  },
  /** Fonts themselves are loaded in src/config/fonts.ts. */
  radius: {
    ui: "999px",
    image: "16px",
  },
  layout: {
    containerMax: "76rem",
    gutter: "1.5rem",
    sectionY: "6rem",
    sectionYMobile: "4rem",
  },
} as const;

export function themeToCss(): string {
  const c = Object.entries(theme.colors)
    .map(([k, v]) => `--${k}:${v};`)
    .join("");
  const r = `--radius-ui:${theme.radius.ui};--radius-image:${theme.radius.image};`;
  const l = `--container-max:${theme.layout.containerMax};--gutter:${theme.layout.gutter};--section-y:${theme.layout.sectionY};--section-y-mobile:${theme.layout.sectionYMobile};`;
  return `:root{${c}${r}${l}}`;
}
