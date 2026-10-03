import { MapPin, Quote, Target } from "lucide-react";

import {
  coreMunicipalities,
  extendedMunicipalities,
  governance,
  mission,
  principles,
  quotes,
  vision,
} from "@/content/coocentral";

import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="cooperativa" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Quiénes somos"
          title={
            <>
              El motor socioeconómico del <em className="text-brand">Huila</em> cafetero.
            </>
          }
          intro="Somos una empresa asociativa sin ánimo de lucro y de interés social. Nuestro modelo de gobernanza comunitaria y empresarial transforma la caficultura tradicional en un ejercicio rentable, tecnificado y con proyección internacional."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <article className="reveal rounded-3xl bg-sand p-8 lg:col-span-7 lg:p-12">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand text-paper">
              <Target className="size-6" />
            </span>
            <h3 className="mt-6 text-2xl font-medium lg:text-3xl">Misión</h3>
            <p className="mt-4 text-base leading-8 text-ink/75 lg:text-lg">{mission}</p>
          </article>
          <article className="reveal relative overflow-hidden rounded-3xl bg-forest p-8 text-paper lg:col-span-5 lg:p-12">
            <span className="grain absolute inset-0 opacity-60" />
            <p className="relative font-display text-8xl font-medium leading-none tracking-tighter text-lime lg:text-9xl">
              2027
            </p>
            <h3 className="relative mt-6 text-2xl font-medium lg:text-3xl">Visión</h3>
            <p className="relative mt-4 text-base leading-8 text-paper/80 lg:text-lg">{vision}</p>
          </article>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <h3 className="text-3xl font-medium">Principios cooperativos</h3>
            <p className="mt-4 leading-7 text-ink/65">
              Siete principios guían cada decisión y garantizan el control democrático de los
              asociados.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="reveal flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:border-brand hover:bg-sand"
              >
                <span className="font-display text-2xl font-medium text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold leading-5">{principle}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          <article className="reveal rounded-3xl border border-border p-8 lg:p-10">
            <div className="flex items-center gap-3 text-brand">
              <MapPin className="size-5" />
              <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em]">
                Pilar territorial
              </h3>
            </div>
            <p className="mt-5 text-2xl font-medium font-display leading-snug">
              7 municipios núcleo en el centro del Huila, con Garzón como sede principal.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {coreMunicipalities.map((name) => (
                <li
                  key={name}
                  className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-paper"
                >
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-ink/60">Zona de influencia extendida</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {extendedMunicipalities.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-border px-4 py-1.5 text-sm font-semibold text-ink/75"
                >
                  {name}
                </li>
              ))}
            </ul>
          </article>

          <article className="reveal flex flex-col rounded-3xl border border-border p-8 lg:p-10">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Gobierno corporativo
            </h3>
            <ol className="mt-6 space-y-2">
              {governance.map((level, index) => (
                <li key={level} className="flex items-center gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-lime text-xs font-bold text-forest-deep">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold">{level}</span>
                </li>
              ))}
            </ol>
            <figure className="mt-auto border-t border-border pt-6">
              <Quote className="size-6 text-lime" />
              <blockquote className="mt-3 font-display text-xl italic leading-8">
                “{quotes.ceo.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-bold text-brand">{quotes.ceo.author}</span>
                <span className="text-ink/60"> · {quotes.ceo.role}</span>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
