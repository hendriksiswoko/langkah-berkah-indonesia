import type { Cta, NavItem } from "@/types";
import { brandAssets } from "@/config/media";

/** Company identity, contact, navigation, SEO and global CTA settings. */
export const site = {
  company: {
    legalName: "PT Langkah Berkah Indonesia",
    brand: "Happy Trip",
    tagline: "Your Journey, Our Care.",
    philosophy: "Your Journey. Your Story.",
    corporatePhilosophy: "Setiap langkah yang baik, semoga selalu diberkahi.",
    business: "Travel & Tourism",
  },

  contact: {
    /** International format, digits only, no "+". Used in WhatsApp URLs. */
    whatsappNumber: "6285287885958",
    whatsappDisplay: "+62 852-8788-5958",
    email: "langkahberkahindonesia@gmail.com",
    instagramHandle: "langkahberkahidn",
    instagramUrl: "https://www.instagram.com/langkahberkahidn/",
    address: [
      "Jalan Sawo II, No 133 A",
      "Cibodasari, Cibodas",
      "Kota Tangerang",
    ],
    /**
     * The company profile prints www.langkahberkahidn.com. The brief mentions
     * www.langkahberkahindonesia.com. Neither is confirmed live, so the site
     * is NOT shown anywhere until `show` is set to true.
     */
    website: {
      url: "https://www.langkahberkahidn.com",
      show: false,
    },
  },

  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/langkahberkahidn/",
      icon: "instagram",
    },
  ],

  nav: [
    { label: "Destinations", href: "#destinations" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
  ] satisfies NavItem[],

  navCta: {
    label: "Contact Us",
    whatsapp: {},
  } satisfies Cta,

  /** Templates for WhatsApp messages. {destination} and {service} are replaced. */
  whatsapp: {
    base: "Halo Happy Trip, saya ingin berkonsultasi mengenai perjalanan wisata. Mohon informasi lebih lanjut.",
    withDestination:
      "Halo Happy Trip, saya ingin berkonsultasi mengenai perjalanan wisata ke {destination}. Mohon informasi lebih lanjut.",
    withService:
      "Halo Happy Trip, saya ingin berkonsultasi mengenai layanan {service}. Mohon informasi lebih lanjut.",
    withBoth:
      "Halo Happy Trip, saya ingin berkonsultasi mengenai layanan {service} ke {destination}. Mohon informasi lebih lanjut.",
  },

  seo: {
    title: "Happy Trip — Your Journey, Our Care.",
    description:
      "Happy Trip adalah brand perjalanan wisata dari PT Langkah Berkah Indonesia. Family trip, group tour, private trip, corporate trip, tiket & hotel, bantuan visa, dan custom tour ke destinasi populer Asia.",
    ogImage: brandAssets.ogImage,
    favicon: brandAssets.favicon,
    locale: "id_ID",
    /** Set NEXT_PUBLIC_SITE_URL in production. Used for absolute OG URLs. */
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },

  footer: {
    blurb:
      "Travel brand dari PT Langkah Berkah Indonesia. Kami mengurus detailnya, supaya Anda bisa menikmati perjalanan.",
    copyright: "© 2026 PT Langkah Berkah Indonesia. All rights reserved.",
    legalNote: "Happy Trip adalah brand dari PT Langkah Berkah Indonesia.",
    columns: {
      navigate: "Navigate",
      contact: "Contact",
      office: "Office",
    },
  },
};
