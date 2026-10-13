import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import processStage01 from "@/assets/Cafe/etapas/etapa-01.png";
import processStage02 from "@/assets/Cafe/etapas/etapa-02.png";
import processStage03 from "@/assets/Cafe/etapas/etapa-03.png";
import processStage04 from "@/assets/Cafe/etapas/etapa-04.png";
import processStage05 from "@/assets/Cafe/etapas/etapa-05.png";
import processStage06 from "@/assets/Cafe/etapas/etapa-06.png";
import processStage07 from "@/assets/Cafe/etapas/etapa-07.png";
import processStage08 from "@/assets/Cafe/etapas/etapa-08.png";
import processStage09 from "@/assets/Cafe/etapas/etapa-09.png";
import { coffeeProcessSteps } from "@/content/coocentral";

const processIllustrations = [
  processStage01,
  processStage02,
  processStage03,
  processStage04,
  processStage05,
  processStage06,
  processStage07,
  processStage08,
  processStage09,
] as const;

const processDetails = [
  {
    title: "El cuidado empieza en la finca",
    description:
      "El origen de cada taza está en el trabajo de las familias caficultoras. El manejo del cultivo y el cuidado del fruto construyen la base de la calidad.",
  },
  {
    title: "Una cosecha en su punto",
    description:
      "La recolección cuidadosa ayuda a seleccionar frutos maduros y a mantener la consistencia del lote. Cada decisión en cosecha influye en lo que podrá expresar el café.",
  },
  {
    title: "Recepción, pesaje y registro",
    description:
      "En el punto de compra o fielato se recibe el café, se pesa y se registra la entrega. Así comienza el recorrido del lote dentro de la cadena cooperativa.",
  },
  {
    title: "Conocer el grano",
    description:
      "La evaluación de calidad permite revisar características de la muestra y orientar su clasificación. Esta información ayuda a reconocer el potencial de cada café.",
  },
  {
    title: "Preparar el café verde",
    description:
      "La trilla retira las capas secas que protegen el grano y permite prepararlo para su selección y comercialización como café verde.",
  },
  {
    title: "Desarrollar el perfil en la tostión",
    description:
      "Con la aplicación de calor, el grano cambia de color, aroma y sabor. El nivel de tostión y su control definen parte de la experiencia en taza.",
  },
  {
    title: "Proteger y presentar el producto",
    description:
      "El empaque ayuda a proteger el café tostado y molido, y presenta información para que cada persona pueda identificar el producto que lleva a casa.",
  },
  {
    title: "Conectar el origen con nuevos mercados",
    description:
      "La comercialización y la exportación acercan cafés del Huila a compradores y consumidores, conectando el trabajo de origen con oportunidades de mercado.",
  },
  {
    title: "El recorrido llega a la taza",
    description:
      "En la preparación, el agua extrae los compuestos del café molido. El método, la molienda y la proporción elegidos permiten descubrir distintos aromas y sabores.",
  },
] as const;

export function CoffeeProcessExplorer() {
  const [activeStep, setActiveStep] = useState(0);
  const selectedStep = coffeeProcessSteps[activeStep];
  const selectedDetail = processDetails[activeStep];
  const selectedIllustration = processIllustrations[activeStep];

  if (!selectedStep || !selectedDetail || !selectedIllustration) {
    throw new Error(`Coffee process data is incomplete for stage ${activeStep + 1}.`);
  }

  const StepIcon = selectedStep.icon;

  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Cadena de valor · explora cada etapa
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium leading-tight lg:text-4xl">
            Del cultivo a la taza, paso a paso
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/65 sm:text-base">
            Selecciona una etapa para conocer su papel en el recorrido del café.
          </p>
        </div>

        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-9">
          {coffeeProcessSteps.map(({ icon: Icon, label }, index) => {
            const isActive = index === activeStep;

            return (
              <li key={label}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveStep(index)}
                  className={`group flex min-h-24 w-full flex-col items-start justify-between gap-3 border p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:min-h-28 sm:p-4 ${
                    isActive
                      ? "border-brand bg-forest-deep text-paper shadow-md"
                      : "border-border bg-background text-ink hover:-translate-y-0.5 hover:border-brand/50 hover:bg-sand/60"
                  }`}
                >
                  <span className="flex w-full items-center justify-between">
                    <Icon
                      aria-hidden="true"
                      className={`size-5 ${isActive ? "text-lime" : "text-brand"}`}
                    />
                    <span
                      className={`font-display text-xs ${isActive ? "text-paper/55" : "text-ink/40"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="text-xs font-semibold leading-4 sm:text-sm">{label}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-5 border border-border lg:grid lg:grid-cols-12">
          <div
            className="flex flex-col justify-between gap-8 bg-sand/60 p-6 sm:p-8 lg:col-span-7 lg:p-10"
            aria-live="polite"
            aria-atomic="true"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                Etapa {String(activeStep + 1).padStart(2, "0")} de {coffeeProcessSteps.length}
              </p>
              <div className="mt-5 flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lime/40 text-forest-deep">
                  <StepIcon aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight sm:text-3xl">
                    {selectedDetail.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70 sm:text-base">
                    {selectedDetail.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
              <button
                type="button"
                onClick={() => setActiveStep((step) => Math.max(0, step - 1))}
                disabled={activeStep === 0}
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Anterior
              </button>
              <span className="text-xs font-medium text-ink/45">{selectedStep.label}</span>
              <button
                type="button"
                onClick={() =>
                  setActiveStep((step) => Math.min(coffeeProcessSteps.length - 1, step + 1))
                }
                disabled={activeStep === coffeeProcessSteps.length - 1}
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"
              >
                Siguiente
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
          <div className="coffee-process-visual flex min-h-64 items-center justify-center overflow-hidden bg-sand p-5 sm:p-8 lg:col-span-5 lg:min-h-full">
            <div className="relative flex aspect-[4/3] w-full max-w-lg items-center justify-center">
              <svg
                aria-hidden="true"
                className="coffee-process-vine absolute inset-0 size-full"
                viewBox="0 0 512 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M18 352C48 326 52 297 64 264M42 325C26 319 19 308 15 294M51 302C69 294 78 282 82 269M465 24C439 49 437 76 425 101M447 50C430 45 419 35 414 22M438 74C455 72 468 63 477 51M492 366C465 344 460 322 451 300M472 346C486 339 494 328 499 315" />
                  <path d="M15 294C23 291 33 294 42 305C34 311 24 309 15 294ZM82 269C73 267 64 273 58 285C67 291 76 284 82 269ZM414 22C423 22 432 29 438 42C429 47 420 38 414 22ZM477 51C468 48 458 53 451 64C459 71 470 64 477 51ZM499 315C490 315 481 322 477 335C486 341 495 331 499 315Z" />
                  <circle cx="33" cy="282" r="5" />
                  <circle cx="45" cy="277" r="5" />
                  <circle cx="39" cy="268" r="5" />
                </g>
              </svg>
              <img
                key={activeStep}
                src={selectedIllustration}
                alt={`Ilustración: ${selectedDetail.title}`}
                className="coffee-process-illustration relative z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
