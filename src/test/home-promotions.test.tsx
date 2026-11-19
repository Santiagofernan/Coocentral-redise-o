import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AppPromotion } from "@/components/site/app-promotion";
import { AtlasPromotion } from "@/components/site/atlas-promotion";

let setAtlasVisibility: ((isVisible: boolean) => void) | undefined;

class MockAtlasIntersectionObserver {
  constructor(private readonly callback: IntersectionObserverCallback) {}

  observe(target: Element) {
    setAtlasVisibility = (isIntersecting) => {
      const rect = target.getBoundingClientRect();
      const entry: IntersectionObserverEntry = {
        boundingClientRect: rect,
        intersectionRatio: isIntersecting ? 1 : 0,
        intersectionRect: rect,
        isIntersecting,
        rootBounds: null,
        target,
        time: performance.now(),
      };
      this.callback([entry], this as IntersectionObserver);
    };
  }

  disconnect() {}
}

describe("Home promotions", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    setAtlasVisibility = undefined;
  });

  it("shows Atlas before the Coocentral app promotion without opening a modal", () => {
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe() {}
        disconnect() {}
      },
    );

    render(
      <>
        <AtlasPromotion />
        <AppPromotion />
      </>,
    );

    expect(
      screen.getByRole("heading", { name: "Atlas, inteligencia territorial" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Atlas, inteligencia territorial" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Panel general del aplicativo Atlas con indicadores de productores, fincas y hectáreas",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("figure", { name: "Capturas del aplicativo Atlas" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Descarga la Nueva App Coocentral.")).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    const headings = screen.getAllByRole("heading");
    const atlasHeadingIndex = headings.indexOf(
      screen.getByRole("heading", { name: "Atlas, inteligencia territorial" }),
    );
    const appHeadingIndex = headings.findIndex((heading) =>
      heading.textContent?.includes("Descarga la Nueva App Coocentral."),
    );
    expect(atlasHeadingIndex).toBeLessThan(appHeadingIndex);
  });

  it("rotates Atlas screenshots while hovered and pauses while offscreen", () => {
    vi.useFakeTimers();
    vi.stubGlobal("IntersectionObserver", MockAtlasIntersectionObserver);

    render(<AtlasPromotion />);

    act(() => setAtlasVisibility?.(true));
    fireEvent.mouseEnter(screen.getByRole("figure", { name: "Capturas del aplicativo Atlas" }));
    expect(
      screen.getByRole("img", {
        name: "Panel general del aplicativo Atlas con indicadores de productores, fincas y hectáreas",
      }),
    ).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(4999));
    expect(
      screen.getByRole("img", {
        name: "Panel general del aplicativo Atlas con indicadores de productores, fincas y hectáreas",
      }),
    ).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(1));
    expect(
      screen.getByRole("img", { name: "Vista del mapa de productores en Atlas" }),
    ).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(5000));
    expect(
      screen.getByRole("img", { name: "Vista detallada de una finca en el mapa de Atlas" }),
    ).toBeInTheDocument();

    act(() => setAtlasVisibility?.(false));
    fireEvent.click(screen.getByRole("button", { name: "Mostrar Panel general en Atlas" }));
    expect(
      screen.getByRole("img", {
        name: "Panel general del aplicativo Atlas con indicadores de productores, fincas y hectáreas",
      }),
    ).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(13_000));
    expect(
      screen.getByRole("img", {
        name: "Panel general del aplicativo Atlas con indicadores de productores, fincas y hectáreas",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Siguiente imagen de Atlas" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Imagen anterior de Atlas" }),
    ).not.toBeInTheDocument();
  });
});
