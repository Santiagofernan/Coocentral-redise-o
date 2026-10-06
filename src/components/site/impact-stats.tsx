import { coreMunicipalities, extendedMunicipalities, impactStats } from "@/content/coocentral";
import { cn } from "@/lib/utils";

import { CountUp } from "./count-up";

const municipalities = [...coreMunicipalities, ...extendedMunicipalities];

export function ImpactStats() {
  return (
    <section id="impacto" aria-label="Cifras de impacto" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Impacto en el territorio
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
            Coocentral en cifras
          </h2>
        </div>
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-6 lg:grid-cols-5">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "reveal flex min-h-36 flex-col justify-between gap-5 border border-border border-t-2 border-t-brand/70 bg-sand/35 p-5 transition-colors hover:bg-sand/70 sm:min-h-40 sm:p-6 lg:col-span-1",
                index === impactStats.length - 1 && "col-span-2 md:col-span-3 lg:col-span-1",
                index < 3 ? "md:col-span-2" : "md:col-span-3",
              )}
            >
              <dd className="order-1 whitespace-nowrap font-display text-3xl font-medium tabular-nums tracking-tight text-brand sm:text-4xl">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="order-2 max-w-[22ch] text-sm font-medium leading-5 text-ink/65">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="overflow-hidden border-y border-forest/20 bg-lime py-5 text-forest-deep">
        <div className="marquee-track flex w-max gap-10">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-10 font-display text-2xl font-medium italic lg:text-3xl"
            >
              {municipalities.map((name) => (
                <li key={name} className="flex items-center gap-10">
                  {name}
                  <span className="size-2 rounded-full bg-forest-deep/40" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
