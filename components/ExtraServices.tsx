"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Zap, Truck, Users, Hammer, ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./ui/Reveal";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const ICONS: LucideIcon[] = [Truck, Users, Hammer];

export function ExtraServices({ dict }: { dict: Dictionary["extraServices"] }) {
  const reduce = useReducedMotion();

  return (
    <section id="doplnkove" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg text-ink/60 text-pretty">{dict.lead}</p>
        </Reveal>

        {/* Express highlight */}
        <Reveal delay={0.05} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-brass/30 bg-brass-wash p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brass/10 blur-2xl"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-brass">
                  <Zap className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brass-dark">
                    {dict.express.badge}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {dict.express.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm text-ink/70">{dict.express.text}</p>
                </div>
              </div>
              <a
                href={`tel:${site.phoneHref}`}
                className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brass-dark"
              >
                {dict.express.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Extra service cards */}
        <motion.ul
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial={reduce ? undefined : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {dict.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.li
                key={item.name}
                variants={staggerItem}
                className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_20px_50px_-24px_rgba(20,20,20,0.3)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-wash text-brass-dark transition-colors duration-300 group-hover:bg-ink group-hover:text-brass">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.text}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
