import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Central font configuration. To swap a font, replace the import above and
 * the call below (e.g. Manrope for headings). The CSS variable names stay
 * the same so nothing else needs to change.
 */
export const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-face",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
});
