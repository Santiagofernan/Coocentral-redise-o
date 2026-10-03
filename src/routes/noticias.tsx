import { createFileRoute } from "@tanstack/react-router";

import { NewsPage } from "@/components/site/section-pages";

export const Route = createFileRoute("/noticias")({
  head: () => ({ meta: [{ title: "Noticias | Coocentral" }, { name: "description", content: "Noticias, convocatorias y publicaciones de la comunidad cafetera de Coocentral." }] }),
  component: NewsPage,
});
