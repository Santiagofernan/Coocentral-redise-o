import {
  ArrowUpRight,
  Apple,
  BadgeCheck,
  ClipboardList,
  CircleDollarSign,
  Smartphone,
} from "lucide-react";

import { links } from "@/content/coocentral";

const appFeatures = [
  { icon: CircleDollarSign, label: "Consulta tus saldos" },
  { icon: BadgeCheck, label: "Revisa tus aportes" },
  { icon: ClipboardList, label: "Gestiona tus trámites" },
];

export function AppPromotion() {
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
            trámites desde tu celular.
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

          <div className="relative w-full max-w-60 justify-self-center rounded-[2.25rem] border-[5px] border-ink/80 bg-ink p-1.5 shadow-2xl">
            <div className="overflow-hidden rounded-[1.65rem] bg-background text-ink">
              <div className="flex items-center justify-between bg-forest-deep px-4 pb-5 pt-6 text-paper">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-lime">
                  Coocentral
                </span>
                <span className="size-2 rounded-full bg-lime" />
              </div>
              <div className="px-3 pb-4 pt-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand">
                  Tu cooperativa
                </p>
                <p className="mt-1 font-display text-sm font-semibold leading-tight">
                  Todo más cerca
                </p>
                <div className="mt-3 rounded-xl bg-sand p-3">
                  <p className="text-[9px] font-medium text-ink/55">Accede a tu información</p>
                  <div className="mt-2.5 space-y-2">
                    {appFeatures.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 rounded-lg bg-background px-2 py-2"
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
                          <Icon aria-hidden="true" className="size-3" />
                        </span>
                        <span className="text-[9px] font-semibold leading-tight">{label}</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="ml-auto size-3 shrink-0 text-brand"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex justify-around border-t border-border pt-3 text-[8px] font-medium text-ink/50">
                  <span className="text-brand">Inicio</span>
                  <span>Servicios</span>
                  <span>Perfil</span>
                </div>
              </div>
            </div>
            <span className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-ink/70" />
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