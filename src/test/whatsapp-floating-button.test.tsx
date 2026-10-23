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

  it("offers reception and credit contacts through WhatsApp", () => {
    render(<WhatsAppFloatingButton />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir chat de WhatsApp" }));

    const receptionLink = screen.getByRole("link", {
      name: /Recepción.*320 807 5228/,
    });
    const creditLink = screen.getByRole("link", { name: /Crédito y cartera.*317 433 4039/ });

    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(receptionLink).toHaveAttribute("href", expect.stringContaining("wa.me/573208075228"));
    expect(creditLink).toHaveAttribute("href", expect.stringContaining("wa.me/573174334039"));
    expect(receptionLink).toHaveAttribute("target", "_blank");
    expect(creditLink).toHaveAttribute("target", "_blank");
    expect(screen.queryByText(/311 538 6395|318 612 8444/)).toBeNull();
  });
});
