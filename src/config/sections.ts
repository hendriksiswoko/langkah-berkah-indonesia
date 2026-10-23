import type { SectionConfig } from "@/types";

/**
 * Order = order on the page. Set `enabled: false` to hide a section.
 * `anchor` is the element id that navigation links (`#destinations`) point to.
 */
export const sections: SectionConfig[] = [
  { id: "hero", enabled: true, anchor: "top" },
  { id: "destinations", enabled: true, anchor: "destinations" },
  { id: "services", enabled: true, anchor: "services" },
  { id: "about", enabled: true, anchor: "about" },
  { id: "why", enabled: true, anchor: "why" },
  { id: "howItWorks", enabled: true, anchor: "how-it-works" },
  { id: "audience", enabled: true, anchor: "partnership" },
  { id: "closingCta", enabled: true, anchor: "contact" },
];
