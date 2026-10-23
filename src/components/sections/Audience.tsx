import { content } from "@/data/content";
import { CtaButton } from "@/components/ui/CtaButton";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Audience({ anchor }: { anchor?: string }) {
  const c = content.audience;

  return (
    <section id={anchor} className="section-y bg-paper">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
          <CtaButton cta={c.cta} variant="secondary" className="mt-8" />
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {c.items.map((item) => (
            <li key={item.title} className="flex gap-4 border-t border-line py-6">
              {item.icon ? <Icon name={item.icon} className="mt-0.5 size-6 shrink-0 text-navy-700" /> : null}
              <div>
                <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
