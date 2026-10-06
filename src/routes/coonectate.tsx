import { createFileRoute } from "@tanstack/react-router";

import { CoonectatePage } from "@/components/site/coonectate-page";

export const Route = createFileRoute("/coonectate")({
  head: () => ({
    meta: [
      { title: "Coonéctate · Conectividad rural | Coocentral" },
      {
        name: "description",
        content:
          "Conoce Coonéctate, el proyecto de Coocentral que brinda conectividad a las familias rurales de Las Delicias, Tarqui.",
      },
    ],
  }),
  component: CoonectatePage,
});
