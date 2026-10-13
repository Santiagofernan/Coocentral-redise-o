import { createFileRoute } from "@tanstack/react-router";

import { CoffeePlantAnimation } from "@/components/site/coffee-plant-animation";
import { CoffeeProcessExplorer } from "@/components/site/coffee-process-explorer";

export const Route = createFileRoute("/cafe")({
  head: () => ({
    meta: [
      { title: "Procesos del café | Coocentral" },
      {
        name: "description",
        content:
          "Explora las etapas de la cadena del café, desde el cultivo en finca hasta su preparación en taza.",
      },
    ],
  }),
  component: CoffeeProcessPage,
});

function CoffeeProcessPage() {
  return (
    <main>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Café del Huila
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Del cultivo a la taza
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70 lg:text-lg">
              Conoce las etapas que conectan el trabajo de las familias caficultoras con la calidad
              y la identidad del café.
            </p>
          </div>
          <div className="relative lg:col-span-5">
            <CoffeePlantAnimation />
            <p className="mt-1 text-center text-xs font-medium uppercase tracking-[0.16em] text-brand/75">
              De la semilla nace el origen
            </p>
          </div>
        </div>
      </section>
      <CoffeeProcessExplorer />
    </main>
  );
}
