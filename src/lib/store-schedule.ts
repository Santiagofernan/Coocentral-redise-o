export type StoreTimeInterval = readonly [opensAt: number, closesAt: number];
export type StoreWeeklySchedule = Readonly<
  Partial<Record<0 | 1 | 2 | 3 | 4 | 5 | 6, readonly StoreTimeInterval[]>>
>;
export type StoreStatus = "open" | "break" | "closed";

export function getStoreStatus(date: Date, schedule: StoreWeeklySchedule): StoreStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);

  if (!weekday || !Number.isInteger(hour) || !Number.isInteger(minute)) {
    throw new Error("No se pudo determinar el horario local de la tienda.");
  }

  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  const minutesToday = hour * 60 + minute;
  const intervals = schedule[day as keyof StoreWeeklySchedule] ?? [];
  const isOpen = intervals.some(
    ([opensAt, closesAt]) => minutesToday >= opensAt && minutesToday < closesAt,
  );
  const isOnBreak = intervals.some(([, closesAt], index) => {
    const nextInterval = intervals[index + 1];
    return nextInterval !== undefined && minutesToday >= closesAt && minutesToday < nextInterval[0];
  });

  return isOpen ? "open" : isOnBreak ? "break" : "closed";
}
