import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  Cog,
  House,
  MapPin,
  Phone,
  Search,
  SlidersHorizontal,
  Sprout,
  Store,
  Wrench,
} from "lucide-react";

import { allMunicipalities, warehouseLocations, warehouseProductLines } from "@/content/coocentral";
import { getGoogleMapsDirectionsUrl } from "@/lib/google-maps";
import { getWarehouseStatus, type WarehouseStatus } from "@/lib/warehouse-schedule";

const municipalities = allMunicipalities.filter((municipality) =>
  warehouseLocations.some((location) => location.municipality === municipality),
);
const locationTypes = [...new Set(warehouseLocations.map((location) => location.type))];
const productLineIcons = [Sprout, House, Wrench, Cog];
const normalizeSearchText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es");

const statusLabels: Record<WarehouseStatus, string> = {
  open: "Abierto ahora",
  break: "En descanso",
  closed: "Cerrado ahora",
};

const statusStyles: Record<WarehouseStatus, string> = {
  open: "bg-lime/25 text-forest-deep",
  break: "bg-amber-100 text-amber-900",
  closed: "bg-ink/5 text-ink/60",
};

type ScheduleFilter = "all" | "weekdays" | "saturday";
type StatusFilter = "all" | WarehouseStatus;
type LocationTypeFilter = "all" | (typeof locationTypes)[number];

