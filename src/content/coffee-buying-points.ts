export type CoffeeBuyingPoint = {
  id: string;
  name: string;
  municipality: string;
  latitude: number;
  longitude: number;
};

export const coffeeBuyingPoints: CoffeeBuyingPoint[] = [
  {
    id: "sede-principal",
    name: "Fielato Sede Principal",
    municipality: "Garzón",
    latitude: 2.195154,
    longitude: -75.632124,
  },
  {
    id: "parque-industrial",
    name: "Fielato Parque Industrial",
    municipality: "Garzón",
    latitude: 2.21195,
    longitude: -75.639112,
  },
  {
    id: "san-antonio-del-pescado",
    name: "Fielato San Antonio del Pescado",
    municipality: "Garzón",
    latitude: 2.072723,
    longitude: -75.683262,
  },
  {
    id: "potrerillos",
    name: "Fielato Potrerillos",
    municipality: "Gigante",
    latitude: 2.4663943,
    longitude: -75.4881817,
  },
  {
    id: "agrado",
    name: "Fielato Agrado",
    municipality: "Agrado",
    latitude: 2.25353163,
    longitude: -75.77067932,
  },
  {
    id: "pital",
    name: "Fielato Pital",
    municipality: "Pital",
    latitude: 2.267091,
    longitude: -75.806197,
  },
  {
    id: "tarqui",
    name: "Fielato Tarqui",
    municipality: "Tarqui",
    latitude: 2.1096739,
    longitude: -75.824119,
  },
  {
    id: "maito",
    name: "Fielato Maito",
    municipality: "Tarqui",
    latitude: 2.0468866,
    longitude: -75.9104687,
  },
  {
    id: "quituro",
    name: "Fielato Quituro",
    municipality: "Tarqui",
    latitude: 2.0744476,
    longitude: -75.9447171,
  },
  {
    id: "suaza",
    name: "Fielato Suaza",
    municipality: "Suaza",
    latitude: 1.9758127,
    longitude: -75.7981708,
  },
  {
    id: "guadalupe",
    name: "Fielato Guadalupe",
    municipality: "Guadalupe",
    latitude: 2.0241634,
    longitude: -75.7560817,
  },
  {
    id: "socorro",
    name: "Fielato Socorro",
    municipality: "Pital",
    latitude: 2.333196,
    longitude: -75.707823,
  },
  {
    id: "zuluaga",
    name: "Fielato Zuluaga",
    municipality: "Garzón",
    latitude: 2.251307,
    longitude: -75.528067,
  },
  {
    id: "gigante",
    name: "Fielato Gigante",
    municipality: "Gigante",
    latitude: 2.3885377,
    longitude: -75.5466819,
  },
  {
    id: "hotel-kahve",
    name: "Fielato Hotel Kahvé",
    municipality: "Garzón",
    latitude: 2.1942026,
    longitude: -75.6307262,
  },
];

export function getDistanceInKilometers(
  origin: { latitude: number; longitude: number },
  destination: { latitude: number; longitude: number },
) {
  const earthRadiusKm = 6371;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const latitudeDifference = toRadians(destination.latitude - origin.latitude);
  const longitudeDifference = toRadians(destination.longitude - origin.longitude);
  const originLatitude = toRadians(origin.latitude);
  const destinationLatitude = toRadians(destination.latitude);
  const haversine =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(originLatitude) *
      Math.cos(destinationLatitude) *
      Math.sin(longitudeDifference / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}
