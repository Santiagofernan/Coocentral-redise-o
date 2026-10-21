import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    createSeoHead({
      title: "Contacto Coocentral | Oficina en Garzón, Huila",
      description:
        "Contacta a Coocentral por teléfono, WhatsApp o correo. Encuentra nuestra oficina principal en Garzón, Huila.",
      path: "/contacto",
    }),
  component: lazyRouteComponent(() => import("@/components/site/contact-page"), "ContactPage"),
});
