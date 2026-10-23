import { content } from "@/data/content";
import { site } from "@/data/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { Photo } from "@/components/ui/Photo";

export function ClosingCta({ anchor }: { anchor?: string }) {
  const c = content.closingCta;

  return (
    <section id={anchor} className="relative isolate overflow-hidden text-white">
      <Photo image={c.image} sizes="100vw" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: `rgba(11,26,51,${c.overlay})` }}
      />
      <div className="container-x relative py-24 lg:py-32">
        <h2 className="max-w-[16ch] text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          {c.headline}
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85">{c.subcopy}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaButton cta={c.cta} variant="primary" icon="whatsapp" />
          <p className="text-sm leading-relaxed text-white/80">
            {site.contact.whatsappDisplay}
            <br />
            {site.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
}
