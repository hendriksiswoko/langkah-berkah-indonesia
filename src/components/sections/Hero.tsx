import { content } from "@/data/content";
import { CtaButton } from "@/components/ui/CtaButton";
import { Photo } from "@/components/ui/Photo";

export function Hero({ anchor }: { anchor?: string }) {
  const h = content.hero;
  const photoFirst = h.imageSide === "left";

  return (
    <section id={anchor} className="bg-navy-900 text-white">
      <div
        className="grid lg:grid-cols-[1.05fr_0.95fr]"
        style={{ minHeight: h.minHeight }}
      >
        <div
          className={`flex flex-col justify-center px-6 py-16 sm:py-20 lg:py-24 ${
            photoFirst ? "lg:order-2 hero-pad-end" : "hero-pad-start"
          }`}
        >
          <p className="rise eyebrow text-yellow-400">{h.eyebrow}</p>
          <h1 className="rise rise-2 mt-6 max-w-[14ch] text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.5rem]">
            {h.headline}
          </h1>
          <p className="rise rise-3 mt-7 max-w-md text-lg leading-relaxed text-white/80">
            {h.subcopy}
          </p>
          <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaButton cta={h.primaryCta} variant="primary" />
            <CtaButton cta={h.secondaryCta} variant="secondary-dark" />
          </div>
        </div>

        <figure
          className={`relative h-[28rem] sm:h-[34rem] lg:h-auto ${photoFirst ? "lg:order-1" : ""}`}
        >
          <Photo
            image={h.image}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(11,26,51,${h.overlay}), transparent 45%)`,
            }}
          />
          <figcaption className="absolute bottom-5 left-6 flex items-center gap-3 text-xs font-medium tracking-wide text-white">
            <span aria-hidden="true" className="h-0.5 w-6 bg-yellow-500" />
            {h.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
