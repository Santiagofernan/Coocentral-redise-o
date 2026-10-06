import { createFileRoute } from "@tanstack/react-router";

import { KahveStoresPage } from "@/components/site/kahve-stores-page";

export const Route = createFileRoute("/tiendas-kahve")({
  head: () => ({
    meta: [
      { title: "Tiendas Kahvé · Garzón y Neiva | Coocentral" },
      {
        name: "description",
        content:
          "Conoce las Tiendas Kahvé de cafés especiales y encuentra sus puntos en Garzón y Neiva.",
      },
    ],
  }),
  component: KahveStoresPage,
});
