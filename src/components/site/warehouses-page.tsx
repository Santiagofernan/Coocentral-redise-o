import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Cog,
  House,
  MapPin,
  Sprout,
  Store,
  Wrench,
} from "lucide-react";

import { warehouseLocations, warehouseProductLines } from "@/content/coocentral";

const municipalities = [...new Set(warehouseLocations.map((location) => location.municipality))];
const productLineIcons = [Sprout, House, Wrench, Cog];

export function WarehousesPage() {
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
          <div className="flex flex-wrap items-center justify-between gap-3">
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
            <Link
              to="/ecosistema"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-paper/65 transition-colors hover:text-lime"
            >
              Ver ecosistema
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                <span className="size-1.5 rounded-full bg-lime" />
                Servicio 03 · Comercio local
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Almacenes <span className="text-lime">Coocentral</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-paper/70 lg:text-lg">
                17 tiendas al servicio de las familias cafeteras del centro del Huila, con productos
                para la finca, el hogar y el trabajo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:col-span-4 lg:justify-self-end">
              <div className="rounded-2xl border border-paper/15 bg-paper/5 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-medium text-lime">17</p>
                <p className="mt-1 text-xs leading-5 text-paper/65">tiendas en la región</p>
              </div>
              <div className="rounded-2xl border border-paper/15 bg-paper/5 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-medium text-lime">
                  {municipalities.length}
                </p>
                <p className="mt-1 text-xs leading-5 text-paper/65">municipios y localidades</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {municipalities.map((municipality) => (
              <span
                key={municipality}
                className="rounded-full border border-paper/15 bg-paper/5 px-3 py-1.5 text-xs font-medium text-paper/75"
              >
                {municipality}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Todo cerca</p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Soluciones para cada día
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/65">
            Encuentra herramientas y productos para el trabajo en el campo, la casa y el negocio.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {warehouseProductLines.map((line, index) => {
            const Icon = productLineIcons[index] ?? Store;
            return (
              <li
                key={line.name}
                className="group rounded-2xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-lime/25 text-forest-deep transition-colors group-hover:bg-lime">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-display text-sm text-brand/70">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{line.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{line.products}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Atención al cliente
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Encuentra tu almacén
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">
            Consulta la dirección y los horarios de atención habituales de cada sede.
          </p>

          <div className="mt-9 space-y-10">
            {municipalities.map((municipality) => (
              <section
                key={municipality}
                aria-labelledby={`warehouse-${municipality.toLowerCase()}`}
              >
                <h3
                  id={`warehouse-${municipality.toLowerCase()}`}
                  className="border-b border-border pb-3 font-display text-2xl"
                >
                  {municipality}
                </h3>
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {warehouseLocations
                    .filter((location) => location.municipality === municipality)
                    .map((location) => {
                      const mapQuery = [
                        location.address,
                        location.name,
                        location.municipality,
                        "Huila",
                      ]
                        .filter(Boolean)
                        .join(", ");
                      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

                      return (
                        <li
                          key={`${location.municipality}-${location.name}`}
                          className="rounded-xl border border-border bg-background p-5 sm:p-6"
                        >
                          <h4 className="font-display text-xl">{location.name}</h4>
                          <div className="mt-4 flex items-start gap-2.5 text-sm leading-6 text-ink/70">
                            <MapPin
                              aria-hidden="true"
                              className="mt-1 size-4 shrink-0 text-brand"
                            />
                            <address className="not-italic">
                              {location.address || "Dirección no indicada"}
                              {!location.address && (
                                <span className="mt-1 block text-xs text-ink/50">
                                  Ubicación identificada por centro poblado
                                </span>
                              )}
                            </address>
                          </div>
                          <div className="mt-4 flex items-start gap-2.5">
                            <Clock3
                              aria-hidden="true"
                              className="mt-1 size-4 shrink-0 text-brand"
                            />
                            <ul className="space-y-1.5 text-sm leading-5 text-ink/70">
                              {location.hours.map((schedule) => (
                                <li key={schedule}>{schedule}</li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex min-h-10 items-center gap-1.5 rounded-md px-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                          >
                            Ver en Google Maps
                            <ArrowUpRight aria-hidden="true" className="size-4" />
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
