import { ArrowRight, ChevronDown, Mail, MapPin, Menu } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import logo from "@/assets/coocentral-logo.svg";
import { PhoneContactDialog } from "@/components/site/phone-contact-dialog";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { contact, moreNavigation, navigation } from "@/content/coocentral";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const moreIsActive = moreNavigation.some((item) => item.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-paper/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 lg:h-20 lg:px-10">
        <Link
          to="/"
          aria-label="Coocentral, ir al inicio"
          className="shrink-0"
          onClick={() => {
            if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Coocentral" width="180" height="40" className="h-9 w-auto lg:h-10" />
        </Link>

        <nav aria-label="Navegación principal" className="hidden xl:block">
          <ul className="flex items-center gap-1.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "inline-flex h-10 items-center rounded-md px-3 text-sm font-semibold text-ink/75 transition-colors hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                    pathname === item.href && "bg-brand/10 text-brand",
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
                    "flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-md px-3 text-sm font-semibold text-ink/75 transition-colors hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden",
                    moreIsActive && "bg-brand/10 text-brand",
                  )}
                >
                  Explorar{" "}
                  <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <ul className="absolute right-0 top-full z-50 mt-2 w-64 space-y-1 border border-brand/15 bg-paper p-2 shadow-xl transition-[opacity,transform] group-open:animate-in group-open:fade-in-0 group-open:slide-in-from-top-1">
                  {moreNavigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex min-h-11 items-center justify-between rounded-sm px-3 text-sm font-semibold text-ink/75 transition-colors hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                          pathname === item.href && "bg-brand/5 text-brand",
                        )}
                      >
                        {item.label}
                        <ArrowRight className="size-4 text-brand/60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/asociarme"
            className="hidden h-10 items-center gap-2 rounded-md bg-forest px-4 text-sm font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:inline-flex"
          >
            Asociarme <ArrowRight className="size-4" />
          </Link>
          <details className="group relative">
            <summary className="inline-flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-md bg-lime px-4 text-sm font-bold text-forest-deep transition-colors hover:bg-lime/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
              Contacto
              <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(23rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-brand/15 bg-paper text-ink shadow-xl">
              <div className="border-b border-border px-5 py-4">
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
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-forest px-4 text-sm font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
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
                "grid size-11 cursor-pointer place-items-center rounded-md border border-brand/20 bg-paper text-forest transition-colors hover:bg-forest hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 xl:hidden",
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full flex-col overflow-y-auto border-l-0 bg-forest-deep p-6 text-paper sm:max-w-md sm:p-8 [&>button]:rounded-md [&>button]:text-paper"
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
                    className="h-9 w-fit brightness-0 invert"
                  />
                </Link>
              </SheetClose>
              <nav aria-label="Navegación móvil" className="mt-8">
                <ul className="divide-y divide-paper/15 border-y border-paper/15">
                  {[...navigation, ...moreNavigation].map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            "flex min-h-14 items-center justify-between font-display text-2xl font-medium text-paper/90 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lime",
                            pathname === item.href && "text-lime",
                          )}
                        >
                          {item.label}
                          <ArrowRight className="size-4 text-lime/70" />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
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
