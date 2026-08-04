import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
              {dict.title}
            </h2>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal className="space-y-5 text-lg leading-relaxed text-ink/70 text-pretty">
              {dict.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {dict.pillars.map((pillar) => (
                <div key={pillar.label} className="bg-paper p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                    {pillar.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-medium leading-snug text-ink">
                    {pillar.value}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
