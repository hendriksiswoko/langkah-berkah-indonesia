import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks({ anchor }: { anchor?: string }) {
  const c = content.howItWorks;

  return (
    <section id={anchor} className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
        <ol className="mt-16 lg:grid lg:grid-cols-6 lg:gap-6">
          {c.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative border-l-2 border-line pb-10 pl-8 last:pb-0 lg:border-l-0 lg:border-t-2 lg:border-navy-900 lg:pb-0 lg:pl-0 lg:pt-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1 size-3 bg-yellow-500 lg:-top-[7px] lg:left-0"
              />
              <p className="font-heading text-sm font-bold text-navy-700">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
