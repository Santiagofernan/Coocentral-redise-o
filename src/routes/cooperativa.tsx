import { createFileRoute } from "@tanstack/react-router";

import { CooperativePage } from "@/components/site/section-pages";

export const Route = createFileRoute("/cooperativa")({
  head: () => ({ meta: [{ title: "La cooperativa | Coocentral" }, { name: "description", content: "Misión, principios, gobierno y documentos de la Cooperativa Central de Caficultores del Huila." }] }),
  component: CooperativePage,
});
