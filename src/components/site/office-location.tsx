import { useEffect, useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Navigation } from "lucide-react";

import { publicOffice } from "@/content/coocentral";

function getOfficeClock(date: Date) {
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
  const weekdayNumber = weekday ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday) : -1;
  const minutesToday = hour * 60 + minute;
  const today = publicOffice.hours.find((schedule) => schedule.weekdays.includes(weekdayNumber));
  const intervals = today?.intervals ?? [];
  const isOpen = intervals.some(([opens, closes]) => minutesToday >= opens && minutesToday < closes);
  const isOnBreak = intervals.some(([, closes], index) => {
    const nextInterval = intervals[index + 1];
    return nextInterval !== undefined && minutesToday >= closes && minutesToday < nextInterval[0];
  });

  return { weekdayNumber, status: isOpen ? "open" : isOnBreak ? "break" : "closed" };
}

export function OfficeLocation() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateClock = () => setNow(new Date());
    updateClock();
    const intervalId = window.setInterval(updateClock, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const officeClock = now ? getOfficeClock(now) : null;
  const isOpen = officeClock?.status === "open";
  const isOnBreak = officeClock?.status === "break";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(publicOffice.address)}`;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(publicOffice.address)}&z=16&output=embed`;

  return (
    <section id="oficinas-y-horarios" className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-sand shadow-sm">
      <header className="flex flex-col gap-5 bg-forest-deep p-6 text-paper sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:px-10 lg:py-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">Nuestras oficinas · Garzón</p>
          <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">Horario de atención</h2>
          <p className="mt-2 text-sm leading-6 text-paper/75">Planea tu visita a nuestra sede y conoce cuándo estamos disponibles.</p>
        </div>
        <div
          aria-live="polite"
          className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${
            !officeClock
              ? "bg-background/10 text-paper/80"
              : isOpen
                ? "bg-lime text-forest-deep"
                : isOnBreak
                  ? "bg-amber-300 text-forest-deep"
                  : "bg-paper/10 text-paper/80"
          }`}
        >
          <span
            className={`size-2 rounded-full ${
              isOpen
                ? "bg-forest motion-safe:animate-pulse"
                : isOnBreak
                  ? "bg-amber-800"
                  : "bg-paper/50"
            }`}
          />
          {!officeClock
            ? "Consultando horario"
            : isOpen
              ? "Abierto ahora"
              : isOnBreak
                ? "En descanso"
                : "Cerrado ahora"}
        </div>
      </header>

      <div className="p-6 sm:p-8 lg:px-10 lg:py-9">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-display text-xl font-medium sm:text-2xl">Nuestros horarios</h3>
          <p className="text-xs text-ink/60">Hora local de Garzón, Huila</p>
        </div>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {publicOffice.hours.map((schedule) => {
            const isToday = officeClock?.weekdayNumber !== undefined && schedule.weekdays.includes(officeClock.weekdayNumber);

            return (
              <div
                key={schedule.days}
                className={`rounded-xl border p-4 transition-colors sm:p-5 ${
                  isToday ? "border-brand/40 bg-background shadow-sm ring-1 ring-brand/10" : "border-border bg-background/60"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <dt className="font-semibold text-ink">{schedule.days}</dt>
                  {isToday && <span className="rounded-full bg-brand/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">Hoy</span>}
                </div>
                <dd className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {schedule.periods.map((period) => (
                    <div key={period} className="flex items-center gap-2 text-sm font-medium text-ink/75">
                      <Clock3 aria-hidden="true" className="size-4 shrink-0 text-brand" />
                      <span>{period}</span>
                    </div>
                  ))}
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-3 text-xs leading-5 text-ink/55">El estado se calcula con base en el horario habitual y puede variar en días festivos.</p>
      </div>

      <div className="grid border-t border-border bg-paper sm:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col items-start justify-center p-6 sm:p-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Cómo llegar</p>
          <div className="mt-3 flex items-start gap-3">
            <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
            <address className="text-sm leading-6 text-ink/75 not-italic">{publicOffice.address}</address>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-brand px-4 text-sm font-bold text-paper transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <Navigation aria-hidden="true" className="size-4" />
            Abrir en Google Maps
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir mapa de la oficina en Google Maps: ${publicOffice.address}`}
          className="group relative m-4 block aspect-[16/9] overflow-hidden rounded-xl border border-border bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:m-5"
        >
          <iframe
            title={`Mapa de ubicación: ${publicOffice.address}`}
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="pointer-events-none absolute inset-0 size-full border-0"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-forest-deep/95 to-forest-deep/0 px-4 pb-3 pt-10 text-sm font-semibold text-paper">
            <span>Ver ubicación en el mapa</span>
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
