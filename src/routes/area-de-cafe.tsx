import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/area-de-cafe")({
  head: () =>
    createSeoHead({
      title: "Compra y venta de café en el Huila | Coocentral",
      description:
        "Consulta los puntos de Coocentral para la compra y venta de café verde y seco en Garzón y municipios del centro del Huila.",
      path: "/area-de-cafe",
    }),
  component: lazyRouteComponent(
    () => import("@/components/site/coffee-area-page"),
    "CoffeeAreaPage",
  ),
});
