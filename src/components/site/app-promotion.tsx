import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Apple,
  BadgeCheck,
  ClipboardList,
  CircleDollarSign,
  Smartphone,
} from "lucide-react";

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

export function AppPromotion() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveScreen((currentScreen) => (currentScreen + 1) % appScreens.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-labelledby="app-promotion-title"
      className="overflow-hidden rounded-3xl bg-forest-deep text-paper shadow-xl"
    >
      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-lime">
            <Smartphone aria-hidden="true" className="size-4" />
            Coocentral en tu celular
          </p>
          <h2
            id="app-promotion-title"
            className="mt-5 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl"
          >
            Descarga la app Coocentral.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-paper/70 sm:text-base">
            Lleva Coocentral contigo. Consulta información de tus saldos y aportes, y accede a
            trámites desde tu celular, ahora disponible en la app store.
          </p>

          <ul className="mt-7 space-y-3">
            {appFeatures.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-medium text-paper/85">
                <span className="grid size-8 place-items-center rounded-full bg-lime/15 text-lime">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={links.app}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-md bg-lime px-5 text-sm font-bold text-forest-deep transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
            >
              Google Play · Android
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href={links.appStore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-md border border-paper/25 bg-paper/5 px-5 text-sm font-bold text-paper transition-colors hover:border-paper/50 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
            >
              <Apple aria-hidden="true" className="size-4" />
              App Store · iPhone
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <div className="relative grid min-h-108 grid-cols-1 items-center justify-items-center gap-6 overflow-hidden bg-paper/5 px-5 py-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-4 sm:px-8">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full border border-lime/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 size-80 rounded-full border border-paper/10"
          />

          <div className="app-phone-frame relative w-full max-w-60 justify-self-center rounded-[2.55rem] p-[6px]">
            <span aria-hidden="true" className="app-phone-button app-phone-button--left-top" />
            <span aria-hidden="true" className="app-phone-button app-phone-button--left-bottom" />
            <span aria-hidden="true" className="app-phone-button app-phone-button--right" />
            <div className="app-phone-screen relative overflow-hidden rounded-[2.05rem] bg-background">
              <img
                key={activeScreen}
                src={appScreens[activeScreen]}
                alt={`Captura ${activeScreen + 1} de ${appScreens.length} de la aplicación Coocentral`}
                className="app-screen-transition block aspect-[9/19.5] w-full object-cover"
                decoding="async"
              />
            </div>
            <span aria-hidden="true" className="app-phone-speaker" />
            <span aria-hidden="true" className="app-phone-camera" />
          </div>

          <div className="relative grid w-full max-w-sm grid-cols-2 gap-3 justify-self-center text-center text-ink sm:grid-cols-1 sm:gap-4">
            <div className="rounded-2xl bg-background p-2 shadow-xl sm:p-3">
              <div className="rounded-xl border border-border p-1.5 sm:p-2">
                <img
                  src="/QR_Descarga_APP/android-qr-app-coocentral.png"
                  alt="Código QR para descargar la aplicación Coocentral en Google Play para Android"
                  className="mx-auto aspect-square h-auto w-full max-w-40"
                />
              </div>
              <p className="mt-2 text-xs font-bold leading-4">Google Play</p>
              <p className="mt-1 text-[10px] text-ink/55">Android</p>
            </div>
            <div className="rounded-2xl bg-background p-2 shadow-xl sm:p-3">
              <div className="rounded-xl border border-border p-1.5 sm:p-2">
                <img
                  src="/QR_Descarga_APP/ios-qr-app-coocentral.png"
                  alt="Código QR para descargar la aplicación Coocentral en App Store para iPhone"
                  className="mx-auto aspect-square h-auto w-full max-w-40"
                />
              </div>
              <p className="mt-2 text-xs font-bold leading-4">App Store</p>
              <p className="mt-1 text-[10px] text-ink/55">iPhone · iOS</p>
            </div>
          </div>
          <p className="col-span-full text-center text-[10px] text-paper/45">
            Vista ilustrativa de la interfaz
          </p>
        </div>
      </div>
    </section>
  );
}
