import { Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Factory, MapPin, Sprout } from "lucide-react";

import coffeeImage from "@/assets/Servicios/Cafes_coocentral/Cafe.webp";
import {
  coreMunicipalities,
  impactStats,
  cooperativeOverview,
  timeline,
} from "@/content/coocentral";

const coffeeVolume = impactStats.find(({ label }) => label === "Café verde comercializado al año");
const coffeeBrandMilestone = timeline.find(({ year }) => year === "2015");

export function CafeDelHuilaPage() {
  if (!coffeeVolume || !coffeeBrandMilestone) {
    throw new Error("Faltan datos institucionales para la página de café del Huila.");
  }

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-forest-deep text-paper">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-32 -z-10 size-96 rounded-full border border-lime/15"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-18 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-24">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-lime">
              <Coffee aria-hidden="true" className="size-4" />
              Caficultura del centro del Huila
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
              Cafés del Huila: origen, caficultores y trabajo cooperativo.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-paper/75 sm:text-lg">
              Conoce el café desde la región donde nace: las familias productoras, los municipios
              cafeteros del centro del Huila y el acompañamiento de Coocentral a lo largo de la
              cadena.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/area-de-cafe#puntos-de-compra"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-lime px-5 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Ver puntos de compra de café
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/cafe"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-5 text-sm font-semibold text-paper transition-colors hover:border-lime/50 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Recorrer el proceso del café
              </Link>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-xl lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 size-24 rounded-2xl bg-lime sm:size-32"
            />
            <img
              src={coffeeImage}
              alt="Café Coocentral, una presentación de café vinculada al trabajo caficultor del Huila"
              width="1024"
              height="768"
              fetchPriority="high"
              className="relative aspect-4/3 w-full rounded-3xl border border-paper/15 object-cover shadow-2xl"
            />
            <figcaption className="relative mt-3 text-right text-xs text-paper/60">
              Café Coocentral · Huila
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Café con origen regional
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight text-forest-deep sm:text-4xl">
              Una cooperativa cafetera del Huila, junto a sus productores.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/70">{cooperativeOverview}</p>
            <p className="mt-4 text-base leading-8 text-ink/70">
              Desde Garzón, Coocentral acompaña la producción y comercialización de café en el
              centro del departamento. La cooperativa también articula servicios para sus asociados
              y procesos que conectan el grano con nuevas etapas de transformación.
            </p>
          </div>
          <aside className="rounded-3xl bg-sand p-6 sm:p-8 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Zona cafetera de Coocentral
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium text-forest-deep">
              Municipios del centro del Huila
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {coreMunicipalities.map((municipality) => (
                <li
                  key={municipality}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-brand/10 bg-paper px-3 text-sm font-medium text-ink/75"
                >
                  <MapPin aria-hidden="true" className="size-4 shrink-0 text-brand" />
                  {municipality}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-ink/55">
              Municipios de la zona de influencia descrita por Coocentral.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Del campo a la comercialización
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-forest-deep sm:text-4xl">
              El recorrido de los cafés del Huila en Coocentral.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/70">
              El café pasa por distintas etapas de manejo, evaluación y comercialización. La
              infraestructura y los servicios de la cooperativa respaldan ese recorrido junto a las
              familias caficultoras.
            </p>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            <li className="rounded-2xl border border-border bg-paper p-6">
              <Sprout aria-hidden="true" className="size-6 text-brand" />
              <h3 className="mt-4 font-display text-xl font-medium text-forest-deep">
                Producción cafetera
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">
                La cooperativa reúne a familias productoras de siete municipios del centro del
                Huila.
              </p>
            </li>
            <li className="rounded-2xl border border-border bg-paper p-6">
              <Coffee aria-hidden="true" className="size-6 text-brand" />
              <h3 className="mt-4 font-display text-xl font-medium text-forest-deep">
                Compra y comercialización
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">
                Coocentral dispone de puntos para la compra y venta de café verde y seco en su zona
                de atención.
              </p>
              <Link
                to="/area-de-cafe"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Consultar Área de Café <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </li>
            <li className="rounded-2xl border border-border bg-paper p-6">
              <Factory aria-hidden="true" className="size-6 text-brand" />
              <h3 className="mt-4 font-display text-xl font-medium text-forest-deep">
                Transformación
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">
                El Parque Industrial del Café integra procesos como secado, trilla, tostión,
                almacenamiento y control de calidad.
              </p>
              <Link
                to="/pic"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Conocer el PIC <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </li>
          </ol>
          <p className="mt-5 text-xs leading-5 text-ink/55">
            {coffeeVolume.value} {coffeeVolume.label.toLowerCase()}, según las cifras del informe
            institucional de Coocentral.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:px-10 lg:py-20">
          <article className="rounded-3xl border border-border bg-background p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Marca propia</p>
            <h2 className="mt-2 font-display text-2xl font-medium text-forest-deep">
              Café Coocentral
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Coocentral lanzó su marca propia de café en 2015. La cooperativa integra producción,
              comercialización y transformación dentro de su trabajo cafetero regional.
            </p>
            <Link
              to="/cafe"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Conocer el proceso del café <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </article>
          <article className="rounded-3xl border border-border bg-background p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Visita y conoce
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium text-forest-deep">
              Café huilense en Tiendas Kahvé
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Para quienes buscan disfrutar una preparación de café en un local, las Tiendas Kahvé
              ofrecen información de sus sedes y horarios.
            </p>
            <Link
              to="/tiendas-kahve"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Ver Tiendas Kahvé <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-forest-deep text-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
              Información para productores
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-2xl font-medium sm:text-3xl">
              Consulta los puntos de compra y venta de café.
            </h2>
          </div>
          <Link
            to="/area-de-cafe#puntos-de-compra"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-lime px-5 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            Ver mapa de puntos
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
