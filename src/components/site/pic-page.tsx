import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Coffee,
  Factory,
  FlaskConical,
  Package,
  ShieldCheck,
  Warehouse,
} from "lucide-react";

const processes = [
  {
    icon: Coffee,
    number: "01",
    title: "Beneficio y secado",
    description: "Procesos especializados para preparar el café y conservar sus cualidades.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Trilla",
    description: "Transformación del grano como parte de una cadena integrada.",
  },
  {
    icon: Coffee,
    number: "03",
    title: "Tostión",
    description: "Un proceso que agrega valor y acerca el café de origen a nuevos mercados.",
  },
  {
    icon: Warehouse,
    number: "04",
    title: "Almacenamiento",
    description: "Infraestructura para resguardar el café dentro de la cadena productiva.",
  },
  {
    icon: FlaskConical,
    number: "05",
    title: "Control de calidad",
    description: "Evaluación y cuidado de los estándares de calidad del café.",
  },
];

export function PicPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-forest-deep text-paper">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-40 -z-10 size-[34rem] rounded-full border border-lime/15"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-28 -z-10 size-[26rem] rounded-full border border-lime/10"
        />
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-10 lg:py-16">
          <Link
            to="/servicios"
            className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 text-sm font-semibold text-paper/80 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-lime/60 hover:bg-lime hover:text-forest-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
            />
            Volver a servicios
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                <span className="size-1.5 rounded-full bg-lime" />
                Servicio 02 · Infraestructura cafetera
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                PIC · Parque Industrial <span className="text-lime">del Café</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">
                Un ecosistema de innovación, transformación y sostenibilidad que integra procesos
                especializados y fortalece la cadena de valor del café.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <p className="max-w-md border-l-2 border-lime/70 pl-4 font-display text-lg leading-7 text-paper/80 sm:text-xl">
                Infraestructura moderna para generar valor agregado y fortalecer la competitividad
                de las familias caficultoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-8 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-forest-deep shadow-xl">
          <img
            src="https://coocentral.com/wp-content/uploads/2026/05/jp_pic-1536x634.jpg"
            alt="Vista panorámica de las instalaciones del Parque Industrial del Café de Coocentral"
            width="1536"
            height="634"
            fetchPriority="high"
            className="aspect-[2.42/1] w-full object-cover"
          />
          <p className="sr-only">Parque Industrial del Café de Coocentral.</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-8 lg:px-10 lg:pb-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
                Una cadena de valor conectada
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                Cada proceso suma al origen del café.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/65 sm:text-base lg:col-span-5 lg:justify-self-end">
              El PIC integra beneficio, secado, trilla, tostión, almacenamiento y control de calidad
              en una infraestructura industrial moderna y en constante expansión.
            </p>
          </div>

          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {processes.map(({ icon: Icon, number, title, description }) => (
              <li
                key={number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg"
              >
                <span className="absolute -right-4 -top-7 font-display text-7xl text-brand/[0.06] transition-colors group-hover:text-brand/10">
                  {number}
                </span>
                <span className="relative grid size-11 place-items-center rounded-xl bg-lime/25 text-forest-deep transition-colors group-hover:bg-lime">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-medium leading-snug">
                  {title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-ink/65">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="mb-9 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Propósito y futuro
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
              Una visión que impulsa la caficultura.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="relative isolate overflow-hidden rounded-3xl bg-forest-deep p-7 text-paper sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-20 -z-10 size-64 rounded-full border border-lime/20"
              />
              <span className="grid size-12 place-items-center rounded-2xl bg-lime text-forest-deep">
                <Package aria-hidden="true" className="size-6" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.17em] text-lime">Misión</p>
              <h3 className="mt-2 font-display text-2xl font-medium">
                Impulsar el desarrollo integral
              </h3>
              <p className="mt-4 text-sm leading-7 text-paper/75 sm:text-base">
                Impulsar el desarrollo integral de la caficultura mediante una infraestructura
                industrial moderna y sostenible que garantice procesos eficientes de beneficio,
                secado, trilla, tostión y control de calidad, generando valor agregado para los
                caficultores asociados y fortaleciendo la competitividad del café en mercados
                nacionales e internacionales.
              </p>
            </article>
            <article className="relative isolate overflow-hidden rounded-3xl border border-border bg-paper p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-20 -z-10 size-64 rounded-full border border-brand/10"
              />
              <span className="grid size-12 place-items-center rounded-2xl bg-lime/30 text-forest-deep">
                <ShieldCheck aria-hidden="true" className="size-6" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.17em] text-brand">
                Visión
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium">
                Ser referente en transformación cafetera
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink/70 sm:text-base">
                Ser un referente nacional e internacional en infraestructura y transformación
                cafetera, liderando procesos innovadores y sostenibles que fortalezcan toda la
                cadena de valor del café, contribuyendo al bienestar de las familias caficultoras y
                al posicionamiento del café de origen con altos estándares de calidad.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl bg-lime/25 p-7 sm:p-10 lg:grid-cols-12 lg:items-center lg:p-12">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Parque Industrial del Café
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight sm:text-4xl">
              Tecnología, calidad y sostenibilidad al servicio del café huilense.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-ink/70 sm:text-base">
              Conoce más sobre el PIC y su aporte a la transformación y competitividad del café.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              to="/servicios"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest-deep px-5 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Todos los servicios
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
