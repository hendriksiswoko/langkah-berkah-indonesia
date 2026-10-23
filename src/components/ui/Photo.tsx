import Image from "next/image";
import type { ImageAsset } from "@/types";

/** next/image wrapper that takes an ImageAsset from src/config/media.ts. */
export function Photo({
  image,
  sizes,
  priority = false,
  className = "",
}: {
  image: ImageAsset;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      style={image.position ? { objectPosition: image.position } : undefined}
    />
  );
}
