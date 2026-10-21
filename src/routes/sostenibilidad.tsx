import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/sostenibilidad")({
  head: () =>
    createSeoHead({
      title: "Caficultura sostenible en el Huila | Coocentral",
      description:
        "Conoce las iniciativas de sostenibilidad de Coocentral: conservación ambiental, bienestar de las familias caficultoras y desarrollo rural.",
      path: "/sostenibilidad",
    }),
  component: lazyRouteComponent(
    () => import("@/components/site/section-pages"),
    "SustainabilityPage",
  ),
});
