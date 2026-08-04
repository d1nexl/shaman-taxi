"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Services({ dict }: { dict: Dictionary["services"] }) {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const current = dict.items[active];

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
              {dict.title}
            </h2>
          </div>
          <p className="max-w-md text-ink/60 text-pretty md:text-right">{dict.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Row list */}
          <ul className="lg:col-span-7">
            {dict.items.map((item, i) => {
              const isActive = active === i;
              const isOpen = openMobile === i;
              return (
                <li key={item.id} className="border-t border-line last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => {
                      setActive(i);
                      setOpenMobile(isOpen ? null : i);
                    }}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
                  >
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? "text-brass" : "text-muted"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-display text-2xl font-medium tracking-tight transition-colors duration-300 sm:text-3xl ${
                          isActive ? "text-brass-dark" : "text-ink"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{item.tagline}</span>
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-brass bg-brass text-white"
                          : "border-line text-ink group-hover:border-ink"
                      }`}
                    >
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </span>
                  </button>

                  {/* Mobile inline expansion */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="overflow-hidden lg:hidden"
                        initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <div className="pb-8">
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 40vw"
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-5 text-ink/70">{item.description}</p>
                          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                            {item.points.map((p) => (
                              <li key={p} className="flex items-center gap-2 text-sm text-ink/80">
                                <Check className="h-4 w-4 text-brass" strokeWidth={2} />
                                {p}
                              </li>
                            ))}
                          </ul>
                          <a
                            href="#quote"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brass-dark"
                          >
                            {dict.cardCta}
                            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Desktop sticky preview */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-line">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    className="absolute inset-0"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <Image
                      src={current.image}
                      alt={current.imageAlt}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="font-mono text-xs text-brass-soft">
                        {dict.indexLabel} — {current.index}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                        {current.name}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="mt-6"
                >
                  <p className="text-ink/70">{current.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {current.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-ink/80">
                        <Check className="h-4 w-4 text-brass" strokeWidth={2} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#quote"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-brass-dark"
                  >
                    {dict.cardCta}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
