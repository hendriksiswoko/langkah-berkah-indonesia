"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Brand } from "./Brand";
import { CtaButton } from "@/components/ui/CtaButton";
import { Icon } from "@/components/ui/Icon";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" aria-label={`${site.company.brand}, home`} onClick={() => setOpen(false)}>
          <Brand />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
          <CtaButton cta={site.navCta} variant="primary" className="!py-2.5" />
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-navy-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="site-header-menu md:hidden"
        >
          <ul className="container-x py-2">
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base font-medium text-navy-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <CtaButton cta={site.navCta} className="w-full" />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
