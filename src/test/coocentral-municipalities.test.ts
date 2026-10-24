import { describe, expect, it } from "vitest";

import {
  allMunicipalities,
  coreMunicipalities,
  extendedMunicipalities,
  impactStats,
} from "@/content/coocentral";

describe("Coocentral municipality coverage", () => {
  it("matches the confirmed list of 11 municipalities without duplicates", () => {
    expect(allMunicipalities).toEqual([
      "Agrado",
      "Pital",
      "Tarqui",
      "Suaza",
      "Guadalupe",
      "La Plata",
      "Acevedo",
      "Pitalito",
      "Timaná",
      "Garzón",
      "Gigante",
    ]);
    expect(new Set(allMunicipalities).size).toBe(11);
  });

  it("keeps the core and extended groups consistent with the full list", () => {
    expect([...coreMunicipalities, ...extendedMunicipalities].sort()).toEqual(
      [...allMunicipalities].sort(),
    );
    expect(coreMunicipalities).toHaveLength(7);
    expect(extendedMunicipalities).toHaveLength(4);
    expect(
      impactStats.find(({ label }) => label === "Municipios en la zona de influencia")?.value,
    ).toBe(allMunicipalities.length);
  });
});
