import { createFileRoute } from "@tanstack/react-router";

import { CoworkingPage } from "@/components/site/coworking-page";

export const Route = createFileRoute("/coworking")({
  head: () => ({
    meta: [
      { title: "Coworking Martha Stella Velásquez | Coocentral" },
      {
        name: "description",
        content:
          "Conoce el espacio Coworking de Coocentral en Garzón: servicios, instalaciones y canales de contacto.",
      },
    ],
  }),
  component: CoworkingPage,
});
