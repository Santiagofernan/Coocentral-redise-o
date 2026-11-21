import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

import atlasLogo from "@/assets/Atlas/atlas-logo-dark-optimized.webp";
import atlasMapImage from "@/assets/Atlas/Imagen_1-optimized.webp";
import atlasFarmImage from "@/assets/Atlas/imagen_2-optimized.webp";
import atlasDashboardImage from "@/assets/Atlas/imagen_3-optimized.webp";

const atlasScreens = [
  {
    src: atlasDashboardImage,
    alt: "Panel general del aplicativo Atlas con indicadores de productores, fincas y hectáreas",
    label: "Panel general",
    description: "Indicadores generales",
  },
  {
    src: atlasMapImage,
    alt: "Vista del mapa de productores en Atlas",
    label: "Mapa de productores",
    description: "Mapa de productores",
  },
  {
    src: atlasFarmImage,
    alt: "Vista detallada de una finca en el mapa de Atlas",
    label: "Detalle de finca",
    description: "Detalle de finca",
  },
] as const;

export function AtlasPromotion() {
  const promotionRef = useRef<HTMLElement>(null);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const promotion = promotionRef.current;
    if (!promotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "100px" },
    );
    observer.observe(promotion);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveScreen((currentScreen) => (currentScreen + 1) % atlasScreens.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, isVisible]);

  const showScreen = (index: number) => {
    setActiveScreen((index + atlasScreens.length) % atlasScreens.length);
  };
  const activeScreenDetails = atlasScreens[activeScreen];
  if (!activeScreenDetails) {
    throw new Error(`No hay una captura de Atlas para el índice ${activeScreen}.`);
  }

  return (
    <section
      ref={promotionRef}
      aria-labelledby="atlas-promotion-title"
      className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-forest via-brand to-forest-deep p-5 text-paper shadow-2xl sm:p-8 lg:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 -z-10 size-96 rounded-full border border-lime/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-20 -z-10 size-72 rounded-full border border-paper/10"
      />

      <div className="relative">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-5 sm:mb-9 sm:pb-6">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/70">
            <Sparkles aria-hidden="true" className="size-4 text-lime" />
            Tecnología Coocentral
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-12">
          <div className="py-1 sm:py-3">
            <h2 id="atlas-promotion-title" className="-mt-2 flex justify-center">
              <img
                src={atlasLogo}
                alt="Atlas, inteligencia territorial"
                className="w-40 -translate-y-1 object-contain sm:w-48"
                decoding="async"
                loading="lazy"
              />
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-paper/75 sm:text-base sm:leading-7">
              Una nueva herramienta digital de Coocentral para visualizar información de productores
              y fincas. Muy pronto compartiremos más detalles.
            </p>

            <div className="mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/45">
                Vistas de Atlas
              </p>
              <div className="space-y-2">
                {atlasScreens.map((screen, index) => (
                  <button
                    key={screen.label}
                    type="button"
                    aria-label={`Mostrar ${screen.label} en Atlas`}
                    aria-current={activeScreen === index ? "true" : undefined}
                    onClick={() => showScreen(index)}
                    className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                      activeScreen === index
                        ? "border-lime/35 bg-lime/10 text-paper"
                        : "border-paper/10 text-paper/65 hover:border-paper/20 hover:bg-paper/5 hover:text-paper"
                    }`}
                  >
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-lg text-xs font-bold ${
                        activeScreen === index
                          ? "bg-lime text-forest-deep"
                          : "bg-paper/5 text-paper/50 group-hover:text-paper"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold">{screen.description}</span>
                    <span
                      aria-hidden="true"
                      className={`ml-auto size-1.5 rounded-full ${
                        activeScreen === index ? "bg-lime" : "bg-transparent"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-6 border-l-2 border-lime/50 pl-3 text-xs leading-5 text-paper/45">
              Información ampliada y disponibilidad, próximamente.
            </p>
          </div>

          <figure
            aria-label="Capturas del aplicativo Atlas"
            className="overflow-hidden rounded-2xl border border-paper/15 bg-[#080e1a] shadow-2xl shadow-black/30 ring-1 ring-white/5"
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
            }}
          >
            <div className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 sm:px-5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-white/25" />
                <span className="size-2 rounded-full bg-white/25" />
                <span className="size-2 rounded-full bg-lime/75" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-paper/45 sm:text-[10px]">
                Vista previa · Atlas
              </span>
              <span className="font-mono text-[10px] text-paper/55">
                0{activeScreen + 1} <span className="text-paper/25">/ 0{atlasScreens.length}</span>
              </span>
            </div>
            <div className="relative aspect-video bg-[#080e1a]">
              {atlasScreens.map((screen, index) => (
                <img
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  aria-hidden={activeScreen !== index}
                  className={`absolute inset-0 size-full object-contain transition-opacity duration-500 ${
                    activeScreen === index ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-paper">
                  {activeScreenDetails.label}
                </p>
                <p className="mt-0.5 text-[10px] text-paper/45">Aplicativo Atlas · Coocentral</p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5" aria-label="Seleccionar captura">
                {atlasScreens.map((screen, index) => (
                  <button
                    key={screen.label}
                    type="button"
                    aria-label={`Mostrar imagen ${index + 1} de ${atlasScreens.length} de Atlas`}
                    aria-current={activeScreen === index ? "true" : undefined}
                    onClick={() => showScreen(index)}
                    className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                      activeScreen === index ? "w-6 bg-lime" : "w-1.5 bg-paper/30 hover:bg-paper/60"
                    }`}
                  />
                ))}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
