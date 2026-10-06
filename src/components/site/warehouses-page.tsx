import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock3, MapPin, Store } from "lucide-react";

import { warehouseLocations, warehouseProductLines } from "@/content/coocentral";

const municipalities = [...new Set(warehouseLocations.map((location) => location.municipality))];

export function WarehousesPage() {
  return (
    <main>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
          <Link
            to="/ecosistema"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Volver al ecosistema
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Ecosistema Coocentral · Comercio local
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Almacenes Coocentral
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70 lg:text-lg">
            17 tiendas al servicio de las familias cafeteras del centro del Huila, con productos
            para la finca y el hogar.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {municipalities.map((municipality) => (
              <span
                key={municipality}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-ink/75"
              >
                {municipality}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Nuestras líneas de productos
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Soluciones para cada día
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">
            Encuentra herramientas y productos para el trabajo en el campo, la casa y el negocio.
          </p>
        </div>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {warehouseProductLines.map((line, index) => (
            <li
              key={line.name}
              className="rounded-xl border border-border bg-paper p-5 transition-colors hover:border-brand/40"
            >
              <div className="flex items-center justify-between">
                <Store aria-hidden="true" className="size-5 text-brand" />
                <span className="font-display text-sm text-brand/70">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-xl">{line.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{line.products}</p>
            </li>
          ))}
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
