import { createFileRoute } from "@tanstack/react-router";

import { SustainabilityPage } from "@/components/site/section-pages";

export const Route = createFileRoute("/sostenibilidad")({
  head: () => ({ meta: [{ title: "Sostenibilidad | Coocentral" }, { name: "description", content: "Impacto ambiental, social y económico de la caficultura sostenible en el Huila." }] }),
  component: SustainabilityPage,
});
