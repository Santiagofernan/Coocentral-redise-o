import { Quote } from "lucide-react";

import { benefits, productivityPrograms, quotes, socialInvestment } from "@/content/coocentral";

import { SectionHeading } from "./section-heading";

const { social, productivity } = socialInvestment;
const socialShare = (social.value / (social.value + productivity.value)) * 100;

export function FarmerCenter() {
  return (
    <section id="asociados" className="bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="El caficultor en el centro"
          title={
            <>
              Un ciclo de protección para cada <em className="text-brand">familia</em>.
            </>
          }
          intro="Invertimos en capital social y fortalecimiento agronómico para estabilizar el ingreso familiar, proteger la salud y la vejez, y elevar la productividad por hectárea."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <blockquote className="reveal relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-forest-deep p-7 text-paper lg:col-span-7 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute -right-14 -top-20 size-72 rounded-full border border-lime/15"
            />
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-8 size-48 rounded-full border border-paper/10"
            />
            <Quote aria-hidden="true" className="relative size-7 text-lime" />
            <p className="relative mt-5 max-w-xl font-display text-xl italic leading-snug lg:text-2xl">
              “{quotes.farmer.text}”
            </p>
            <footer className="relative mt-5 text-sm">
              <span className="font-bold text-lime">{quotes.farmer.author}</span>
              <span className="text-paper/70"> · {quotes.farmer.role}</span>
            </footer>
          </blockquote>

          <article className="reveal flex flex-col rounded-3xl bg-forest p-8 text-paper lg:col-span-5 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              {socialInvestment.period}
            </p>
            <p className="mt-6 font-display text-6xl font-medium tracking-tight lg:text-7xl">
              {socialInvestment.total}
            </p>
            <p className="mt-2 text-paper/70">invertidos en la finca y la comunidad</p>

            <div className="mt-10">
              <div className="flex h-4 overflow-hidden rounded-full bg-paper/10">
                <span className="bg-lime" style={{ width: `${socialShare}%` }} />
                <span className="bg-brand-bright" style={{ width: `${100 - socialShare}%` }} />
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="flex items-center gap-2 text-paper/70">
                    <span className="size-2.5 rounded-full bg-lime" /> {social.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl">USD {social.value.toFixed(1)} M</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-paper/70">
                    <span className="size-2.5 rounded-full bg-brand-bright" /> {productivity.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl">
                    USD {productivity.value.toFixed(1)} M
                  </dd>
                </div>
              </dl>
            </div>
            <p className="mt-auto border-t border-paper/15 pt-6 text-sm text-paper/60">
              {socialInvestment.yearly} inyectados al sector
            </p>
          </article>
        </div>

        <h3 className="reveal mt-24 text-3xl font-medium lg:text-4xl">
          Bienestar para el asociado
        </h3>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="reveal group rounded-3xl bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_oklch(0.3_0.06_156/0.35)]"
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
