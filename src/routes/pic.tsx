import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/pic")({
  head: () =>
    createSeoHead({
      title: "Parque Industrial del Café (PIC) | Coocentral",
      description:
        "Conoce el Parque Industrial del Café de Coocentral en el Huila y sus procesos de transformación y valor agregado para el café.",
      path: "/pic",
    }),
  component: lazyRouteComponent(() => import("@/components/site/pic-page"), "PicPage"),
});
