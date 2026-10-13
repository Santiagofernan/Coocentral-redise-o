import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import heroImage from "@/assets/Inicio/50 años de Coocentral en verde y oro.png";
import { heroBadges } from "@/content/coocentral";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-forest-deep text-paper"
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        width="2048"
        height="768"
        fetchPriority="high"
        className="hero-zoom absolute inset-x-0 top-0 -z-20 h-auto w-full object-contain object-top lg:inset-0 lg:size-full lg:object-cover lg:object-left"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-forest-deep/10 via-transparent to-forest-deep/85 lg:bg-linear-to-r lg:from-forest-deep lg:via-forest-deep/80 lg:to-forest-deep/10" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-forest-deep/70 via-transparent to-transparent lg:from-forest-deep lg:to-forest-deep/50" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <svg
          viewBox="0 0 36 60"
          fill="none"
          className="nature-leaf nature-leaf--one absolute -top-16 left-[18%] size-8 text-lime/45"
        >
          <path
            d="M18 3C8 12 4 24 10 34c2 4 5 6 8 7 3-1 6-3 8-7 6-10 2-22-8-31Z"
            fill="currentColor"
          />
          <path
            d="M18 40V13m0 16-7-8m7 1 7-8"
            stroke="oklch(0.22 0.045 158 / 0.55)"
            strokeWidth="1.2"
          />
        </svg>
        <svg
          viewBox="0 0 36 60"
          fill="none"
          className="nature-leaf nature-leaf--two absolute -top-20 left-[57%] size-6 text-lime/35"
        >
          <path
            d="M18 3C8 12 4 24 10 34c2 4 5 6 8 7 3-1 6-3 8-7 6-10 2-22-8-31Z"
            fill="currentColor"
          />
          <path
            d="M18 40V13m0 16-7-8m7 1 7-8"
            stroke="oklch(0.22 0.045 158 / 0.55)"
            strokeWidth="1.2"
          />
        </svg>
        <svg
          viewBox="0 0 36 60"
          fill="none"
          className="nature-leaf nature-leaf--three absolute -top-24 left-[82%] size-7 text-paper/30"
        >
          <path
            d="M18 3C8 12 4 24 10 34c2 4 5 6 8 7 3-1 6-3 8-7 6-10 2-22-8-31Z"
            fill="currentColor"
          />
          <path
            d="M18 40V13m0 16-7-8m7 1 7-8"
            stroke="oklch(0.22 0.045 158 / 0.55)"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-[calc(100vw*0.375+1.5rem)] pb-12 lg:px-10 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          <p className="editorial-reveal inline-flex items-center gap-3 rounded-full border border-paper/20 bg-paper/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            <span className="size-2 animate-pulse rounded-full bg-lime" />
            50 años · 1975–2025 · Huila, Colombia
          </p>
          <h1
            className="editorial-reveal mt-8 text-4xl font-medium leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Más que una cooperativa: Una <em className="font-normal text-lime">familia</em> al
            servicio del caficultor
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
              to="/servicios"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-lime px-7 py-4 text-sm font-bold text-forest-deep shadow-[0_12px_28px_-14px_oklch(0.766_0.166_130/0.8)] transition-all duration-200 hover:-translate-y-1 hover:bg-paper hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep active:translate-y-0"
            >
              Explorar servicios
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/asociarme"
              className="inline-flex min-h-12 items-center rounded-full border border-paper/35 bg-paper/5 px-7 py-4 text-sm font-bold backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-paper hover:bg-paper hover:text-forest-deep hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep active:translate-y-0"
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
