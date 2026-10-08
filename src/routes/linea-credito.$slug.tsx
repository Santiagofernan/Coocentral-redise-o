import { createFileRoute } from "@tanstack/react-router";

import { CreditProductPage } from "@/components/site/section-pages";

export const Route = createFileRoute("/linea-credito/$slug")({
  head: () => ({
    meta: [
      { title: "Línea de crédito | Coocentral" },
      {
        name: "description",
        content: "Información y requisitos de las líneas de crédito de Coocentral.",
      },
    ],
  }),
  component: CreditProductRoute,
});

function CreditProductRoute() {
  const { slug } = Route.useParams();

  return <CreditProductPage slug={slug} />;
}
