import { createFileRoute } from "@tanstack/react-router";

import { EcosystemPage } from "@/components/site/section-pages";

export const Route = createFileRoute("/ecosistema")({
  head: () => ({ meta: [{ title: "Ecosistema | Coocentral" }, { name: "description", content: "Unidades de negocio, proyectos e infraestructura de Coocentral en el Huila." }] }),
  component: EcosystemPage,
});
