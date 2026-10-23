import type { ImageAsset } from "@/types";

/**
 * Every image and brand asset on the site. Files live in /public/images.
 * To replace a photo: drop the new file in the same folder, then update
 * `src`, `width`, `height` and `alt` here.
 */

export const brandAssets = {
  /**
   * Official Happy Trip logo. Not supplied yet, so the header and footer
   * render the brand name as text. Set `src` (PNG transparent or SVG) to switch.
   */
  logo: undefined as ImageAsset | undefined,
  /** Light version for dark backgrounds (footer). Falls back to `logo`. */
  logoLight: undefined as ImageAsset | undefined,
  favicon: "/favicon-placeholder.svg",
  ogImage: "/images/og.jpg",
};

export const images = {
  hero: {
    src: "/images/hero/fuji-sakura-kawaguchiko.jpg",
    alt: "Gunung Fuji berselimut salju terlihat di balik ranting bunga sakura di tepi danau Kawaguchiko",
    width: 1280,
    height: 1600,
    position: "50% 60%",
  },
  closingCta: {
    src: "/images/destinations/japan-kyoto-yasaka-pagoda.jpg",
    alt: "Pagoda Yasaka di Kyoto dengan sakura dan jalan tradisional di bawahnya",
    width: 1280,
    height: 1600,
    position: "50% 62%",
  },
  japan: {
    src: "/images/destinations/japan-senso-ji-sakura.jpg",
    alt: "Gerbang merah kuil Senso-ji di Tokyo dengan sakura menjuntai",
    width: 1280,
    height: 1600,
    position: "50% 45%",
  },
  japanOsaka: {
    src: "/images/destinations/japan-osaka-castle-sakura.jpg",
    alt: "Osaka Castle di balik ranting sakura",
    width: 1280,
    height: 1600,
  },
  japanKyoto: {
    src: "/images/destinations/japan-kyoto-yasaka-pagoda.jpg",
    alt: "Pagoda Yasaka dan jalan tua di Kyoto",
    width: 1280,
    height: 1600,
    position: "50% 70%",
  },
  japanFuji: {
    src: "/images/destinations/japan-fuji-flower-field.jpg",
    alt: "Ladang bunga warna-warni dengan Gunung Fuji di kejauhan",
    width: 1280,
    height: 1600,
  },
  japanFushimi: {
    src: "/images/destinations/japan-fushimi-inari.jpg",
    alt: "Lorong gerbang torii oranye di Fushimi Inari, Kyoto",
    width: 900,
    height: 1600,
  },
  korea: {
    src: "/images/destinations/korea-gamcheon-busan.jpg",
    alt: "Rumah-rumah berwarna pastel di lereng bukit Gamcheon Culture Village, Busan",
    width: 1280,
    height: 1600,
    position: "50% 40%",
  },
  koreaSeoul: {
    src: "/images/destinations/korea-gyeongbokgung.jpg",
    alt: "Pengunjung berhanbok di depan aula Istana Gyeongbokgung, Seoul",
    width: 1600,
    height: 1600,
  },
  koreaBukchon: {
    src: "/images/destinations/korea-bukchon.jpg",
    alt: "Gang rumah tradisional hanok di Bukchon, Seoul",
    width: 1280,
    height: 1600,
  },
  koreaStarfield: {
    src: "/images/destinations/korea-starfield-library.jpg",
    alt: "Perpustakaan Starfield dengan rak buku menjulang di Seoul",
    width: 1280,
    height: 1600,
  },
  servicesMain: {
    src: "/images/services/group-kaminarimon.jpg",
    alt: "Rombongan wisatawan berfoto di depan lentera Kaminarimon, Asakusa",
    width: 1280,
    height: 1600,
    position: "50% 55%",
  },
  serviceFamily: {
    src: "/images/services/family-asakusa.jpg",
    alt: "Keluarga berfoto bersama di kawasan Asakusa, Tokyo",
    width: 1280,
    height: 1600,
  },
  servicePrivate: {
    src: "/images/services/private-gion.jpg",
    alt: "Pasangan dengan kimono di Gion, Kyoto",
    width: 1600,
    height: 1600,
  },
  serviceCustom: {
    src: "/images/services/custom-fuji.jpg",
    alt: "Wisatawan berfoto dengan latar Gunung Fuji",
    width: 1280,
    height: 1600,
  },
  aboutA: {
    src: "/images/about/kyoto-kimono.jpg",
    alt: "Empat wisatawan berkimono di Kyoto dengan pagoda di belakang",
    width: 900,
    height: 1600,
  },
  aboutB: {
    src: "/images/about/seoul-hanbok.jpg",
    alt: "Rombongan berhanbok di depan gerbang istana di Seoul",
    width: 1280,
    height: 1600,
  },
  aboutC: {
    src: "/images/about/asakusa-ema-kimono.jpg",
    alt: "Wisatawan berkimono di depan deretan ema dan origami burung bangau",
    width: 1080,
    height: 1080,
  },
} satisfies Record<string, ImageAsset>;
