import { createFileRoute } from "@tanstack/react-router";

import { PicPage } from "@/components/site/pic-page";

export const Route = createFileRoute("/pic")({
  head: () => ({
    meta: [
      { title: "PIC · Parque Industrial del Café | Coocentral" },
      {
        name: "description",
        content:
          "Conoce el Parque Industrial del Café de Coocentral, su cadena de procesos, misión y visión.",
      },
    ],
  }),
  component: PicPage,
});
