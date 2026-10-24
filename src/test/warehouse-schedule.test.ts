import { describe, expect, it } from "vitest";

import { getWarehouseStatus } from "@/lib/warehouse-schedule";

describe("getWarehouseStatus", () => {
  it("uses the warehouse schedule from Monday through Thursday", () => {
    expect(getWarehouseStatus(new Date("2026-10-19T12:30:00.000Z"))).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-19T19:00:00.000Z"))).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-19T21:00:00.000Z"))).toBe("closed");
  });

  it("uses the shorter hardware-store hours and lunch break", () => {
    expect(getWarehouseStatus(new Date("2026-10-19T12:30:00.000Z"), "hardware")).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-19T16:59:00.000Z"), "hardware")).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-19T17:00:00.000Z"), "hardware")).toBe("break");
    expect(getWarehouseStatus(new Date("2026-10-19T19:00:00.000Z"), "hardware")).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-19T22:00:00.000Z"), "hardware")).toBe("closed");
  });

  it("uses the special Friday warehouse schedule", () => {
    expect(getWarehouseStatus(new Date("2026-10-23T12:00:00.000Z"))).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-23T21:00:00.000Z"))).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-23T21:30:00.000Z"))).toBe("closed");
  });

  it("uses Saturday hours and marks Sunday closed", () => {
    expect(getWarehouseStatus(new Date("2026-10-24T12:00:00.000Z"))).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-24T18:00:00.000Z"))).toBe("closed");
    expect(getWarehouseStatus(new Date("2026-10-24T12:30:00.000Z"), "hardware")).toBe("open");
    expect(getWarehouseStatus(new Date("2026-10-24T17:00:00.000Z"), "hardware")).toBe("closed");
    expect(getWarehouseStatus(new Date("2026-10-18T15:00:00.000Z"))).toBe("closed");
  });
});
