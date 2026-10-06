import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

import coworkingEntrance from "@/assets/Servicios/Coworking/YDRAY-IMG_9424-scaled.webp";
import coworkingMeetingRoom from "@/assets/Servicios/Coworking/YDRAY-IMG_9436-1-scaled.webp";
import coworkingWorkstations from "@/assets/Servicios/Coworking/YDRAY-IMG_9476-scaled.webp";
import coworkingLounge from "@/assets/Servicios/Coworking/YDRAY-IMG_9495-scaled.webp";

const coworkingImages = [
  {
    src: coworkingMeetingRoom,
    alt: "Sala de reuniones del Coworking Coocentral con mesa y sillas de trabajo",
    caption: "Un espacio listo para reunirse y compartir ideas.",
  },
  {
    src: coworkingWorkstations,
    alt: "Puestos de trabajo individuales en las instalaciones del Coworking Coocentral",
    caption: "Puestos para concentrarse y avanzar.",
  },
  {
    src: coworkingLounge,
    alt: "Zona de descanso y encuentro del Coworking Coocentral",
    caption: "Un ambiente acogedor para hacer una pausa.",
  },
  {
    src: coworkingEntrance,
    alt: "Fachada del espacio Coworking Coocentral",
    caption: "Coworking Coocentral en Garzón, Huila.",
  },
];

const coworkingUses = [
  {
    icon: Users,
    number: "01",
    title: "Reuniones",
    text: "Un punto de encuentro para conversar, planear y trabajar en equipo.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Ideas innovadoras",
    text: "Un espacio colaborativo que impulsa la creatividad y nuevas iniciativas.",
  },
  {
    icon: ArrowRight,
    number: "03",
    title: "Capacitación",
    text: "Un entorno para compartir conocimientos y fortalecer habilidades.",
  },
  {
    icon: Users,
    number: "04",
    title: "Emprendimiento",
    text: "Un lugar para desarrollar proyectos y hacer crecer negocios.",
  },
];

