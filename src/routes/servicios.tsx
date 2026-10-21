import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/servicios")({
  head: () =>
    createSeoHead({
      title: "Servicios para caficultores del Huila | Coocentral",
      description:
        "Explora los servicios de Coocentral para caficultores: asistencia agropecuaria, crédito, insumos, compra de café y apoyo a la producción.",
      path: "/servicios",
    }),
  component: lazyRouteComponent(() => import("@/components/site/section-pages"), "ServicesPage"),
});