export function WarehousesPage() {
  const [now, setNow] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("all");
  const [selectedType, setSelectedType] = useState<LocationTypeFilter>("all");
  const [scheduleFilter, setScheduleFilter] = useState<ScheduleFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  useEffect(() => {
    const updateClock = () => setNow(new Date());
    updateClock();
    const intervalId = window.setInterval(updateClock, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const normalizedQuery = normalizeSearchText(searchQuery.trim());
  const filteredLocations = warehouseLocations.filter((location) => {
    const matchesQuery = [
      location.name,
      location.code,
      location.address,
      location.municipality,
      location.locality ?? "",
      location.phone ?? "",
      ...location.hours,
    ].some((value) => normalizeSearchText(value).includes(normalizedQuery));
    const matchesMunicipality =
      selectedMunicipality === "all" || location.municipality === selectedMunicipality;
    const matchesType = selectedType === "all" || location.type === selectedType;
    const matchesSchedule =
      scheduleFilter === "all" ||
      location.hours.some((hours) =>
        scheduleFilter === "weekdays"
          ? hours.startsWith("Lunes a jueves") ||
            hours.startsWith("Lunes a viernes") ||
            hours.startsWith("Viernes")
          : hours.startsWith("Sábado"),
      );
    const locationSchedule = location.type === "Ferretería" ? "hardware" : "warehouse";
    const locationStatus = now ? getWarehouseStatus(now, locationSchedule) : null;
    const matchesStatus = statusFilter === "all" || locationStatus === statusFilter;

    return matchesQuery && matchesMunicipality && matchesType && matchesSchedule && matchesStatus;
  });
  const hasActiveFilters =
    searchQuery !== "" ||
    selectedMunicipality !== "all" ||
    selectedType !== "all" ||
    scheduleFilter !== "all" ||
    statusFilter !== "all";

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-forest-deep text-paper">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border border-lime/15"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-28 -z-10 h-[26rem] w-[26rem] rounded-full border border-lime/10"
        />
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-10 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/servicios"
              className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 text-sm font-semibold text-paper/80 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-lime/60 hover:bg-lime hover:text-forest-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
              />
              Volver a servicios
            </Link>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                <span className="size-1.5 rounded-full bg-lime" />
                Servicio 03 · Comercio local
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Almacenes <span className="text-lime">Coocentral</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-paper/70 lg:text-lg">
                {warehouseLocations.length} puntos de atención en {municipalities.length}{" "}
                municipios, con productos para la finca, el hogar y el trabajo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:col-span-4 lg:justify-self-end">
              <div className="rounded-2xl border border-paper/15 bg-paper/5 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-medium text-lime">
                  {warehouseLocations.length}
                </p>
                <p className="mt-1 text-xs leading-5 text-paper/65">puntos de atención</p>
              </div>
              <div className="rounded-2xl border border-paper/15 bg-paper/5 p-4 backdrop-blur-sm">
                <p className="font-display text-3xl font-medium text-lime">
                  {municipalities.length}
                </p>
                <p className="mt-1 text-xs leading-5 text-paper/65">municipios</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {municipalities.map((municipality) => (
              <span
                key={municipality}
                className="rounded-full border border-paper/15 bg-paper/5 px-3 py-1.5 text-xs font-medium text-paper/75"
              >
                {municipality}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Todo cerca</p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Soluciones para cada día
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/65">
            Encuentra herramientas y productos para el trabajo en el campo, la casa y el negocio.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {warehouseProductLines.map((line, index) => {
            const Icon = productLineIcons[index] ?? Store;
            return (
              <li
                key={line.name}
                className="group rounded-2xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-lime/25 text-forest-deep transition-colors group-hover:bg-lime">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-display text-sm text-brand/70">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{line.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{line.products}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Atención al cliente
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Encuentra tu almacén
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">
            Consulta la dirección y los horarios de atención habituales de cada sede.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-background p-4 shadow-sm sm:p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-forest-deep">
              <SlidersHorizontal aria-hidden="true" className="size-4 text-brand" />
              Filtra los almacenes
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <label className="relative sm:col-span-2 lg:col-span-1">
                <span className="sr-only">
                  Buscar por sede, dirección, municipio, teléfono u horario
                </span>
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink/45"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Sede, dirección, municipio, teléfono u horario"
                  className="min-h-11 w-full rounded-xl border border-border bg-paper pl-10 pr-3 text-sm text-ink outline-none placeholder:text-ink/45 focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/65">
                Municipio
                <select
                  value={selectedMunicipality}
                  onChange={(event) => setSelectedMunicipality(event.target.value)}
                  className="min-h-11 rounded-xl border border-border bg-paper px-3 text-sm font-medium text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                  <option value="all">Todos los municipios</option>
                  {municipalities.map((municipality) => (
                    <option key={municipality} value={municipality}>
                      {municipality}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/65">
                Tipo de sede
                <select
                  value={selectedType}
                  onChange={(event) => setSelectedType(event.target.value as LocationTypeFilter)}
                  className="min-h-11 rounded-xl border border-border bg-paper px-3 text-sm font-medium text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                  <option value="all">Todos los tipos</option>
                  {locationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/65">
                Horario de atención
                <select
                  value={scheduleFilter}
                  onChange={(event) => setScheduleFilter(event.target.value as ScheduleFilter)}
                  className="min-h-11 rounded-xl border border-border bg-paper px-3 text-sm font-medium text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                  <option value="all">Todos los horarios</option>
                  <option value="weekdays">Lunes a viernes</option>
                  <option value="saturday">Sábados</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink/65">
                Estado actual
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
                  className="min-h-11 rounded-xl border border-border bg-paper px-3 text-sm font-medium text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                  <option value="all">Cualquier estado</option>
                  <option value="open">Abiertos ahora</option>
                  <option value="break">En descanso</option>
                  <option value="closed">Cerrados ahora</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p aria-live="polite" className="text-sm font-medium text-ink/65">
              {filteredLocations.length} de {warehouseLocations.length} sedes
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedMunicipality("all");
                  setSelectedType("all");
                  setScheduleFilter("all");
                  setStatusFilter("all");
                }}
                className="min-h-10 rounded-full px-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {filteredLocations.length > 0 ? (
            <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredLocations.map((location) => {
                const mapQuery = [
                  location.address,
                  location.locality,
                  location.name,
                  location.municipality,
                  "Huila",
                ]
                  .filter(Boolean)
                  .join(", ");
                const mapsUrl = getGoogleMapsDirectionsUrl(mapQuery);
                const locationSchedule = location.type === "Ferretería" ? "hardware" : "warehouse";
                const locationStatus = now ? getWarehouseStatus(now, locationSchedule) : null;

                return (
                  <li
                    key={`${location.municipality}-${location.name}`}
                    className="flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="inline-flex rounded-full bg-lime/20 px-2.5 py-1 text-[11px] font-bold text-forest-deep">
                            {location.municipality}
                          </span>
                          <span className="inline-flex rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-semibold text-ink/65">
                            {location.type}
                          </span>
                          <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-ink/55">
                            UB {location.code}
                          </span>
                        </div>
                        {location.locality && (
                          <p className="mt-2 text-xs font-medium text-ink/60">
                            Localidad: {location.locality}
                          </p>
                        )}
                        <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-forest-deep">
                          {location.name}
                        </h3>
                      </div>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-bold ${
                          locationStatus ? statusStyles[locationStatus] : "bg-ink/5 text-ink/60"
                        }`}
                      >
                        <span
                          className={`size-2 rounded-full ${
                            locationStatus === "open"
                              ? "bg-forest motion-safe:animate-pulse"
                              : locationStatus === "break"
                                ? "bg-amber-600"
                                : "bg-ink/35"
                          }`}
                        />
                        {locationStatus ? statusLabels[locationStatus] : "Consultando horario"}
                      </span>
                    </div>
                    <div className="mt-5 flex items-start gap-2.5 text-sm leading-6 text-ink/70">
                      <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
                      <address className="not-italic">
                        {location.address || "Dirección no indicada"}
                        {!location.address && (
                          <span className="mt-1 block text-xs text-ink/50">
                            Ubicación identificada por centro poblado
                          </span>
                        )}
                      </address>
                    </div>
                    {location.phone && (
                      <div className="mt-4 flex items-center gap-2.5 text-sm leading-6 text-ink/70">
                        <Phone aria-hidden="true" className="size-4 shrink-0 text-brand" />
                        <a
                          href={`tel:+57${location.phone}`}
                          className="rounded-sm underline-offset-2 hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          {location.phone.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3")}
                        </a>
                      </div>
                    )}
                    <div className="mt-4 flex items-start gap-2.5 border-t border-border pt-4">
                      <Clock3 aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
                      <ul className="space-y-1.5 text-sm leading-5 text-ink/70">
                        {location.hours.map((schedule) => (
                          <li key={schedule}>{schedule}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex min-h-10 items-center gap-1.5 self-start pt-4 text-sm font-semibold text-brand transition-colors hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      Cómo llegar
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-border bg-background px-5 py-12 text-center">
              <p className="font-display text-xl font-medium text-forest-deep">
                No encontramos almacenes con esos filtros
              </p>
              <p className="mt-2 text-sm text-ink/65">
                Prueba con otro municipio, horario o término de búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
