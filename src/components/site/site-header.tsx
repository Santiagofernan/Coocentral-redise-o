import { ArrowRight, BookOpen, ChevronDown, Leaf, Mail, MapPin, Menu } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import logo from "@/assets/coocentral-logo.svg";
import { PhoneContactDialog } from "@/components/site/phone-contact-dialog";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { contact, moreNavigation, navigation } from "@/content/coocentral";
import { cn } from "@/lib/utils";

const exploreIcons = {
  "/historia": BookOpen,
  "/sostenibilidad": Leaf,
} as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const moreIsActive = moreNavigation.some((item) => item.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-paper/95 shadow-[0_8px_30px_-22px_oklch(0.22_0.045_158/0.55)] backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-1 px-5 sm:gap-6 lg:h-20 lg:px-10">
        <Link
          to="/"
          aria-label="Coocentral, ir al inicio"
          className="group/logo relative isolate inline-flex shrink-0 items-center rounded-full px-2 py-1 transition-colors duration-300 hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-[0.97]"
          onClick={() => {
            if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Coocentral"
            width="180"
            height="40"
            className="h-auto w-[clamp(5.5rem,34vw,9rem)] transition-transform duration-300 ease-out group-hover/logo:scale-[1.06] group-hover/logo:drop-shadow-[0_5px_8px_oklch(0.529_0.146_147.8/0.2)] group-active/logo:scale-[0.98] sm:h-9 sm:w-auto lg:h-10"
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden rounded-full border border-brand/10 bg-sand/55 p-1 xl:block"
        >
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => {
                    if (item.href === "/" && pathname === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold text-ink/70 transition-all duration-200 hover:bg-paper hover:text-brand hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                    pathname === item.href &&
                      "bg-forest text-paper shadow-sm hover:bg-forest hover:text-paper",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <details className="group relative">
                <summary
                  className={cn(
                    "flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-ink/70 transition-all duration-200 hover:bg-paper hover:text-brand hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden",
                    moreIsActive &&
                      "bg-forest text-paper shadow-sm hover:bg-forest hover:text-paper",
                  )}
                >
                  Explorar{" "}
                  <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="absolute right-0 top-full z-50 mt-3 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-brand/15 bg-paper text-ink shadow-[0_24px_70px_-24px_oklch(0.22_0.045_158/0.45)] transition-[opacity,transform] group-open:animate-in group-open:fade-in-0 group-open:slide-in-from-top-1">
                  <div className="border-b border-border bg-sand/45 px-5 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                      Descubre Coocentral
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-medium">Explora</h2>
                    <p className="mt-1 text-sm leading-5 text-ink/60">
                      Conoce nuestra historia y compromiso con el territorio.
                    </p>
                  </div>
                  <ul className="space-y-2 p-3">
                    {moreNavigation.map((item) => {
                      const ExploreIcon = exploreIcons[item.href];

                      return (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            onClick={() => {
                              if (item.href === "/" && pathname === "/") {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }
                            }}
                            className={cn(
                              "group/item flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all hover:translate-x-0.5 hover:border-brand/15 hover:bg-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                              pathname === item.href && "border-brand/15 bg-sand/60",
                            )}
                          >
                            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-lime/35 text-brand transition-colors group-hover/item:bg-lime">
                              <ExploreIcon aria-hidden="true" className="size-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-bold text-ink">{item.label}</span>
                              <span className="mt-0.5 block text-xs leading-5 text-ink/60">
                                {item.description}
                              </span>
                            </span>
                            <ArrowRight
                              aria-hidden="true"
                              className="size-4 shrink-0 text-brand/60 transition-transform group-hover/item:translate-x-0.5"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <details className="group relative hidden xl:block">
            <summary className="group/contact inline-flex h-11 cursor-pointer list-none items-center gap-2 rounded-full bg-lime px-4 text-sm font-bold text-forest-deep shadow-[0_6px_18px_-10px_oklch(0.529_0.146_147.8/0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:translate-y-0 [&::-webkit-details-marker]:hidden">
              Contacto
              <ChevronDown className="size-4 transition-transform duration-200 group-open/contact:rotate-180" />
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 w-[min(23rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-brand/15 bg-paper text-ink shadow-[0_24px_70px_-24px_oklch(0.22_0.045_158/0.45)]">
              <div className="border-b border-border bg-sand/45 px-5 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                  Atención Coocentral
                </p>
                <h2 className="mt-1 font-display text-2xl font-medium">Hablemos</h2>
              </div>
              <address className="space-y-2 p-3 text-sm not-italic">
                <p className="flex items-start gap-3 rounded-lg px-3 py-3 leading-5 text-ink/65">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>
                    <span className="block font-semibold text-ink">Oficina principal</span>
                    {contact.address}, {contact.city}
                  </span>
                </p>
                {contact.phones.map((phone) => (
                  <PhoneContactDialog
                    key={phone}
                    phone={phone}
                    className="group flex min-h-12 w-full items-center gap-3 rounded-lg border border-transparent bg-sand/55 px-3 py-3 text-left font-semibold text-ink/75 transition-all hover:translate-x-0.5 hover:border-brand/15 hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  />
                ))}
                <Link
                  to="/contacto"
                  className="group flex min-h-12 items-center gap-3 rounded-lg border border-transparent px-3 py-3 font-semibold text-ink/75 transition-all hover:translate-x-0.5 hover:border-brand/15 hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <Mail aria-hidden="true" className="size-5 shrink-0 text-brand" />
                  <span className="min-w-0 break-all">{contact.email}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-auto size-4 shrink-0 text-brand/60 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </address>
              <div className="px-4 pb-4">
                <Link
                  to="/contacto"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest px-4 text-sm font-bold text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:translate-y-0"
                >
                  Escribirnos
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </details>

          <Sheet>
            <SheetTrigger
              aria-label="Abrir menú"
              className={cn(
                "grid size-11 cursor-pointer place-items-center rounded-full border border-brand/15 bg-paper text-forest shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-paper hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:translate-y-0 xl:hidden",
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full flex-col overflow-y-auto border-l-0 bg-forest-deep p-6 text-paper sm:max-w-md sm:p-8 [&>button]:rounded-full [&>button]:text-paper"
            >
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <SheetClose asChild>
                <Link
                  to="/"
                  aria-label="Coocentral, ir al inicio"
                  onClick={() => {
                    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <img
                    src={logo}
                    alt="Coocentral"
                    width="160"
                    height="36"
                    className="h-9 w-fit brightness-0 invert transition-transform duration-300 hover:scale-105 active:scale-95"
                  />
                </Link>
              </SheetClose>
              <nav aria-label="Navegación móvil" className="mt-8">
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            "group flex min-h-14 items-center justify-between rounded-xl border border-paper/10 bg-paper/[0.04] px-4 font-display text-xl font-semibold text-paper/90 transition-all duration-200 hover:translate-x-1 hover:border-lime/25 hover:bg-paper/10 hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lime",
                            pathname === item.href && "border-lime/30 bg-lime/10 text-lime",
                          )}
                        >
                          {item.label}
                          <ArrowRight className="size-4 text-lime/70 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
                    Explorar
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {moreNavigation.map((item) => {
                      const ExploreIcon = exploreIcons[item.href];

                      return (
                        <li key={item.href}>
                          <SheetClose asChild>
                            <Link
                              to={item.href}
                              className={cn(
                                "flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-paper/10 bg-paper/5 p-3 transition-colors hover:border-lime/30 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime",
                                pathname === item.href && "border-lime/30 bg-paper/10",
                              )}
                            >
                              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-lime/15 text-lime">
                                <ExploreIcon aria-hidden="true" className="size-5" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block font-semibold text-paper">{item.label}</span>
                                <span className="mt-0.5 block text-xs leading-5 text-paper/60">
                                  {item.description}
                                </span>
                              </span>
                              <ArrowRight
                                aria-hidden="true"
                                className="size-4 shrink-0 text-lime"
                              />
                            </Link>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
              <section
                aria-labelledby="mobile-contact-title"
                className="mt-auto border-t border-paper/15 pt-6"
              >
                <h2
                  id="mobile-contact-title"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-lime"
                >
                  Contacto
                </h2>
                <address className="mt-4 space-y-2 text-sm not-italic text-paper/65">
                  <p className="flex items-start gap-3 rounded-lg px-3 py-3 leading-5">
                    <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-lime" />
                    <span>
                      <span className="block font-semibold text-paper">Oficina principal</span>
                      {contact.address}, {contact.city}
                    </span>
                  </p>
                  {contact.phones.map((phone) => (
                    <PhoneContactDialog
                      key={phone}
                      phone={phone}
                      variant="dark"
                      className="flex min-h-12 w-full items-center gap-3 rounded-lg border border-paper/10 bg-paper/5 px-3 py-3 text-left font-semibold text-paper/85 transition-colors hover:border-lime/30 hover:bg-paper/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
                    />
                  ))}
                  <Link
                    to="/contacto"
                    className="flex min-h-12 items-center gap-3 rounded-lg border border-paper/10 px-3 py-3 font-semibold text-paper/85 transition-colors hover:border-lime/30 hover:bg-paper/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
                  >
                    <Mail aria-hidden="true" className="size-5 shrink-0 text-lime" />
                    <span className="min-w-0 break-all">{contact.email}</span>
                    <ArrowRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-lime" />
                  </Link>
                </address>
                <SheetClose asChild>
                  <Link
                    to="/contacto"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-lime hover:underline"
                  >
                    Escribirnos
                    <ArrowRight className="size-4" />
                  </Link>
                </SheetClose>
              </section>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
