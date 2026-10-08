import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/site/hero";
import { ImpactStats } from "@/components/site/impact-stats";
import { OfficeLocation } from "@/components/site/office-location";
import { AppPromotion } from "@/components/site/app-promotion";
import { industrialProjects } from "@/content/coocentral";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coocentral | Una cooperativa al servicio del caficultor" },
      {
        name: "description",
        content:
          "Conoce la cooperativa que acompaña a las familias caficultoras del Huila desde 1975.",
      },
    ],
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
      <section className="border-b border-border bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Desarrollo agroindustrial
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
              Infraestructura para agregar valor
            </h2>
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {industrialProjects.map((project, index) => (
              <li
                key={project.name}
                className="flex h-full flex-col border-t-2 border-brand bg-sand p-5 sm:p-6"
              >
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                  Proyecto 0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink/65">{project.impact}</p>
                <p className="mt-5 border-t border-border pt-4 text-xs leading-5 text-ink/55">
                  Aliados: {project.allies}
                </p>
                <p className="mt-4 font-display text-2xl font-medium text-brand">
                  {project.investment}
                </p>
              </li>
            ))}
          </ul>
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
