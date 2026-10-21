export const siteUrl = "https://coocentral.com";

export function createSeoHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
