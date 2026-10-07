import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/site/contact-page";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Coocentral" },
      {
        name: "description",
        content:
          "Comunícate con Coocentral mediante el formulario de contacto, correo, teléfono o en nuestra oficina principal.",
      },
    ],
  }),
  component: ContactPage,
});
