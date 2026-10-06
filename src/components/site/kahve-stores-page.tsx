import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Coffee, MapPin, Store } from "lucide-react";

import coffeeQualityImage from "@/assets/coocentral-calidad.jpg";
import coffeeGrowerImage from "@/assets/coocentral-caficultor-hero.jpg";

const kahveStores = [
  {
    city: "Garzón",
    address: "Carrera 8 #11-32, Centro Comercial Paseo del Rosario",
  },
  {
    city: "Neiva",
    address: "Carrera 5 #10-38, plazoleta de la Cámara de Comercio",
  },
];

export function KahveStoresPage() {
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
                Cafés especiales · Huila
              </p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Tiendas <span className="text-lime">Kahvé</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
                Un espacio para disfrutar la cultura del café. Visítanos en Garzón o Neiva y vive
                una pausa con sabor a Huila.
              </p>
              <a
                href="#encuentranos"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-5 text-sm font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Encuentra tu tienda
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-4 py-2 text-sm text-paper/75">
                <Coffee aria-hidden="true" className="size-4 text-lime" />
                Tiendas de cafés especiales desde 2017
              </p>
            </div>

            <div className="relative mx-auto grid w-full max-w-xl grid-cols-5 gap-3 lg:col-span-6">
              <figure className="relative col-span-3 mt-8 overflow-hidden rounded-[1.75rem] border border-paper/15 bg-paper/10 p-2 shadow-2xl">
                <img
                  src={coffeeQualityImage}
                  alt="Selección de café verde como parte del cuidado de la calidad desde el origen"
                  width="1024"
                  height="768"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
                />
                <figcaption className="absolute inset-x-2 bottom-2 rounded-b-[1.25rem] bg-gradient-to-t from-forest-deep/90 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-paper">
                  Cultura cafetera desde el origen
                </figcaption>
              </figure>
              <figure className="relative col-span-2 mb-8 mt-20 overflow-hidden rounded-[1.75rem] border border-paper/15 bg-paper/10 p-2 shadow-2xl">
                <img
                  src={coffeeGrowerImage}
                  alt="Caficultor del Huila en su cultivo"
                  width="1200"
                  height="1600"
                  className="aspect-[3/4] w-full rounded-[1.25rem] object-cover"
                />
                <figcaption className="absolute inset-x-2 bottom-2 rounded-b-[1.25rem] bg-gradient-to-t from-forest-deep/90 to-transparent px-3 pb-3 pt-10 text-xs font-semibold text-paper">
                  Orgullo cafetero huilense
                </figcaption>
              </figure>
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-4 -z-10 size-24 rounded-2xl bg-lime sm:left-8"
              />
              <span
                aria-hidden="true"
                className="absolute -right-3 top-5 -z-10 size-20 rounded-full border-[10px] border-brand"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="encuentranos" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
                Dos puntos para visitarnos
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                El café del Huila, más cerca.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink/65">
              Encuentra la tienda Kahvé más cercana en Garzón o Neiva.
            </p>
          </div>

          <ul className="mt-9 grid gap-5 lg:grid-cols-2">
            {kahveStores.map((store, index) => {
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.address}, ${store.city}, Huila`)}`;

              return (
                <li
                  key={store.city}
                  className="group relative isolate overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/35 hover:shadow-xl sm:p-8"
                >
                  <span className="absolute -right-5 -top-8 -z-10 font-display text-9xl text-brand/[0.06] transition-colors group-hover:text-brand/10">
                    0{index + 1}
                  </span>
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-lime/30 text-forest-deep transition-colors group-hover:bg-lime">
                      <Store aria-hidden="true" className="size-5" />
                    </span>
                    <span className="rounded-full border border-brand/15 bg-paper px-3 py-1 text-xs font-bold text-brand">
                      Tienda Kahvé
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-medium">{store.city}</h3>
                  <div className="mt-3 flex items-start gap-2.5 text-sm leading-6 text-ink/70">
                    <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
                    <address className="not-italic">{store.address}</address>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-forest-deep px-4 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    Cómo llegar
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Tiendas Kahvé · Coocentral
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              Haz una pausa y disfruta el café huilense.
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
