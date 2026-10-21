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
    expect(structuredData).toMatchObject({
      "@type": "WebPage",
      url: `${siteUrl}/cooperativa`,
      inLanguage: "es-CO",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
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
