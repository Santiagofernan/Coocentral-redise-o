import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { openPrivacyPolicyModalEvent } from "@/lib/privacy-policy-modal";

const consentStorageKey = "coocentral-site-consent-v1";
const consentDurationMs = 30 * 24 * 60 * 60 * 1000;
let privacyPolicyTextRequest: Promise<string> | null = null;

type CookiePreference = "necessary" | "all";

type StoredConsent = {
  version: 1;
  privacyPolicyRead: boolean;
  cookiePreference: CookiePreference;
  acceptedAt: string;
  expiresAt?: string;
};

type SiteConsentProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type PolicyContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; style: "decimal" | "lower-alpha" | "disc"; items: string[] };

function getPrivacyPolicyText() {
  privacyPolicyTextRequest ??= import("@/content/privacy-policy.txt?raw")
    .then(({ default: text }) => text)
    .catch((error: unknown) => {
      privacyPolicyTextRequest = null;
      throw error;
    });

  return privacyPolicyTextRequest;
}

function isPolicyHeading(text: string) {
  return /[A-ZÁÉÍÓÚÜÑ]/.test(text) && text === text.toLocaleUpperCase("es");
}

function getPolicyContentBlocks(text: string): PolicyContentBlock[] {
  const policyStart = /^POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES\s*$/m.exec(text);

  if (!policyStart) {
    throw new Error("No se encontró el inicio de la Política de privacidad.");
  }

  const paragraphs = text
    .slice(policyStart.index)
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return paragraphs.flatMap((paragraph): PolicyContentBlock[] => {
    const lines = paragraph
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
    const normalizedText = lines.join(" ");

    if (isPolicyHeading(normalizedText)) {
      return [{ type: "heading", text: normalizedText }];
    }

    const blocks: PolicyContentBlock[] = [];
    const paragraphLines: string[] = [];
    const items: string[] = [];
    let activeItem: string | null = null;
    let listStyle: "decimal" | "lower-alpha" | "disc" = "disc";

    const flushParagraph = () => {
      if (paragraphLines.length) {
        blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
        paragraphLines.length = 0;
      }
    };

    const flushList = () => {
      if (activeItem) items.push(activeItem);
      if (items.length) blocks.push({ type: "list", style: listStyle, items: [...items] });
      activeItem = null;
      items.length = 0;
      listStyle = "disc";
    };

    for (const line of lines) {
      if (isPolicyHeading(line)) {
        flushParagraph();
        flushList();
        blocks.push({ type: "heading", text: line });
        continue;
      }

      const marker = /^(\d+[.)]|[a-z]\)|[•●▪◦])\s*/i.exec(line);

      if (marker) {
        if (activeItem) items.push(activeItem);
        activeItem = line.slice(marker[0].length);
        if (items.length === 0) {
          listStyle = /^\d/.test(marker[0])
            ? "decimal"
            : /^[a-z]/i.test(marker[0])
              ? "lower-alpha"
              : "disc";
        }
      } else if (activeItem) {
        activeItem = `${activeItem} ${line}`;
      } else {
        paragraphLines.push(line);
      }
    }

    flushParagraph();
    flushList();

    return blocks;
  });
}

