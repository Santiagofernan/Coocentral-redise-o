import { Layers3, Sparkles } from "lucide-react";

export function AtlasPromotion() {
  return (
    <section
      aria-labelledby="atlas-promotion-title"
      className="relative isolate overflow-hidden rounded-3xl bg-forest-deep px-7 py-8 text-paper shadow-xl sm:px-10 sm:py-10 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 size-72 rounded-full border border-lime/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 -z-10 size-56 rounded-full border border-paper/10"
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-lime">
            <Sparkles aria-hidden="true" className="size-4" />
            Nuevo aplicativo
          </span>
          <h2
            id="atlas-promotion-title"
            className="mt-5 font-display text-4xl font-medium sm:text-5xl"
          >
            Atlas
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-paper/70 sm:text-base">
            Muy pronto compartiremos más información sobre este aplicativo.
          </p>
        </div>

        <div
          aria-label="Espacio reservado para información de Atlas"
          className="grid min-h-44 place-items-center rounded-2xl border border-dashed border-lime/30 bg-paper/5 p-6 sm:min-h-52"
        >
          <span
            aria-hidden="true"
            className="grid size-14 place-items-center rounded-2xl border border-paper/10 bg-paper/5 text-lime"
          >
            <Layers3 className="size-7" />
          </span>
        </div>
      </div>
    </section>
  );
}
