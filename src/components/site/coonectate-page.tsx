import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Mail,
  MapPin,
  ShieldCheck,
  Wifi,
} from "lucide-react";

import territoryImage from "@/assets/coocentral-territorio.jpg";
import { EmailContactDialog } from "@/components/site/email-contact-dialog";

const usagePolicies = [
  {
    title: "Uso responsable",
    text: "Utilizar el servicio de forma legal, ética y respetuosa.",
  },
  {
    title: "Contenidos ilícitos",
    text: "No usar la conexión para fraude, suplantación, distribución de malware ni otras actividades ilegales.",
  },
  {
    title: "Protección de niñas, niños y adolescentes",
    text: "Promover un entorno digital seguro y un uso educativo y formativo de internet.",
  },
  {
    title: "Privacidad",
    text: "El tratamiento de información personal se rige por la Ley 1581 de 2012.",
  },
  {
    title: "Neutralidad y gestión de red",
    text: "El acceso respeta la neutralidad de la red, salvo restricciones legales. Coocentral puede realizar gestión técnica para cuidar la calidad y estabilidad del servicio.",
  },
  {
    title: "Cumplimiento",
    text: "El incumplimiento de las políticas puede generar suspensión temporal o definitiva del servicio.",
  },
];

export function CoonectatePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-forest-deep text-paper">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-36 -z-10 size-[32rem] rounded-full border border-lime/15"
        />
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-10 lg:py-16">
          <Link
            to="/ecosistema"
            className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 text-sm font-semibold text-paper/80 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-lime/60 hover:bg-lime hover:text-forest-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-x-1"
            />
            Volver al ecosistema
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                <Wifi aria-hidden="true" className="size-3.5" />
                Conectividad rural · Huila
              </p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Coonéctate: más cerca del mundo digital
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
                Un proyecto social de Coocentral que lleva internet confiable a familias rurales
                para apoyar la educación, la comunicación, la productividad y el bienestar.
              </p>
              <a
                href="https://www.speedtest.net/es"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-5 text-sm font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                <Gauge aria-hidden="true" className="size-4" />
                Probar velocidad de internet
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <figure className="relative lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-paper/15 bg-paper/10 p-2 shadow-2xl">
                <img
                  src={territoryImage}
                  alt="Paisaje rural del Huila, imagen de contexto del proyecto Coonéctate"
                  width="1200"
                  height="800"
                  fetchPriority="high"
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-paper/55">
                Una iniciativa de la Cooperativa Central de Caficultores del Huila.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
            Cobertura actual
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
            Conectividad para Las Delicias, Tarqui
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink/65 sm:text-base">
            El servicio llega a hogares rurales de la vereda Las Delicias, en el municipio de
            Tarqui, donde históricamente el acceso a servicios digitales ha sido limitado.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="h-full border border-border bg-sand p-6 sm:p-8">
            <MapPin aria-hidden="true" className="size-6 text-brand" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
              Territorio conectado
            </p>
            <p className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              Vereda Las Delicias
            </p>
            <p className="mt-1 text-sm text-ink/65">Tarqui · Huila</p>
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-sm leading-6 text-ink/70">
                Coonéctate busca cerrar la brecha digital y acercar herramientas para la vida
                cotidiana y las actividades de las familias caficultoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="flex max-w-3xl items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime/40 text-forest-deep">
              <ShieldCheck aria-hidden="true" className="size-6" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
                Uso seguro y responsable
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Políticas del servicio de internet
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                El servicio se rige por lineamientos de uso responsable y la normatividad colombiana
                aplicable.
              </p>
            </div>
          </div>
          <ul className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {usagePolicies.map((policy, index) => (
              <li key={policy.title} className="border-t border-border py-5">
                <span className="font-display text-2xl text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-semibold">{policy.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{policy.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-border pt-5 text-xs leading-5 text-ink/55">
            También está prohibido acceder, distribuir o almacenar contenidos pornográficos,
            especialmente aquellos que involucren menores de edad, conforme a la Ley 679 de 2001.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
        <div className="flex flex-col gap-5 border border-border bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              <Mail aria-hidden="true" className="size-4" />
              Peticiones, quejas y reclamos
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              ¿Necesitas comunicarte con Coonéctate?
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/65">
              Envía tu PQR al canal institucional del servicio.
            </p>
          </div>
          <EmailContactDialog
            email="pqr.coonectate@coocentral.com"
            title="Escribir a PQR de Coonéctate"
            description="Copia el correo del canal institucional para enviar tu petición, queja o reclamo."
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-forest-deep px-4 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:self-center"
          >
            Escribir a PQR
            <ArrowRight aria-hidden="true" className="size-4" />
          </EmailContactDialog>
        </div>
      </section>

      <section className="border-y border-border bg-forest-deep text-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-lime">
              Coonéctate · Coocentral
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              Conectividad que fortalece el territorio.
            </h2>
          </div>
          <Link
            to="/servicios"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-md bg-lime px-4 text-sm font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep sm:self-center"
          >
            Todos los servicios
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
