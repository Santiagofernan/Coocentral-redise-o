import { createFileRoute } from "@tanstack/react-router";

import { History } from "@/components/site/history";
import { PageIntro } from "@/components/site/section-pages";

export const Route = createFileRoute("/historia")({
  head: () => ({ meta: [{ title: "Historia | Coocentral" }, { name: "description", content: "Recorre cinco décadas de historia de Coocentral y la caficultura del Huila." }] }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <main>
      <PageIntro eyebrow="1975—2025" title="Una historia construida por caficultores" description="De 54 pioneros en Garzón a una cooperativa que conecta familias, producción y desarrollo en el Huila." />
      <History />
    </main>
  );
}