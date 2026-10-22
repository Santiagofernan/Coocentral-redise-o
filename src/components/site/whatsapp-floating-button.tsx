import { useEffect, useState } from "react";
import { ArrowUp, Phone, X } from "lucide-react";

import { WhatsAppLogo } from "@/components/site/whatsapp-logo";
import { contact } from "@/content/coocentral";

const chatPanelId = "whatsapp-mini-chat";

function toWhatsappNumber(phone: string) {
  return `57${phone.replace(/\D/g, "")}`;
}

const communicationOptions = [
  ...contact.phones.map((phone) => ({
    area: "Recepción",
    phone,
    href: `tel:${phone.replace(/[^\d+]/g, "")}`,
    channel: "phone" as const,
  })),
  {
    area: "Crédito y cartera",
    phone: "317 433 4039",
    href: `https://wa.me/${toWhatsappNumber("317 433 4039")}?text=${encodeURIComponent(
      "Hola, quisiera recibir información sobre crédito y cartera.",
    )}`,
    channel: "whatsapp" as const,
  },
];

export function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <section
        id={chatPanelId}
        aria-labelledby="whatsapp-chat-title"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-x-4 bottom-24 z-40 ml-auto max-w-sm origin-bottom-right transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none sm:inset-x-auto sm:bottom-28 sm:right-7 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-brand/15 bg-paper shadow-[0_24px_70px_-24px_oklch(0.22_0.045_158/0.55)]">
          <div className="flex items-center gap-3 bg-[#128c4a] px-4 py-4 text-white">
            <span className="grid size-10 place-items-center rounded-full bg-white/15">
              <WhatsAppLogo className="size-6" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 id="whatsapp-chat-title" className="font-semibold leading-tight">
                Coocentral
              </h2>
              <p className="mt-1 text-xs text-white/75">Teléfono y WhatsApp</p>
            </div>
            <button
              type="button"
              aria-label="Cerrar chat de WhatsApp"
              onClick={() => setIsOpen(false)}
              className="grid size-11 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="bg-sand/55 p-4">
            <p className="text-xs font-medium text-ink/50">Coocentral · ahora</p>
            <p className="mt-2 max-w-[18rem] rounded-2xl rounded-tl-sm bg-paper px-4 py-3 text-sm leading-5 text-ink shadow-sm">
              Elige cómo quieres comunicarte con cada área:
            </p>
            <div className="mt-3 grid gap-2">
              {communicationOptions.map((option) => (
                <a
                  key={`${option.channel}-${option.phone}`}
                  href={option.href}
                  aria-label={
                    option.channel === "phone"
                      ? `Llamar a ${option.area}: ${option.phone}`
                      : undefined
                  }
                  target={option.channel === "whatsapp" ? "_blank" : undefined}
                  rel={option.channel === "whatsapp" ? "noreferrer" : undefined}
                  className={`inline-flex min-h-11 w-full items-center gap-3 rounded-xl px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    option.channel === "whatsapp"
                      ? "bg-[#25d366] text-forest-deep hover:bg-[#20bd5a] focus-visible:ring-[#128c4a]"
                      : "border border-brand/15 bg-paper text-ink hover:bg-sand focus-visible:ring-brand"
                  }`}
                >
                  {option.channel === "phone" ? (
                    <Phone aria-hidden="true" className="size-4 shrink-0 text-brand" />
                  ) : (
                    <WhatsAppLogo aria-hidden="true" className="size-4 shrink-0" />
                  )}
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block">{option.area}</span>
                    <span className="block text-xs font-medium">{option.phone}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {!isOpen && (
        <button
          type="button"
          aria-label="Volver al inicio de la página"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-7 z-40 grid size-11 place-items-center rounded-full border border-brand/15 bg-paper text-brand shadow-[0_8px_24px_-10px_oklch(0.22_0.045_158/0.5)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-sand hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-0 motion-reduce:transition-none sm:bottom-28 sm:right-9"
        >
          <ArrowUp aria-hidden="true" className="size-5" />
        </button>
      )}
      <button
        type="button"
        aria-label={isOpen ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp"}
        aria-expanded={isOpen}
        aria-controls={chatPanelId}
        onClick={() => setIsOpen((open) => !open)}
        className={`fixed bottom-5 right-5 z-40 inline-flex size-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-10px_oklch(0.15_0.04_150/0.65)] transition-[transform,box-shadow] duration-500 ease-in-out hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-95 motion-reduce:transition-none sm:bottom-7 sm:right-7 ${
          isOpen ? "rotate-180" : "rotate-0 whatsapp-float-pulse"
        }`}
      >
        <span className="relative grid size-9 place-items-center">
          <X
            aria-hidden="true"
            className={`absolute size-8 transition-[transform,opacity] duration-200 motion-reduce:transition-none ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-75 opacity-0"
            }`}
          />
          <WhatsAppLogo
            className={`absolute size-9 transition-[transform,opacity] duration-200 motion-reduce:transition-none ${
              isOpen ? "-rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
        </span>
      </button>
    </>
  );
}
