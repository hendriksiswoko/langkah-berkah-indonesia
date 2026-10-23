import type { ComponentType } from "react";
import type { SectionId } from "@/types";
import { Hero } from "./Hero";
import { Destinations } from "./Destinations";
import { Services } from "./Services";
import { About } from "./About";
import { Why } from "./Why";
import { HowItWorks } from "./HowItWorks";
import { Audience } from "./Audience";
import { ClosingCta } from "./ClosingCta";

/** Maps a section id (src/config/sections.ts) to its component. */
export const sectionComponents: Record<SectionId, ComponentType<{ anchor?: string }>> = {
  hero: Hero,
  destinations: Destinations,
  services: Services,
  about: About,
  why: Why,
  howItWorks: HowItWorks,
  audience: Audience,
  closingCta: ClosingCta,
};
