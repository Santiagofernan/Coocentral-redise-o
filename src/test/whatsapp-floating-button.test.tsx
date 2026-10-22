import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WhatsAppFloatingButton } from "@/components/site/whatsapp-floating-button";

describe("WhatsApp floating button", () => {
  it("offers WhatsApp access to reception and credit contacts", () => {
    render(<WhatsAppFloatingButton />);
    fireEvent.click(screen.getByRole("button", { name: "Abrir chat de WhatsApp" }));

    const links = screen.getAllByRole("link").filter((link) => link.hasAttribute("target"));

    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", expect.stringContaining("wa.me/573186128444"));
    expect(links[0]).toHaveTextContent("Recepción");
    expect(links[0]).toHaveTextContent("318 612 8444");
    expect(links[1]).toHaveAttribute("href", expect.stringContaining("wa.me/573115386395"));
    expect(links[1]).toHaveTextContent("Recepción");
    expect(links[1]).toHaveTextContent("311 538 6395");
    expect(links[2]).toHaveAttribute("href", expect.stringContaining("wa.me/573174334039"));
    expect(links[2]).toHaveTextContent("Crédito y cartera");
    expect(links[2]).toHaveTextContent("317 433 4039");
  });
});
