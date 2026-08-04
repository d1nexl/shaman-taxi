"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, ShieldCheck, Tag, type LucideIcon } from "lucide-react";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const ICONS: LucideIcon[] = [MapPin, Clock, ShieldCheck, Tag];
const EASE = [0.22, 1, 0.36, 1] as const;

export function WhyUs({ dict }: { dict: Dictionary["why"] }) {
  const reduce = useReducedMotion();

  return (
    <section id="why" className="scroll-mt-24 bg-ink py-20 text-paper sm:py-28 lg:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="eyebrow text-brass-soft">{dict.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest text-paper sm:text-5xl">
              {dict.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/60 text-pretty">
              {dict.lead}
            </p>
          </motion.div>

          <motion.ul
            className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7"
            variants={staggerContainer}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {dict.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <motion.li
                  key={item.title}
                  variants={staggerItem}
                  className="group bg-ink p-7 transition-colors duration-500 hover:bg-ink-soft sm:p-8"
                >
                  <Icon
                    className="h-6 w-6 text-brass transition-transform duration-500 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-display text-xl font-medium text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-paper/60">{item.text}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
