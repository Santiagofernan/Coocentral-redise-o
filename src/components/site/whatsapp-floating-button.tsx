import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

import { WhatsAppLogo } from "@/components/site/whatsapp-logo";
import { contact } from "@/content/coocentral";

const chatPanelId = "whatsapp-mini-chat";

function toWhatsappNumber(phone: string) {
  return `57${phone.replace(/\D/g, "")}`;
}

const whatsappOptions = [
  ...[...contact.phones]
    .sort(
      (a, b) =>
        Number(toWhatsappNumber(b) === contact.whatsapp) -
        Number(toWhatsappNumber(a) === contact.whatsapp),
    )
    .map((phone) => ({
      area: "Recepción",
      phone,
      number: toWhatsappNumber(phone),
      message: "Hola, quisiera comunicarme con recepción de Coocentral.",
    })),
  {
    area: "Crédito y cartera",
    phone: "317 433 4039",
    number: toWhatsappNumber("317 433 4039"),
    message: "Hola, quisiera recibir información sobre crédito y cartera.",
  },
].map((option) => ({
  ...option,
  href: `https://wa.me/${option.number}?text=${encodeURIComponent(option.message)}`,
}));

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
              <p className="mt-1 text-xs text-white/75">Atención por WhatsApp</p>
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
              Elige el área con la que quieres comunicarte:
            </p>
            <div className="mt-3 grid gap-2">
              {whatsappOptions.map((option) => (
                <a
                  key={option.number}
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center gap-3 rounded-xl bg-[#25d366] px-4 py-2 text-sm font-bold text-forest-deep transition-colors hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4a] focus-visible:ring-offset-2"
                >
                  <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
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
