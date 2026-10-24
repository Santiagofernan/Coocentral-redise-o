import { describe, expect, it } from "vitest";

import { allMunicipalities, warehouseLocations } from "@/content/coocentral";

describe("warehouse locations", () => {
  it("includes all 20 records across the confirmed 11 municipalities", () => {
    expect(warehouseLocations).toHaveLength(20);
    expect([...new Set(warehouseLocations.map(({ municipality }) => municipality))].sort()).toEqual(
      [...allMunicipalities].sort(),
    );
  });

  it("uses the hardware-store schedule and supplied contact for Ferretería La 14", () => {
    expect(warehouseLocations.find(({ type }) => type === "Ferretería")).toMatchObject({
      municipality: "Garzón",
      name: "Ferretería La 14",
      phone: "3202533976",
      hours: [
        "Lunes a viernes · 7:30 a. m.–12:00 p. m. y 2:00–5:00 p. m.",
        "Sábado · 7:30 a. m.–12:00 p. m.",
      ],
    });
  });
});
