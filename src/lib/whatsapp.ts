import { site } from "@/data/site";
import type { Cta, WhatsAppContext } from "@/types";

/** Builds the pre-filled message text, using the templates in src/data/site.ts. */
export function buildWhatsAppMessage(ctx: WhatsAppContext = {}): string {
  if (ctx.message) return ctx.message;
  const t = site.whatsapp;
  const template =
    ctx.service && ctx.destination
      ? t.withBoth
      : ctx.destination
        ? t.withDestination
        : ctx.service
          ? t.withService
          : t.base;
  return template
    .replace("{destination}", ctx.destination ?? "")
    .replace("{service}", ctx.service ?? "");
}

/** wa.me link with the message URL-encoded. */
export function buildWhatsAppUrl(ctx: WhatsAppContext = {}): string {
  const text = encodeURIComponent(buildWhatsAppMessage(ctx));
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}

/** Resolves any CTA into a final URL. Returns "#" if the CTA has no target. */
export function resolveCtaHref(cta: Cta): string {
  if (cta.whatsapp) return buildWhatsAppUrl(cta.whatsapp);
  return cta.href ?? "#";
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}
