import { describe, expect, it } from "vitest";

import { getStoreStatus, type StoreWeeklySchedule } from "@/lib/store-schedule";

const rosarioSchedule: StoreWeeklySchedule = {
  0: [[780, 1140]],
  1: [[420, 1200]],
  2: [[420, 1200]],
  3: [[420, 1200]],
  4: [[420, 1200]],
  5: [[420, 1200]],
  6: [[420, 1200]],
};

const guadalupeSchedule: StoreWeeklySchedule = {
  2: [
    [480, 660],
    [960, 1260],
  ],
  3: [
    [480, 660],
    [960, 1260],
  ],
  4: [
    [480, 660],
    [900, 1260],
  ],
  5: [
    [480, 660],
    [900, 1260],
  ],
  6: [
    [480, 660],
    [900, 1260],
  ],
  0: [
    [480, 660],
    [900, 1260],
  ],
};

const hotelKahveSchedule: StoreWeeklySchedule = {
  0: [[480, 720]],
  1: [[360, 1200]],
  2: [[360, 1200]],
  3: [[360, 1200]],
  4: [[360, 1200]],
  5: [[360, 1200]],
  6: [[360, 1200]],
};

describe("getStoreStatus", () => {
  it("checks Rosario weekday and Sunday hours", () => {
    expect(getStoreStatus(new Date("2026-10-19T12:30:00.000Z"), rosarioSchedule)).toBe("open");
    expect(getStoreStatus(new Date("2026-10-18T18:00:00.000Z"), rosarioSchedule)).toBe("open");
    expect(getStoreStatus(new Date("2026-10-18T16:00:00.000Z"), rosarioSchedule)).toBe("closed");
  });

  it("marks Guadalupe closed Monday and in break between daily periods", () => {
    expect(getStoreStatus(new Date("2026-10-19T15:00:00.000Z"), guadalupeSchedule)).toBe("closed");
    expect(getStoreStatus(new Date("2026-10-20T17:00:00.000Z"), guadalupeSchedule)).toBe("break");
    expect(getStoreStatus(new Date("2026-10-20T22:00:00.000Z"), guadalupeSchedule)).toBe("open");
  });

  it("checks Hotel Kahve weekday and Sunday hours", () => {
    expect(getStoreStatus(new Date("2026-10-19T11:30:00.000Z"), hotelKahveSchedule)).toBe("open");
    expect(getStoreStatus(new Date("2026-10-18T14:00:00.000Z"), hotelKahveSchedule)).toBe("open");
    expect(getStoreStatus(new Date("2026-10-18T18:00:00.000Z"), hotelKahveSchedule)).toBe("closed");
  });
});
