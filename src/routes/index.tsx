import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/site/hero";
import { ImpactStats } from "@/components/site/impact-stats";
import { OfficeLocation } from "@/components/site/office-location";
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
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Desde 1975 · Garzón, Huila
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight lg:text-4xl">
                Una cooperativa que crece con su territorio.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-7 text-ink/70">
                Nacimos de la unión de 54 caficultores. Hoy articulamos producción, servicios,
                transformación y desarrollo para que las familias cafeteras fortalezcan sus
                proyectos de vida.
              </p>
              <Link
                to="/historia"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Recorrer nuestra historia
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/cafe-del-huila"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Conocer los cafés del Huila
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <AppPromotion />
        </div>
      </section>
      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <OfficeLocation />
        </div>
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
              Comunidad cafetera
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              ¿Quieres ser parte de Coocentral?
            </h2>
          </div>
          <Link
            to="/asociarme"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-lime px-5 py-3 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            Conoce cómo asociarte
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
