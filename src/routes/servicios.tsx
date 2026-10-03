import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/components/site/section-pages";

export const Route = createFileRoute("/servicios")({
  head: () => ({ meta: [{ title: "Servicios | Coocentral" }, { name: "description", content: "Servicios agropecuarios, crédito y herramientas para los asociados de Coocentral." }] }),
  component: ServicesPage,
});
