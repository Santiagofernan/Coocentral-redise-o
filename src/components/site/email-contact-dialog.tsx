import { useState, type ReactNode } from "react";
import { Check, Copy, Mail } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type EmailContactDialogProps = {
  email: string;
  children: ReactNode;
  className: string;
  title?: string;
  description?: string;
};

export function EmailContactDialog({
  email,
  children,
  className,
  title = "Continuar por correo",
  description = "Copia esta dirección y úsala en tu aplicación de correo para escribirnos.",
}: EmailContactDialogProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setCopied(false);
          setCopyFailed(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent
        closeClassName="text-paper ring-offset-forest-deep hover:text-lime"
        className="max-w-md overflow-hidden rounded-2xl border-brand/15 bg-paper p-0 shadow-2xl"
      >
        <div className="bg-forest-deep px-6 py-7 text-paper sm:px-8">
          <span className="grid size-12 place-items-center rounded-full bg-lime/15 text-lime">
            <Mail aria-hidden="true" className="size-6" />
          </span>
          <DialogTitle className="mt-5 font-display text-2xl font-medium">{title}</DialogTitle>
          <DialogDescription className="mt-2 max-w-sm text-sm leading-6 text-paper/70">
            {description}
          </DialogDescription>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/50">
            Dirección de correo
          </p>
          <p className="mt-2 break-all border border-border bg-background px-4 py-3 text-sm font-semibold text-ink">
            {email}
          </p>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <DialogClose asChild>
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center border border-border px-4 py-2 text-sm font-semibold text-ink/75 transition-colors hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Cerrar
              </button>
            </DialogClose>
            <button
              type="button"
              onClick={copyAddress}
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-brand px-4 py-2 text-sm font-bold text-paper transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              {copied ? (
                <>
                  <Check aria-hidden="true" className="size-4" />
                  Correo copiado
                </>
              ) : (
                <>
                  <Copy aria-hidden="true" className="size-4" />
                  Copiar correo
                </>
              )}
            </button>
          </div>
          {copied && (
            <p role="status" className="mt-4 text-right text-sm text-brand">
              Dirección copiada. Ya puedes pegarla en tu correo.
            </p>
          )}
          {copyFailed && (
            <p role="status" className="mt-4 text-right text-sm leading-6 text-ink/70">
              No se pudo copiar automáticamente. Selecciona y copia la dirección que aparece arriba.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
