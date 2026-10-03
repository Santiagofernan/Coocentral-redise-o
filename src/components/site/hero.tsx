import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import heroImage from "@/assets/coocentral-caficultor-hero.jpg";
import { heroBadges } from "@/content/coocentral";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-forest-deep text-paper"
    >
      <img
        src={heroImage}
        alt="Caficultor del Huila sosteniendo granos de café recién cosechados"
        width="1088"
        height="1360"
        fetchPriority="high"
        className="hero-zoom absolute inset-0 -z-20 size-full object-cover object-[70%_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-forest-deep via-forest-deep/80 to-forest-deep/10" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-forest-deep via-transparent to-forest-deep/50" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-10 lg:pb-24">
        <div className="max-w-4xl">
          <p className="editorial-reveal inline-flex items-center gap-3 rounded-full border border-paper/20 bg-paper/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            <span className="size-2 animate-pulse rounded-full bg-lime" />
            50 años · 1975–2025 · Huila, Colombia
          </p>
          <h1
            className="editorial-reveal mt-8 text-4xl font-medium leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Más que una cooperativa: Una <em className="font-normal text-lime">familia</em>{" "}
            al servicio del caficultor
          </h1>
          <p
            className="editorial-reveal mt-8 max-w-[56ch] text-lg leading-8 text-paper/80 lg:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Desde 1975 articulamos producción, industria, financiamiento y desarrollo humano para
            que la caficultura del Huila sea rentable, tecnificada y sostenible.
          </p>
          <div
            className="editorial-reveal mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              to="/ecosistema"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-bold text-forest-deep transition-transform hover:-translate-y-0.5"
            >
              Conocer el ecosistema
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/asociarme"
              className="inline-flex items-center rounded-full border border-paper/35 px-7 py-4 text-sm font-bold transition-colors hover:bg-paper hover:text-forest-deep"
            >
              Quiero asociarme
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-paper/15 pt-6">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-paper/75">
            {heroBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="size-4 text-lime" /> {label}
              </li>
            ))}
          </ul>
          <a
            href="#impacto"
            className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-paper/60 transition-colors hover:text-lime sm:inline-flex"
          >
            Descubre más <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
