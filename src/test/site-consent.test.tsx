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

    expect(
      await screen.findByRole("region", { name: "Aviso de privacidad y cookies" }),
    ).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Acción de fondo" }));
    expect(backgroundAction).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByRole("button", { name: "Configurar cookies" }));
    fireEvent.click(screen.getByRole("radio", { name: /Aceptar todas/ }));
    fireEvent.click(screen.getByRole("button", { name: "Leer y aceptar política" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    const policyText = await screen.findByText(/Tabla de contenido/);
    expect(policyText.textContent?.length).toBeGreaterThan(38_000);
    expect(policyText.textContent).toContain("ENTRADA EN VIGENCIA");

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

  it("opens the privacy policy modal from an external site link after consent is stored", async () => {
    window.localStorage.setItem(
      consentStorageKey,
      JSON.stringify({
        version: 1,
        privacyPolicyRead: true,
        cookiePreference: "necessary",
        acceptedAt: "2026-11-19T00:00:00.000Z",
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
