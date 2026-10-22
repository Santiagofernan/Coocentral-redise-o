import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import socialPreview from "@/assets/Inicio/coocentral-50-anios-hero.webp";
import logo from "@/assets/coocentral-logo.svg";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFloatingButton } from "@/components/site/whatsapp-floating-button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          No pudimos cargar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal de nuestro lado. Intenta recargar o vuelve al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#009444" },
      { title: "Coocentral | Cooperativa de caficultores del Huila" },
      {
        name: "description",
        content:
          "Cooperativa de caficultores en Garzón, Huila. Acompañamos a productores de café con comercialización, servicios y desarrollo rural.",
      },
      { name: "author", content: "Coocentral" },
      { property: "og:site_name", content: "Coocentral" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:title", content: "Coocentral | Cooperativa de caficultores del Huila" },
      {
        property: "og:description",
        content:
          "Cooperativa de caficultores en Garzón, Huila. Acompañamos a productores de café con comercialización, servicios y desarrollo rural.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://coocentral.com${socialPreview}` },
      { property: "og:image:type", content: "image/webp" },
      { property: "og:image:width", content: "1952" },
      { property: "og:image:height", content: "806" },
      { property: "og:image:alt", content: "Coocentral, cooperativa de caficultores del Huila" },
      { name: "twitter:title", content: "Coocentral | Cooperativa de caficultores del Huila" },
      {
        name: "twitter:description",
        content:
          "Cooperativa de caficultores en Garzón, Huila. Acompañamos a productores de café con comercialización, servicios y desarrollo rural.",
      },
      { name: "twitter:image", content: `https://coocentral.com${socialPreview}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400..900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://coocentral.com/#organization",
        name: "Cooperativa Central de Caficultores del Huila",
        alternateName: "Coocentral",
        url: "https://coocentral.com/",
        logo: `https://coocentral.com${logo}`,
        description:
          "Cooperativa de caficultores con sede en Garzón, Huila, que acompaña a productores de café y sus familias.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Centro Comercial El Molino, Carrera 12 No. 2-56",
          addressLocality: "Garzón",
          addressRegion: "Huila",
          addressCountry: "CO",
        },
        telephone: ["+57 311 538 6395", "+57 318 612 8444"],
        email: "info@coocentral.co",
        sameAs: [
          "https://www.facebook.com/coocentral",
          "https://instagram.com/coocentral",
          "https://www.youtube.com/@CoocentralSistemas",
          "https://www.tiktok.com/@coocentral",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://coocentral.com/#website",
        url: "https://coocentral.com/",
        name: "Coocentral",
        inLanguage: "es-CO",
        publisher: { "@id": "https://coocentral.com/#organization" },
      },
    ],
  };

  return (
    <QueryClientProvider client={queryClient}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <WhatsAppFloatingButton />
    </QueryClientProvider>
  );
}
