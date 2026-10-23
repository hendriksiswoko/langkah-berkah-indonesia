import type { Cta } from "@/types";
import { isExternalHref, resolveCtaHref } from "@/lib/whatsapp";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "secondary-dark" | "link";

const base =
  "inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "rounded-ui bg-yellow-500 px-6 py-3.5 text-navy-950 hover:bg-yellow-400",
  secondary:
    "rounded-ui border border-navy-900 px-6 py-3.5 text-navy-900 hover:bg-navy-900 hover:text-white",
  "secondary-dark":
    "rounded-ui border border-white/40 px-6 py-3.5 text-white hover:border-white hover:bg-white/10",
  link: "text-navy-900 underline decoration-yellow-500 decoration-2 underline-offset-4 hover:decoration-navy-900",
};

export function CtaButton({
  cta,
  variant = "primary",
  className = "",
  icon,
}: {
  cta: Cta;
  variant?: Variant;
  className?: string;
  /** Optional icon key shown after the label. */
  icon?: string;
}) {
  const href = resolveCtaHref(cta);
  const external = isExternalHref(href);
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {cta.label}
      {icon ? <Icon name={icon} className="size-4" /> : null}
    </a>
  );
}
