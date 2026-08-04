import { ArrowUp } from "lucide-react";
import { ContactChannels } from "./ContactChannels";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  const companyLinks = [
    { label: dict.nav.services, href: "#services" },
    { label: dict.nav.pricing, href: "#cenik" },
    { label: dict.nav.why, href: "#why" },
    { label: dict.nav.process, href: "#process" },
    { label: dict.nav.coverage, href: "#coverage" },
    { label: dict.gallery.eyebrow, href: "#galerie" },
    { label: dict.nav.about, href: "#about" },
  ];

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-display text-lg font-bold text-brass">
                S
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
                <span className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                  {dict.brand.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">
              {dict.footer.tagline}
            </p>
            <ContactChannels dict={dict.contact} variant="outline" className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title={dict.footer.servicesTitle}>
              {dict.services.items.map((item) => (
                <FooterLink key={item.id} href="#services">
                  {item.name}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title={dict.footer.companyTitle}>
              {companyLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title={dict.footer.contactTitle}>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="font-display text-lg font-medium text-ink transition-colors hover:text-brass-dark"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-sm text-ink/60">Praha · Česká republika</li>
            </FooterCol>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">{dict.footer.builtNote}</span>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 text-ink/70 transition-colors hover:text-ink"
              aria-label={dict.footer.backToTop}
            >
              {dict.footer.backToTop}
              <ArrowUp
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm text-ink/70 transition-colors hover:text-ink">
        {children}
      </a>
    </li>
  );
}
