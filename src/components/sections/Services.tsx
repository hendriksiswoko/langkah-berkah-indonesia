import { content } from "@/data/content";
import { services } from "@/data/services";
import { CtaButton } from "@/components/ui/CtaButton";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services({ anchor }: { anchor?: string }) {
  const c = content.services;

  return (
    <section id={anchor} className="section-y bg-paper">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
            <figure className="relative mt-10 hidden aspect-[4/5] max-w-sm overflow-hidden rounded-image lg:block">
              <Photo image={c.image} sizes="24vw" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-navy-900">
                {c.imageCaption}
              </figcaption>
            </figure>
          </div>
        </div>

        <ul className="lg:col-span-7">
          {services.map((s) => (
            <li
              key={s.id}
              className="grid gap-x-6 gap-y-4 border-b border-line py-7 first:pt-0 sm:grid-cols-[1fr_auto] sm:items-start"
            >
              <div className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-navy-800">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">{s.name}</h3>
                  <p className="mt-1.5 max-w-lg text-[0.9375rem] leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </div>
              <div className="pl-14 sm:pl-0 sm:pt-1">
                <CtaButton
                  cta={
                    s.cta ?? {
                      label: c.itemCtaLabel,
                      whatsapp: { service: s.name },
                    }
                  }
                  variant="link"
                  icon="arrow-up-right"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
