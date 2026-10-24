export type WarehouseStatus = "open" | "break" | "closed";
export type WarehouseSchedule = "warehouse" | "hardware";

type DaySchedule = {
  morningStart: number;
  morningEnd: number;
  afternoonStart: number;
  afternoonEnd: number;
};

const schedules: Record<
  WarehouseSchedule,
  { weekday: DaySchedule; friday: DaySchedule; saturday: readonly [number, number] }
> = {
  warehouse: {
    weekday: { morningStart: 450, morningEnd: 750, afternoonStart: 840, afternoonEnd: 960 },
    friday: { morningStart: 420, morningEnd: 750, afternoonStart: 840, afternoonEnd: 990 },
    saturday: [420, 780],
  },
  hardware: {
    weekday: { morningStart: 450, morningEnd: 720, afternoonStart: 840, afternoonEnd: 1020 },
    friday: { morningStart: 450, morningEnd: 720, afternoonStart: 840, afternoonEnd: 1020 },
    saturday: [450, 720],
  },
};

export function getWarehouseStatus(
  date: Date,
  schedule: WarehouseSchedule = "warehouse",
): WarehouseStatus {
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
  const selectedSchedule = schedules[schedule];
  const daySchedule = day === 5 ? selectedSchedule.friday : selectedSchedule.weekday;
  const isWeekday = day >= 1 && day <= 5;
  const isOpenOnWeekday =
    isWeekday &&
    ((minutesToday >= daySchedule.morningStart && minutesToday < daySchedule.morningEnd) ||
      (minutesToday >= daySchedule.afternoonStart && minutesToday < daySchedule.afternoonEnd));
  const isOpenOnSaturday =
    day === 6 &&
    minutesToday >= selectedSchedule.saturday[0] &&
    minutesToday < selectedSchedule.saturday[1];
  const isOnBreak =
    isWeekday &&
    minutesToday >= daySchedule.morningEnd &&
    minutesToday < daySchedule.afternoonStart;

  return isOpenOnWeekday || isOpenOnSaturday ? "open" : isOnBreak ? "break" : "closed";
}
