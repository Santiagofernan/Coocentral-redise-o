import { describe, expect, it } from "vitest";

import { createSeoHead, siteUrl } from "@/lib/seo";

describe("SEO head metadata", () => {
  it("creates canonical social metadata and connected WebPage structured data", () => {
    const head = createSeoHead({
      title: "Coocentral | Cooperativa de caficultores del Huila",
      description: "Conoce Coocentral y sus servicios para las familias caficultoras del Huila.",
      path: "/cooperativa",
    });
    const structuredData = head.meta.find(
      (item): item is { "script:ld+json": Record<string, unknown> } => "script:ld+json" in item,
    )?.["script:ld+json"];

    expect(head.links).toContainEqual({
      rel: "canonical",
      href: `${siteUrl}/cooperativa`,
    });
    expect(head.meta).toContainEqual({
      property: "og:url",
      content: `${siteUrl}/cooperativa`,
    });
    expect(head.meta).toContainEqual({
      name: "robots",
      content: "index,follow,max-image-preview:large",
    });
    expect(head.meta).toContainEqual({
      name: "twitter:url",
      content: `${siteUrl}/cooperativa`,
    });
    expect(head.meta).toContainEqual({
      name: "twitter:card",
      content: "summary_large_image",
    });
    expect(structuredData).toMatchObject({
      "@type": "WebPage",
      url: `${siteUrl}/cooperativa`,
      inLanguage: "es-CO",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Coocentral | Cooperativa de caficultores del Huila",
            item: `${siteUrl}/cooperativa`,
          },
        ],
      },
    });
  });

  it("includes the credit overview in product-page breadcrumbs", () => {
    const head = createSeoHead({
      title: "Futurito | Crédito Coocentral",
      description: "Crédito en efectivo para apoyar la recolección de café.",
      path: "/linea-credito/futurito",
    });
    const structuredData = head.meta.find(
      (item): item is { "script:ld+json": Record<string, unknown> } => "script:ld+json" in item,
    )?.["script:ld+json"];

    expect(structuredData).toMatchObject({
      breadcrumb: {
        itemListElement: [
          { position: 1, name: "Inicio", item: `${siteUrl}/` },
          { position: 2, name: "Crédito y cartera", item: `${siteUrl}/credito-y-cartera` },
          {
            position: 3,
            name: "Futurito | Crédito Coocentral",
            item: `${siteUrl}/linea-credito/futurito`,
          },
        ],
      },
    });
  });

  it("marks unknown dynamic credit pages as non-indexable", () => {
    const head = createSeoHead({
      title: "Línea de crédito | Coocentral",
      description: "Consulta las líneas de crédito de Coocentral.",
      path: "/linea-credito/desconocida",
      noIndex: true,
    });

    expect(head.meta).toContainEqual({
      name: "robots",
      content: "noindex,follow",
    });
  });
});
