import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { WhatsAppFloatingButton } from "@/components/site/whatsapp-floating-button";

describe("WhatsApp floating button", () => {
  it("offers a control to scroll back to the top", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    render(<WhatsAppFloatingButton />);

    fireEvent.click(screen.getByRole("button", { name: "Volver al inicio de la página" }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    scrollTo.mockRestore();
  });

  it("hides the back-to-top control while the WhatsApp panel is open", () => {
    render(<WhatsAppFloatingButton />);

    fireEvent.click(screen.getByRole("button", { name: "Abrir chat de WhatsApp" }));
    expect(screen.queryByRole("button", { name: "Volver al inicio de la página" })).toBeNull();

    fireEvent.click(screen.getAllByRole("button", { name: "Cerrar chat de WhatsApp" })[0]);
    expect(
      screen.getByRole("button", { name: "Volver al inicio de la página" }),
    ).toBeInTheDocument();
  });

  it("offers phone calls for reception and WhatsApp for credit contacts", () => {
    render(<WhatsAppFloatingButton />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir chat de WhatsApp" }));

    const receptionLinks = [
      screen.getByRole("link", { name: "Llamar a Recepción: 318 612 8444" }),
      screen.getByRole("link", { name: "Llamar a Recepción: 311 538 6395" }),
    ];
    const creditLink = screen.getByRole("link", { name: /Crédito y cartera.*317 433 4039/ });

    expect(receptionLinks[0]).toHaveAttribute("href", "tel:3186128444");
    expect(receptionLinks[1]).toHaveAttribute("href", "tel:3115386395");
    expect(creditLink).toHaveAttribute("href", expect.stringContaining("wa.me/573174334039"));
    expect(creditLink).toHaveAttribute("target", "_blank");
  });
});
