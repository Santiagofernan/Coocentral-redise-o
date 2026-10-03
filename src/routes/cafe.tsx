import { createFileRoute } from "@tanstack/react-router";

import { CoffeePage } from "@/components/site/section-pages";

export const Route = createFileRoute("/cafe")({
  head: () => ({ meta: [{ title: "Café del Huila | Coocentral" }, { name: "description", content: "Conoce el café Coocentral, su cadena de valor y perfiles de origen." }] }),
  component: CoffeePage,
});