import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AppPromotion } from "@/components/site/app-promotion";

let setPromotionVisibility: ((isVisible: boolean) => void) | undefined;

class MockIntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [0];

  constructor(private readonly callback: IntersectionObserverCallback) {}

  observe(target: Element) {
    setPromotionVisibility = (isIntersecting) => {
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
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
}

describe("App promotion carousel", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    setPromotionVisibility = undefined;
  });

  it("pauses while offscreen and advances only while visible", () => {
    vi.useFakeTimers();
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    render(<AppPromotion />);

    expect(
      screen.getByRole("img", { name: "Captura 1 de 8 de la aplicación Coocentral" }),
    ).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(13_000));
    expect(
      screen.getByRole("img", { name: "Captura 1 de 8 de la aplicación Coocentral" }),
    ).toBeInTheDocument();

    act(() => setPromotionVisibility?.(true));
    act(() => vi.advanceTimersByTime(6500));
    expect(
      screen.getByRole("img", { name: "Captura 2 de 8 de la aplicación Coocentral" }),
    ).toBeInTheDocument();

    act(() => setPromotionVisibility?.(false));
    act(() => vi.advanceTimersByTime(13_000));
    expect(
      screen.getByRole("img", { name: "Captura 2 de 8 de la aplicación Coocentral" }),
    ).toBeInTheDocument();
  });
});
