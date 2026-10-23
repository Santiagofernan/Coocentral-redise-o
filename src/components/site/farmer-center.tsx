import { Quote } from "lucide-react";

import { benefits, productivityPrograms, quotes } from "@/content/coocentral";

import { SectionHeading } from "./section-heading";

export function FarmerCenter() {
  return (
    <section id="beneficios-asociados" className="scroll-mt-24 bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-36">
        <SectionHeading
          eyebrow="El caficultor en el centro"
          title={
            <>
              Un ciclo de protección para cada <em className="text-brand">familia</em>.
            </>
          }
          intro="Invertimos en capital social y fortalecimiento agronómico para estabilizar el ingreso familiar, proteger la salud y la vejez, y elevar la productividad por hectárea."
        />

        <div className="mt-16">
          <blockquote className="reveal relative flex min-h-96 flex-col justify-end overflow-hidden rounded-3xl bg-forest-deep p-8 text-paper lg:p-12">
            <span
              aria-hidden="true"
              className="absolute -right-14 -top-20 size-72 rounded-full border border-lime/15"
            />
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-8 size-48 rounded-full border border-paper/10"
            />
            <Quote aria-hidden="true" className="relative size-7 text-paper/75" />
            <p className="relative mt-5 max-w-3xl font-display text-xl italic leading-snug lg:text-2xl">
              “{quotes.farmer.text}”
            </p>
            <footer className="relative mt-5 text-sm">
              <span className="font-bold text-paper">{quotes.farmer.author}</span>
              <span className="text-paper/70"> · {quotes.farmer.role}</span>
            </footer>
          </blockquote>
        </div>

        <h3 className="reveal mt-24 text-3xl font-medium lg:text-4xl">
          Bienestar para el asociado
        </h3>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ id, icon: Icon, title, text }) => (
            <li
              id={`beneficio-${id}`}
              key={title}
              className="reveal group scroll-mt-24 rounded-3xl bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_oklch(0.3_0.06_156/0.35)]"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-sand text-brand transition-colors group-hover:bg-brand group-hover:text-paper">
                <Icon className="size-6" />
              </span>
              <h4 className="mt-5 font-display text-xl font-medium">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
            </li>
          ))}
          <li className="reveal flex flex-col justify-between rounded-3xl bg-lime p-7 text-forest-deep">
            <p className="font-display text-5xl font-medium tracking-tight">+350</p>
            <p className="mt-6 text-sm font-semibold leading-6">
              estudiantes en educación superior, con más de $2.100 millones de pesos movilizados.
            </p>
          </li>
        </ul>

        <div className="reveal mt-24 grid gap-10 rounded-3xl bg-paper p-8 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-medium leading-tight lg:text-4xl">
              Decálogo de productividad en finca
            </h3>
            <p className="mt-4 leading-7 text-ink/65">
              Acompañamiento agronómico y programas que convierten cada finca en una unidad
              productiva rentable.
            </p>
          </div>
          <ol className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {productivityPrograms.map((program, index) => (
              <li
                key={program}
                className="flex gap-4 border-b border-border py-4 text-sm font-medium leading-6"
              >
                <span className="font-display text-lg font-medium text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {program}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
