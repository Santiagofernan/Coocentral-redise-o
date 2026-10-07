import { createFileRoute } from "@tanstack/react-router";

import { NewsArticlePage } from "@/components/site/news-article-page";

export const Route = createFileRoute("/noticia/$slug")({
  head: () => ({
    meta: [
      { title: "Noticias | Coocentral" },
      {
        name: "description",
        content: "Lee las noticias y publicaciones institucionales de Coocentral.",
      },
    ],
  }),
  component: NewsArticleRoute,
});

function NewsArticleRoute() {
  const { slug } = Route.useParams();
  return <NewsArticlePage slug={slug} />;
}
