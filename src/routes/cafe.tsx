import { ArrowDown, ArrowRight, Leaf } from "lucide-react";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";
import { Link } from "@tanstack/react-router";

const CoffeePlantAnimation = lazyRouteComponent(
  () => import("@/components/site/coffee-plant-animation"),
  "CoffeePlantAnimation",
);
const CoffeeProcessExplorer = lazyRouteComponent(
  () => import("@/components/site/coffee-process-explorer"),
  "CoffeeProcessExplorer",
);

export const Route = createFileRoute("/cafe")({
  head: () =>
    createSeoHead({
      title: "Del cultivo a la taza: procesos del café | Coocentral",
      description:
        "Conoce las etapas de la producción cafetera, desde el cultivo y la cosecha en finca hasta el beneficio, secado y preparación del café.",
      path: "/cafe",
    }),
  component: CoffeeProcessPage,
});

function CoffeeProcessPage() {
  return (
    <main>
      <section className="coffee-process-intro relative isolate overflow-hidden border-b border-brand/15">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-8 -z-10 size-64 rounded-full border border-brand/10 sm:size-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-14 top-18 -z-10 size-44 rounded-full border border-brand/10 sm:size-60"
        />
        <div
          aria-hidden="true"
          className="coffee-bean-drift pointer-events-none absolute inset-0 z-0"
        >
          {[0, 1, 2, 3].map((bean) => (
            <svg
              key={bean}
              viewBox="0 0 28 36"
              className={`coffee-bean coffee-bean--${bean + 1}`}
              fill="none"
            >
              <path
                d="M14 2.5C7.7 2.5 3 9.3 3 17.7S7.7 33.5 14 33.5s11-7.4 11-15.8S20.3 2.5 14 2.5Z"
                fill="currentColor"
                fillOpacity=".82"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M17.8 6.5c-4.9 4.7-7.6 11-6.5 16.1.6 2.9 2.1 5.1 4.4 6.5-1.1-3.6-.7-7.7 1-11.7 1.2-2.9 2.8-5.5 4.8-7.6"
                stroke="oklch(0.948 0.022 110 / 0.8)"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
          ))}
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:gap-8 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-paper/75 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-forest shadow-sm">
              <Leaf aria-hidden="true" className="size-4 text-brand" />
              El viaje del café · Huila
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-forest-deep sm:text-5xl lg:text-6xl">
              Del campo
              <span className="mt-1 flex flex-wrap items-center gap-x-3 text-brand sm:mt-2">
                <span>a tu casa</span>
                <svg
                  aria-hidden="true"
                  className="coffee-cup-icon size-8 shrink-0 text-brand sm:size-10 lg:size-12"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path className="coffee-cup-steam coffee-cup-steam--first" d="M10 2v2" />
                  <path className="coffee-cup-steam coffee-cup-steam--second" d="M14 2v2" />
                  <path className="coffee-cup-steam coffee-cup-steam--third" d="M6 2v2" />
                  <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
                </svg>
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75 lg:text-lg">
              Nueve etapas conectan el trabajo de las familias caficultoras con cada taza. Descubre
              cómo crece, se transforma y llega hasta ti.
            </p>
            <div className="mt-5 flex flex-col items-start gap-6">
              <Link
                to="/cafe-del-huila"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Conoce el café del Huila y su origen
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                href="#cadena-cafe"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-forest-deep px-5 py-3 text-sm font-bold text-paper shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:translate-y-0"
              >
                Explorar las etapas
                <span className="grid size-7 place-items-center rounded-full bg-paper/10 transition-transform duration-200 group-hover:translate-y-0.5">
                  <ArrowDown aria-hidden="true" className="size-4" />
                </span>
                <span className="sr-only">del proceso del café</span>
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-forest/70 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-brand" />
                Origen
              </span>
              <ArrowRight aria-hidden="true" className="hidden size-4 text-brand/45 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-brand" />
                Transformación
              </span>
              <ArrowRight aria-hidden="true" className="hidden size-4 text-brand/45 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-brand" />
                Taza
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-8 -z-10 aspect-square rounded-full bg-lime/15 blur-2xl"
            />
            <CoffeePlantAnimation />
            <p className="mt-1 inline-flex w-full items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-forest/70">
              <Leaf aria-hidden="true" className="size-3.5 text-brand" />
              De la semilla nace el origen
              <Leaf aria-hidden="true" className="size-3.5 -scale-x-100 text-brand" />
            </p>
          </div>
        </div>
      </section>
      <CoffeeProcessExplorer />
    </main>
  );
}
