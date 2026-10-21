import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/credito-y-cartera")({
  head: () =>
    createSeoHead({
      title: "Créditos para caficultores y asociados | Coocentral",
      description:
        "Conoce las líneas de crédito de Coocentral para asociados y clientes: requisitos, plazos, formas de pago y opciones para el sector cafetero.",
      path: "/credito-y-cartera",
    }),
  component: lazyRouteComponent(
    () => import("@/components/site/section-pages"),
    "CreditAndCarteraPage",
  ),
});
