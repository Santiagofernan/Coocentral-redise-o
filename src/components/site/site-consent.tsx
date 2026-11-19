import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { openPrivacyPolicyModalEvent } from "@/lib/privacy-policy-modal";

const consentStorageKey = "coocentral-site-consent-v1";

type CookiePreference = "necessary" | "all";

type StoredConsent = {
  version: 1;
  privacyPolicyRead: true;
  cookiePreference: CookiePreference;
  acceptedAt: string;
};

type SiteConsentProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function isStoredConsent(value: unknown): value is StoredConsent {
  if (typeof value !== "object" || value === null) return false;

  return (
    "version" in value &&
    value.version === 1 &&
    "privacyPolicyRead" in value &&
    value.privacyPolicyRead === true &&
    "cookiePreference" in value &&
    (value.cookiePreference === "necessary" || value.cookiePreference === "all") &&
    "acceptedAt" in value &&
    typeof value.acceptedAt === "string"
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

  useEffect(() => {
    let shouldOpen = true;

    try {
      const savedConsent = window.localStorage.getItem(consentStorageKey);

      if (savedConsent) {
        const parsedConsent: unknown = JSON.parse(savedConsent);

        if (isStoredConsent(parsedConsent)) {
          setHasAcceptedPolicy(true);
          setCookiePreference(parsedConsent.cookiePreference);
          setSavedCookiePreference(parsedConsent.cookiePreference);
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

  const openPolicyDialog = useCallback(() => {
    setPolicyAcknowledged(hasAcceptedPolicy);
    setPolicyError(null);
    setPolicyDialogOpen(true);
  }, [hasAcceptedPolicy]);

  useEffect(() => {
    const handleOpenPrivacyPolicy = () => openPolicyDialog();
    window.addEventListener(openPrivacyPolicyModalEvent, handleOpenPrivacyPolicy);

    return () => window.removeEventListener(openPrivacyPolicyModalEvent, handleOpenPrivacyPolicy);
  }, [openPolicyDialog]);

  useEffect(() => {
    if (!policyDialogOpen || policyText !== null) return;

    let isActive = true;
    setPolicyLoading(true);

    void import("@/content/privacy-policy.txt?raw")
      .then(({ default: text }) => {
        if (isActive) setPolicyText(text);
      })
      .catch((error: unknown) => {
        console.error("No se pudo cargar el texto de la Política de privacidad.", error);
        if (isActive)
          setPolicyError("No pudimos cargar el texto de la política. Inténtalo de nuevo.");
      })
      .finally(() => {
        if (isActive) setPolicyLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [policyDialogOpen, policyText]);

  const saveConsent = (preference: CookiePreference) => {
    const savedConsent: StoredConsent = {
      version: 1,
      privacyPolicyRead: true,
      cookiePreference: preference,
      acceptedAt: new Date().toISOString(),
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

    setHasAcceptedPolicy(true);
    setCookiePreference(preference);
    setSavedCookiePreference(preference);
    setStorageError(null);
    onOpenChange(false);
    return true;
  };

  const acceptPolicy = () => {
    if (!policyAcknowledged || policyText === null) return;

    if (saveConsent(cookiePreference)) {
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
          className="fixed bottom-4 left-4 z-40 max-h-[min(65vh,30rem)] w-[min(calc(100vw-2rem),24rem)] overflow-y-auto rounded-2xl border border-brand/20 bg-paper p-4 text-ink shadow-[0_20px_60px_-20px_oklch(0.16_0.035_158/0.55)]"
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
              aria-expanded={cookieSettingsOpen}
              onClick={() => setCookieSettingsOpen((isOpen) => !isOpen)}
              className="inline-flex min-h-10 items-center text-left text-sm font-semibold text-brand underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {cookieSettingsOpen ? "Ocultar opciones" : "Configurar cookies"}
            </button>
            <button
              type="button"
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
              {hasAcceptedPolicy && (
                <button
                  type="button"
                  onClick={() => saveConsent(cookiePreference)}
                  className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-forest-deep px-4 text-sm font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Guardar preferencia
                </button>
              )}
            </fieldset>
          )}

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
              Política de tratamiento de datos personales de Coocentral.
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
            {policyText !== null && (
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-ink/80">
                {policyText}
              </pre>
            )}
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
