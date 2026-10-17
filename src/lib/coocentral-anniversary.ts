const foundingYear = 1975;
const anniversaryMonth = 11;
const anniversaryDay = 3;

export function getCoocentralCalendarYear(date: Date) {
  const year = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Bogota",
      year: "numeric",
    })
      .formatToParts(date)
      .find((part) => part.type === "year")?.value,
  );

  if (!Number.isInteger(year)) {
    throw new Error("No se pudo obtener el año actual en Colombia.");
  }

  return year;
}

export function getCoocentralAnniversary(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  if (![year, month, day].every(Number.isInteger)) {
    throw new Error("No se pudo calcular la fecha del aniversario de Coocentral.");
  }

  const anniversaryYear =
    month > anniversaryMonth || (month === anniversaryMonth && day >= anniversaryDay)
      ? year
      : year - 1;

  return {
    year: anniversaryYear,
    count: anniversaryYear - foundingYear,
  };
}
