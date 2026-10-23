import { content } from "@/data/content";
import { destinations } from "@/data/destinations";
import { isDemo } from "@/config/mode";
import type { Destination } from "@/types";
import { CtaButton } from "@/components/ui/CtaButton";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

function FeaturedCard({ d, className }: { d: Destination; className: string }) {
  const thumbs = d.cities.filter((c) => c.image);
  const ratio = d.layout === "large" ? "aspect-[4/5]" : "aspect-square";
  return (
    <article className={className}>
      {d.image ? (
        <div className={`relative ${ratio} overflow-hidden rounded-image bg-navy-50`}>
          <Photo image={d.image} sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      ) : null}
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="text-3xl font-bold text-navy-900 sm:text-4xl">{d.name}</h3>
      </div>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{d.description}</p>
      <p className="mt-4 text-sm font-medium text-navy-900">
        {d.cities.map((c) => c.name).join("  ·  ")}
      </p>
      {thumbs.length > 0 ? (
        <ul className="mt-5 grid max-w-md grid-cols-3 gap-2">
          {thumbs.map((c) => (
            <li key={c.name} className="relative aspect-[4/5] overflow-hidden rounded-image bg-navy-50">
              <Photo image={c.image!} sizes="(min-width: 1024px) 14vw, 30vw" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/70 to-transparent px-2 pb-1.5 pt-6 text-[11px] font-medium text-white">
                {c.name}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      <CtaButton cta={d.cta} variant="link" icon="arrow-right" className="mt-6" />
    </article>
  );
}

function ListedItem({ d }: { d: Destination }) {
  return (
    <article className="flex flex-col border-t-2 border-navy-900 pt-5">
      {d.image ? (
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-image">
          <Photo image={d.image} sizes="(min-width: 1024px) 30vw, 100vw" />
        </div>
      ) : isDemo ? (
        <p className="mb-4 inline-block self-start bg-yellow-100 px-2 py-1 text-[11px] font-semibold text-navy-900">
          {content.destinations.missingPhotoLabel}
        </p>
      ) : null}
      <h3 className="text-2xl font-bold text-navy-900">{d.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{d.description}</p>
      <p className="mt-4 text-sm font-medium text-navy-900">
        {d.cities.map((c) => c.name).join("  ·  ")}
      </p>
      <CtaButton cta={d.cta} variant="link" icon="arrow-right" className="mt-5 self-start" />
    </article>
  );
}

export function Destinations({ anchor }: { anchor?: string }) {
  const c = content.destinations;
  const featured = destinations.filter((d) => d.status === "featured");
  const listed = destinations.filter((d) => d.status === "listed");
  const upcoming = destinations.filter((d) => d.status === "upcoming");

  return (
    <section id={anchor} className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
        />

        {featured.length > 0 ? (
          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-10">
            {featured.map((d, i) => (
              <FeaturedCard
                key={d.id}
                d={d}
                className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:mt-24"}
              />
            ))}
          </div>
        ) : null}

        {listed.length > 0 ? (
          <div className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {listed.map((d) => (
              <ListedItem key={d.id} d={d} />
            ))}
          </div>
        ) : null}

        {upcoming.length > 0 ? (
          <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:gap-8">
            <p className="eyebrow text-navy-700">{c.upcomingLabel}</p>
            <p className="text-base font-semibold text-navy-900">
              {upcoming.map((d) => d.name).join("  ·  ")}
            </p>
            <p className="text-sm text-muted">{c.upcomingNote}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
