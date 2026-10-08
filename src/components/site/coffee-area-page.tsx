import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Coffee, MapPin, Sprout } from "lucide-react";

import qualityImage from "@/assets/Servicios/Cafes_coocentral/Cafe.webp";

const coffeePointsMap =
  "https://www.google.com/maps/d/embed?mid=1v6ZsY68oRmgOkt0PkXxdkf74QP4-jDc&ehbc=2E312F";

export function CoffeeAreaPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-forest-deep text-paper">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-40 -z-10 size-[34rem] rounded-full border border-lime/15"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-28 -z-10 size-[26rem] rounded-full border border-lime/10"
        />
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-10 lg:py-16">
          <Link
            to="/servicios"
            className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 text-sm font-semibold text-paper/80 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-lime/60 hover:bg-lime hover:text-forest-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
            />
            Volver a servicios
          </Link>
          <div className="mt-10 grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                <span className="size-1.5 rounded-full bg-lime" />
                Servicio 05 · Café
              </p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Área de <span className="text-lime">Café</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
                Encuentra los puntos de compra y venta de café verde y seco de Coocentral en el
                centro del Huila.
              </p>
              <a
                href="#puntos-de-compra"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-5 text-sm font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Explorar puntos en el mapa
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <figure className="relative mx-auto w-full max-w-xl lg:col-span-6">
              <div className="absolute -bottom-4 -left-4 size-28 rounded-2xl bg-lime sm:-bottom-5 sm:-left-5 sm:size-36" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-paper/10 p-2 shadow-2xl">
                <img
                  src={qualityImage}
                  alt="Presentación de cafés tostados Coocentral"
                  width="1024"
                  height="768"
                  fetchPriority="high"
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <figcaption className="absolute -bottom-5 right-3 rounded-full border border-border bg-paper px-4 py-2 text-xs font-bold text-forest-deep shadow-lg sm:-bottom-6 sm:right-8">
                Calidad desde el origen
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Compra y venta de café
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
              Conecta tu café con los puntos Coocentral.
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink/65 sm:text-base">
              Consulta el mapa institucional para ubicar los puntos de compra y venta de café verde
              y seco. Acércate al punto que te resulte conveniente para conocer la atención
              disponible.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime/25 text-forest-deep">
                  <Sprout aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm font-semibold text-ink/80">Café verde</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime/25 text-forest-deep">
                  <Coffee aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm font-semibold text-ink/80">Café seco</span>
              </div>
            </div>
          </div>

          <div
            id="puntos-de-compra"
            className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-sand p-2 shadow-lg lg:col-span-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-full bg-lime/35 text-forest-deep">
                  <MapPin aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold">Puntos de compra y venta</h3>
                  <p className="text-xs text-ink/55">Mapa institucional de Coocentral</p>
                </div>
              </div>
              <a
                href={coffeePointsMap}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-9 items-center gap-1 rounded-full px-3 text-xs font-bold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Abrir mapa
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
            <iframe
              title="Mapa de puntos de compra y venta de café verde y seco de Coocentral"
              src={coffeePointsMap}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full rounded-2xl border-0 bg-background sm:h-[32rem]"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Área de Café · Coocentral
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              Café huilense, más cerca de sus productores.
            </h2>
          </div>
          <Link
            to="/servicios"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-md bg-forest-deep px-4 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:self-center"
          >
            Todos los servicios
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
