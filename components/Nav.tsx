"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Nav({
  dict,
  locale,
  tagline,
}: {
  dict: Dictionary["nav"];
  locale: Locale;
  tagline: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const links = [
    { label: dict.services, href: "#services" },
    { label: dict.pricing, href: "#cenik" },
    { label: dict.why, href: "#why" },
    { label: dict.process, href: "#process" },
    { label: dict.coverage, href: "#coverage" },
    { label: dict.about, href: "#about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`container-page flex items-center justify-between transition-all duration-500 ease-premium ${
          scrolled ? "h-16" : "h-20"
        }`}
        aria-label="Primary"
      >
        <Link href={`/${locale}`} className="group flex items-center gap-2.5" aria-label={site.name}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-display text-lg font-bold text-brass transition-transform duration-300 group-hover:-rotate-6">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
            <span className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
              {tagline}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-3 py-2 text-sm text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-brass transition-transform duration-300 ease-premium group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher current={locale} />
          </div>
          <a
            href="#quote"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 ease-premium hover:bg-brass-dark hover:shadow-lg hover:shadow-brass/20 md:inline-flex"
          >
            {dict.cta}
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink md:hidden"
            aria-label={site.phoneDisplay}
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink lg:hidden"
            aria-label={dict.menu}
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile slide-in menu — rendered OUTSIDE the header. The header gets
          `backdrop-blur` on scroll, which would otherwise make it the
          containing block for these fixed elements and break their layout. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[60] flex w-[86%] max-w-sm flex-col bg-paper px-6 py-6 shadow-2xl"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.5, ease: EASE }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-display text-lg font-bold text-brass">
                    S
                  </span>
                  <span className="font-display text-lg font-semibold">{site.name}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
                  aria-label={dict.close}
                >
                  <X className="h-5 w-5" strokeWidth={1.75} />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? undefined : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, ease: EASE }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b border-line py-4 font-display text-2xl font-medium text-ink"
                    >
                      {link.label}
                      <span className="font-mono text-xs text-muted">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto space-y-4 pt-8">
                <LanguageSwitcher current={locale} />
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-paper"
                >
                  {dict.cta}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3.5 text-sm font-medium text-ink"
                >
                  <Phone className="h-4 w-4 text-brass" strokeWidth={1.75} />
                  {site.phoneDisplay}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
