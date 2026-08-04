"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Process({ dict }: { dict: Dictionary["process"] }) {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg text-ink/60 text-pretty">{dict.lead}</p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-line lg:block" />
          <motion.div
            className="absolute left-0 top-[26px] hidden h-px origin-left bg-brass lg:block"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ right: 0 }}
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {dict.steps.map((step, i) => (
              <motion.li
                key={step.title}
                className="relative flex gap-5 lg:block"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
              >
                <div className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-line bg-paper font-mono text-sm text-ink">
                  <span className="absolute inset-1 rounded-full border border-brass/30" />
                  0{i + 1}
                </div>
                <div className="lg:mt-6">
                  <h3 className="font-display text-xl font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
