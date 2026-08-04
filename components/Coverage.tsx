import { MapPin } from "lucide-react";
import { CzechMap } from "./CzechMap";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Coverage({ dict }: { dict: Dictionary["coverage"] }) {
  return (
    <section id="coverage" className="scroll-mt-24 border-y border-line bg-white py-20 sm:py-28 lg:py-32">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">{dict.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
                {dict.title}
              </h2>
              <p className="mt-6 text-lg text-ink/60 text-pretty">{dict.lead}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
              {dict.cities.slice(1).map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink/80"
                >
                  {city}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex items-start gap-3 rounded-xl bg-brass-wash p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass-dark" strokeWidth={1.75} />
              <p className="text-sm text-ink/80">{dict.note}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <CzechMap
              cities={dict.cities}
              hubLabel={dict.hub}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
