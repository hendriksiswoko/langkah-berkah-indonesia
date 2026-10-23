import type { Cta, ImageAsset, TextItem } from "@/types";
import { images } from "@/config/media";

/**
 * All headlines, descriptions, labels and per-section CTAs.
 * Section order and visibility live in src/config/sections.ts.
 */

const hero = {
  eyebrow: "Travel & Tourism",
  headline: "Your Journey, Your Story.",
  subcopy:
    "Discover destinations, create meaningful experiences, and enjoy a journey planned around your needs.",
  primaryCta: { label: "Plan Your Trip", whatsapp: {} } satisfies Cta,
  secondaryCta: { label: "Explore Destinations", href: "#destinations" } satisfies Cta,
  image: images.hero as ImageAsset,
  imageCaption: "Mount Fuji, Japan",
  /** "right" puts the photo on the right on desktop, "left" mirrors it. */
  imageSide: "right" as "right" | "left",
  /** Minimum hero height on desktop. Any CSS length. */
  minHeight: "40rem",
  /** 0–1. Darkens the bottom of the photo so the caption stays readable. */
  overlay: 0.35,
};

const destinations = {
  eyebrow: "Destinations",
  title: "Popular destinations across Asia.",
  description:
    "Happy Trip menghadirkan berbagai pilihan perjalanan wisata ke destinasi populer di Asia. Daftar destinasi akan terus dikembangkan mengikuti kebutuhan pelanggan.",
  citiesLabel: "Cities & places",
  upcomingLabel: "Next destinations",
  upcomingNote: "Sedang dikembangkan, belum tersedia sebagai paket.",
  /** Shown in demo mode on destinations that have no photo yet. */
  missingPhotoLabel: "Foto dibutuhkan",
};

const services = {
  eyebrow: "Travel Services",
  title: "Pilih cara Anda bepergian.",
  description:
    "Dari perjalanan keluarga sampai kebutuhan perusahaan, setiap layanan bisa disesuaikan dengan kebutuhan Anda.",
  image: images.servicesMain as ImageAsset,
  imageCaption: "Group Tour",
  itemCtaLabel: "Tanya layanan ini",
};

const about = {
  eyebrow: "About Happy Trip",
  title: "Perjalanan bukan sekadar berpindah tempat.",
  paragraphs: [
    "PT Langkah Berkah Indonesia bergerak di bidang perjalanan wisata dan layanan perjalanan. Melalui brand Happy Trip, kami menghadirkan pilihan perjalanan ke destinasi populer di Asia dengan konsep yang lebih mudah, fleksibel, dan menyenangkan.",
    "Kami percaya perjalanan adalah tentang menciptakan pengalaman, menemukan hal baru, menikmati kebersamaan, dan membawa pulang cerita yang berkesan.",
  ],
  promiseLabel: "Our promise",
  promiseTitle: "Your Journey, Our Care.",
  promiseText: "We take care of the details, so you can enjoy the journey.",
  promiseItems: ["Mudah", "Nyaman", "Aman", "Terencana", "Profesional", "Berkesan"],
  philosophyLabel: "Corporate philosophy",
  images: [images.aboutA, images.aboutB, images.aboutC] as ImageAsset[],
};

const why = {
  eyebrow: "Why Happy Trip",
  title: "Cara kami menjaga perjalanan Anda.",
  items: [
    {
      title: "Professional Service",
      description: "Kami mengutamakan pelayanan yang profesional dan responsif.",
    },
    {
      title: "Flexible Travel",
      description: "Pilihan perjalanan dapat disesuaikan dengan kebutuhan pelanggan.",
    },
    {
      title: "Curated Destination",
      description:
        "Kami memilih destinasi dan aktivitas yang menarik untuk memberikan pengalaman terbaik.",
    },
    {
      title: "Transparent Information",
      description:
        "Informasi mengenai itinerary, fasilitas, dan biaya disampaikan secara jelas.",
    },
    {
      title: "Personalized Experience",
      description:
        "Setiap perjalanan dapat dirancang dengan mempertimbangkan kebutuhan dan karakter pelanggan.",
    },
    {
      title: "Customer Experience",
      description:
        "Kepuasan pelanggan menjadi bagian penting dari setiap perjalanan yang kami selenggarakan.",
    },
  ] satisfies TextItem[],
};

const howItWorks = {
  eyebrow: "How It Works",
  title: "Dari konsultasi sampai setelah perjalanan.",
  description:
    "Enam tahap sederhana, dan kami mendampingi di setiap langkahnya.",
  steps: [
    { title: "Consultation", description: "Anda menyampaikan kebutuhan perjalanan." },
    {
      title: "Travel Proposal",
      description: "Kami memberikan rekomendasi destinasi, itinerary, dan pilihan paket.",
    },
    { title: "Booking", description: "Anda melakukan konfirmasi perjalanan." },
    { title: "Preparation", description: "Kami membantu mempersiapkan kebutuhan perjalanan." },
    { title: "Happy Trip", description: "Anda menikmati perjalanan bersama Happy Trip." },
    {
      title: "After Trip",
      description: "Kami menjaga hubungan dan memberikan layanan setelah perjalanan.",
    },
  ] satisfies TextItem[],
};

const audience = {
  eyebrow: "Audience & Partnership",
  title: "Untuk siapa saja yang ingin bepergian lebih praktis.",
  description:
    "Happy Trip melayani pelanggan secara langsung, solusi untuk institusi, dan kerja sama dengan partner perjalanan.",
  items: [
    {
      title: "Individual",
      description: "Wisatawan yang ingin melakukan perjalanan secara personal.",
      icon: "private",
    },
    {
      title: "Family",
      description: "Keluarga yang membutuhkan perjalanan nyaman dan terencana.",
      icon: "family",
    },
    {
      title: "Community",
      description: "Komunitas dan organisasi yang ingin melakukan group trip.",
      icon: "group",
    },
    {
      title: "School & Education",
      description: "Perjalanan edukasi dan wisata untuk institusi pendidikan.",
      icon: "school",
    },
    {
      title: "Corporate",
      description: "Perusahaan yang membutuhkan layanan perjalanan bisnis maupun leisure.",
      icon: "building",
    },
    {
      title: "Reseller & Travel Partner",
      description: "Membangun jaringan pemasaran melalui partner dan reseller perjalanan.",
      icon: "handshake",
    },
  ] satisfies TextItem[],
  cta: {
    label: "Ask about partnership",
    whatsapp: {
      message:
        "Halo Happy Trip, saya tertarik untuk berdiskusi mengenai kerja sama atau layanan untuk institusi/perusahaan. Mohon informasi lebih lanjut.",
    },
  } satisfies Cta,
};

const closingCta = {
  headline: "Your Next Journey Starts Here.",
  subcopy: "Tell us where you want to go. Let's plan a journey that fits your needs.",
  cta: { label: "Talk to Our Travel Team", whatsapp: {} } satisfies Cta,
  image: images.closingCta as ImageAsset,
  /** 0–1 darkness of the overlay on the photo. */
  overlay: 0.55,
};

export const content = {
  hero,
  destinations,
  services,
  about,
  why,
  howItWorks,
  audience,
  closingCta,
};
