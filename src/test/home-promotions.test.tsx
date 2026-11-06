import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppPromotion } from "@/components/site/app-promotion";
import { AtlasPromotion } from "@/components/site/atlas-promotion";

describe("Home promotions", () => {
  it("shows Atlas before the Coocentral app promotion without opening a modal", () => {
    render(
      <>
        <AtlasPromotion />
        <AppPromotion />
      </>,
    );

    expect(screen.getByRole("heading", { name: "Atlas" })).toBeInTheDocument();
    expect(
      screen.getByLabelText("Espacio reservado para información de Atlas"),
    ).toBeInTheDocument();
    expect(screen.getByText("Descarga la Nueva App Coocentral.")).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    const headings = screen.getAllByRole("heading");
    const atlasHeadingIndex = headings.findIndex((heading) => heading.textContent === "Atlas");
    const appHeadingIndex = headings.findIndex((heading) =>
      heading.textContent?.includes("Descarga la Nueva App Coocentral."),
    );
    expect(atlasHeadingIndex).toBeLessThan(appHeadingIndex);
  });
});
