import { allMunicipalities, impactStats } from "@/content/coocentral";
import { cn } from "@/lib/utils";

import { CountUp } from "./count-up";

export function ImpactStats() {
  return (
    <section id="impacto" aria-label="Cifras de impacto" className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mb-5 max-w-2xl sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Impacto en el territorio
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium leading-tight sm:text-4xl">
            Coocentral en cifras
          </h2>
        </div>
        <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "reveal flex min-h-32 flex-col justify-between gap-3 border border-border border-t-2 border-t-brand/70 bg-sand/35 p-3.5 transition-colors hover:bg-sand/70 sm:min-h-40 sm:gap-5 sm:p-5 lg:col-span-1",
                index === impactStats.length - 1 && "col-span-2 sm:col-span-1",
              )}
            >
              <dd className="order-1 whitespace-nowrap font-display text-[clamp(1.3rem,6.6vw,2.25rem)] font-medium tabular-nums tracking-tight text-brand sm:text-4xl">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="order-2 max-w-[22ch] text-xs font-medium leading-4 text-ink/70 sm:text-sm sm:leading-5">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="overflow-hidden border-y border-forest/20 bg-forest-deep py-4 text-lime sm:py-5">
        <div className="marquee-track flex w-max gap-6 sm:gap-10">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-6 font-display text-xl font-medium italic sm:gap-10 sm:text-2xl lg:text-3xl"
            >
              {allMunicipalities.map((name) => (
                <li key={name} className="flex items-center gap-6 sm:gap-10">
                  {name}
                  <span className="size-2 rounded-full bg-lime/50" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
