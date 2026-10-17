import { describe, expect, it } from "vitest";

import { getCoocentralAnniversary, getCoocentralCalendarYear } from "@/lib/coocentral-anniversary";

describe("getCoocentralAnniversary", () => {
  it("keeps the previous anniversary until November 3 in Colombia", () => {
    expect(getCoocentralAnniversary(new Date("2026-11-03T04:59:59.999Z"))).toEqual({
      year: 2025,
      count: 50,
    });
  });

  it("advances the anniversary on November 3 in Colombia", () => {
    expect(getCoocentralAnniversary(new Date("2026-11-03T05:00:00.000Z"))).toEqual({
      year: 2026,
      count: 51,
    });
  });

  it("continues advancing automatically in later years", () => {
    expect(getCoocentralAnniversary(new Date("2027-11-03T05:00:00.000Z"))).toEqual({
      year: 2027,
      count: 52,
    });
  });

  it("returns the current calendar year in Colombia for the history range", () => {
    expect(getCoocentralCalendarYear(new Date("2026-10-16T12:00:00.000Z"))).toBe(2026);
  });
});
