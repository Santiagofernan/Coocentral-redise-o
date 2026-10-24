import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/almacenes")({
  head: () =>
    createSeoHead({
      title: "Almacenes Coocentral en el Huila | Coocentral",
      description:
        "Encuentra almacenes y ferreterías Coocentral en 11 municipios del Huila. Consulta direcciones, teléfonos y horarios de atención.",
      path: "/almacenes",
    }),
  component: lazyRouteComponent(
    () => import("@/components/site/warehouses-page"),
    "WarehousesPage",
  ),
});
