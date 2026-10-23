import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Why({ anchor }: { anchor?: string }) {
  const c = content.why;

  return (
    <section id={anchor} className="section-y bg-navy-900 text-white">
      <div className="container-x">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} tone="dark" />
        <ul className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((item) => (
            <li key={item.title}>
              <span aria-hidden="true" className="block h-0.5 w-10 bg-yellow-500" />
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
