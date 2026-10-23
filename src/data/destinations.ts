import type { Destination } from "@/types";
import { images } from "@/config/media";

/**
 * Destinations from the company profile. Order here = order on the page.
 * Add `image` to a destination and it turns into a photo card automatically.
 * No prices, schedules or durations are listed: none were provided.
 */
const ask = (name: string) => ({
  label: "Ask about this destination",
  whatsapp: { destination: name },
});

export const destinations: Destination[] = [
  {
    id: "japan",
    name: "Japan",
    status: "featured",
    layout: "large",
    description:
      "Dari kota yang bergerak cepat seperti Tokyo, kuil dan lorong klasik Kyoto, hingga pemandangan Gunung Fuji.",
    image: images.japan,
    cities: [
      { name: "Tokyo" },
      { name: "Osaka", image: images.japanOsaka },
      { name: "Kyoto", image: images.japanKyoto },
      { name: "Fuji", image: images.japanFuji },
    ],
    cta: ask("Japan"),
  },
  {
    id: "south-korea",
    name: "South Korea",
    status: "featured",
    layout: "medium",
    description:
      "Istana, kampung berwarna, dan sudut kota Seoul serta Busan, ditambah pilihan pulau seperti Nami dan Jeju.",
    image: images.korea,
    cities: [
      { name: "Seoul", image: images.koreaSeoul },
      { name: "Nami Island" },
      { name: "Busan" },
      { name: "Jeju" },
    ],
    cta: ask("South Korea"),
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    status: "listed",
    description: "Kota metropolitan dengan Disneyland, serta pilihan perjalanan ke Macau.",
    cities: [{ name: "Hong Kong" }, { name: "Disneyland" }, { name: "Macau" }],
    cta: ask("Hong Kong"),
  },
  {
    id: "thailand",
    name: "Thailand",
    status: "listed",
    description: "Perpaduan kota besar dan pantai, dari Bangkok sampai Phuket.",
    cities: [{ name: "Bangkok" }, { name: "Pattaya" }, { name: "Phuket" }],
    cta: ask("Thailand"),
  },
  {
    id: "singapore",
    name: "Singapore",
    status: "listed",
    description: "Kota yang rapi dengan pilihan wahana di Sentosa dan Universal Studios.",
    cities: [
      { name: "Singapore" },
      { name: "Universal Studios" },
      { name: "Sentosa" },
    ],
    cta: ask("Singapore"),
  },
  {
    id: "malaysia",
    name: "Malaysia",
    status: "listed",
    description: "Dari Kuala Lumpur ke dataran tinggi Genting dan kota tua Malacca.",
    cities: [{ name: "Kuala Lumpur" }, { name: "Genting" }, { name: "Malacca" }],
    cta: ask("Malaysia"),
  },
  {
    id: "vietnam",
    name: "Vietnam",
    status: "listed",
    description: "Utara sampai selatan: Hanoi, Teluk Halong, Ho Chi Minh, dan Da Nang.",
    cities: [
      { name: "Hanoi" },
      { name: "Halong Bay" },
      { name: "Ho Chi Minh" },
      { name: "Da Nang" },
    ],
    cta: ask("Vietnam"),
  },
  {
    id: "bali",
    name: "Bali",
    status: "listed",
    description: "Pantai Kuta, Ubud, Nusa Penida, dan sejuknya Bedugul.",
    cities: [
      { name: "Kuta" },
      { name: "Ubud" },
      { name: "Nusa Penida" },
      { name: "Bedugul" },
    ],
    cta: ask("Bali"),
  },
  // Not confirmed packages. Shown only as "next destinations".
  {
    id: "china",
    name: "China",
    status: "upcoming",
    description: "",
    cities: [],
    cta: ask("China"),
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    status: "upcoming",
    description: "",
    cities: [],
    cta: ask("Kazakhstan"),
  },
];
