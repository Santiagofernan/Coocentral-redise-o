export type WarehouseStatus = "open" | "break" | "closed";

export function getWarehouseStatus(date: Date): WarehouseStatus {
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
    throw new Error("No se pudo determinar el horario local de los almacenes.");
  }

  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  const minutesToday = hour * 60 + minute;
  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday
    ? (minutesToday >= 450 && minutesToday < 750) || (minutesToday >= 840 && minutesToday < 960)
    : day === 6 && minutesToday >= 420 && minutesToday < 780;
  const isOnBreak = isWeekday && minutesToday >= 750 && minutesToday < 840;

  return isOpen ? "open" : isOnBreak ? "break" : "closed";
}
