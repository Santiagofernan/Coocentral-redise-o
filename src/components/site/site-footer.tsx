import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import logo from "@/assets/coocentral-logo.svg";
import { contact, footerColumns, socials } from "@/content/coocentral";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-12 lg:px-10 lg:py-16">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="Coocentral, inicio">
            <img src={logo} alt="Coocentral" width="180" height="40" className="h-9 w-auto brightness-0 invert" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-paper/65">
            Cooperativa Central de Caficultores del Huila. Un ecosistema alrededor del caficultor.
          </p>
          <address className="mt-6 space-y-1 text-sm not-italic text-paper/65">
            <p>{contact.address}</p>
            <p>{contact.city}</p>
            <a href={`mailto:${contact.email}`} className="text-lime hover:underline">{contact.email}</a>
            <p>{contact.phones.join(" · ")}</p>
          </address>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-lime">{column.title}</h2>
            <ul className="mt-4 space-y-3">
              {column.links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1 text-sm leading-5 text-paper/70 transition-colors hover:text-paper">
                    {item.label}<ArrowUpRight className="mt-0.5 size-3.5 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© 2026 Cooperativa Central de Caficultores del Huila</span>
          <ul className="flex gap-5">
            {socials.map((social) => (
              <li key={social.label}><a href={social.href} target="_blank" rel="noreferrer" className="hover:text-paper">{social.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}