import { ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import logo from "@/assets/coocentral-logo.svg";
import { contact, footerColumns, socials } from "@/content/coocentral";

const socialIcons = {
  Facebook,
  Instagram,
  YouTube: Youtube,
} as const;

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
                const SocialIcon = socialIcons[social.label];

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
                        <SocialIcon aria-hidden="true" className="size-[18px]" />
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
