import { site } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Brand } from "./Brand";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const { company, contact, footer } = site;
  const heading = "eyebrow text-yellow-400";
  const link = "text-sm text-white/75 transition-colors hover:text-white";

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Brand tone="light" />
          <p className="mt-4 font-heading text-lg font-semibold text-white">{company.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">{footer.blurb}</p>
          <p className="mt-6 max-w-sm text-sm italic text-white/50">
            {company.corporatePhilosophy}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className={heading}>{footer.columns.navigate}</p>
          <ul className="mt-5 space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 md:grid md:grid-cols-2 md:gap-8">
          <div>
            <p className={heading}>{footer.columns.contact}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={buildWhatsAppUrl()} className={`${link} inline-flex items-center gap-2`}>
                  <Icon name="whatsapp" className="size-4" />
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={`${link} inline-flex items-center gap-2 break-all`}>
                  <Icon name="mail" className="size-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
              {site.social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link} inline-flex items-center gap-2`}
                  >
                    <Icon name={s.icon} className="size-4" />@{contact.instagramHandle}
                  </a>
                </li>
              ))}
              {contact.website.show ? (
                <li>
                  <a href={contact.website.url} className={link}>
                    {contact.website.url.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <p className={heading}>{footer.columns.office}</p>
            <address className="mt-5 flex gap-2 text-sm not-italic leading-relaxed text-white/75">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0" />
              <span>
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.legalNote}</p>
        </div>
      </div>
    </footer>
  );
}
