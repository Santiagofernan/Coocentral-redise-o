import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SiteConsent } from "@/components/site/site-consent";
import { requestPrivacyPolicyModal } from "@/lib/privacy-policy-modal";

const consentStorageKey = "coocentral-site-consent-v1";

function ConsentHarness() {
  const [open, setOpen] = useState(false);

  return <SiteConsent open={open} onOpenChange={setOpen} />;
}

describe("Site consent", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("keeps the page interactive and saves consent after reading the full policy", async () => {
    const backgroundAction = vi.fn();
    render(
      <>
        <button type="button" onClick={backgroundAction}>
          Acción de fondo
        </button>
        <ConsentHarness />
      </>,
    );

    const notice = await screen.findByRole("region", {
      name: "Aviso de privacidad y cookies",
    });
    expect(notice).toBeVisible();
    expect(notice).toHaveClass(
      "motion-safe:animate-in",
      "motion-safe:fade-in-0",
      "motion-safe:slide-in-from-bottom-4",
      "motion-safe:duration-500",
    );
    fireEvent.click(screen.getByRole("button", { name: "Acción de fondo" }));
    expect(backgroundAction).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByRole("button", { name: "Configurar cookies" }));
    fireEvent.click(screen.getByRole("radio", { name: /Aceptar todas/ }));
    fireEvent.click(screen.getByRole("button", { name: "Leer y aceptar política" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    const policyDocument = await screen.findByRole("article", {
      name: "Contenido de la Política de privacidad",
    });
    expect(policyDocument.textContent?.length).toBeGreaterThan(35_000);
    expect(policyDocument.textContent).not.toContain("Tabla de contenido");
    expect(policyDocument.textContent).not.toContain(
      "POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES 3",
    );
    expect(screen.getByRole("heading", { level: 4, name: "OBJETIVO" })).toBeInTheDocument();
    expect(policyDocument.textContent).toContain("ENTRADA EN VIGENCIA");

    const acceptButton = screen.getByRole("button", { name: "Aceptar y guardar mi elección" });
    expect(acceptButton).toBeDisabled();
    fireEvent.click(screen.getByRole("checkbox", { name: /Confirmo que leí y acepto/ }));
    expect(acceptButton).toBeEnabled();
    fireEvent.click(acceptButton);

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() =>
      expect(screen.queryByRole("region", { name: "Aviso de privacidad y cookies" })).toBeNull(),
    );
    expect(JSON.parse(window.localStorage.getItem(consentStorageKey) ?? "")).toMatchObject({
      version: 1,
      privacyPolicyRead: true,
      cookiePreference: "all",
    });
  });

  it("saves a rejection immediately and expires the choice after 30 days", async () => {
    const onOpenChange = vi.fn();
    render(<SiteConsent open={true} onOpenChange={onOpenChange} />);

    fireEvent.click(await screen.findByRole("button", { name: "Rechazar" }));

    const savedConsent = JSON.parse(window.localStorage.getItem(consentStorageKey) ?? "");
    expect(savedConsent).toMatchObject({
      version: 1,
      privacyPolicyRead: false,
      cookiePreference: "necessary",
    });
    expect(Date.parse(savedConsent.expiresAt) - Date.parse(savedConsent.acceptedAt)).toBe(
      30 * 24 * 60 * 60 * 1000,
    );
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it("shows the notice again after a saved choice expires", async () => {
    const expiresAt = new Date(Date.now() - 60_000);
    const acceptedAt = new Date(expiresAt.getTime() - 30 * 24 * 60 * 60 * 1000);
    window.localStorage.setItem(
      consentStorageKey,
      JSON.stringify({
        version: 1,
        privacyPolicyRead: false,
        cookiePreference: "necessary",
        acceptedAt: acceptedAt.toISOString(),
        expiresAt: expiresAt.toISOString(),
      }),
    );
    render(<ConsentHarness />);
    expect(
      await screen.findByRole("region", { name: "Aviso de privacidad y cookies" }),
    ).toBeVisible();
  });

  it("accepts all cookies immediately without requiring policy acceptance", async () => {
    render(<ConsentHarness />);

    expect(await screen.findByRole("button", { name: "Configurar cookies" })).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Aceptar todas" }));

    expect(JSON.parse(window.localStorage.getItem(consentStorageKey) ?? "")).toMatchObject({
      privacyPolicyRead: false,
      cookiePreference: "all",
    });
    await waitFor(() =>
      expect(screen.queryByRole("region", { name: "Aviso de privacidad y cookies" })).toBeNull(),
    );
  });

  it("opens the privacy policy modal from an external site link after consent is stored", async () => {
    const acceptedAt = new Date();
    window.localStorage.setItem(
      consentStorageKey,
      JSON.stringify({
        version: 1,
        privacyPolicyRead: true,
        cookiePreference: "necessary",
        acceptedAt: acceptedAt.toISOString(),
        expiresAt: new Date(acceptedAt.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      }),
    );
    const onOpenChange = vi.fn();

    render(<SiteConsent open={false} onOpenChange={onOpenChange} />);
    await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(false));
    expect(screen.queryByRole("region", { name: "Aviso de privacidad y cookies" })).toBeNull();

    requestPrivacyPolicyModal();

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(
      await screen.findByRole("checkbox", { name: /Confirmo que leí y acepto/ }),
    ).toBeChecked();
  });
});
