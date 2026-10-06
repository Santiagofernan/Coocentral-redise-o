import { createFileRoute } from "@tanstack/react-router";

import { WarehousesPage } from "@/components/site/warehouses-page";

export const Route = createFileRoute("/almacenes")({
  head: () => ({
    meta: [
      { title: "Almacenes Coocentral | Tiendas en el centro del Huila" },
      {
        name: "description",
        content:
          "Conoce las líneas de productos, direcciones y horarios de atención de los Almacenes Coocentral en el centro del Huila.",
      },
    ],
  }),
  component: WarehousesPage,
});
