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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const selectedStep = coffeeProcessSteps[activeStep];
  const selectedDetail = processDetails[activeStep];
  const selectedIllustration = processIllustrations[activeStep];

  const changeStep = (direction: "prev" | "next") => {
    setActiveStep((step) => {
      if (direction === "prev") {
        return Math.max(0, step - 1);
      }

      return Math.min(coffeeProcessSteps.length - 1, step + 1);
    });
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const distance = endX - touchStartX;

    if (Math.abs(distance) > 60) {
      changeStep(distance < 0 ? "next" : "prev");
    }

    setTouchStartX(null);
  };

  if (!selectedStep || !selectedDetail || !selectedIllustration) {
    throw new Error(`Coffee process data is incomplete for stage ${activeStep + 1}.`);
  }

  const StepIcon = selectedStep.icon;

  return (
    <section id="cadena-cafe" className="scroll-mt-24 border-y border-border bg-sand/35">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest">
            Cadena de valor · explora cada etapa
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-forest-deep lg:text-4xl">
            Del cultivo a la taza, paso a paso
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/75 sm:text-base">
            Selecciona una etapa para conocer su papel en el recorrido del café.
          </p>
        </div>

        <ol className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9 lg:gap-2 before:absolute before:left-[5%] before:right-[5%] before:top-8 before:hidden before:h-0.5 before:bg-brand/20 lg:before:block">
          {coffeeProcessSteps.map(({ icon: Icon, label }, index) => {
            const isActive = index === activeStep;

            return (
              <li key={label} className="relative z-10">
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveStep(index)}
                  className={`group flex min-h-28 w-full flex-col items-start gap-3 rounded-xl border p-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:min-h-32 sm:p-3 lg:items-center lg:text-center ${
                    isActive
                      ? "border-forest-deep bg-forest-deep text-paper shadow-lg shadow-forest/15"
                      : "border-brand/15 bg-paper text-ink shadow-sm hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span className="flex w-full items-center justify-between lg:justify-center">
                    <span
                      className={`grid size-10 place-items-center rounded-full transition-colors ${
                        isActive
                          ? "bg-lime text-forest-deep"
                          : "bg-lime/25 text-forest group-hover:bg-lime/50"
                      }`}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="font-display text-xs font-bold tracking-wide text-ink/50 lg:hidden">
                      ETAPA {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span
                    className={`text-sm font-semibold leading-5 ${
                      isActive ? "text-paper" : "text-ink"
                    }`}
                  >
                    <span className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45">
                      Etapa {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="lg:mt-1 lg:block">{label}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 overflow-hidden rounded-2xl border border-brand/15 bg-paper shadow-xl shadow-forest/5 sm:rounded-3xl lg:grid lg:grid-cols-12">
          <div className="coffee-process-visual relative order-1 flex min-h-56 items-center justify-center overflow-hidden bg-linear-to-br from-lime/15 via-sand to-paper p-4 sm:min-h-72 sm:p-6 lg:order-2 lg:col-span-5 lg:min-h-104 lg:p-8">
            <span
              aria-hidden="true"
              className="absolute left-4 top-4 rounded-full border border-brand/15 bg-paper/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest shadow-sm sm:left-6 sm:top-6"
            >
              {selectedStep.label}
            </span>
            <div
              className="relative flex aspect-4/3 w-full max-w-lg items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: "pan-y" }}
            >
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
          <div
            className="order-2 flex flex-col justify-between gap-6 p-5 sm:gap-8 sm:p-8 lg:order-1 lg:col-span-7 lg:p-10"
            aria-live="polite"
            aria-atomic="true"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest">
                  Etapa {String(activeStep + 1).padStart(2, "0")}{" "}
                  <span className="font-medium text-ink/45">de {coffeeProcessSteps.length}</span>
                </p>
                <StepIcon aria-hidden="true" className="size-5 shrink-0 text-brand sm:size-6" />
              </div>
              <div
                role="progressbar"
                aria-label="Progreso del proceso del café"
                aria-valuemin={1}
                aria-valuemax={coffeeProcessSteps.length}
                aria-valuenow={activeStep + 1}
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-brand/10"
              >
                <div
                  className="h-full rounded-full bg-brand transition-[width] duration-300"
                  style={{ width: `${((activeStep + 1) / coffeeProcessSteps.length) * 100}%` }}
                />
              </div>
              <h3 className="mt-5 max-w-xl font-display text-2xl font-semibold leading-tight text-forest-deep sm:mt-7 sm:text-3xl lg:text-4xl">
                {selectedDetail.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/75 sm:mt-4 sm:text-base sm:leading-8">
                {selectedDetail.description}
              </p>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-border pt-4 sm:gap-4 sm:pt-5">
              <button
                type="button"
                onClick={() => changeStep("prev")}
                disabled={activeStep === 0}
                className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full border border-brand/20 px-3 text-sm font-semibold text-forest transition-colors hover:border-brand/50 hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 sm:w-fit sm:justify-self-start sm:gap-2 sm:px-4"
              >
                <ArrowLeft aria-hidden="true" className="size-4 shrink-0" />
                <span>Anterior</span>
              </button>
              <span className="max-w-32 text-center font-display text-sm font-bold leading-5 text-brand sm:max-w-none sm:text-base lg:text-lg">
                {selectedStep.label}
              </span>
              <button
                type="button"
                onClick={() => changeStep("next")}
                disabled={activeStep === coffeeProcessSteps.length - 1}
                className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full bg-forest-deep px-3 text-sm font-semibold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 sm:w-fit sm:justify-self-end sm:gap-2 sm:px-4"
              >
                <span>Siguiente</span>
                <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
