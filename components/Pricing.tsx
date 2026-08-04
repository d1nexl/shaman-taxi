"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Info, Plus } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Pricing({ dict }: { dict: Dictionary["pricing"] }) {
  const reduce = useReducedMotion();

  return (
    <section id="cenik" className="scroll-mt-24 border-y border-line bg-white py-20 sm:py-28 lg:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Intro */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">{dict.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
                {dict.title}
              </h2>
              <p className="mt-6 text-lg text-ink/60 text-pretty">{dict.lead}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 hidden lg:block">
              <a
                href="#quote"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brass-dark"
              >
                {dict.ctaLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </a>
            </Reveal>
          </div>

          {/* Price rows */}
          <div className="lg:col-span-8">
            <ul className="overflow-hidden rounded-2xl border border-line">
              {dict.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="border-b border-line bg-paper last:border-b-0"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                >
                  <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-medium text-ink">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted">{item.note}</p>
                    </div>
                    <p className="shrink-0 font-display text-xl font-semibold text-brass-dark sm:text-right">
                      {item.price}
                    </p>
                  </div>
                  {item.addon && (
                    <div className="mx-5 mb-5 flex items-center gap-2 rounded-lg bg-brass-wash px-3.5 py-2 text-sm text-ink/75 sm:mx-6 sm:mb-6">
                      <Plus className="h-3.5 w-3.5 text-brass-dark" strokeWidth={2.5} />
                      {item.addon}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            <Reveal delay={0.1} className="mt-5 flex items-start gap-2.5 text-sm text-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.75} />
              <p>{dict.note}</p>
            </Reveal>

            <a
              href="#quote"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-brass-dark lg:hidden"
            >
              {dict.ctaLabel}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
