import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { PageIntro } from "@/components/site/section-pages";
import { WhatsAppLogo } from "@/components/site/whatsapp-logo";
import { contact } from "@/content/coocentral";
import { getGoogleMapsDirectionsUrl } from "@/lib/google-maps";

const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Consulta desde el sitio web de Coocentral",
)}&body=${encodeURIComponent(
  "Hola, quisiera recibir más información sobre los servicios de Coocentral.",
)}`;
const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Hola, quisiera comunicarme con Coocentral.",
)}`;
const mapsHref = getGoogleMapsDirectionsUrl(`${contact.address}, ${contact.city}`);

export function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contacto"
        title="Estamos para atenderte"
        description="Comunícate directamente con Coocentral por teléfono, correo o WhatsApp, o visítanos en nuestra oficina principal."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:px-10 lg:py-20">
        <article className="rounded-2xl border border-border bg-paper p-6 shadow-sm sm:p-8">
          <span className="grid size-12 place-items-center rounded-xl bg-lime/30 text-forest-deep">
            <Phone aria-hidden="true" className="size-6" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-medium">Llámanos</h2>
          <p className="mt-2 text-sm leading-6 text-ink/65">
            Comunícate con nuestros canales de atención.
          </p>
          <ul className="mt-5 space-y-3">
            {contact.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-paper p-6 shadow-sm sm:p-8">
          <span className="grid size-12 place-items-center rounded-xl bg-lime/30 text-forest-deep">
            <Mail aria-hidden="true" className="size-6" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-medium">Escríbenos por correo</h2>
          <p className="mt-2 text-sm leading-6 text-ink/65">
            Se abrirá tu aplicación de correo con un mensaje inicial preparado.
          </p>
          <a
            href={emailHref}
            className="mt-5 inline-flex min-h-11 max-w-full items-center gap-2 break-all rounded-lg px-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {contact.email}
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
        </article>

        <article className="rounded-2xl border border-border bg-paper p-6 shadow-sm sm:p-8">
          <span className="grid size-12 place-items-center rounded-xl bg-[#25d366] text-white">
            <WhatsAppLogo className="size-7" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-medium">Escríbenos por WhatsApp</h2>
          <p className="mt-2 text-sm leading-6 text-ink/65">
            Inicia una conversación con nuestro equipo de atención.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25d366] px-5 text-sm font-bold text-forest-deep transition-colors hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4a] focus-visible:ring-offset-2"
          >
            <WhatsAppLogo className="size-5" />
            Abrir WhatsApp
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </article>

        <article className="rounded-2xl border border-border bg-paper p-6 shadow-sm sm:p-8">
          <span className="grid size-12 place-items-center rounded-xl bg-lime/30 text-forest-deep">
            <MapPin aria-hidden="true" className="size-6" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-medium">Visítanos</h2>
          <p className="mt-2 text-sm leading-6 text-ink/65">Oficina principal · {contact.city}</p>
          <address className="mt-3 text-sm font-semibold leading-6 text-ink not-italic">
            {contact.address}
          </address>
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Cómo llegar en Google Maps
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </article>
      </section>
    </main>
  );
}
