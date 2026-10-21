import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

import { creditProductDetails } from "@/content/coocentral";
import { createSeoHead } from "@/lib/seo";

const CreditProductPage = lazyRouteComponent(
  () => import("@/components/site/section-pages"),
  "CreditProductPage",
);

export const Route = createFileRoute("/linea-credito/$slug")({
  head: ({ params }) => {
    const product = creditProductDetails.find((item) => item.slug === params.slug);

    return createSeoHead({
      title: product
        ? `${product.name} | Crédito Coocentral`
        : "Líneas de crédito para caficultores | Coocentral",
      description: product
        ? `${product.summary} Conoce requisitos y plazo con Coocentral.`
        : "Consulta las líneas de crédito de Coocentral para asociados y productores del sector cafetero.",
      path: `/linea-credito/${params.slug}`,
      noIndex: !product,
    });
  },
  component: CreditProductRoute,
});

function CreditProductRoute() {
  const { slug } = Route.useParams();

  return <CreditProductPage slug={slug} />;
}
