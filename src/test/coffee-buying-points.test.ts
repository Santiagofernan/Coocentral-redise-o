import { describe, expect, it } from "vitest";

import { coffeeBuyingPoints, getDistanceInKilometers } from "@/content/coffee-buying-points";

describe("coffee buying points", () => {
  it("includes each location from the institutional coffee-points map", () => {
    expect(coffeeBuyingPoints).toHaveLength(15);
    expect(new Set(coffeeBuyingPoints.map((point) => point.id)).size).toBe(15);
    expect(coffeeBuyingPoints.map((point) => point.municipality)).toContain("Garzón");
    expect(coffeeBuyingPoints.map((point) => point.municipality)).toContain("Tarqui");
  });

  it("calculates zero distance for the same coordinates and a positive distance otherwise", () => {
    const sedePrincipal = coffeeBuyingPoints.find((point) => point.id === "sede-principal");
    const parqueIndustrial = coffeeBuyingPoints.find((point) => point.id === "parque-industrial");

    expect(sedePrincipal).toBeDefined();
    expect(parqueIndustrial).toBeDefined();
    if (!sedePrincipal || !parqueIndustrial) return;

    expect(getDistanceInKilometers(sedePrincipal, sedePrincipal)).toBe(0);
    expect(getDistanceInKilometers(sedePrincipal, parqueIndustrial)).toBeGreaterThan(0);
  });
});
