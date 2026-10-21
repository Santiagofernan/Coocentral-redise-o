import { ArrowRight, BookOpen, Users } from "lucide-react";
import { createFileRoute, Link, lazyRouteComponent } from "@tanstack/react-router";
import { getCoocentralCalendarYear } from "@/lib/coocentral-anniversary";
import { createSeoHead } from "@/lib/seo";

const History = lazyRouteComponent(() => import("@/components/site/history"), "History");

export const Route = createFileRoute("/historia")({
  head: () =>
    createSeoHead({
      title: "Historia de Coocentral | Caficultura del Huila desde 1975",
      description:
        "Recorre la historia de Coocentral desde 1975 y conoce cómo ha acompañado a los caficultores y las comunidades del Huila.",
      path: "/historia",
    }),
  component: HistoryPage,
});

function HistoryPage() {
  const currentYear = getCoocentralCalendarYear(new Date());

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-forest-deep text-paper">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-28 -z-10 size-96 rounded-full border border-lime/15"
        />
        <div
          aria-hidden="true"
          className="absolute -right-4 -top-10 -z-10 size-64 rounded-full border border-paper/10"
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
              <BookOpen aria-hidden="true" className="size-4" />
              Nuestra historia · {`1975—${currentYear}`}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
              Una historia construida por <span className="text-lime">caficultores.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-paper/75 sm:text-lg">
              De 54 pioneros en Garzón a una cooperativa que conecta familias, producción y
              desarrollo en el Huila.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#historia"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-lime px-5 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Recorrer nuestra historia
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <Link
                to="/cooperativa#quienes-somos"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-5 text-sm font-semibold text-paper transition-colors hover:border-lime/50 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Quiénes somos
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-paper/15 bg-paper/[0.06] p-6 backdrop-blur-sm sm:p-8 lg:col-span-5 lg:p-9">
            <span
              aria-hidden="true"
              className="absolute -bottom-20 -right-16 size-56 rounded-full border border-lime/15"
            />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">
              El origen de Coocentral
            </p>
            <p className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
              54 caficultores unidos por un propósito.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-paper/15 pt-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-lime/15 text-lime">
                <Users aria-hidden="true" className="size-5" />
              </span>
              <p className="text-sm leading-6 text-paper/70">
                Desde Garzón, una historia que sigue creciendo junto a las familias del Huila.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <History />
    </main>
  );
}
