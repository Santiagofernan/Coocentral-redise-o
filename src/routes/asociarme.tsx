import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/asociarme")({
  head: () =>
    createSeoHead({
      title: "Cómo asociarte a Coocentral | Requisitos y beneficios",
      description:
        "Conoce los requisitos, compromisos y beneficios para asociarte a Coocentral como caficultor del centro del Huila.",
      path: "/asociarme",
    }),
  component: lazyRouteComponent(() => import("@/components/site/section-pages"), "MembershipPage"),
});
