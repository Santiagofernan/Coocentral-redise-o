import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { WhatsAppFloatingButton } from "@/components/site/whatsapp-floating-button";

describe("WhatsApp floating button", () => {
  it("shows the top control after scrolling and hides it again at the top", () => {
    const scrollY = vi.spyOn(window, "scrollY", "get").mockReturnValue(0);
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    render(<WhatsAppFloatingButton />);

    expect(screen.queryByRole("button", { name: "Volver al inicio de la página" })).toBeNull();

    scrollY.mockReturnValue(400);
    fireEvent.scroll(window);
    expect(
      screen.getByRole("button", { name: "Volver al inicio de la página" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Volver al inicio de la página" }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });

    scrollY.mockReturnValue(0);
    fireEvent.scroll(window);
    expect(screen.queryByRole("button", { name: "Volver al inicio de la página" })).toBeNull();

    scrollTo.mockRestore();
    scrollY.mockRestore();
  });

  it("hides the back-to-top control while the WhatsApp panel is open", () => {
    const scrollY = vi.spyOn(window, "scrollY", "get").mockReturnValue(400);
    render(<WhatsAppFloatingButton />);

    fireEvent.click(screen.getByRole("button", { name: "Abrir chat de WhatsApp" }));
    const panel = screen.getByRole("region", { name: "Coocentral" });
    expect(panel).toHaveClass("duration-400");
    expect(panel).toHaveClass("[transform:translateY(0)]");
    expect(panel).toHaveClass("opacity-100");
    expect(screen.queryByRole("button", { name: "Volver al inicio de la página" })).toBeNull();

    fireEvent.click(screen.getAllByRole("button", { name: "Cerrar chat de WhatsApp" })[0]);
    expect(panel).toHaveClass("[transform:translateY(50px)]");
    expect(panel).toHaveClass("opacity-0");
    expect(
      screen.getByRole("button", { name: "Volver al inicio de la página" }),
    ).toBeInTheDocument();
    scrollY.mockRestore();
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
