import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { newsArchive } from "@/content/coocentral";

export function NewsArticlePage({ slug }: { slug: string }) {
  const article = newsArchive.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Noticias</p>
        <h1 className="mt-4 font-display text-3xl font-medium">No encontramos esta noticia</h1>
        <p className="mt-3 text-sm leading-6 text-ink/65">
          Puede que el enlace ya no esté disponible. Regresa al archivo para elegir otra
          publicación.
        </p>
        <Link
          to="/noticias"
          className="mt-7 inline-flex min-h-11 items-center gap-2 bg-forest px-5 text-sm font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Volver a Noticias
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-5xl px-5 py-12 lg:px-10 lg:py-16">
          <Link
            to="/noticias"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Volver al archivo de noticias
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center border border-brand/15 bg-paper px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-brand">
              {article.category}
            </span>
            <time
              dateTime={article.date}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/60"
            >
              <CalendarDays aria-hidden="true" className="size-4" />
              {article.dateLabel}
            </time>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70 lg:text-lg">
            {article.summary}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-12 lg:px-10 lg:py-16">
        <figure className="mb-10 overflow-hidden bg-sand">
          <img
            src={article.image}
            alt={article.imageAlt}
            fetchPriority="high"
            className="max-h-[38rem] w-full object-contain"
          />
          <figcaption className="border-t border-border bg-paper px-4 py-3 text-xs leading-5 text-ink/55">
            {article.imageAlt}
          </figcaption>
        </figure>
        <div className="space-y-6 text-base leading-8 text-ink/75">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-10 border-t border-border pt-5 text-xs leading-5 text-ink/50">
          Contenido adaptado para este archivo a partir de la publicación institucional de
          Coocentral del {article.dateLabel}.
        </p>
        <Link
          to="/noticias"
          className="mt-8 inline-flex min-h-11 items-center gap-2 border border-brand/20 px-4 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Volver a todas las noticias
        </Link>
      </article>
    </main>
  );
}
