import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
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
  X,
} from "lucide-react";

import { allMunicipalities, warehouseLocations, warehouseProductLines } from "@/content/coocentral";
import { getGoogleMapsDirectionsUrl } from "@/lib/google-maps";
import { getWarehouseStatus, type WarehouseStatus } from "@/lib/warehouse-schedule";
import { useCurrentTime } from "@/hooks/use-current-time";

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
type LocationTypeFilter = "all" | (typeof locationTypes)[number];

export function WarehousesPage() {
  const filtersRef = useRef<HTMLDivElement>(null);
  const now = useCurrentTime();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMunicipalities, setSelectedMunicipalities] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<LocationTypeFilter[]>([]);
  const [selectedSchedules, setSelectedSchedules] = useState<Exclude<ScheduleFilter, "all">[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<WarehouseStatus[]>([]);

  useEffect(() => {
    const closeDropdownsOutsideClick = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      filtersRef.current
        ?.querySelectorAll<HTMLDetailsElement>("details[open]")
        .forEach((dropdown) => {
          if (!dropdown.contains(target)) dropdown.open = false;
        });
    };

    document.addEventListener("pointerdown", closeDropdownsOutsideClick);
    return () => document.removeEventListener("pointerdown", closeDropdownsOutsideClick);
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
      selectedMunicipalities.length === 0 || selectedMunicipalities.includes(location.municipality);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(location.type);
    const matchesSchedule =
      selectedSchedules.length === 0 ||
      selectedSchedules.some((scheduleFilter) =>
        location.hours.some((hours) =>
          scheduleFilter === "weekdays"
            ? hours.startsWith("Lunes a jueves") ||
              hours.startsWith("Lunes a viernes") ||
              hours.startsWith("Viernes")
            : hours.startsWith("Sábado"),
        ),
      );
    const locationSchedule = location.type === "Ferretería" ? "hardware" : "warehouse";
    const locationStatus = now ? getWarehouseStatus(now, locationSchedule) : null;
    const matchesStatus =
      selectedStatuses.length === 0 ||
      (locationStatus !== null && selectedStatuses.includes(locationStatus));

    return matchesQuery && matchesMunicipality && matchesType && matchesSchedule && matchesStatus;
  });
  const hasActiveFilters =
    searchQuery !== "" ||
    selectedMunicipalities.length > 0 ||
    selectedTypes.length > 0 ||
    selectedSchedules.length > 0 ||
    selectedStatuses.length > 0;

  const toggleSelection = <T extends string>(
    selected: T[],
    setSelected: (values: T[]) => void,
    value: T,
  ) => {
    setSelected(
      selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedMunicipalities([]);
    setSelectedTypes([]);
    setSelectedSchedules([]);
    setSelectedStatuses([]);
  };

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

          <div
            ref={filtersRef}
            className="mt-8 rounded-2xl border-2 border-brand/30 border-t-4 border-t-brand bg-background p-4 shadow-xl shadow-forest/10 sm:p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime text-forest-deep">
                <SlidersHorizontal aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-forest-deep">
                  Filtra los almacenes
                </h3>
                <p className="text-sm text-ink/65">
                  Busca por ubicación o selecciona los criterios que necesitas.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="flex flex-col gap-2 text-sm font-semibold text-forest-deep sm:col-span-2 lg:col-span-3">
                Buscar por ubicación, teléfono u horario
                <span className="relative block">
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-brand"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Nombre, dirección, municipio..."
                    className="min-h-12 w-full rounded-xl border-2 border-border bg-paper pl-11 pr-3 text-base font-normal text-ink outline-none placeholder:text-ink/45 focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </span>
              </label>
              <details className="group relative z-0 min-w-0 self-start rounded-xl border-2 border-border bg-paper p-4 shadow-sm transition-colors hover:border-brand/50 open:z-50 open:border-brand open:bg-lime/10 sm:col-span-2">
                <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-forest-deep marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span>Municipio</span>
                  <span className="flex items-center gap-2 text-xs font-medium text-ink/55">
                    {selectedMunicipalities.length > 0
                      ? `${selectedMunicipalities.length} seleccionados`
                      : "Todos"}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-180"
                    />
                  </span>
                </summary>
                <ul className="hidden group-open:absolute group-open:left-0 group-open:top-full group-open:z-50 group-open:mt-2 group-open:grid group-open:max-h-72 group-open:w-full group-open:overflow-y-auto group-open:rounded-xl group-open:border group-open:border-border group-open:bg-background group-open:p-3 group-open:shadow-xl group-open:ring-1 group-open:ring-ink/10 sm:grid-cols-2 lg:grid-cols-3">
                  {municipalities.map((municipality) => {
                    const checked = selectedMunicipalities.includes(municipality);
                    return (
                      <li key={municipality}>
                        <label className="flex min-h-10 cursor-pointer items-center gap-2.5 rounded-lg px-2 text-sm text-ink/75 transition-colors hover:bg-lime/15 has-[:checked]:bg-lime/20 has-[:checked]:font-semibold has-[:checked]:text-forest-deep">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              toggleSelection(
                                selectedMunicipalities,
                                setSelectedMunicipalities,
                                municipality,
                              )
                            }
                            className="size-4 shrink-0 accent-brand"
                          />
                          {municipality}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
              <details className="group relative z-0 min-w-0 self-start rounded-xl border-2 border-border bg-paper p-4 shadow-sm transition-colors hover:border-brand/50 open:z-50 open:border-brand open:bg-lime/10">
                <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-forest-deep marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span>Tipo de sede</span>
                  <span className="flex items-center gap-2 text-xs font-medium text-ink/55">
                    {selectedTypes.length > 0 ? `${selectedTypes.length} seleccionados` : "Todos"}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-180"
                    />
                  </span>
                </summary>
                <ul className="hidden group-open:absolute group-open:left-0 group-open:top-full group-open:z-50 group-open:mt-2 group-open:block group-open:max-h-60 group-open:w-full group-open:overflow-y-auto group-open:rounded-xl group-open:border group-open:border-border group-open:bg-background group-open:p-3 group-open:shadow-xl group-open:ring-1 group-open:ring-ink/10">
                  {locationTypes.map((type) => {
                    const checked = selectedTypes.includes(type);
                    return (
                      <li key={type}>
                        <label className="flex min-h-10 cursor-pointer items-center gap-2.5 rounded-lg px-2 text-sm text-ink/75 transition-colors hover:bg-lime/15 has-[:checked]:bg-lime/20 has-[:checked]:font-semibold has-[:checked]:text-forest-deep">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleSelection(selectedTypes, setSelectedTypes, type)}
                            className="size-4 shrink-0 accent-brand"
                          />
                          {type}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
              <details className="group relative z-0 min-w-0 self-start rounded-xl border-2 border-border bg-paper p-4 shadow-sm transition-colors hover:border-brand/50 open:z-50 open:border-brand open:bg-lime/10">
                <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-forest-deep marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span>Horario de atención</span>
                  <span className="flex items-center gap-2 text-xs font-medium text-ink/55">
                    {selectedSchedules.length > 0
                      ? `${selectedSchedules.length} seleccionados`
                      : "Todos"}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-180"
                    />
                  </span>
                </summary>
                <ul className="hidden group-open:absolute group-open:left-0 group-open:top-full group-open:z-50 group-open:mt-2 group-open:block group-open:max-h-60 group-open:w-full group-open:overflow-y-auto group-open:rounded-xl group-open:border group-open:border-border group-open:bg-background group-open:p-3 group-open:shadow-xl group-open:ring-1 group-open:ring-ink/10">
                  {(
                    [
                      ["weekdays", "Lunes a viernes"],
                      ["saturday", "Sábados"],
                    ] as const
                  ).map(([schedule, label]) => {
                    const checked = selectedSchedules.includes(schedule);
                    return (
                      <li key={schedule}>
                        <label className="flex min-h-10 cursor-pointer items-center gap-2.5 rounded-lg px-2 text-sm text-ink/75 transition-colors hover:bg-lime/15 has-[:checked]:bg-lime/20 has-[:checked]:font-semibold has-[:checked]:text-forest-deep">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              toggleSelection(selectedSchedules, setSelectedSchedules, schedule)
                            }
                            className="size-4 shrink-0 accent-brand"
                          />
                          {label}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
              <details className="group relative z-0 min-w-0 self-start rounded-xl border-2 border-border bg-paper p-4 shadow-sm transition-colors hover:border-brand/50 open:z-50 open:border-brand open:bg-lime/10">
                <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-forest-deep marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span>Estado actual</span>
                  <span className="flex items-center gap-2 text-xs font-medium text-ink/55">
                    {selectedStatuses.length > 0
                      ? `${selectedStatuses.length} seleccionados`
                      : "Todos"}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-180"
                    />
                  </span>
                </summary>
                <ul className="hidden group-open:absolute group-open:left-0 group-open:top-full group-open:z-50 group-open:mt-2 group-open:block group-open:max-h-60 group-open:w-full group-open:overflow-y-auto group-open:rounded-xl group-open:border group-open:border-border group-open:bg-background group-open:p-3 group-open:shadow-xl group-open:ring-1 group-open:ring-ink/10">
                  {(
                    [
                      ["open", "Abiertos ahora"],
                      ["break", "En descanso"],
                      ["closed", "Cerrados ahora"],
                    ] as const
                  ).map(([filterStatus, label]) => {
                    const checked = selectedStatuses.includes(filterStatus);
                    return (
                      <li key={filterStatus}>
                        <label className="flex min-h-10 cursor-pointer items-center gap-2.5 rounded-lg px-2 text-sm text-ink/75 transition-colors hover:bg-lime/15 has-[:checked]:bg-lime/20 has-[:checked]:font-semibold has-[:checked]:text-forest-deep">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              toggleSelection(selectedStatuses, setSelectedStatuses, filterStatus)
                            }
                            className="size-4 shrink-0 accent-brand"
                          />
                          {label}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p aria-live="polite" className="text-sm font-medium text-ink/65">
              {filteredLocations.length} de {warehouseLocations.length} sedes
            </p>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 rounded-xl border border-border bg-background p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/55">
                  Filtros seleccionados
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-brand/20 bg-paper px-4 text-xs font-semibold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <X aria-hidden="true" className="size-3.5" />
                  Borrar todos los filtros
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {searchQuery.trim() && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="inline-flex min-h-9 items-center gap-2 rounded-full bg-sand px-3 text-xs font-semibold text-ink hover:bg-lime/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    Búsqueda: {searchQuery.trim()}
                    <X aria-hidden="true" className="size-3.5" />
                    <span className="sr-only">Quitar búsqueda</span>
                  </button>
                )}
                {selectedMunicipalities.map((municipality) => (
                  <button
                    key={municipality}
                    type="button"
                    onClick={() =>
                      toggleSelection(
                        selectedMunicipalities,
                        setSelectedMunicipalities,
                        municipality,
                      )
                    }
                    className="inline-flex min-h-9 items-center gap-2 rounded-full bg-sand px-3 text-xs font-semibold text-ink hover:bg-lime/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    Municipio: {municipality}
                    <X aria-hidden="true" className="size-3.5" />
                    <span className="sr-only">Quitar municipio {municipality}</span>
                  </button>
                ))}
                {selectedTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleSelection(selectedTypes, setSelectedTypes, type)}
                    className="inline-flex min-h-9 items-center gap-2 rounded-full bg-sand px-3 text-xs font-semibold text-ink hover:bg-lime/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    Tipo: {type}
                    <X aria-hidden="true" className="size-3.5" />
                    <span className="sr-only">Quitar tipo {type}</span>
                  </button>
                ))}
                {selectedSchedules.map((schedule) => (
                  <button
                    key={schedule}
                    type="button"
                    onClick={() =>
                      toggleSelection(selectedSchedules, setSelectedSchedules, schedule)
                    }
                    className="inline-flex min-h-9 items-center gap-2 rounded-full bg-sand px-3 text-xs font-semibold text-ink hover:bg-lime/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    Horario: {schedule === "weekdays" ? "Lunes a viernes" : "Sábados"}
                    <X aria-hidden="true" className="size-3.5" />
                    <span className="sr-only">Quitar filtro de horario</span>
                  </button>
                ))}
                {selectedStatuses.map((filterStatus) => (
                  <button
                    key={filterStatus}
                    type="button"
                    onClick={() =>
                      toggleSelection(selectedStatuses, setSelectedStatuses, filterStatus)
                    }
                    className="inline-flex min-h-9 items-center gap-2 rounded-full bg-sand px-3 text-xs font-semibold text-ink hover:bg-lime/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    Estado: {statusLabels[filterStatus]}
                    <X aria-hidden="true" className="size-3.5" />
                    <span className="sr-only">Quitar estado {statusLabels[filterStatus]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

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
