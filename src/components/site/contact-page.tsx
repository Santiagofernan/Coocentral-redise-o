import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";

import { PageIntro } from "@/components/site/section-pages";
import { contact } from "@/content/coocentral";

const inputClassName =
  "mt-2 min-h-12 w-full border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ContactPage() {
  const [preparedMessage, setPreparedMessage] = useState<{
    subject: string;
    body: string;
  } | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = "Mensaje desde el formulario de contacto Coocentral";
    const body = [
      `Nombre: ${firstName}`,
      `Apellidos: ${lastName}`,
      `Correo: ${email}`,
      "",
      "Mensaje:",
      message,
    ].join("\n");

    setPreparedMessage({ subject, body });
    setCopyStatus("idle");
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(preparedMessage?.body ?? "");
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <main>
      <PageIntro
        eyebrow="Contacto"
        title="Estamos para escucharte"
        description="Escríbenos tus preguntas, comentarios o solicitudes. También puedes comunicarte directamente con nuestras oficinas."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Canales de atención
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight lg:text-4xl">
            Hablemos de lo que necesitas
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-ink/65">
            Completa el formulario para preparar tu mensaje y enviarlo a nuestro correo
            institucional.
          </p>

          <address className="mt-8 space-y-5 border-y border-border py-6 text-sm not-italic">
            <p className="flex items-start gap-3 leading-6 text-ink/70">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
              <span>
                <strong className="block text-ink">Oficina principal</strong>
                {contact.address}, {contact.city}
              </span>
            </p>
            {contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 text-ink/70 transition-colors hover:text-brand"
              >
                <Phone aria-hidden="true" className="size-5 shrink-0 text-brand" />
                {phone}
              </a>
            ))}
            <p className="flex items-center gap-3 text-ink/70">
              <Mail aria-hidden="true" className="size-5 shrink-0 text-brand" />
              {contact.email}
            </p>
          </address>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-border bg-paper p-6 shadow-sm sm:p-8 lg:col-span-7 lg:p-10"
        >
          <h2 className="font-display text-2xl font-medium">Envíanos un mensaje</h2>
          <p className="mt-2 text-sm leading-6 text-ink/60">
            Los campos marcados con * son obligatorios.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Nombre *
              <input
                className={inputClassName}
                type="text"
                name="firstName"
                autoComplete="given-name"
                required
                maxLength={100}
                placeholder="Tu nombre"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Apellidos *
              <input
                className={inputClassName}
                type="text"
                name="lastName"
                autoComplete="family-name"
                required
                maxLength={100}
                placeholder="Tus apellidos"
              />
            </label>
            <label className="block text-sm font-semibold text-ink sm:col-span-2">
              Correo electrónico *
              <input
                className={inputClassName}
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="nombre@correo.com"
              />
            </label>
            <label className="block text-sm font-semibold text-ink sm:col-span-2">
              Mensaje *
              <textarea
                className={`${inputClassName} min-h-36 resize-y`}
                name="message"
                required
                maxLength={5000}
                placeholder="Cuéntanos cómo podemos ayudarte"
                rows={5}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-brand px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Preparar mensaje <ArrowRight aria-hidden="true" className="size-4" />
          </button>
          {preparedMessage ? (
            <section
              aria-live="polite"
              className="mt-8 border border-brand/20 bg-sand/60 p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-forest-deep">
                    Tu mensaje está listo
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">
                    Copia el texto y envíalo desde tu correo. Todavía no se ha enviado.
                  </p>
                </div>
              </div>

              <dl className="mt-5 grid gap-3 border-y border-brand/10 py-4 text-sm sm:grid-cols-[6rem_1fr]">
                <dt className="font-semibold text-ink/60">Para</dt>
                <dd className="break-all font-medium text-ink">{contact.email}</dd>
                <dt className="font-semibold text-ink/60">Asunto</dt>
                <dd className="text-ink">{preparedMessage.subject}</dd>
              </dl>

              <label
                className="mt-4 block text-sm font-semibold text-ink"
                htmlFor="prepared-message"
              >
                Mensaje
              </label>
              <textarea
                id="prepared-message"
                className={`${inputClassName} min-h-36 resize-y bg-paper`}
                readOnly
                value={preparedMessage.body}
                rows={6}
                onFocus={(event) => event.currentTarget.select()}
              />
              <button
                type="button"
                onClick={copyMessage}
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 border border-brand/25 bg-paper px-4 py-2 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {copyStatus === "copied" ? (
                  <>
                    <Check aria-hidden="true" className="size-4" />
                    Mensaje copiado
                  </>
                ) : (
                  <>
                    <Copy aria-hidden="true" className="size-4" />
                    Copiar mensaje
                  </>
                )}
              </button>
              {copyStatus === "error" && (
                <p role="status" className="mt-3 text-sm leading-6 text-ink/70">
                  No fue posible copiar automáticamente. Selecciona el mensaje en el campo para
                  copiarlo manualmente.
                </p>
              )}
              {copyStatus === "copied" && (
                <p role="status" className="mt-3 text-sm leading-6 text-ink/70">
                  Ya puedes pegarlo en un correo dirigido a {contact.email}.
                </p>
              )}
            </section>
          ) : (
            <p className="mt-4 text-xs leading-5 text-ink/55">
              Al continuar, verás aquí el mensaje listo para copiar y enviar desde tu correo.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
