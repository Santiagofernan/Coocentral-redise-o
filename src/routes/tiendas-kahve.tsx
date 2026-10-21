import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/tiendas-kahve")({
  head: () =>
    createSeoHead({
      title: "Tiendas Kahvé | Café especial en Garzón y Guadalupe",
      description:
        "Visita las Tiendas Kahvé de Coocentral y disfruta cafés especiales del Huila en Garzón y Guadalupe.",
      path: "/tiendas-kahve",
    }),
  component: lazyRouteComponent(
    () => import("@/components/site/kahve-stores-page"),
    "KahveStoresPage",
  ),
});