function PolicyDocument({ text }: { text: string }) {
  const blocks = useMemo(() => getPolicyContentBlocks(text), [text]);
  let headingCount = 0;

  return (
    <article
      aria-label="Contenido de la Política de privacidad"
      className="mx-auto max-w-3xl space-y-5"
    >
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const isTitle = headingCount === 0;
          headingCount += 1;

          return isTitle ? (
            <h3
              key={`${block.type}-${index}`}
              className="border-b border-brand/15 pb-4 font-display text-xl font-semibold leading-tight text-forest-deep sm:text-2xl"
            >
              {block.text}
            </h3>
          ) : (
            <h4
              key={`${block.type}-${index}`}
              className="border-l-[3px] border-brand pl-3 font-display text-base font-semibold leading-6 text-forest-deep sm:text-lg"
            >
              {block.text}
            </h4>
          );
        }

        if (block.type === "list") {
          const ListTag = block.style === "disc" ? "ul" : "ol";
          return (
            <ListTag
              key={`${block.type}-${index}`}
              type={block.style === "lower-alpha" ? "a" : "1"}
              className={`ml-5 space-y-2 pl-1 text-sm leading-7 text-ink/80 marker:text-brand sm:text-[0.9375rem] ${
                block.style === "disc" ? "list-disc" : "list-decimal"
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <li key={`${index}-${itemIndex}`} className="pl-1">
                  {item}
                </li>
              ))}
            </ListTag>
          );
        }

        return (
          <p
            key={`${block.type}-${index}`}
            className="text-sm leading-7 text-ink/80 sm:text-[0.9375rem]"
          >
            {block.text}
          </p>
        );
      })}
    </article>
  );
}

function isStoredConsent(value: unknown): value is StoredConsent {
  if (typeof value !== "object" || value === null) return false;

  return (
    "version" in value &&
    value.version === 1 &&
    "privacyPolicyRead" in value &&
    typeof value.privacyPolicyRead === "boolean" &&
    "cookiePreference" in value &&
    (value.cookiePreference === "necessary" || value.cookiePreference === "all") &&
    "acceptedAt" in value &&
    typeof value.acceptedAt === "string" &&
    Number.isFinite(Date.parse(value.acceptedAt)) &&
    (!("expiresAt" in value) || typeof value.expiresAt === "string")
  );
}

export function SiteConsent({ open, onOpenChange }: SiteConsentProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasAcceptedPolicy, setHasAcceptedPolicy] = useState(false);
  const [cookiePreference, setCookiePreference] = useState<CookiePreference>("necessary");
  const [savedCookiePreference, setSavedCookiePreference] = useState<CookiePreference>("necessary");
  const [policyDialogOpen, setPolicyDialogOpen] = useState(false);
  const [policyAcknowledged, setPolicyAcknowledged] = useState(false);
  const [policyText, setPolicyText] = useState<string | null>(null);
  const [policyLoading, setPolicyLoading] = useState(false);
  const [policyError, setPolicyError] = useState<string | null>(null);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);
  const isLoadingPolicyRef = useRef(false);

  useEffect(() => {
    let shouldOpen = true;

    try {
      const savedConsent = window.localStorage.getItem(consentStorageKey);

      if (savedConsent) {
        const parsedConsent: unknown = JSON.parse(savedConsent);
        const validConsent = isStoredConsent(parsedConsent) ? parsedConsent : null;
        const expiry = validConsent
          ? Date.parse(
              validConsent.expiresAt ??
                new Date(Date.parse(validConsent.acceptedAt) + consentDurationMs).toISOString(),
            )
          : Number.NaN;

        if (validConsent && expiry > Date.now()) {
          setHasAcceptedPolicy(validConsent.privacyPolicyRead);
          setCookiePreference(validConsent.cookiePreference);
          setSavedCookiePreference(validConsent.cookiePreference);
          shouldOpen = false;
        }
      }
    } catch (error) {
      console.error("No se pudo leer la preferencia de privacidad del navegador.", error);
      setStorageError(
        "No pudimos leer tu elección guardada. Revisa la configuración del navegador.",
      );
    }

    onOpenChange(shouldOpen);
    setIsInitialized(true);
  }, [onOpenChange]);

  const loadPolicyText = useCallback(() => {
    if (policyText !== null || isLoadingPolicyRef.current) return;

    isLoadingPolicyRef.current = true;
    setPolicyLoading(true);
    setPolicyError(null);

    void getPrivacyPolicyText()
      .then(setPolicyText)
      .catch((error: unknown) => {
        console.error("No se pudo cargar el texto de la Política de privacidad.", error);
        setPolicyError("No pudimos cargar el texto de la política. Inténtalo de nuevo.");
      })
      .finally(() => {
        isLoadingPolicyRef.current = false;
        setPolicyLoading(false);
      });
  }, [policyText]);

  const openPolicyDialog = useCallback(() => {
    setPolicyAcknowledged(hasAcceptedPolicy);
    setPolicyError(null);
    setPolicyDialogOpen(true);
    loadPolicyText();
  }, [hasAcceptedPolicy, loadPolicyText]);

  useEffect(() => {
    if (policyText !== null) return;

    const timeoutId = window.setTimeout(loadPolicyText, 1000);
    return () => window.clearTimeout(timeoutId);
  }, [loadPolicyText, policyText]);

  useEffect(() => {
    const handleOpenPrivacyPolicy = () => openPolicyDialog();
    window.addEventListener(openPrivacyPolicyModalEvent, handleOpenPrivacyPolicy);

    return () => window.removeEventListener(openPrivacyPolicyModalEvent, handleOpenPrivacyPolicy);
  }, [openPolicyDialog]);

  const saveConsent = (preference: CookiePreference, privacyPolicyRead = hasAcceptedPolicy) => {
    const acceptedAt = new Date();
    const savedConsent: StoredConsent = {
      version: 1,
      privacyPolicyRead,
      cookiePreference: preference,
      acceptedAt: acceptedAt.toISOString(),
      expiresAt: new Date(acceptedAt.getTime() + consentDurationMs).toISOString(),
    };

    try {
      window.localStorage.setItem(consentStorageKey, JSON.stringify(savedConsent));
    } catch (error) {
      console.error("No se pudo guardar la preferencia de privacidad del navegador.", error);
      setStorageError(
        "No pudimos guardar tu elección. Habilita el almacenamiento del navegador e inténtalo de nuevo.",
      );
      return false;
    }

    setHasAcceptedPolicy(privacyPolicyRead);
    setCookiePreference(preference);
    setSavedCookiePreference(preference);
    setStorageError(null);
    setCookieSettingsOpen(false);
    onOpenChange(false);
    return true;
  };

  const acceptPolicy = () => {
    if (!policyAcknowledged || policyText === null) return;

    if (saveConsent(cookiePreference, true)) {
      setPolicyDialogOpen(false);
    }
  };

  const closeNotice = () => {
    setCookiePreference(savedCookiePreference);
    onOpenChange(false);
  };

  return (
    <>
      {isInitialized && open && (
        <aside
          role="region"
          aria-label="Aviso de privacidad y cookies"
          className="fixed bottom-4 left-4 z-40 max-h-[min(65vh,30rem)] w-[min(calc(100vw-2rem),24rem)] overflow-y-auto rounded-2xl border border-brand/20 bg-paper p-4 text-ink shadow-[0_20px_60px_-20px_oklch(0.16_0.035_158/0.55)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-500"
        >
          <button
            type="button"
            aria-label="Cerrar anuncio de privacidad y cookies"
            onClick={closeNotice}
            className="absolute right-3 top-3 grid size-10 place-items-center rounded-full text-ink/60 transition-colors hover:bg-sand hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
          <div className="pr-8">
            <h2 className="font-display text-lg font-semibold text-forest-deep">
              Privacidad y cookies
            </h2>
            <p className="mt-1 text-sm leading-5 text-ink/75">
              Usamos almacenamiento técnico para recordar tus preferencias. No cargamos cookies de
              analítica ni publicidad.
            </p>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="button"
              aria-label="Configurar cookies"
              aria-expanded={cookieSettingsOpen}
              onClick={() => setCookieSettingsOpen((isOpen) => !isOpen)}
              className="inline-flex min-h-10 items-center text-left text-sm font-semibold text-brand underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {cookieSettingsOpen ? "Ocultar opciones" : "Configurar"}
            </button>
            <button
              type="button"
              onPointerEnter={loadPolicyText}
              onFocus={loadPolicyText}
              onClick={openPolicyDialog}
              className="inline-flex min-h-10 items-center text-left text-sm font-semibold text-brand underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {hasAcceptedPolicy ? "Leer Política de privacidad" : "Leer y aceptar política"}
            </button>
          </div>

          {cookieSettingsOpen && (
            <fieldset className="mt-3 grid gap-2">
              <legend className="mb-1 text-sm font-semibold text-forest-deep">
                Elige tu preferencia
              </legend>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-brand/15 bg-white p-3 text-sm leading-5 has-[:checked]:border-brand has-[:checked]:ring-1 has-[:checked]:ring-brand">
                <input
                  type="radio"
                  name="cookie-preference"
                  value="necessary"
                  checked={cookiePreference === "necessary"}
                  onChange={() => setCookiePreference("necessary")}
                  className="mt-0.5 size-4 shrink-0 accent-brand"
                />
                <span>
                  <span className="block font-semibold text-forest-deep">Solo necesarias</span>
                  <span className="text-ink/70">
                    Preferencias técnicas y recordar esta elección.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-brand/15 bg-white p-3 text-sm leading-5 has-[:checked]:border-brand has-[:checked]:ring-1 has-[:checked]:ring-brand">
                <input
                  type="radio"
                  name="cookie-preference"
                  value="all"
                  checked={cookiePreference === "all"}
                  onChange={() => setCookiePreference("all")}
                  className="mt-0.5 size-4 shrink-0 accent-brand"
                />
                <span>
                  <span className="block font-semibold text-forest-deep">Aceptar todas</span>
                  <span className="text-ink/70">
                    Actualmente no hay cookies opcionales de analítica o publicidad activas.
                  </span>
                </span>
              </label>
            </fieldset>
          )}

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => saveConsent("all")}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest-deep px-3 text-sm font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={() => saveConsent("necessary")}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand/25 bg-white px-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Rechazar
            </button>
            {cookieSettingsOpen && (
              <button
                type="button"
                onClick={() => saveConsent(cookiePreference)}
                className="col-span-2 inline-flex min-h-11 items-center justify-center rounded-full border border-brand/25 bg-white px-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Guardar preferencias
              </button>
            )}
          </div>

          {storageError && (
            <p role="alert" className="mt-3 text-sm font-medium text-destructive">
              {storageError}
            </p>
          )}
        </aside>
      )}

      <Dialog open={policyDialogOpen} onOpenChange={setPolicyDialogOpen}>
        <DialogContent className="flex max-h-[90vh] max-w-4xl flex-col gap-0 overflow-hidden border-brand/15 bg-paper p-0 text-ink sm:rounded-2xl">
          <div className="shrink-0 border-b border-border px-6 py-5 pr-14 sm:px-8">
            <DialogTitle className="font-display text-2xl font-medium text-forest-deep sm:text-3xl">
              Política de privacidad
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-6 text-ink/70">
              Este documento explica qué datos trata Coocentral, con qué fines y cómo puedes ejercer
              tus derechos. El texto completo está organizado por secciones a continuación.
            </DialogDescription>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 sm:px-8">
            {policyLoading && (
              <p role="status" className="text-sm text-ink/70">
                Cargando el texto completo…
              </p>
            )}
            {policyError && (
              <p role="alert" className="text-sm font-medium text-destructive">
                {policyError}
              </p>
            )}
            {policyText !== null && <PolicyDocument text={policyText} />}
          </div>

          <div className="shrink-0 space-y-4 border-t border-border bg-paper px-6 py-5 sm:px-8">
            <label
              htmlFor="privacy-policy-acknowledgment"
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
            >
              <input
                id="privacy-policy-acknowledgment"
                type="checkbox"
                checked={policyAcknowledged}
                onChange={(event) => setPolicyAcknowledged(event.currentTarget.checked)}
                className="mt-1 size-4 shrink-0 accent-brand"
              />
              <span>Confirmo que leí y acepto la Política de privacidad de Coocentral.</span>
            </label>
            {storageError && (
              <p role="alert" className="text-sm font-medium text-destructive">
                {storageError}
              </p>
            )}
            <button
              type="button"
              disabled={!policyAcknowledged || policyText === null || policyLoading}
              onClick={acceptPolicy}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-forest-deep px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Aceptar y guardar mi elección
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
