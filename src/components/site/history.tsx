import { MoveRight } from "lucide-react";

import historyImage from "@/assets/coocentral-historia.jpg";
import { timeline } from "@/content/coocentral";

import { SectionHeading } from "./section-heading";

export function History() {
  return (
    <section id="historia" className="relative overflow-hidden bg-forest-deep text-paper">
      <span className="grain absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              tone="dark"
              eyebrow="Herencia pionera"
              title={
                <>
                  “El café me lo ha <em className="text-lime">dado todo</em>.”
                </>
              }
            />
            <div className="reveal mt-8 space-y-5 text-base leading-8 text-paper/75 lg:text-lg">
              <p>
                A los 15 años, Don Máximo sembró su primer cafetal con el deseo de ser un hombre
                independiente y conquistar el corazón de Doña Leonilde, su compañera de vida y
                madre de sus siete hijos.
              </p>
              <p>
                Motivado por su amigo Guillermo Guerrero, se unió a otros 54 caficultores para
                fundar la cooperativa en 1975. Hoy su rostro es la imagen de Café Coocentral y
                símbolo del relevo generacional de las familias huilenses.
              </p>
            </div>
          </div>
          <figure className="reveal relative lg:col-span-6">
            <img
              src={historyImage}
              alt="Memoria histórica de la caficultura huilense"
              loading="lazy"
              width="1536"
              height="864"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <figcaption className="absolute -bottom-6 left-6 rounded-2xl bg-lime px-6 py-4 text-forest-deep shadow-xl">
              <span className="block font-display text-4xl font-medium leading-none">54</span>
              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Pioneros fundadores
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-24 flex items-end justify-between gap-6">
          <h3 className="reveal text-3xl font-medium lg:text-4xl">Medio siglo de evolución</h3>
          <p className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-paper/50 sm:flex">
            Desliza <MoveRight className="size-4" />
          </p>
        </div>
      </div>

      <ol
        tabIndex={0}
        aria-label="Línea de tiempo 1975 a 2025"
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-20 [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-lime lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pb-32"
      >
        {timeline.map((item) => (
          <li
            key={item.year}
            className="group relative w-72 shrink-0 snap-start rounded-3xl border border-paper/12 bg-paper/5 p-7 transition-colors hover:border-lime/60 hover:bg-paper/10"
          >
            <span className="block font-display text-4xl font-medium tracking-tight text-lime">
              {item.year}
            </span>
            <span className="mt-4 block h-px w-10 bg-paper/25 transition-all group-hover:w-20 group-hover:bg-lime" />
            <p className="mt-4 text-sm leading-6 text-paper/75">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
