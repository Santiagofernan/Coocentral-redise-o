import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/site/hero";
import { ImpactStats } from "@/components/site/impact-stats";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coocentral | Una cooperativa al servicio del caficultor" },
      { name: "description", content: "Conoce la cooperativa que acompaña a las familias caficultoras del Huila desde 1975." },
    ],
  }),
  component: HomePage,
});

const destinations = [
  { eyebrow: "Organización", title: "La cooperativa", description: "Nuestra historia, principios, gobierno y documentos institucionales.", href: "/cooperativa" },
  { eyebrow: "Acompañamiento", title: "Servicios para la finca", description: "Asistencia, financiación e infraestructura al servicio del asociado.", href: "/servicios" },
  { eyebrow: "Origen", title: "Café del Huila", description: "Conoce la cadena de valor y los perfiles de nuestros cafés.", href: "/cafe" },
];

function HomePage() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Desde 1975 · Garzón, Huila</p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight lg:text-4xl">Una cooperativa que crece con su territorio.</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-7 text-ink/70">Nacimos de la unión de 54 caficultores. Hoy articulamos producción, servicios, transformación y desarrollo para que las familias cafeteras fortalezcan sus proyectos de vida.</p>
              <Link to="/historia" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">Recorrer nuestra historia<ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Conoce Coocentral</p><h2 className="mt-3 font-display text-3xl font-medium lg:text-4xl">Un ecosistema alrededor del caficultor</h2></div>
          <Link to="/ecosistema" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">Explorar el ecosistema<ArrowRight className="size-4" /></Link>
        </div>
        <ul className="mt-8 grid gap-x-10 sm:grid-cols-3">
          {destinations.map((item, index) => (
            <li key={item.href} className="group border-t border-border py-5 transition-colors hover:bg-sand/50">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">0{index + 1} · {item.eyebrow}</span>
              <h3 className="mt-3 font-display text-2xl transition-colors group-hover:text-brand">{item.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-ink/65">{item.description}</p>
              <Link to={item.href} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Conocer más<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">Comunidad cafetera</p><h2 className="mt-2 font-display text-3xl sm:text-4xl">¿Quieres ser parte de Coocentral?</h2></div>
          <Link to="/asociarme" className="inline-flex w-fit items-center gap-2 rounded-md bg-lime px-5 py-3 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep">Conoce cómo asociarte<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </main>
  );
}
