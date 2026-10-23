import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks({ anchor }: { anchor?: string }) {
  const c = content.howItWorks;

  return (
    <section id={anchor} className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
        <ol className="mt-14 border-t border-line lg:grid lg:grid-cols-6 lg:gap-8">
          {c.steps.map((step) => (
            <li
              key={step.title}
              className="border-b border-line py-6 lg:border-b-0 lg:pb-0 lg:pt-8"
            >
              <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
