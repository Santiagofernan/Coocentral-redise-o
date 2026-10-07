import { useState } from "react";
import { Check, Copy, Phone } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PhoneContactDialogProps = {
  phone: string;
  className: string;
  variant?: "light" | "dark";
};

export function PhoneContactDialog({
  phone,
  className,
  variant = "light",
}: PhoneContactDialogProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const isDark = variant === "dark";

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(phone);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setCopyState("idle");
      }}
    >
      <DialogTrigger asChild>
        <button type="button" className={className}>
          <Phone
            aria-hidden="true"
            className={`size-4 shrink-0 ${isDark ? "text-lime" : "text-brand"}`}
          />
          {phone}
        </button>
      </DialogTrigger>
      <DialogContent
        closeClassName={isDark ? "text-paper ring-offset-forest-deep hover:text-lime" : undefined}
        className={`max-w-sm overflow-hidden rounded-2xl p-0 shadow-2xl ${
          isDark ? "border-lime/20 bg-forest-deep" : "border-brand/15 bg-paper"
        }`}
      >
        <div
          className={`px-6 py-7 sm:px-8 ${
            isDark ? "bg-forest-deep text-paper" : "bg-sand text-ink"
          }`}
        >
          <span
            className={`grid size-12 place-items-center rounded-full ${
              isDark ? "bg-lime/15 text-lime" : "bg-brand/10 text-brand"
            }`}
          >
            <Phone aria-hidden="true" className="size-6" />
          </span>
          <DialogTitle
            className={`mt-5 font-display text-2xl font-medium ${
              isDark ? "text-paper" : "text-forest-deep"
            }`}
          >
            Llama a Coocentral
          </DialogTitle>
          <DialogDescription
            className={`mt-2 text-sm leading-6 ${isDark ? "text-paper/70" : "text-ink/65"}`}
          >
            Puedes iniciar la llamada o copiar el número para usarlo cuando quieras.
          </DialogDescription>
        </div>

        <div className="p-6 sm:p-8">
          <p
            className={`border px-4 py-3 text-lg font-semibold ${
              isDark
                ? "border-paper/15 bg-paper/5 text-paper"
                : "border-border bg-background text-ink"
            }`}
          >
            {phone}
          </p>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <DialogClose asChild>
              <button
                type="button"
                className={`inline-flex min-h-11 items-center justify-center border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                  isDark
                    ? "border-paper/20 text-paper/80 hover:bg-paper/10"
                    : "border-border text-ink/75 hover:bg-sand"
                }`}
              >
                Cerrar
              </button>
            </DialogClose>
            <button
              type="button"
              onClick={copyPhone}
              className={`inline-flex min-h-11 items-center justify-center gap-2 px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                isDark
                  ? "bg-lime text-forest-deep hover:bg-paper"
                  : "bg-brand text-paper hover:bg-forest"
              }`}
            >
              {copyState === "copied" ? (
                <>
                  <Check aria-hidden="true" className="size-4" />
                  Número copiado
                </>
              ) : (
                <>
                  <Copy aria-hidden="true" className="size-4" />
                  Copiar número
                </>
              )}
            </button>
            <DialogClose asChild>
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className={`inline-flex min-h-11 items-center justify-center gap-2 px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                  isDark
                    ? "bg-lime text-forest-deep hover:bg-paper"
                    : "bg-brand text-paper hover:bg-forest"
                }`}
              >
                <Phone aria-hidden="true" className="size-4" />
                Llamar
              </a>
            </DialogClose>
          </div>
          {copyState === "copied" && (
            <p role="status" className="mt-4 text-right text-sm text-brand">
              Número copiado al portapapeles.
            </p>
          )}
          {copyState === "error" && (
            <p role="status" className="mt-4 text-right text-sm leading-6 text-ink/70">
              No se pudo copiar automáticamente. Selecciona el número para copiarlo manualmente.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
