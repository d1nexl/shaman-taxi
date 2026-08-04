"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  const reduce = useReducedMotion();
  const lines = [dict.titleLine1, dict.titleLine2, dict.titleLine3];

  const stats = [
    { label: dict.stat1Label, value: dict.stat1Value },
    { label: dict.stat2Label, value: dict.stat2Value },
    { label: dict.stat3Label, value: dict.stat3Value },
  ];

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Ambient background motif */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-[36rem] w-[36rem] rounded-full bg-brass-wash blur-3xl opacity-60" />
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.5]"
          viewBox="0 0 400 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M-20 460 C 120 420, 160 260, 320 220 S 520 120, 640 40"
            stroke="#B0842F"
            strokeWidth={1}
            strokeDasharray="3 6"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: EASE, delay: 0.6 }}
          />
        </svg>
      </div>

      <div className="container-page grid items-end gap-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Left — editorial headline */}
        <div className="lg:col-span-7">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {dict.eyebrow}
          </motion.p>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-[4.6rem]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden py-0.5">
                <motion.span
                  className="block"
                  initial={reduce ? { opacity: 0 } : { y: "110%" }}
                  animate={reduce ? { opacity: 1 } : { y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
                >
                  {i === 2 ? (
                    <span className="text-brass">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 text-pretty"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          >
            {dict.lead}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
          >
            <MagneticButton
              href="#quote"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brass-dark"
            >
              <span className="inline-flex items-center gap-3">
                {dict.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </span>
            </MagneticButton>
            <a
              href={`tel:${site.phoneHref}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-6 py-4 text-sm font-medium text-ink transition-all duration-300 hover:border-ink"
            >
              <Phone className="h-4 w-4 text-brass" strokeWidth={2} />
              {dict.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right — dispatch panel */}
        <motion.aside
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
        >
          <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-30px_rgba(20,20,20,0.25)] sm:p-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow">{dict.dispatchLabel}</span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
                </span>
                {dict.dispatchNote}
              </span>
            </div>

            <a
              href={`tel:${site.phoneHref}`}
              className="mt-5 block font-display text-3xl font-semibold tracking-tight text-ink transition-colors hover:text-brass-dark sm:text-4xl"
            >
              {site.phoneDisplay}
            </a>

            <div className="mt-6 h-px bg-line" />

            <dl className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium leading-snug text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.aside>
      </div>

      <div className="container-page">
        <div className="h-px bg-line" />
      </div>
    </section>
  );
}
