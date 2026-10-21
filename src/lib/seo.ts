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
  };

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(noIndex ? [{ name: "robots", content: "noindex,follow" }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { "script:ld+json": webPageStructuredData },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
