import { coreMunicipalities, extendedMunicipalities, impactStats } from "@/content/coocentral";
import { cn } from "@/lib/utils";

import { CountUp } from "./count-up";

const municipalities = [...coreMunicipalities, ...extendedMunicipalities];

export function ImpactStats() {
  return (
    <section id="impacto" aria-label="Cifras de impacto" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-6 lg:grid-cols-5">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "reveal flex flex-col justify-between gap-6 bg-paper p-6 lg:col-span-1 lg:p-8",
                index === impactStats.length - 1 && "col-span-2",
                index < 3 ? "md:col-span-2" : "md:col-span-3",
              )}
            >
              <dt className="order-2 text-sm font-medium leading-5 text-ink/60">{stat.label}</dt>
              <dd className="order-1 font-display text-4xl font-medium tracking-tight text-brand lg:text-5xl">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
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
