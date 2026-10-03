import { ArrowRight, ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import logo from "@/assets/coocentral-logo.svg";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { contact, links, moreNavigation, navigation } from "@/content/coocentral";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const moreIsActive = moreNavigation.some((item) => item.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-paper/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 lg:h-20 lg:px-10">
        <Link to="/" aria-label="Coocentral, ir al inicio" className="shrink-0">
          <img
            src={logo}
            alt="Coocentral"
            width="180"
            height="40"
            className="h-9 w-auto lg:h-10"
          />
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
                  Explorar <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
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
          <a
            href={links.store}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-1.5 rounded-md bg-lime px-4 text-sm font-bold text-forest-deep transition-colors hover:bg-lime/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:px-5"
          >
            Tienda virtual <ArrowUpRight className="size-4" />
          </a>

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
              <img
                src={logo}
                alt="Coocentral"
                width="160"
                height="36"
                className="h-9 w-fit brightness-0 invert"
              />
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
                          {item.label}<ArrowRight className="size-4 text-lime/70" />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto space-y-1 border-t border-paper/15 pt-6 text-sm text-paper/65">
                <p>{contact.address}</p>
                <p>{contact.phones.join(" · ")}</p>
                <p>{contact.email}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
