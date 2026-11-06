import { useRef } from "react";
import { ArrowUpRight, ImagePlus, Quote } from "lucide-react";

import { benefits, productivityPrograms, quotes } from "@/content/coocentral";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SectionHeading } from "./section-heading";

export function FarmerCenter() {
  const benefitTriggerRefs = useRef(new Map<string, HTMLButtonElement>());

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
        <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/65">
          Los programas con reglamento enlazado se describen según documentos de 2022 y 2023. Sus
          requisitos, montos y convocatorias pueden cambiar; confirma las condiciones vigentes con
          Coocentral.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const { id, icon: Icon, title, text, summary, imageSrc, imageAlt } = benefit;

            return (
              <li id={`beneficio-${id}`} key={title} className="reveal scroll-mt-24">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      ref={(node) => {
                        if (node) {
                          benefitTriggerRefs.current.set(id, node);
                        } else {
                          benefitTriggerRefs.current.delete(id);
                        }
                      }}
                      type="button"
                      className="group flex h-full w-full flex-col items-start rounded-3xl bg-paper p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_oklch(0.3_0.06_156/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      <div
                        aria-hidden="true"
                        className="mb-5 flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-brand/20 bg-sand/60"
                      >
                        {imageSrc ? (
                          <img
                            src={imageSrc}
                            alt={imageAlt ?? ""}
                            className="size-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-ink/45">
                            <ImagePlus aria-hidden="true" className="size-4" />
                            Espacio para imagen
                          </span>
                        )}
                      </div>
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-sand text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-paper">
                        <Icon aria-hidden="true" className="size-6" />
                      </span>
                      <h4 className="mt-5 font-display text-xl font-medium">{title}</h4>
                      <span className="mt-2 text-sm leading-6 text-ink/65">{summary ?? text}</span>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        Ver detalles
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent
                    onCloseAutoFocus={(event) => {
                      event.preventDefault();
                      benefitTriggerRefs.current.get(id)?.focus({ preventScroll: true });
                    }}
                    className="max-h-[min(85vh,40rem)] max-w-lg overflow-y-auto border-brand/15 bg-paper p-7 text-ink shadow-2xl duration-100 sm:rounded-3xl sm:p-9"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-sand text-brand">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <DialogTitle className="pr-8 font-display text-2xl font-medium text-forest-deep sm:text-3xl">
                      {title}
                    </DialogTitle>
                    <DialogDescription className="text-base leading-7 text-ink/70">
                      {text}
                    </DialogDescription>
                    {benefit.sourceHref && benefit.sourceLabel && (
                      <a
                        href={benefit.sourceHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                      >
                        {benefit.sourceLabel}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                  </DialogContent>
                </Dialog>
              </li>
            );
          })}
          <li className="reveal flex flex-col justify-center rounded-3xl bg-lime p-7 text-forest-deep">
            <div>
              <p className="font-display text-5xl font-medium tracking-tight">+350</p>
              <p className="mt-2 text-sm font-semibold leading-6">
                estudiantes en educación superior
              </p>
            </div>
            <div className="my-6 border-t border-forest-deep/20" />
            <div>
              <p className="font-display text-3xl font-medium tracking-tight">$2.100 millones</p>
              <p className="mt-2 text-sm font-semibold leading-6">movilizados para educación</p>
            </div>
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
