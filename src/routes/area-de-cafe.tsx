import { createFileRoute } from "@tanstack/react-router";

import { CoffeeAreaPage } from "@/components/site/coffee-area-page";

export const Route = createFileRoute("/area-de-cafe")({
  head: () => ({
    meta: [
      { title: "Área de Café · Puntos de compra y venta | Coocentral" },
      {
        name: "description",
        content:
          "Consulta los puntos de compra y venta de café verde y seco de Coocentral en el centro del Huila.",
      },
    ],
  }),
  component: CoffeeAreaPage,
});
