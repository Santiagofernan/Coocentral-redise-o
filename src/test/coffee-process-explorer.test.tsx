import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CoffeeProcessExplorer } from "@/components/site/coffee-process-explorer";

describe("Coffee process explorer", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("preloads a stage illustration on hover and eagerly loads the selected stage", () => {
    const preloadedSources: string[] = [];

    vi.stubGlobal(
      "Image",
      class {
        set src(value: string) {
          preloadedSources.push(value);
        }
      },
    );

    render(<CoffeeProcessExplorer />);

    expect(
      screen.getByRole("img", { name: "Ilustración: El cuidado empieza en la finca" }),
    ).toHaveAttribute("loading", "lazy");

    const stageButton = screen.getByRole("button", { name: /ETAPA 02.*Recolección/ });
    fireEvent.pointerEnter(stageButton);

    expect(preloadedSources).toHaveLength(1);
    expect(preloadedSources[0]).toContain("etapa-02");

    fireEvent.click(stageButton);

    expect(stageButton).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("img", { name: "Ilustración: Una cosecha en su punto" }),
    ).toHaveAttribute("loading", "eager");
  });
});
