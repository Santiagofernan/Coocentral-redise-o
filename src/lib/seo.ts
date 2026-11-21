export const siteUrl = "https://coocentral.com";

export function createSeoHead({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}) {
  const canonicalUrl = `${siteUrl}${path}`;
  const breadcrumbPages = [
    { name: "Inicio", url: `${siteUrl}/` },
    ...(path.startsWith("/linea-credito/")
      ? [{ name: "Crédito y cartera", url: `${siteUrl}/credito-y-cartera` }]
      : []),
    ...(path === "/" ? [] : [{ name: title, url: canonicalUrl }]),
  ];
  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: "es-CO",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    ...(path === "/"
      ? {}
      : {
          breadcrumb: {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: breadcrumbPages.map((page, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: page.name,
              item: page.url,
            })),
          },
        }),
  };

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noIndex ? "noindex,follow" : "index,follow,max-image-preview:large",
      },
      { property: "og:site_name", content: "Coocentral" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:url", content: canonicalUrl },
      { name: "twitter:image:alt", content: "Instalaciones de Coocentral en el Huila" },
      { "script:ld+json": webPageStructuredData },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
