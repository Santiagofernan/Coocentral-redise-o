import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Coffee, MapPin, Store } from "lucide-react";

import kahveStorefrontImage from "@/assets/Servicios/Tiendas/Frente_Tienda.webp";
import kahveStoreInteriorImage from "@/assets/Servicios/Tiendas/Tienda_Interior.webp";
import { getStoreStatus, type StoreStatus, type StoreWeeklySchedule } from "@/lib/store-schedule";

const rosarioSchedule: StoreWeeklySchedule = {
  0: [[780, 1140]],
  1: [[420, 1200]],
  2: [[420, 1200]],
  3: [[420, 1200]],
  4: [[420, 1200]],
  5: [[420, 1200]],
  6: [[420, 1200]],
};

const hotelKahveSchedule: StoreWeeklySchedule = {
  0: [[480, 720]],
  1: [[360, 1200]],
  2: [[360, 1200]],
  3: [[360, 1200]],
  4: [[360, 1200]],
  5: [[360, 1200]],
  6: [[360, 1200]],
};

const guadalupeSchedule: StoreWeeklySchedule = {
  2: [
    [480, 660],
    [960, 1260],
  ],
  3: [
    [480, 660],
    [960, 1260],
  ],
  4: [
    [480, 660],
    [900, 1260],
  ],
  5: [
    [480, 660],
    [900, 1260],
  ],
  6: [
    [480, 660],
    [900, 1260],
  ],
  0: [
    [480, 660],
    [900, 1260],
  ],
};

const kahveStores = [
  {
    city: "Garzón",
    name: "Rosario",
    address: "Carrera 8 #11-32, Centro Comercial Paseo del Rosario",
    hours: ["Lunes a sábado · 7:00 a. m.–8:00 p. m.", "Domingo · 1:00–7:00 p. m."],
    schedule: rosarioSchedule,
  },
  {
    city: "Garzón",
    name: "Hotel Kahve",
    address: "Hotel Kahve, Garzón, Huila",
    hours: ["Lunes a sábado · 6:00 a. m.–8:00 p. m.", "Domingo · 8:00 a. m.–12:00 p. m."],
    schedule: hotelKahveSchedule,
  },
  {
    city: "Guadalupe",
    name: "Tienda Guadalupe",
    address: "Cl. 4 #carrera 6",
    hours: [
      "Martes y miércoles · 8:00–11:00 a. m. y 4:00–9:00 p. m.",
      "Jueves a domingo · 8:00–11:00 a. m. y 3:00–9:00 p. m.",
      "Lunes · Cerrado",
    ],
    schedule: guadalupeSchedule,
  },
];

const statusLabels: Record<StoreStatus, string> = {
  open: "Abierto ahora",
  break: "En descanso",
  closed: "Cerrado ahora",
};

const statusStyles: Record<StoreStatus, string> = {
  open: "bg-lime/25 text-forest-deep",
  break: "bg-amber-100 text-amber-900",
  closed: "bg-ink/5 text-ink/60",
};

export function KahveStoresPage() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateClock = () => setNow(new Date());
    updateClock();
    const intervalId = window.setInterval(updateClock, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-forest-deep text-paper">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-40 -z-10 size-136 rounded-full border border-lime/15"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-28 -z-10 size-104 rounded-full border border-lime/10"
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
                Un espacio para disfrutar la cultura del café. Visítanos en Garzón o Guadalupe y
                vive una pausa con sabor a Huila.
              </p>
              <div className="mt-8 flex flex-col items-start gap-6">
                <a
                  href="#encuentranos"
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-5 text-sm font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
                >
                  Encuentra tu tienda
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
                <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-4 py-2 text-sm text-paper/75">
                  <Coffee aria-hidden="true" className="size-4 text-lime" />
                  Tiendas de cafés especiales desde 2017
                </p>
              </div>
            </div>

            <div className="relative mx-auto grid w-full max-w-xl grid-cols-5 gap-3 lg:col-span-6">
              <figure className="relative col-span-3 mt-8 overflow-hidden rounded-4xl border border-paper/15 bg-paper/10 p-2 shadow-2xl">
                <img
                  src={kahveStorefrontImage}
                  alt="Fachada de una tienda Kahvé de Coocentral"
                  width="1920"
                  height="1220"
                  fetchPriority="high"
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                />
                <figcaption className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-linear-to-t from-forest-deep/90 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-paper">
                  Cultura cafetera desde el origen
                </figcaption>
              </figure>
              <figure className="relative col-span-2 mb-8 mt-20 overflow-hidden rounded-4xl border border-paper/15 bg-paper/10 p-2 shadow-2xl">
                <img
                  src={kahveStoreInteriorImage}
                  alt="Interior de una tienda Kahvé con barra y zona para clientes"
                  width="1920"
                  height="1280"
                  className="aspect-4/5 w-full rounded-2xl object-cover"
                />
                <figcaption className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-linear-to-t from-forest-deep/90 to-transparent px-3 pb-3 pt-10 text-xs font-semibold text-paper">
                  Un espacio para disfrutar el café
                </figcaption>
              </figure>
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-4 -z-10 size-24 rounded-2xl bg-lime sm:left-8"
              />
              <span
                aria-hidden="true"
                className="absolute -right-3 top-5 -z-10 size-20 rounded-full border-8 border-brand"
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
                Encuéntranos
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                El café del Huila, más cerca.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink/65">
              Encuentra la tienda Kahvé más cercana en Garzón o Guadalupe.
            </p>
          </div>

          <ul className="mt-9 grid gap-5 lg:grid-cols-2">
            {kahveStores.map((store, index) => {
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.address}, ${store.city}, Huila`)}`;
              const status = now && store.schedule ? getStoreStatus(now, store.schedule) : null;

              return (
                <li
                  key={`${store.city}-${store.name}`}
                  className="group relative isolate overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/35 hover:shadow-xl sm:p-8"
                >
                  <span className="absolute -right-5 -top-8 -z-10 font-display text-9xl text-brand/5 transition-colors group-hover:text-brand/10">
                    0{index + 1}
                  </span>
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-lime/30 text-forest-deep transition-colors group-hover:bg-lime">
                      <Store aria-hidden="true" className="size-5" />
                    </span>
                    <span className="rounded-full border border-brand/15 bg-paper px-3 py-1 text-xs font-bold text-brand">
                      {store.name}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-3xl font-medium">{store.city}</h3>
                    <span
                      className={`inline-flex min-h-8 items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${
                        status ? statusStyles[status] : "bg-ink/5 text-ink/60"
                      }`}
                    >
                      <span
                        className={`size-2 rounded-full ${
                          status === "open"
                            ? "bg-forest motion-safe:animate-pulse"
                            : status === "break"
                              ? "bg-amber-600"
                              : "bg-ink/35"
                        }`}
                      />
                      {status
                        ? statusLabels[status]
                        : store.schedule
                          ? "Consultando horario"
                          : "Horario por confirmar"}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start gap-2.5 text-sm leading-6 text-ink/70">
                    <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
                    <address className="not-italic">{store.address}</address>
                  </div>
                  {store.hours && (
                    <div className="mt-4 flex items-start gap-2.5">
                      <Clock3 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                      <ul className="space-y-1 text-sm leading-5 text-ink/70">
                        {store.hours.map((hours) => (
                          <li key={hours}>{hours}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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
