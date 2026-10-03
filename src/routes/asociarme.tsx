import { createFileRoute } from "@tanstack/react-router";

import { MembershipPage } from "@/components/site/section-pages";

export const Route = createFileRoute("/asociarme")({
  head: () => ({ meta: [{ title: "Asociarme | Coocentral" }, { name: "description", content: "Conoce los beneficios y requisitos para asociarte a Coocentral." }] }),
  component: MembershipPage,
});