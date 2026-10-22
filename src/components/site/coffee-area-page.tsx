import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Crosshair,
  Coffee,
  MapPin,
  Navigation,
  Search,
  Sprout,
} from "lucide-react";

import qualityImage from "@/assets/Servicios/Cafes_coocentral/Cafe.webp";
import {
  coffeeBuyingPoints,
  getDistanceInKilometers,
  type CoffeeBuyingPoint,
} from "@/content/coffee-buying-points";

const coffeePointsMap =
  "https://www.google.com/maps/d/embed?mid=1v6ZsY68oRmgOkt0PkXxdkf74QP4-jDc&ehbc=2E312F";
const municipalityOptions = [
  ...new Set(coffeeBuyingPoints.map((point) => point.municipality)),
].sort((first, second) => first.localeCompare(second, "es"));

type UserCoordinates = {
  latitude: number;
  longitude: number;
};

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

function formatDistance(distance: number) {
  return distance < 1 ? `${Math.round(distance * 1000)} m` : `${distance.toFixed(1)} km`;
}

function getPointMapUrl(point: CoffeeBuyingPoint) {
  return `${coffeePointsMap}&ll=${point.latitude},${point.longitude}&z=13`;
}

function getDirectionsUrl(point: CoffeeBuyingPoint) {
  const destination = `${point.latitude},${point.longitude}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function CoffeeAreaPage() {
  const [search, setSearch] = useState("");
  const [municipality, setMunicipality] = useState("all");
  const [userCoordinates, setUserCoordinates] = useState<UserCoordinates | null>(null);
  const [locationStatus, setLocationStatus] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [selectedPointId, setSelectedPointId] = useState(coffeeBuyingPoints[0]?.id ?? "");

  const filteredPoints = useMemo(() => {
    const normalizedSearch = normalizeSearch(search.trim());
    const points = coffeeBuyingPoints.filter((point) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        normalizeSearch(`${point.name} ${point.municipality}`).includes(normalizedSearch);
      const matchesMunicipality = municipality === "all" || point.municipality === municipality;

      return matchesSearch && matchesMunicipality;
    });

    if (!userCoordinates) return points;

    return points.sort(
      (first, second) =>
        getDistanceInKilometers(userCoordinates, first) -
        getDistanceInKilometers(userCoordinates, second),
    );
  }, [municipality, search, userCoordinates]);

  const selectedPoint =
    filteredPoints.find((point) => point.id === selectedPointId) ?? filteredPoints[0];

  function locateNearestPoint() {
    if (!navigator.geolocation) {
      setLocationStatus("Este navegador no permite consultar tu ubicación.");
      return;
    }

    setIsLocating(true);
    setLocationStatus("");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const coordinates = { latitude: coords.latitude, longitude: coords.longitude };
        const nearestPoint = [...filteredPoints].sort(
          (first, second) =>
            getDistanceInKilometers(coordinates, first) -
            getDistanceInKilometers(coordinates, second),
        )[0];

        setUserCoordinates(coordinates);
        if (nearestPoint) setSelectedPointId(nearestPoint.id);
        setLocationStatus("Puntos ordenados desde tu ubicación. Las distancias son aproximadas.");
        setIsLocating(false);
      },
      (error) => {
        const messages: Record<number, string> = {
          1: "No se autorizó el acceso a la ubicación. Puedes buscar por municipio.",
          2: "No se pudo determinar tu ubicación. Inténtalo de nuevo o busca por municipio.",
          3: "La consulta de ubicación tardó demasiado. Inténtalo de nuevo.",
        };
        setLocationStatus(
          messages[error.code] ??
            "No se pudo consultar tu ubicación. Inténtalo de nuevo o busca por municipio.",
        );
        setIsLocating(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
    );
  }

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
          <div className="mt-10 grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                <span className="size-1.5 rounded-full bg-lime" />
                Servicio 05 · Café
              </p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Área de <span className="text-lime">Café</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
                Encuentra los puntos de compra y venta de café verde y seco de Coocentral en el
                centro del Huila.
              </p>
              <a
                href="#puntos-de-compra"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-5 text-sm font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-paper hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Explorar puntos en el mapa
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <figure className="relative mx-auto w-full max-w-xl lg:col-span-6">
              <div className="absolute -bottom-4 -left-4 size-28 rounded-2xl bg-lime sm:-bottom-5 sm:-left-5 sm:size-36" />
              <div className="relative overflow-hidden rounded-4xl border border-white/15 bg-paper/10 p-2 shadow-2xl">
                <img
                  src={qualityImage}
                  alt="Presentación de cafés tostados Coocentral"
                  width="1024"
                  height="768"
                  fetchPriority="high"
                  className="aspect-4/3 w-full rounded-2xl object-cover"
                />
              </div>
              <figcaption className="absolute -bottom-5 right-3 rounded-full border border-border bg-paper px-4 py-2 text-xs font-bold text-forest-deep shadow-lg sm:-bottom-6 sm:right-8">
                Calidad desde el origen
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Compra y venta de café
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
              Conecta tu café con los puntos Coocentral.
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink/65 sm:text-base">
              Busca por nombre o municipio, filtra las ubicaciones y, si lo autorizas, encuentra los
              puntos más cercanos a tu ubicación.
            </p>
          </div>

          <div id="puntos-de-compra" className="scroll-mt-28">
            <div className="grid gap-5 lg:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.6fr)]">
              <aside className="overflow-hidden rounded-3xl border border-border bg-background shadow-lg">
                <div className="border-b border-border bg-sand/70 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-lime/30 text-forest-deep">
                      <MapPin aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">Encuentra tu punto</h3>
                      <p className="mt-0.5 text-xs text-ink/55">
                        {coffeeBuyingPoints.length} puntos de compra y venta
                      </p>
                    </div>
                  </div>

                  <label htmlFor="coffee-point-search" className="sr-only">
                    Buscar punto de compra por nombre o municipio
                  </label>
                  <div className="mt-5 flex h-12 items-center gap-3 rounded-xl border border-border bg-paper px-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/15">
                    <Search aria-hidden="true" className="size-4 shrink-0 text-ink/45" />
                    <input
                      id="coffee-point-search"
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Busca un punto o municipio"
                      className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-ink/40"
                    />
                  </div>

                  <label
                    htmlFor="coffee-point-municipality"
                    className="mt-4 block text-xs font-bold uppercase tracking-wide text-ink/60"
                  >
                    Ubicación
                  </label>
                  <select
                    id="coffee-point-municipality"
                    value={municipality}
                    onChange={(event) => setMunicipality(event.target.value)}
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-paper px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                  >
                    <option value="all">Todos los municipios</option>
                    {municipalityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={locateNearestPoint}
                    disabled={isLocating}
                    className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-forest-deep px-4 text-sm font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
                  >
                    <Crosshair aria-hidden="true" className="size-4 text-lime" />
                    {isLocating ? "Buscando ubicación..." : "Usar mi ubicación"}
                  </button>
                  <p aria-live="polite" className="mt-3 min-h-5 text-xs leading-5 text-ink/60">
                    {locationStatus}
                  </p>
                </div>

                <div className="max-h-[32rem] overflow-y-auto p-3" aria-label="Puntos encontrados">
                  <p className="px-2 pb-2 text-xs font-semibold text-ink/55">
                    {filteredPoints.length}{" "}
                    {filteredPoints.length === 1 ? "resultado" : "resultados"}
                    {userCoordinates ? " · ordenados por cercanía" : ""}
                  </p>
                  {filteredPoints.length > 0 ? (
                    <ul className="space-y-2">
                      {filteredPoints.map((point, index) => {
                        const isSelected = selectedPoint?.id === point.id;
                        const distance = userCoordinates
                          ? getDistanceInKilometers(userCoordinates, point)
                          : null;

                        return (
                          <li key={point.id}>
                            <button
                              type="button"
                              onClick={() => setSelectedPointId(point.id)}
                              aria-pressed={isSelected}
                              className={`w-full rounded-2xl border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                                isSelected
                                  ? "border-brand/40 bg-lime/15"
                                  : "border-transparent bg-paper hover:border-brand/20 hover:bg-sand/70"
                              }`}
                            >
                              <span className="flex items-start gap-3">
                                <span
                                  className={`grid size-9 shrink-0 place-items-center rounded-xl ${
                                    isSelected ? "bg-brand text-paper" : "bg-sand text-brand"
                                  }`}
                                >
                                  <MapPin aria-hidden="true" className="size-4" />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="flex items-start justify-between gap-2">
                                    <span className="text-sm font-bold text-ink">{point.name}</span>
                                    {distance !== null && (
                                      <span className="shrink-0 text-xs font-bold text-brand">
                                        {formatDistance(distance)}
                                      </span>
                                    )}
                                  </span>
                                  <span className="mt-1 block text-xs text-ink/55">
                                    {point.municipality}, Huila
                                  </span>
                                  {userCoordinates && index === 0 && (
                                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                                      <Navigation aria-hidden="true" className="size-3" />
                                      Más cercano
                                    </span>
                                  )}
                                </span>
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="rounded-2xl bg-paper px-4 py-6 text-center text-sm text-ink/60">
                      No encontramos puntos con esos filtros. Prueba con otro nombre o municipio.
                    </p>
                  )}
                </div>
              </aside>

              <div className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-sand p-2 shadow-lg sm:p-3">
                <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-4">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime/35 text-forest-deep">
                      <MapPin aria-hidden="true" className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold">
                        {selectedPoint?.name ?? "Puntos de compra y venta"}
                      </h3>
                      <p className="text-xs text-ink/55">
                        {selectedPoint
                          ? `${selectedPoint.municipality}, Huila`
                          : "Mapa institucional de Coocentral"}
                      </p>
                    </div>
                  </div>
                  {selectedPoint && (
                    <a
                      href={getDirectionsUrl(selectedPoint)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 shrink-0 items-center gap-1 rounded-full bg-paper px-3 text-xs font-bold text-brand shadow-sm transition-colors hover:bg-brand hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      Cómo llegar
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  )}
                </div>
                {selectedPoint ? (
                  <iframe
                    title={`Mapa de puntos de compra de café, ubicación de ${selectedPoint.name}`}
                    src={getPointMapUrl(selectedPoint)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[26rem] w-full flex-1 rounded-2xl border-0 bg-background sm:h-[32rem] lg:h-auto lg:min-h-[32rem]"
                    allowFullScreen
                  />
                ) : (
                  <div className="grid h-[26rem] place-items-center rounded-2xl bg-background px-6 text-center text-sm text-ink/60 sm:h-[32rem]">
                    Ajusta la búsqueda o el municipio para ver los puntos disponibles.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime/25 text-forest-deep">
                  <Sprout aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm font-semibold text-ink/80">Compra de café verde</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime/25 text-forest-deep">
                  <Coffee aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm font-semibold text-ink/80">Compra de café seco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand">
              Área de Café · Coocentral
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              Café huilense, más cerca de sus productores.
            </h2>
          </div>
          <Link
            to="/servicios"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-md bg-forest-deep px-4 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:self-center"
          >
            Todos los servicios
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
