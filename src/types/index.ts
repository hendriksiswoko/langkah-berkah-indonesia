export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position, e.g. "50% 30%". Default: center. */
  position?: string;
};

/** Context passed to the WhatsApp message builder. */
export type WhatsAppContext = {
  destination?: string;
  service?: string;
  /** Overrides the whole message. */
  message?: string;
};

/**
 * A button. Provide either `whatsapp` (opens WhatsApp with a generated message)
 * or `href` (internal anchor or external link).
 */
export type Cta = {
  label: string;
  href?: string;
  whatsapp?: WhatsAppContext;
};

export type NavItem = { label: string; href: string };

export type Destination = {
  id: string;
  name: string;
  /** "featured" cards get a large photo; "listed" ones render compactly; "upcoming" is not a confirmed package. */
  status: "featured" | "listed" | "upcoming";
  description: string;
  cities: { name: string; image?: ImageAsset }[];
  image?: ImageAsset;
  /** Card proportion when an image exists. */
  layout?: "large" | "medium";
  cta: Cta;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  /** Key from src/components/ui/Icon.tsx */
  icon: string;
  cta?: Cta;
};

export type TextItem = {
  title: string;
  description: string;
  icon?: string;
};

export type SectionId =
  | "hero"
  | "destinations"
  | "services"
  | "about"
  | "why"
  | "howItWorks"
  | "audience"
  | "closingCta";

export type SectionConfig = {
  id: SectionId;
  enabled: boolean;
  /** Anchor id used by navigation links. */
  anchor?: string;
};
