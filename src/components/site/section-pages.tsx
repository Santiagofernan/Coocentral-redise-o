import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

import qualityImage from "@/assets/coocentral-calidad.jpg";
import {
  agroServices,
  allies,
  businessUnits,
  certifications,
  contact,
  cooperationProjects,
  coreMunicipalities,
  cooperativeResources,
  creditImpact,
  creditLines,
  digitalTools,
  governance,
  industrialProjects,
  membershipRequirements,
  mission,
  principles,
  serviceShowcase,
  specialtyCoffees,
  sustainabilityPillars,
  valueChain,
} from "@/content/coocentral";
import { FarmerCenter } from "@/components/site/farmer-center";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70 lg:text-lg">{description}</p>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-3xl font-medium leading-tight lg:text-4xl">{title}</h2>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
      {children}<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function CooperativePage() {
  return (
    <main>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-3 sm:py-6 lg:px-10 lg:py-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">La cooperativa</p>
          <div className="mt-2 flex flex-col gap-2 xl:flex-row xl:items-end xl:justify-between xl:gap-8">
            <h1 className="max-w-3xl font-display text-2xl font-medium leading-tight sm:text-3xl xl:text-4xl">Información, documentos y atención</h1>
            <p className="hidden max-w-md text-sm leading-6 text-ink/65 xl:block">Accede a documentos institucionales, políticas y canales de atención de Coocentral.</p>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-10 lg:py-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">Selecciona un recurso para continuar</p>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {cooperativeResources.map((item, index) => {
              const ResourceIcon = item.href.startsWith("mailto:") ? Mail : item.external ? ArrowUpRight : ArrowRight;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group flex min-h-20 items-center gap-3 border border-border bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-sand/60 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    <span className="grid size-10 shrink-0 place-items-center bg-sand font-display text-sm font-semibold text-brand transition-colors group-hover:bg-brand group-hover:text-paper">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-5 text-ink transition-colors group-hover:text-brand">{item.label}</span>
                      {item.href.startsWith("mailto:") && <span className="mt-1 block text-xs text-ink/55">Solicítalo al correo institucional.</span>}
                    </span>
                    <ResourceIcon className="size-4 shrink-0 text-brand/65 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              );
            })}
          </ul>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-2 lg:gap-16">
          <article>
            <SectionTitle eyebrow="Propósito" title="Misión" />
            <p className="max-w-2xl text-base leading-8 text-ink/70">{mission}</p>
          </article>
          <article className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <SectionTitle eyebrow="Horizonte institucional" title="Visión 2027" />
            <p className="max-w-2xl text-base leading-8 text-ink/70">En el 2027, como líderes transformamos el mercado del café y enseñamos el camino para que la actividad cafetera sea rentable y sostenible.</p>
          </article>
        </div>

        <div className="grid gap-14 py-14 lg:grid-cols-12 lg:gap-16">
          <section className="lg:col-span-7">
            <SectionTitle eyebrow="Identidad cooperativa" title="Principios que nos orientan" />
            <ol className="divide-y divide-border border-y border-border">
              {principles.map((principle, index) => (
                <li key={principle} className="flex items-center gap-5 py-4">
                  <span className="font-display text-2xl text-brand">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{principle}</span>
                </li>
              ))}
            </ol>
          </section>
          <section className="lg:col-span-5">
            <SectionTitle eyebrow="Gobierno corporativo" title="Cómo nos organizamos" />
            <ol className="space-y-4 border-l border-brand/30 pl-5">
              {governance.map((level, index) => (
                <li key={level} className="relative text-sm font-medium leading-6 before:absolute before:left-[-1.6rem] before:top-2 before:size-2 before:rounded-full before:bg-brand">
                  <span className="mr-2 text-brand">{String(index + 1).padStart(2, "0")}</span>{level}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-6 text-ink/60">Nuestra sede principal está en Garzón y trabajamos con familias caficultoras de siete municipios núcleo del centro del Huila.</p>
            <p className="mt-3 font-semibold text-brand">{coreMunicipalities.join(" · ")}</p>
          </section>
        </div>
      </section>
    </main>
  );
}

export function MembershipPage() {
  return (
    <main>
      <PageIntro eyebrow="Asociarme" title="Hagamos crecer juntos la caficultura del Huila" description="Ser asociado conecta tu finca con servicios, acompañamiento técnico, oportunidades de comercialización y programas de bienestar." />
      <FarmerCenter />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow="Vinculación" title="Requisitos para asociarte" />
            <p className="text-sm leading-6 text-ink/65">La vinculación contempla compromisos de comercialización, aportes sociales y cumplimiento de obligaciones con la cooperativa.</p>
            <div className="mt-6"><ExternalLink href="https://coocentral.com/requisitos/">Consultar requisitos oficiales</ExternalLink></div>
          </div>
          <ol className="divide-y divide-border border-y border-border lg:col-span-8">
            {membershipRequirements.map((item, index) => (
              <li key={item.title} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-2xl text-brand">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-ink/65">{item.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-7">
          <p className="max-w-xl text-sm leading-6 text-ink/65">Para iniciar tu proceso, consulta los canales de atención y la documentación vigente con nuestro equipo.</p>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-semibold text-paper hover:bg-forest">Contactar a Coocentral<ArrowRight className="size-4" /></a>
        </div>
      </section>
    </main>
  );
}

export function CoffeePage() {
  return (
    <main>
      <PageIntro eyebrow="Café Coocentral" title="Del origen huilense a cada taza" description="Acompañamos el café desde la finca y la selección del grano hasta la transformación, el empaque y la comercialización." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <SectionTitle eyebrow="Cadena de valor" title="Cada etapa cuenta" />
          <p className="max-w-lg text-sm leading-7 text-ink/65">El trabajo de nuestros asociados se conecta con procesos de calidad, transformación y acceso a mercados.</p>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            {valueChain.map(({ icon: Icon, label }, index) => (
              <li key={label} className="flex items-center gap-4 py-3">
                <span className="grid size-9 shrink-0 place-items-center bg-sand text-brand"><Icon className="size-4" /></span>
                <span className="flex-1 text-sm font-medium">{label}</span>
                <span className="font-display text-sm text-ink/40">{String(index + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ol>
        </div>
        <figure className="lg:col-span-7">
          <img src={qualityImage} alt="Selección y control de calidad del café" loading="lazy" width="1024" height="768" className="aspect-4/3 w-full object-cover" />
          <figcaption className="mt-3 text-xs leading-5 text-ink/50">Selección y control de calidad del café producido en el Huila.</figcaption>
        </figure>
      </section>
      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <SectionTitle eyebrow="Origen y diversidad" title="Cafés con identidad propia" />
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {specialtyCoffees.map((coffee) => (
              <li key={coffee.title} className="border-t border-border py-5">
                <h3 className="font-display text-xl font-medium">{coffee.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{coffee.profile}</p>
                <p className="mt-3 text-xs font-semibold text-brand">{coffee.impact}</p>
              </li>
            ))}
          </ul>
          <a href="https://www.cafescoocentral.com.co/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-semibold text-paper hover:bg-forest">Visitar tienda virtual<ArrowUpRight className="size-4" /></a>
        </div>
      </section>
    </main>
  );
}

export function ServicesPage() {
  return (
    <main>
      <PageIntro eyebrow="Servicios" title="Herramientas para una finca más fuerte" description="Acompañamiento técnico, crédito, insumos y servicios agroindustriales para fortalecer la producción y el bienestar de los asociados." />
      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Explora nuestros servicios</p>
              <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">Elige un servicio para conocerlo</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink/65">Cada acceso te lleva a su resumen e imagen dentro de esta misma página.</p>
          </div>
          <nav aria-label="Servicios de Coocentral">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {serviceShowcase.map((service, index) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className="group flex min-h-14 items-center gap-2 border border-border bg-paper px-3 py-2 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
                    <span className="font-display text-xs text-brand/70">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 leading-4">{service.title}</span>
                    <ArrowRight className="size-4 shrink-0 text-brand/60 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section aria-label="Descripción de servicios">
        {serviceShowcase.map((service, index) => (
          <article key={service.id} id={service.id} className="scroll-mt-24 border-b border-border py-10 sm:py-14 lg:py-16">
            <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 lg:grid-cols-12 lg:gap-12 lg:px-10">
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Servicio {String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">{service.title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink/70 sm:text-base">{service.summary}</p>
                {service.href && (
                  [
                    "coworking",
                    "pic",
                    "almacenes-coocentral",
                    "area-de-cafe",
                    "tiendas-kahve",
                    "coonectate",
                  ].includes(service.id) ? (
                    <Link
                      to={
                        service.id === "coonectate"
                          ? "/coonectate"
                          : service.id === "pic"
                          ? "/pic"
                          : service.id === "almacenes-coocentral"
                            ? "/almacenes"
                            : service.id === "area-de-cafe"
                              ? "/area-de-cafe"
                              : service.id === "tiendas-kahve"
                                ? "/tiendas-kahve"
                              : "/coworking"
                      }
                      className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-brand px-4 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-forest hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      Consultar servicio
                      <ArrowUpRight className="size-4" />
                    </Link>
                  ) : (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-brand px-4 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-forest hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      {service.action ?? "Consultar servicio"}
                      <ArrowUpRight className="size-4" />
                    </a>
                  )
                )}
              </div>
              <figure className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                  className={`aspect-4/3 w-full ${
                    service.id === "ferticoolombia"
                      ? "bg-forest-deep object-contain p-10 sm:p-16"
                      : service.id === "cafe-coocentral"
                        ? "bg-white object-contain p-8 sm:p-12"
                      : "object-cover"
                  }`}
                />
              </figure>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <SectionTitle eyebrow="Servicios agropecuarios" title="Atención a lo largo del ciclo productivo" />
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {agroServices.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border py-6">
              <span className="grid size-11 place-items-center bg-sand text-brand"><Icon className="size-5" /></span>
              <div><span className="text-xs font-bold text-brand">0{index + 1}</span><h3 className="mt-1 font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{text}</p></div>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <SectionTitle eyebrow="Financiación" title="Crédito para responder a cada necesidad" />
          <dl className="grid grid-cols-1 gap-5 border-y border-paper/20 py-6 sm:grid-cols-3">
            {creditImpact.map((item) => <div key={item.label}><dd className="font-display text-3xl text-lime">{item.value}</dd><dt className="mt-2 text-sm text-paper/65">{item.label}</dt></div>)}
          </dl>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {creditLines.map((line) => <li key={line.name} className="border-t border-paper/20 py-4"><div className="flex items-baseline justify-between gap-3"><h3 className="font-semibold">{line.name}</h3><span className="text-xs text-lime">{line.term}</span></div><p className="mt-1 text-sm text-paper/65">{line.text}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <SectionTitle eyebrow="Herramientas digitales" title="Servicios que también conectan" />
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {digitalTools.map(({ icon: Icon, name, text, href }) => <li key={name} className="flex gap-4 border-t border-border py-5"><Icon className="mt-1 size-5 shrink-0 text-brand" /><div><h3 className="font-semibold">{href ? <Link to={href} className="hover:text-brand hover:underline">{name}</Link> : name}</h3><p className="mt-1 text-sm leading-6 text-ink/65">{text}</p></div></li>)}
        </ul>
      </section>
    </main>
  );
}

export function EcosystemPage() {
  return (
    <main>
      <PageIntro eyebrow="Ecosistema Coocentral" title="Capacidades que se conectan alrededor del caficultor" description="Un modelo que integra asistencia, industria, comercio, formación y herramientas digitales en el territorio." />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <SectionTitle eyebrow="Unidades de negocio y aliados" title="Un ecosistema con raíces locales" />
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {businessUnits.map(({ icon: Icon, name, text, href, internal }) => (
            <li key={name} className="border-t border-border py-5">
              <Icon className="size-6 text-brand" />
              <h3 className="mt-4 font-display text-xl">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
              {internal && (
                <Link
                  to={name === "Tiendas Kahvé" ? "/tiendas-kahve" : "/almacenes"}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                >
                  Conocer más
                  <ArrowUpRight className="size-3.5" />
                </Link>
              )}
              {href && !internal && <a href={href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">Conocer más<ArrowUpRight className="size-3.5" /></a>}
            </li>
          ))}
        </ul>
      </section>
      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <SectionTitle eyebrow="Desarrollo agroindustrial" title="Infraestructura para agregar valor" />
          <ul className="divide-y divide-border border-y border-border">
            {industrialProjects.map((project) => (
              <li key={project.name} className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-start">
                <div><h3 className="font-display text-xl">{project.name}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{project.impact}</p><p className="mt-2 text-xs text-ink/50">Aliados: {project.allies}</p></div>
                <p className="font-display text-2xl text-brand">{project.investment}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export function SustainabilityPage() {
  return (
    <main>
      <PageIntro eyebrow="Sostenibilidad" title="Rentabilidad con impacto en el territorio" description="La sostenibilidad integra productividad, cuidado ambiental y bienestar para las familias cafeteras." />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <SectionTitle eyebrow="Triple impacto" title="Tres dimensiones, un mismo propósito" />
        <ul className="grid gap-x-10 sm:grid-cols-3">
          {sustainabilityPillars.map((pillar, index) => <li key={pillar.title} className="border-t-2 border-brand py-5"><span className="font-display text-3xl text-brand">0{index + 1}</span><h3 className="mt-4 font-display text-2xl">{pillar.title}</h3><p className="mt-3 text-sm leading-6 text-ink/65">{pillar.text}</p></li>)}
        </ul>
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <SectionTitle eyebrow="Verificación" title="Certificaciones y cooperación" />
          <ul className="grid gap-x-10 sm:grid-cols-3">
            {certifications.map((certification) => <li key={certification.name} className="border-t border-paper/20 py-5"><h3 className="font-display text-xl text-lime">{certification.name}</h3><p className="mt-2 text-sm text-paper/65">{certification.detail}</p>{certification.stats.length > 0 && <dl className="mt-5 space-y-2">{certification.stats.map((stat) => <div key={stat.label} className="flex items-baseline justify-between gap-3"><dd className="font-semibold">{stat.value}</dd><dt className="text-xs text-paper/55">{stat.label}</dt></div>)}</dl>}</li>)}
          </ul>
          <h3 className="mt-12 border-t border-paper/20 pt-8 font-display text-2xl">Proyectos en colaboración</h3>
          <ul className="mt-4 divide-y divide-paper/15">
            {cooperationProjects.map((project) => <li key={project.name} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto]"><div><p className="font-semibold">{project.name}</p><p className="mt-1 text-sm text-paper/60">{project.reach} · {project.allies}</p></div><span className="text-sm font-semibold text-lime">{project.investment}</span></li>)}
          </ul>
          <p className="mt-7 text-xs leading-5 text-paper/50">Aliados: {allies.join(" · ")}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
        <p className="text-sm text-ink/65">Conoce los programas de bienestar y productividad disponibles para los asociados.</p>
        <Link to="/asociarme" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">Programas para asociados<ArrowRight className="size-4" /></Link>
      </section>
    </main>
  );
}

const newsArchive = [
  {
    title: "Acron Colombia se unirá a Coocentral en Expo Cafés de Colombia 2024",
    summary: "Participación de Coocentral en una feria nacional del sector cafetero.",
    href: "https://coocentral.com/acron-colombia-se-unira-a-coocentral-en-la-proxima-expo-cafes-de-colombia-2024/",
  },
  {
    title: "Feria de Especialidad con Café, tercera edición",
    summary: "Una vitrina para cafés especiales y talento de la región.",
    href: "https://coocentral.com/feria-de-especialidad-2023/",
  },
  {
    title: "Coocentral: Exporta con Nosotros",
    summary: "Programa de la cooperativa para conectar el café del Huila con otros mercados.",
    href: "https://coocentral.com/nuevo-exporta-con-nosotros/",
  },
];

export function NewsPage() {
  return (
    <main>
      <PageIntro eyebrow="Noticias" title="Historias y novedades de Coocentral" description="Consulta publicaciones institucionales, convocatorias y actividades de la comunidad cafetera." />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-border pb-6">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Archivo institucional</p><h2 className="mt-2 font-display text-3xl">Publicaciones destacadas</h2></div>
          <ExternalLink href="https://coocentral.com/noticias/">Ver todas las noticias oficiales</ExternalLink>
        </div>
        <ol className="divide-y divide-border">
          {newsArchive.map((item, index) => (
            <li key={item.href} className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-start">
              <span className="font-display text-2xl text-brand">0{index + 1}</span>
              <div><h3 className="max-w-3xl font-display text-2xl leading-snug">{item.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-ink/65">{item.summary}</p></div>
              <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Leer: ${item.title}`} className="inline-flex size-10 items-center justify-center border border-border text-brand transition-colors hover:bg-brand hover:text-paper"><ArrowUpRight className="size-4" /></a>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-xs leading-5 text-ink/50">Estas publicaciones pertenecen al archivo del sitio institucional; visita el portal oficial para consultar las actualizaciones más recientes.</p>
      </section>
    </main>
  );
}