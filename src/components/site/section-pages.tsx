import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import {
  agroServices,
  allies,
  businessUnits,
  certifications,
  contact,
  cooperationProjects,
  coreMunicipalities,
  cooperativeOverview,
  creditPaymentMethods,
  creditServiceBenefits,
  detailedCreditLines,
  generalCreditRequirements,
  cooperativeResources,
  creditImpact,
  creditLines,
  digitalTools,
  governance,
  industrialProjects,
  membershipEligibility,
  membershipRequirements,
  mission,
  newsArchive,
  principles,
  serviceShowcase,
  specialtyCoffees,
  sustainabilityPillars,
  vision,
} from "@/content/coocentral";
import { FarmerCenter } from "@/components/site/farmer-center";
import { CoffeePlantAnimation } from "@/components/site/coffee-plant-animation";
import { CoffeeProcessExplorer } from "@/components/site/coffee-process-explorer";
import { PhoneContactDialog } from "@/components/site/phone-contact-dialog";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70 lg:text-lg">{description}</p>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-display text-3xl font-medium leading-tight lg:text-4xl">{title}</h2>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            <h1 className="max-w-3xl font-display text-2xl font-medium leading-tight sm:text-3xl xl:text-4xl">
              Información, documentos y atención
            </h1>
            <p className="hidden max-w-md text-sm leading-6 text-ink/65 xl:block">
              Accede a documentos institucionales, políticas y canales de atención de Coocentral.
            </p>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-10 lg:py-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
            Selecciona un recurso para continuar
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {cooperativeResources.map((item, index) => {
              const ResourceIcon = item.external ? ArrowUpRight : ArrowRight;

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
                      <span className="block text-sm font-semibold leading-5 text-ink transition-colors group-hover:text-brand">
                        {item.label}
                      </span>
                    </span>
                    <ResourceIcon className="size-4 shrink-0 text-brand/65 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        id="quienes-somos"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 lg:px-10 lg:py-20"
      >
        <div className="mb-12 max-w-4xl">
          <SectionTitle eyebrow="Coocentral" title="¿Quiénes somos?" />
          <p className="text-base leading-8 text-ink/70">{cooperativeOverview}</p>
        </div>
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-2 lg:gap-16">
          <article>
            <SectionTitle eyebrow="Nuestra misión" title="Misión" />
            <p className="max-w-2xl text-base leading-8 text-ink/70">{mission}</p>
          </article>
          <article className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <SectionTitle eyebrow="Nuestra visión" title="Visión 2027" />
            <p className="max-w-2xl text-base leading-8 text-ink/70">{vision}</p>
          </article>
        </div>

        <div className="grid gap-14 py-14 lg:grid-cols-12 lg:gap-16">
          <section className="lg:col-span-7">
            <SectionTitle eyebrow="Principios corporativos" title="Principios que nos orientan" />
            <ol className="divide-y divide-border border-y border-border">
              {principles.map((principle, index) => (
                <li key={principle} className="flex items-center gap-5 py-4">
                  <span className="font-display text-2xl text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{principle}</span>
                </li>
              ))}
            </ol>
          </section>
          <section className="lg:col-span-5">
            <SectionTitle eyebrow="Gobierno corporativo" title="Cómo nos organizamos" />
            <ol className="space-y-4 border-l border-brand/30 pl-5">
              {governance.map((level, index) => (
                <li
                  key={level}
                  className="relative text-sm font-medium leading-6 before:absolute before:left-[-1.6rem] before:top-2 before:size-2 before:rounded-full before:bg-brand"
                >
                  <span className="mr-2 text-brand">{String(index + 1).padStart(2, "0")}</span>
                  {level}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-6 text-ink/60">
              Nuestra sede principal está en Garzón y trabajamos con familias caficultoras de siete
              municipios núcleo del centro del Huila.
            </p>
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
      <PageIntro
        eyebrow="Asociarme"
        title="Hagamos crecer juntos la caficultura del Huila"
        description="Ser asociado conecta tu finca con servicios, acompañamiento técnico, oportunidades de comercialización y programas de bienestar."
      />
      <FarmerCenter />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow="Vinculación" title="Requisitos para asociarte" />
            <p className="text-sm leading-6 text-ink/65">
              La vinculación contempla compromisos de comercialización, aportes sociales y
              cumplimiento de obligaciones con la cooperativa.
            </p>
            <div className="mt-6">
              <ExternalLink href="https://coocentral.com/requisitos/">
                Consultar requisitos oficiales
              </ExternalLink>
            </div>
          </div>
          <ol className="divide-y divide-border border-y border-border lg:col-span-8">
            {membershipRequirements.map((item, index) => (
              <li key={item.title} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-2xl text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <section className="mt-14 border-t border-border pt-12">
          <div className="max-w-3xl">
            <SectionTitle eyebrow="Quién puede vincularse" title="Criterios de elegibilidad" />
            <p className="text-sm leading-6 text-ink/65">
              Estos criterios resumen la información publicada por Coocentral. Para confirmar el
              proceso y la documentación aplicable a cada caso, comunícate con nuestro equipo.
            </p>
          </div>
          <ul className="mt-7 grid gap-4 md:grid-cols-3">
            {membershipEligibility.map((item, index) => (
              <li
                key={item.title}
                className="border border-border bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-md sm:p-6"
              >
                <span className="font-display text-2xl text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-5 text-ink/55">
            La admisión de menores y de personas jurídicas se rige por las normas vigentes y la
            reglamentación interna de la Cooperativa.
          </p>
        </section>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-7">
          <p className="max-w-xl text-sm leading-6 text-ink/65">
            Para iniciar tu proceso, consulta los canales de atención y la documentación vigente con
            nuestro equipo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-semibold text-paper hover:bg-forest"
          >
            Contactar a Coocentral
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export function CoffeePage() {
  return (
    <main>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Café Coocentral
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Del origen huilense a cada taza
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70 lg:text-lg">
              Acompañamos el café desde la finca y la selección del grano hasta la transformación,
              el empaque y la comercialización.
            </p>
          </div>
          <div className="relative lg:col-span-5">
            <CoffeePlantAnimation />
            <p className="mt-1 text-center text-xs font-medium uppercase tracking-[0.16em] text-brand/75">
              De la semilla nace el origen
            </p>
          </div>
        </div>
      </section>
      <CoffeeProcessExplorer />
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
          <a
            href="https://www.cafescoocentral.com.co/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-semibold text-paper hover:bg-forest"
          >
            Visitar tienda virtual
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

export function ServicesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Servicios"
        title="Herramientas para una finca más fuerte"
        description="Acompañamiento técnico, crédito, insumos y servicios agroindustriales para fortalecer la producción y el bienestar de los asociados."
      />
      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                Explora nuestros servicios
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
                Elige un servicio para conocerlo
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink/65">
              Cada acceso te lleva a su resumen e imagen dentro de esta misma página.
            </p>
          </div>
          <nav aria-label="Servicios de Coocentral">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {serviceShowcase.map((service, index) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="group flex min-h-14 items-center gap-2 border border-border bg-paper px-3 py-2 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    <span className="font-display text-xs text-brand/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
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
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-24 border-b border-border py-10 sm:py-14 lg:py-16"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 lg:grid-cols-12 lg:gap-12 lg:px-10">
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  Servicio {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink/70 sm:text-base">
                  {service.summary}
                </p>
                {service.href &&
                  ([
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
                  ))}
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
        <SectionTitle
          eyebrow="Servicios agropecuarios"
          title="Atención a lo largo del ciclo productivo"
        />
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {agroServices.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border py-6"
            >
              <span className="grid size-11 place-items-center bg-sand text-brand">
                <Icon className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-brand">0{index + 1}</span>
                <h3 className="mt-1 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <SectionTitle eyebrow="Financiación" title="Crédito para responder a cada necesidad" />
          <dl className="grid grid-cols-1 gap-5 border-y border-paper/20 py-6 sm:grid-cols-3">
            {creditImpact.map((item) => (
              <div key={item.label}>
                <dd className="font-display text-3xl text-lime">{item.value}</dd>
                <dt className="mt-2 text-sm text-paper/65">{item.label}</dt>
              </div>
            ))}
          </dl>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {creditLines.map((line) => (
              <li key={line.name} className="border-t border-paper/20 py-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold">{line.name}</h3>
                  <span className="text-xs text-lime">{line.term}</span>
                </div>
                <p className="mt-1 text-sm text-paper/65">{line.text}</p>
                {detailedCreditLines.some((detail) => detail.name === line.name) && (
                  <details className="group mt-3 border border-paper/15 bg-paper/5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-3 py-2 text-sm font-semibold text-lime transition-colors hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime [&::-webkit-details-marker]:hidden">
                      Ver condiciones y requisitos
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 transition-transform group-open:rotate-90"
                      />
                    </summary>
                    {detailedCreditLines
                      .filter((detail) => detail.name === line.name)
                      .map((detail) => (
                        <div
                          key={detail.name}
                          className="space-y-4 border-t border-paper/15 px-4 py-4 text-sm leading-6 text-paper/75"
                        >
                          <p>{detail.description}</p>
                          {detail.conditions.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-paper">Condiciones</h4>
                              <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-lime">
                                {detail.conditions.map((condition) => (
                                  <li key={condition}>{condition}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {detail.requirements.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-paper">Requisitos publicados</h4>
                              <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-lime">
                                {detail.requirements.map((requirement) => (
                                  <li key={requirement}>{requirement}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                  </details>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-8 border-t border-paper/20 pt-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-medium">Requisitos generales de crédito</h3>
              <p className="mt-2 text-sm leading-6 text-paper/65">
                La página oficial publica estos criterios básicos para acceder al servicio de
                crédito. Cada línea puede solicitar documentos adicionales.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-paper/75">
                {generalCreditRequirements.map((requirement) => (
                  <li key={requirement} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-lime"
                    />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium">Beneficios institucionales</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-paper/75">
                {creditServiceBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-lime"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium">Formas de pago publicadas</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-paper/75">
                {creditPaymentMethods.map((method) => (
                  <li key={method} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-lime"
                    />
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border border-lime/20 bg-paper/5 p-5 sm:p-6">
            <h3 className="font-semibold text-lime">Confirma las condiciones antes de solicitar</h3>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-paper/70">
              Las tasas, requisitos, cupos y condiciones pueden cambiar según la línea, la
              calificación del solicitante y las políticas vigentes. Este resumen refleja la
              información publicada en el sitio oficial y no reemplaza la evaluación de crédito.
              Para confirmar tu caso, comunícate con la oficina de cartera o acércate a la sede
              principal.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <PhoneContactDialog
                phone="317 433 4039"
                variant="dark"
                className="inline-flex min-h-11 items-center gap-2 border border-paper/20 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-lime/50 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              />
              <a
                href="https://coocentral.com/wp-content/uploads/2022/07/costo-y-garantias.png"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lime underline-offset-4 transition-colors hover:text-paper hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Ver tabla oficial de costos y garantías
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <p className="mt-3 text-xs leading-5 text-paper/50">
              La tabla enlazada está alojada en el sitio oficial y parece corresponder a una
              publicación de 2022; confirma sus valores actuales con la oficina de cartera.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <SectionTitle eyebrow="Herramientas digitales" title="Servicios que también conectan" />
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {digitalTools.map(({ icon: Icon, name, text, href }) => (
            <li key={name} className="flex gap-4 border-t border-border py-5">
              <Icon className="mt-1 size-5 shrink-0 text-brand" />
              <div>
                <h3 className="font-semibold">
                  {href ? (
                    <Link to={href} className="hover:text-brand hover:underline">
                      {name}
                    </Link>
                  ) : (
                    name
                  )}
                </h3>
                <p className="mt-1 text-sm leading-6 text-ink/65">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export function EcosystemPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Ecosistema Coocentral"
        title="Capacidades que se conectan alrededor del caficultor"
        description="Un modelo que integra asistencia, industria, comercio, formación y herramientas digitales en el territorio."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <SectionTitle
          eyebrow="Unidades de negocio y aliados"
          title="Un ecosistema con raíces locales"
        />
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
              {href && !internal && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                >
                  Conocer más
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <SectionTitle
            eyebrow="Desarrollo agroindustrial"
            title="Infraestructura para agregar valor"
          />
          <ul className="divide-y divide-border border-y border-border">
            {industrialProjects.map((project) => (
              <li
                key={project.name}
                className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-start"
              >
                <div>
                  <h3 className="font-display text-xl">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{project.impact}</p>
                  <p className="mt-2 text-xs text-ink/50">Aliados: {project.allies}</p>
                </div>
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
      <PageIntro
        eyebrow="Sostenibilidad"
        title="Rentabilidad con impacto en el territorio"
        description="La sostenibilidad integra productividad, cuidado ambiental y bienestar para las familias cafeteras."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <SectionTitle eyebrow="Triple impacto" title="Tres dimensiones, un mismo propósito" />
        <ul className="grid gap-x-10 sm:grid-cols-3">
          {sustainabilityPillars.map((pillar, index) => (
            <li key={pillar.title} className="border-t-2 border-brand py-5">
              <span className="font-display text-3xl text-brand">0{index + 1}</span>
              <h3 className="mt-4 font-display text-2xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-forest-deep text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <SectionTitle eyebrow="Verificación" title="Certificaciones y cooperación" />
          <ul className="grid gap-x-10 sm:grid-cols-3">
            {certifications.map((certification) => (
              <li key={certification.name} className="border-t border-paper/20 py-5">
                <h3 className="font-display text-xl text-lime">{certification.name}</h3>
                <p className="mt-2 text-sm text-paper/65">{certification.detail}</p>
                {certification.stats.length > 0 && (
                  <dl className="mt-5 space-y-2">
                    {certification.stats.map((stat) => (
                      <div key={stat.label} className="flex items-baseline justify-between gap-3">
                        <dd className="font-semibold">{stat.value}</dd>
                        <dt className="text-xs text-paper/55">{stat.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}
              </li>
            ))}
          </ul>
          <h3 className="mt-12 border-t border-paper/20 pt-8 font-display text-2xl">
            Proyectos en colaboración
          </h3>
          <ul className="mt-4 divide-y divide-paper/15">
            {cooperationProjects.map((project) => (
              <li key={project.name} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-semibold">{project.name}</p>
                  <p className="mt-1 text-sm text-paper/60">
                    {project.reach} · {project.allies}
                  </p>
                </div>
                <span className="text-sm font-semibold text-lime">{project.investment}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-xs leading-5 text-paper/50">Aliados: {allies.join(" · ")}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
        <p className="text-sm text-ink/65">
          Conoce los programas de bienestar y productividad disponibles para los asociados.
        </p>
        <Link
          to="/asociarme"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          Programas para asociados
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
  );
}

export function NewsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Noticias"
        title="Historias y novedades de Coocentral"
        description="Consulta publicaciones institucionales sobre caficultura, comunidad, ferias y proyectos de Coocentral."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-border pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Archivo histórico · 2022–2024
            </p>
            <h2 className="mt-2 font-display text-3xl">Noticias de nuestra comunidad</h2>
          </div>
        </div>
        <ol className="grid gap-4 py-7 md:grid-cols-2">
          {newsArchive.map((item) => (
            <li
              key={item.slug}
              className="flex h-full flex-col border border-border bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-lg sm:p-6"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="mb-5 aspect-[16/10] w-full bg-sand object-cover"
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center border border-brand/15 bg-sand px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-brand">
                  {item.category}
                </span>
                <time dateTime={item.date} className="text-xs font-medium text-ink/55">
                  {item.dateLabel}
                </time>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-snug">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink/65">{item.summary}</p>
              <Link
                to="/noticia/$slug"
                params={{ slug: item.slug }}
                className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-brand hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Leer noticia completa
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-xs leading-5 text-ink/50">
          Este archivo reúne publicaciones históricas verificadas entre 2022 y 2024. No incluye
          convocatorias vencidas ni presenta estas notas como noticias recientes.
        </p>
      </section>
    </main>
  );
}
