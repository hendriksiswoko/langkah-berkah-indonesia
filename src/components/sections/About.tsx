import { content } from "@/data/content";
import { site } from "@/data/site";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ anchor }: { anchor?: string }) {
  const c = content.about;
  const [a, b, d] = c.images;

  return (
    <section id={anchor} className="section-y">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="grid grid-cols-2 gap-3 lg:col-span-6">
          {a ? (
            <div className="relative row-span-2 min-h-[20rem] overflow-hidden rounded-image">
              <Photo image={a} sizes="(min-width: 1024px) 20vw, 45vw" />
            </div>
          ) : null}
          {b ? (
            <div className="relative aspect-[4/5] overflow-hidden rounded-image">
              <Photo image={b} sizes="(min-width: 1024px) 20vw, 45vw" />
            </div>
          ) : null}
          {d ? (
            <div className="relative aspect-square overflow-hidden rounded-image">
              <Photo image={d} sizes="(min-width: 1024px) 20vw, 45vw" />
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-6">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {c.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10 border-l-4 border-yellow-500 bg-navy-50 py-6 pl-6 pr-6">
            <p className="eyebrow text-navy-700">{c.promiseLabel}</p>
            <p className="mt-2 font-heading text-2xl font-bold text-navy-900">{c.promiseTitle}</p>
            <p className="mt-1 text-sm text-muted">{c.promiseText}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy-900">
              {c.promiseItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 bg-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-muted">
            <span className="eyebrow mr-2 text-navy-700">{c.philosophyLabel}</span>
            <em>{site.company.corporatePhilosophy}</em>
          </p>
        </div>
      </div>
    </section>
  );
}
