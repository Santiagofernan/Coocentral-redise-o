import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/site/hero";
import { ImpactStats } from "@/components/site/impact-stats";
import { OfficeLocation } from "@/components/site/office-location";
import { AtlasPromotion } from "@/components/site/atlas-promotion";
import { AppPromotion } from "@/components/site/app-promotion";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    createSeoHead({
      title: "Coocentral | Cooperativa de caficultores del Huila",
      description:
        "Cooperativa de caficultores en Garzón, Huila. Acompañamos a productores de café con comercialización, servicios y desarrollo rural desde 1975.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
          <div className="grid gap-5 sm:gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Desde 1975 · Garzón, Huila
              </p>
              <h2 className="mt-3 max-w-[16ch] font-display text-3xl font-medium leading-[1.08] sm:text-4xl lg:text-5xl">
                Una cooperativa que crece con su territorio.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
                Nacimos de la unión de 54 caficultores. Hoy articulamos producción, servicios,
                transformación y desarrollo para que las familias cafeteras fortalezcan sus
                proyectos de vida.
              </p>
              <div className="mt-6 grid gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
                <Link
                  to="/historia"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest-deep px-5 text-sm font-bold text-paper shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:justify-start"
                >
                  Recorrer nuestra historia
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  to="/cafe-del-huila"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand bg-paper px-5 text-sm font-bold text-brand shadow-sm transition-all hover:-translate-y-0.5 hover:bg-sand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:justify-start"
                >
                  Conocer los cafés del Huila
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
          <AtlasPromotion />
        </div>
      </section>
      <section className="bg-sand/60">
        <div className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
          <AppPromotion />
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
          <OfficeLocation />
        </div>
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-7 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
              Comunidad cafetera
            </p>
            <h2 className="mt-2 max-w-[20ch] font-display text-3xl leading-tight sm:text-4xl">
              ¿Quieres ser parte de Coocentral?
            </h2>
          </div>
          <Link
            to="/asociarme"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep sm:w-fit"
          >
            Conoce cómo asociarte
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
