import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FarmerCenter } from "@/components/site/farmer-center";
import { benefits } from "@/content/coocentral";

describe("Farmer center benefits", () => {
  it("opens each benefit card in an animated dialog with its information", () => {
    render(<FarmerCenter />);

    const benefitButtons = screen.getAllByRole("button", { name: /Ver detalles/ });
    expect(benefitButtons).toHaveLength(benefits.length);
    expect(screen.getAllByText("Espacio para imagen", { exact: true })).toHaveLength(
      benefits.filter(({ imageSrc }) => !imageSrc).length,
    );

    fireEvent.click(screen.getByRole("button", { name: /Educación superior.*Ver detalles/ }));

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("data-state", "open");
    expect(dialog).toHaveClass("duration-100");
    expect(dialog).toHaveClass("data-[state=open]:animate-in");
    expect(screen.getByRole("heading", { name: "Educación superior" })).toBeInTheDocument();
    expect(
      within(dialog).getByText(
        "Hasta 2 SMMLV por semestre con primas de Comercio Justo: más de $2.100 millones y +350 estudiantes.",
      ),
    ).toBeInTheDocument();
  });

  it("closes a benefit dialog and returns focus to the card that opened it", async () => {
    render(<FarmerCenter />);

    const benefitButton = screen.getByRole("button", {
      name: /Educación superior.*Ver detalles/,
    });
    fireEvent.click(benefitButton);

    const dialog = screen.getByRole("dialog");
    fireEvent.click(within(dialog).getByRole("button", { name: "Close" }));

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(benefitButton).toHaveFocus();
  });

  it("cleans up an open benefit dialog when navigating away from the view", () => {
    const { rerender } = render(<FarmerCenter />);
    fireEvent.click(screen.getByRole("button", { name: /Educación superior.*Ver detalles/ }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    rerender(<main>Another page</main>);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows current program rules with links to their source documents", () => {
    render(<FarmerCenter />);

    const card = screen.getByRole("button", {
      name: /Incentivo Rural Sostenible \(IRS\).*Ver detalles/,
    });
    expect(card).toHaveTextContent("Apoyo para inversiones de sostenibilidad en la finca.");
    expect(card).not.toHaveTextContent("Rainforest Alliance");

    fireEvent.click(card);

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByText(/hasta \$1\.500\.000.*auditoría Rainforest Alliance/i),
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole("link", { name: /Consultar reglamento del Incentivo Rural/i }),
    ).toHaveAttribute(
      "href",
      "/documentos/Servicios_asociados/Acuerdo No. 023 del 16 de Febrero de 2023 Reglamento del Programa Incentivo Rural Sostenible IRS_1793888507544_dc48cada.pdf",
    );
  });

  it("presents the education figures as two separate metrics", () => {
    render(<FarmerCenter />);

    expect(screen.getByText("+350")).toBeInTheDocument();
    expect(screen.getByText("estudiantes en educación superior")).toBeInTheDocument();
    expect(screen.getByText("$2.100 millones")).toBeInTheDocument();
    expect(screen.getByText("movilizados para educación")).toBeInTheDocument();
  });
});
