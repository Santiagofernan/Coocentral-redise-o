import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ClipboardList, CircleDollarSign, Smartphone } from "lucide-react";

import appScreen1 from "@/assets/App_coocentral/1_Imagen.jpeg";
import appScreen2 from "@/assets/App_coocentral/2_imagen.jpeg";
import appScreen3 from "@/assets/App_coocentral/3_imagen.jpeg";
import appScreen4 from "@/assets/App_coocentral/4_imagen.jpeg";
import appScreen5 from "@/assets/App_coocentral/5_imagen.jpeg";
import appScreen6 from "@/assets/App_coocentral/6_imagen.jpeg";
import appScreen7 from "@/assets/App_coocentral/7_imagen.jpeg";
import appScreen8 from "@/assets/App_coocentral/8_imagen.jpeg";
import { links } from "@/content/coocentral";

const appScreens = [
  appScreen1,
  appScreen2,
  appScreen3,
  appScreen4,
  appScreen5,
  appScreen6,
  appScreen7,
  appScreen8,
];

const appFeatures = [
  { icon: CircleDollarSign, label: "Consulta tus saldos" },
  { icon: BadgeCheck, label: "Revisa tus aportes" },
  { icon: ClipboardList, label: "Gestiona tus trámites" },
];

const downloadBadgeClass = "h-full w-full object-contain";
const downloadButtonClass =
  "inline-flex h-14 w-full items-center justify-center rounded-lg p-1 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep sm:h-16 sm:w-44";

export function AppPromotion() {
  const promotionRef = useRef<HTMLElement>(null);
  const [activeScreen, setActiveScreen] = useState(0);
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
    if (!isVisible) return;

    const intervalId = window.setInterval(() => {
      setActiveScreen((currentScreen) => (currentScreen + 1) % appScreens.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, [isVisible]);

  return (
    <section
      ref={promotionRef}
      aria-labelledby="app-promotion-title"
      className="relative isolate overflow-hidden rounded-3xl border border-forest/20 bg-gradient-to-br from-brand via-forest to-forest-deep text-paper shadow-2xl"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 -z-10 size-96 rounded-full border border-lime/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 -z-10 size-72 rounded-full border border-paper/10"
      />

      <div className="relative">
        <div className="mx-6 flex items-center justify-between gap-3 border-b border-paper/10 py-5 sm:mx-8 lg:mx-10">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/90">
            <Smartphone aria-hidden="true" className="size-4 text-lime" />
            Experiencia digital Coocentral
          </p>
          <span className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper/80 sm:inline-flex">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-lime" />
            Disponible para iOS y Android
          </span>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="inline-flex w-fit rounded-full border border-lime/50 bg-lime px-3 py-1.5 text-sm font-bold text-forest-deep">
              Coocentral, siempre contigo
            </p>
            <h2
              id="app-promotion-title"
              className="mt-2 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl"
            >
              Descarga la Nueva App Coocentral.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-paper/90 sm:text-base sm:leading-7">
              Lleva Coocentral contigo. Consulta información de tus saldos y aportes, y accede a
              trámites desde tu celular. Descarga la aplicación en Google Play o App Store.
            </p>

            <ul className="mt-7 grid gap-2 sm:grid-cols-3">
              {appFeatures.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-paper/15 bg-paper/[0.09] px-3 py-3 text-xs font-semibold leading-4 text-paper sm:flex-col sm:items-start sm:gap-3 sm:px-3 sm:py-4 sm:text-sm"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-lime/20 text-lime">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/80">
                Descárgala ahora
              </p>
              <div className="grid grid-cols-2 items-center gap-2 sm:flex sm:flex-wrap sm:gap-3">
                <a
                  href={links.app}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Descargar Coocentral en Google Play"
                  className={downloadButtonClass}
                >
                  <img
                    src="/badges/google-play-badge.png"
                    alt="Disponible en Google Play"
                    width={184}
                    height={68}
                    className={`${downloadBadgeClass} scale-[1.3]`}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a
                  href={links.appStore}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Descargar Coocentral en App Store"
                  className={downloadButtonClass}
                >
                  <img
                    src="/badges/apple-app-store-badge.svg"
                    alt="Descárgala en App Store"
                    width={176}
                    height={64}
                    className={downloadBadgeClass}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border-t border-paper/15 bg-gradient-to-br from-brand-bright/15 via-forest/25 to-forest-deep/70 px-5 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-lime/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full border border-paper/10"
            />

            <div className="relative mx-auto max-w-xl">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-paper">Tu cooperativa en el celular</p>
                  <p className="mt-1 text-xs text-paper/85">Explora la experiencia de la app</p>
                </div>
                <span className="rounded-full border border-lime/50 bg-lime px-3 py-1 text-[10px] font-bold text-forest-deep">
                  Vista previa
                </span>
              </div>

              <div className="grid grid-cols-1 items-center justify-items-center gap-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] sm:gap-5">
                <div className="app-phone-frame relative w-full max-w-60 justify-self-center sm:max-w-64">
                  <span
                    aria-hidden="true"
                    className="app-phone-button app-phone-button--left-top"
                  />
                  <span
                    aria-hidden="true"
                    className="app-phone-button app-phone-button--left-bottom"
                  />
                  <span aria-hidden="true" className="app-phone-button app-phone-button--right" />
                  <div className="app-phone-screen relative overflow-hidden rounded-4xl bg-background">
                    <img
                      key={activeScreen}
                      src={appScreens[activeScreen]}
                      alt={`Captura ${activeScreen + 1} de ${appScreens.length} de la aplicación Coocentral`}
                      className="app-screen-transition app-phone-image block w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span aria-hidden="true" className="app-phone-island">
                      <span />
                    </span>
                  </div>
                </div>

                <div className="relative grid w-full max-w-sm grid-cols-2 gap-3 justify-self-center text-center text-ink sm:grid-cols-1">
                  <div className="rounded-2xl border border-brand/25 bg-[#c4d2c1] p-2.5 shadow-xl sm:p-3">
                    <div className="rounded-xl border border-brand/10 bg-paper p-1.5 sm:p-2">
                      <img
                        src="/QR_Descarga_APP/android-qr-app-coocentral-optimized.png"
                        alt="Código QR para descargar la aplicación Coocentral en Google Play para Android"
                        className="mx-auto aspect-square h-auto w-full max-w-32"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <img
                      src="/badges/google-play-mark.png"
                      alt="Android"
                      className="mx-auto mt-2 h-7 w-7 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="rounded-2xl border border-brand/25 bg-[#c4d2c1] p-2.5 shadow-xl sm:p-3">
                    <div className="rounded-xl border border-brand/10 bg-paper p-1.5 sm:p-2">
                      <img
                        src="/QR_Descarga_APP/ios-qr-app-coocentral-optimized.png"
                        alt="Código QR para descargar la aplicación Coocentral en App Store para iPhone"
                        className="mx-auto aspect-square h-auto w-full max-w-32"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <img
                      src="/badges/apple-logo.svg"
                      alt="iPhone"
                      className="mx-auto mt-2 h-7 w-7 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-[10px] text-paper/75">
                Vista ilustrativa de la interfaz · Captura {activeScreen + 1} de {appScreens.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
