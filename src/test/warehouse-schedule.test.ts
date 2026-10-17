import { describe, expect, it } from "vitest";

import { getWarehouseStatus } from "@/lib/warehouse-schedule";

describe("getWarehouseStatus", () => {
  it("marks weekdays as open during the morning and afternoon schedules", () => {
    expect(getWarehouseStatus(new Date("2026-10-19T12:30:00.000Z"))).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-19T19:30:00.000Z"))).toBe("open");
  });

  it("marks the weekday lunch interval as a break", () => {
    expect(getWarehouseStatus(new Date("2026-10-19T18:00:00.000Z"))).toBe("break");
  });

  it("marks weekdays closed outside business hours", () => {
    expect(getWarehouseStatus(new Date("2026-10-19T11:00:00.000Z"))).toBe("closed");
    expect(getWarehouseStatus(new Date("2026-10-19T21:00:00.000Z"))).toBe("closed");
  });

  it("uses the Saturday schedule and marks Sunday closed", () => {
    expect(getWarehouseStatus(new Date("2026-10-17T12:30:00.000Z"))).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-17T19:00:00.000Z"))).toBe("closed");
    expect(getWarehouseStatus(new Date("2026-10-18T15:00:00.000Z"))).toBe("closed");
  });
});
