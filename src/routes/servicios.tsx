import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/section-pages";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/servicios")({
  head: () =>
    createSeoHead({
      title: "Servicios para caficultores del Huila | Coocentral",
      description:
        "Explora los servicios de Coocentral para caficultores: asistencia agropecuaria, crédito, insumos, compra de café y apoyo a la producción.",
      path: "/servicios",
    }),
  component: ServicesPage,
});
