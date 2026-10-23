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
              <figcaption className="absolute bottom-4 left-4 bg-white px-3 py-1.5 text-xs font-semibold text-navy-900">
                {c.imageCaption}
              </figcaption>
            </figure>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {services.map((s, i) => (
            <li
              key={s.id}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-7 first:border-t-2 first:border-navy-900 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-6"
            >
              <span className="font-heading text-sm font-bold text-navy-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <Icon name={s.icon} className="size-5 text-navy-700" />
                  <h3 className="text-xl font-bold text-navy-900">{s.name}</h3>
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
              <div className="col-start-2 mt-4 sm:col-start-3 sm:mt-1">
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
        </ol>
      </div>
    </section>
  );
}
