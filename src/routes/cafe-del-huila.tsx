import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/cafe-del-huila")({
  head: () =>
    createSeoHead({
      title: "Cafés del Huila: origen y caficultores | Coocentral",
      description:
        "Conoce el café del Huila desde el centro del departamento: familias caficultoras, municipios de origen y la labor de Coocentral.",
      path: "/cafe-del-huila",
    }),
  component: lazyRouteComponent(
    () => import("@/components/site/cafe-del-huila-page"),
    "CafeDelHuilaPage",
  ),
});
