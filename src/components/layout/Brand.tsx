import Image from "next/image";
import { brandAssets } from "@/config/media";
import { site } from "@/data/site";

/**
 * Official logo if one is set in src/config/media.ts, otherwise the brand
 * name as plain text. No substitute logo is drawn.
 */
export function Brand({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const logo = tone === "light" ? (brandAssets.logoLight ?? brandAssets.logo) : brandAssets.logo;
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={`${site.company.brand} logo`}
        width={logo.width}
        height={logo.height}
        className="h-9 w-auto"
        priority
      />
    );
  }
  return (
    <span
      className={`font-heading text-xl font-extrabold tracking-tight ${
        tone === "light" ? "text-white" : "text-navy-900"
      }`}
    >
      {site.company.brand}
    </span>
  );
}