export function CoworkingPage() {
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-10 lg:py-16">
          <div className="lg:col-span-6">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-paper/75 transition-colors hover:text-lime"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Volver a servicios
            </Link>
            <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
              <span className="size-1.5 rounded-full bg-lime" />
              Coworking · Garzón, Huila
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
              Un espacio para trabajar, <span className="text-lime">conectar y crear.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
              Conoce el Coworking Martha Stella Velásquez de Coocentral: un entorno colaborativo
              para reuniones, capacitación, ideas innovadoras y emprendimiento.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:aulavirtual@coocentral.com"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-5 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Consulta el espacio
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <span className="inline-flex items-center gap-2 px-2 text-sm text-paper/60">
                <MapPin aria-hidden="true" className="size-4 text-lime" />
                Centro Comercial El Molino
              </span>
            </div>
            <p className="mt-8 border-l-2 border-lime/70 pl-4 font-display text-lg italic text-paper/75">
              “Buena vida, buen trabajo”
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:col-span-6">
            <div className="absolute -bottom-4 -left-4 size-28 rounded-2xl bg-lime sm:-bottom-5 sm:-left-5 sm:size-36" />
            <div className="absolute -right-3 -top-3 size-20 rounded-full border-[10px] border-brand sm:-right-5 sm:-top-5 sm:size-28" />
            <figure className="relative z-10 overflow-hidden rounded-[1.75rem] border border-white/15 bg-paper/10 p-2 shadow-2xl">
              <img
                src={coworkingMeetingRoom}
                alt="Sala de reuniones del Coworking Coocentral"
                width="1600"
                height="1067"
                fetchPriority="high"
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
              />
            </figure>
            <div className="absolute -bottom-5 right-3 z-20 w-32 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:-bottom-7 sm:right-8 sm:w-44">
              <img
                src={coworkingLounge}
                alt="Zona acogedora del Coworking Coocentral"
                width="1600"
                height="1067"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-6 z-20 hidden rounded-full bg-paper px-4 py-2 text-xs font-bold text-forest-deep shadow-lg sm:block">
              Coworking Coocentral
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
                Buena vida, buen trabajo
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                Más que un lugar de trabajo, una comunidad que se mueve.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/65 sm:text-base lg:col-span-5 lg:justify-self-end">
              El espacio busca combinar comodidad y funcionalidad, promoviendo la colaboración y los
              vínculos entre quienes comparten sus proyectos y jornadas de trabajo.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coworkingUses.map(({ icon: Icon, number, title, text }) => (
              <li
                key={number}
                className="group rounded-2xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-lime/25 text-forest-deep transition-colors group-hover:bg-lime">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-display text-sm text-brand/70">{number}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
                Un vistazo al espacio
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl lg:text-5xl">
                Así se vive el Coworking
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink/65">
              Ambientes pensados para reunirse, concentrarse y compartir nuevas ideas.
            </p>
          </div>
          <div className="mt-9 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-5 lg:auto-rows-[260px] lg:grid-cols-12">
            {coworkingImages.map((image, index) => (
              <figure
                key={image.src}
                className={`group relative isolate overflow-hidden rounded-2xl bg-forest-deep shadow-md ${
                  index === 0
                    ? "col-span-2 row-span-2 lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : index === 2
                        ? "lg:col-span-5"
                        : "col-span-2 row-span-2 lg:col-span-12"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width="1600"
                  height="1067"
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105 ${
                    index === 3 ? "object-contain" : "object-cover"
                  }`}
                />
                {index !== 3 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/5 to-transparent" />
                )}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-paper sm:p-5">
                  <span
                    className={`max-w-sm rounded-lg px-3 py-2 font-medium leading-5 sm:text-lg ${
                      index === 3 ? "bg-forest-deep/90 shadow-lg" : ""
                    }`}
                  >
                    {image.caption}
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 backdrop-blur-sm">
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-forest-deep text-paper shadow-xl lg:grid-cols-12">
          <div className="relative isolate overflow-hidden p-7 sm:p-10 lg:col-span-5 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-24 -z-10 size-72 rounded-full border border-lime/20"
            />
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-lime">
              Ven a conocernos
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
              Tu próxima idea puede empezar aquí.
            </h2>
            <p className="mt-4 text-sm leading-6 text-paper/70">
              Para consultar disponibilidad o solicitar información, contacta directamente al equipo
              de Coocentral.
            </p>
            <a
              href="mailto:aulavirtual@coocentral.com"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-lime px-4 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
            >
              Escríbenos
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <address className="grid gap-0 bg-paper p-2 text-ink not-italic sm:grid-cols-2 lg:col-span-7 lg:p-3">
            <div className="flex items-start gap-4 rounded-2xl p-5 sm:p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime/25 text-forest-deep">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-ink/45">Ubicación</p>
                <p className="mt-1 text-sm leading-6 text-ink/80">
                  Centro Comercial El Molino, locales 15–16
                  <br />
                  Garzón, Huila
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Centro+Comercial+El+Molino+Local+15-16%2C+Garz%C3%B3n%2C+Huila"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                >
                  Ver ubicación <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl p-5 sm:p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime/25 text-forest-deep">
                <Phone aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-ink/45">Teléfono</p>
                <a
                  href="tel:+573127925601"
                  className="mt-1 inline-block text-sm font-semibold text-brand hover:underline"
                >
                  312 792 5601
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl p-5 sm:col-span-2 sm:p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime/25 text-forest-deep">
                <Mail aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-ink/45">Correo</p>
                <a
                  href="mailto:aulavirtual@coocentral.com"
                  className="mt-1 inline-block break-all text-sm font-semibold text-brand hover:underline"
                >
                  aulavirtual@coocentral.com
                </a>
              </div>
            </div>
          </address>
        </div>
      </section>
    </main>
  );
}
