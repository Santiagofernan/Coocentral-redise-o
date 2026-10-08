import { createFileRoute } from "@tanstack/react-router";

import { CreditAndCarteraPage } from "@/components/site/section-pages";

export const Route = createFileRoute("/credito-y-cartera")({
  head: () => ({
    meta: [
      { title: "Crédito y cartera | Coocentral" },
      {
        name: "description",
        content:
          "Conoce los servicios de crédito y cartera de Coocentral para asociados y no asociados.",
      },
    ],
  }),
  component: CreditAndCarteraPage,
});
