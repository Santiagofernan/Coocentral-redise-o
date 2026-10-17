import { ArrowUpRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import logo from "@/assets/coocentral-logo.svg";
import { contact, footerColumns, socials } from "@/content/coocentral";

function SocialBrandIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.002 10.125 11.854v-8.385H7.078v-3.47h3.047V9.426c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.93-1.954 1.886v2.258h3.328l-.532 3.47h-2.796v8.385C19.612 23.075 24 18.092 24 12.073" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    );
  }

  if (label === "TikTok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M19.6 6.7a5.3 5.3 0 0 1-3.3-4.5V1h-4.1v14.7a3.1 3.1 0 1 1-3.1-3.1c.4 0 .8.1 1.1.2V8.6a7.1 7.1 0 1 0 6.1 7.1V8.2a9.2 9.2 0 0 0 5.3 1.7V5.8c-.7 0-1.4-.1-2-.4Z" />
      </svg>
    );
  }

  throw new Error(`No hay un logotipo de red social configurado para "${label}".`);
}

export function SiteFooter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-5 py-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-12 lg:px-10 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-3">
          <Link
            to="/"
            aria-label="Coocentral, inicio"
            onClick={() => {
              if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logo}
              alt="Coocentral"
              width="180"
              height="40"
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-paper/65">
            Más que una cooperativa: Una familia al servicio del caficultor
          </p>
          <address className="mt-6 space-y-1 text-sm not-italic text-paper/65">
            <p>{contact.address}</p>
            <p>{contact.city}</p>
            <Link to="/contacto" className="text-lime hover:underline">
              {contact.email}
            </Link>
            <p>{contact.phones.join(" · ")}</p>
          </address>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="min-w-0 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
              {column.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {column.links.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/") ? (
                    <Link
                      to={item.href}
                      className="inline-flex items-start text-sm leading-5 text-paper/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-start gap-1 text-sm leading-5 text-paper/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                      <ArrowUpRight className="mt-0.5 size-3.5 shrink-0" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span className="text-xs leading-5 text-paper/55">
            © 2026 Cooperativa Central de Caficultores del Huila
          </span>
          <nav aria-label="Redes sociales" className="flex min-w-0 flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper/55">
              Síguenos en redes
            </p>
            <ul className="flex flex-wrap gap-2">
              {socials.map((social) => {
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visitar Coocentral en ${social.label}`}
                      className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-paper/15 bg-paper/5 py-1 pl-1 pr-3 text-xs font-semibold text-paper/75 transition-colors hover:border-lime/50 hover:bg-paper/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
                    >
                      <span className="grid size-9 place-items-center rounded-full bg-paper/10 text-lime transition-colors group-hover:bg-lime group-hover:text-forest-deep">
                        <SocialBrandIcon label={social.label} />
                      </span>
                      {social.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-3.5 text-paper/40 transition-colors group-hover:text-lime"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
