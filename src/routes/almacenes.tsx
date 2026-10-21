import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/almacenes")({
  head: () =>
    createSeoHead({
      title: "Almacenes agrícolas en Garzón y Huila | Coocentral",
      description:
        "Encuentra insumos agrícolas, herramientas y productos para el campo en los Almacenes Coocentral. Consulta sedes y horarios en el centro del Huila.",
      path: "/almacenes",
    }),
  component: lazyRouteComponent(
    () => import("@/components/site/warehouses-page"),
    "WarehousesPage",
  ),
});
