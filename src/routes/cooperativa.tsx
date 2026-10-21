import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/cooperativa")({
  head: () =>
    createSeoHead({
      title: "Coocentral: Cooperativa Central de Caficultores del Huila",
      description:
        "Conoce la misión, los principios, el gobierno y la historia de la Cooperativa Central de Caficultores del Huila, fundada en 1975.",
      path: "/cooperativa",
    }),
  component: lazyRouteComponent(() => import("@/components/site/section-pages"), "CooperativePage"),
});
