"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { galleryImages } from "@/lib/gallery";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Gallery({ dict }: { dict: Dictionary["gallery"] }) {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const count = galleryImages.length;

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + count) % count)),
    [count]
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, go]);

  return (
    <section id="galerie" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg text-ink/60 text-pretty">{dict.lead}</p>
        </Reveal>

        <div className="mt-12 gap-4 [column-fill:_balance] columns-2 md:columns-3 lg:columns-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-line bg-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 4) * 0.05 }}
              aria-label={`${dict.alt} — ${i + 1}`}
            >
              <Image
                src={img.src}
                alt={`${dict.alt} — ${i + 1}`}
                width={img.w}
                height={img.h}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15" />
              <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Expand className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox — mounts only while open, so no stale overlay can linger */}
      {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={dict.title}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-paper transition-colors hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-paper transition-colors hover:bg-white/10 sm:left-6"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-paper transition-colors hover:bg-white/10 sm:right-6"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <motion.div
              className="relative flex max-h-full max-w-full flex-col items-center"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[active].src}
                alt={`${dict.alt} — ${active + 1}`}
                width={galleryImages[active].w}
                height={galleryImages[active].h}
                sizes="90vw"
                className="max-h-[82vh] w-auto rounded-lg object-contain"
                priority
              />
              <span className="mt-3 font-mono text-xs text-paper/60">
                {active + 1} / {count}
              </span>
            </motion.div>
          </motion.div>
        )}
    </section>
  );
}
