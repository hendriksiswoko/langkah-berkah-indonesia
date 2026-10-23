/**
 * "production" (default) shows only real content.
 * "demo" marks placeholders visibly and adds noindex, so demo data can't be
 * mistaken for the live site. Set NEXT_PUBLIC_CONTENT_MODE=demo to enable.
 */
export const contentMode: "demo" | "production" =
  process.env.NEXT_PUBLIC_CONTENT_MODE === "demo" ? "demo" : "production";

export const isDemo = contentMode === "demo";
