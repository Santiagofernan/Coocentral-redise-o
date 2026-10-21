import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/coworking")({
  head: () =>
    createSeoHead({
      title: "Coworking en Garzón, Huila | Coocentral",
      description:
        "Conoce el espacio de coworking Martha Stella Velásquez de Coocentral en Garzón: instalaciones, servicios y canales de contacto.",
      path: "/coworking",
    }),
  component: lazyRouteComponent(() => import("@/components/site/coworking-page"), "CoworkingPage"),
});
