import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

import { contact } from "@/content/coocentral";

const message = encodeURIComponent(
  "Hola, quisiera recibir más información sobre los servicios de Coocentral.",
);
const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${message}`;
const chatPanelId = "whatsapp-mini-chat";

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
              <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor" className="size-6">
                <path d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.3 29l6.7-1.76a12.8 12.8 0 0 0 6.02 1.53h.01c7.02 0 12.73-5.7 12.74-12.72a12.65 12.65 0 0 0-3.73-9.02 12.66 12.66 0 0 0-9.02-3.83Zm0 23.4h-.01a10.62 10.62 0 0 1-5.41-1.48l-.39-.23-3.98 1.05 1.06-3.88-.25-.4a10.57 10.57 0 0 1-1.63-5.65c0-5.87 4.77-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.77 10.64-10.64 10.64Zm5.84-7.97c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.84-1.6-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62s1.12 3.04 1.28 3.25c.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.65.74.23 1.42.2 1.96.12.6-.09 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
              </svg>
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
              ¡Hola! Estamos aquí para ayudarte. Cuéntanos qué necesitas y conversemos.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 text-sm font-bold text-forest-deep transition-colors hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4a] focus-visible:ring-offset-2"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              Ir a WhatsApp
            </a>
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
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            fill="currentColor"
            className={`absolute size-9 transition-[transform,opacity] duration-200 motion-reduce:transition-none ${
              isOpen ? "-rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <path d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.3 29l6.7-1.76a12.8 12.8 0 0 0 6.02 1.53h.01c7.02 0 12.73-5.7 12.74-12.72a12.65 12.65 0 0 0-3.73-9.02 12.66 12.66 0 0 0-9.02-3.83Zm0 23.4h-.01a10.62 10.62 0 0 1-5.41-1.48l-.39-.23-3.98 1.05 1.06-3.88-.25-.4a10.57 10.57 0 0 1-1.63-5.65c0-5.87 4.77-10.64 10.64-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.77 10.64-10.64 10.64Zm5.84-7.97c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.84-1.6-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62s1.12 3.04 1.28 3.25c.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.65.74.23 1.42.2 1.96.12.6-.09 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </span>
      </button>
    </>
  );
}
