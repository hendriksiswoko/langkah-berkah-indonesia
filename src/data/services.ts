import type { Service } from "@/types";

/** Services from the company profile. Order here = order on the page. */
export const services: Service[] = [
  {
    id: "family-trip",
    name: "Family Trip",
    icon: "family",
    description:
      "Perjalanan keluarga dengan itinerary yang disesuaikan agar nyaman untuk berbagai usia.",
  },
  {
    id: "group-tour",
    name: "Group Tour",
    icon: "group",
    description:
      "Paket perjalanan untuk komunitas, organisasi, sekolah, maupun kelompok wisata.",
  },
  {
    id: "private-trip",
    name: "Private Trip",
    icon: "private",
    description:
      "Perjalanan eksklusif dengan itinerary yang lebih fleksibel sesuai kebutuhan Anda.",
  },
  {
    id: "corporate-trip",
    name: "Corporate Trip",
    icon: "building",
    description:
      "Solusi perjalanan untuk perusahaan: corporate outing, incentive trip, gathering, dan business trip.",
  },
  {
    id: "ticketing-hotel",
    name: "Ticketing & Hotel",
    icon: "ticket",
    description: "Membantu kebutuhan pemesanan tiket perjalanan dan akomodasi.",
  },
  {
    id: "visa-assistance",
    name: "Visa Assistance",
    icon: "passport",
    description:
      "Pendampingan administrasi perjalanan dan persiapan dokumen visa sesuai destinasi.",
  },
  {
    id: "custom-tour",
    name: "Custom Tour",
    icon: "compass",
    description:
      "Susun perjalanan sesuai destinasi, durasi, aktivitas, dan kebutuhan Anda.",
  },
];
