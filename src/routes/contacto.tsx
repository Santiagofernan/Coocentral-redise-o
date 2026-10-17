import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site/contact-page";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Coocentral" },
      {
        name: "description",
        content:
          "Comunícate directamente con Coocentral por correo, teléfono, WhatsApp o en nuestra oficina principal.",
      },
    ],
  }),
  component: ContactPage,
});
