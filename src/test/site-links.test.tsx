import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import {
  benefits,
  cooperativeResources,
  footerColumns,
  navigation,
  serviceShowcase,
  creditProductDetails,
} from "@/content/coocentral";

describe("site navigation targets", () => {
  it("uses only routes that are defined by the application", () => {
    const routes = new Set([
      "/",
      "/almacenes",
      "/area-de-cafe",
      "/asociarme",
      "/cafe",
      "/contacto",
      "/cooperativa",
      "/coworking",
      "/credito-y-cartera",
      "/historia",
      "/linea-credito/$slug",
      "/pic",
      "/servicios",
      "/sostenibilidad",
      "/tiendas-kahve",
    ]);
    const internalTargets = [
      ...navigation.map(({ href }) => href),
      ...cooperativeResources.map(({ href }) => href),
      ...footerColumns.flatMap(({ links }) => links.map(({ href }) => href)),
      ...serviceShowcase.flatMap(({ href }) => (href?.startsWith("/") ? [href] : [])),
      ...creditProductDetails.map(({ slug }) => `/linea-credito/${slug}`),
    ];
    const anchors = new Set([
      "administracion-control",
      "beneficio-exequial",
      ...benefits.map(({ id }) => `beneficio-${id}`),
      "cadena-cafe",
      "encuentranos",
      "explora-servicios",
      "historia",
      "impacto",
      "oficinas-y-horarios",
      "puntos-de-compra",
      "quienes-somos",
      "recursos",
      "requisitos",
      "servicios-agropecuarios",
      "triple-impacto",
      "verificacion",
      ...serviceShowcase.map(({ id }) => id),
    ]);

    for (const target of internalTargets) {
      const [routePart, fragment] = target.split("#");
      const route = routePart || "/";
      if (route.startsWith("/documentos/") || route.startsWith("/denuncias/")) {
        expect(
          existsSync(resolve(process.cwd(), "public", route.slice(1))),
          `missing local file for ${target}`,
        ).toBe(true);
      } else {
        const isCreditDetailRoute = route.startsWith("/linea-credito/");
        expect(
          routes.has(route) || (isCreditDetailRoute && routes.has("/linea-credito/$slug")),
          `unmatched route for ${target}`,
        ).toBe(true);
      }
      if (fragment) {
        expect(anchors.has(fragment), `unmatched fragment for ${target}`).toBe(true);
      }
    }
  });

  it("has unique benefit anchors and service section targets", () => {
    const benefitIds = benefits.map(({ id }) => `beneficio-${id}`);
    const serviceIds = serviceShowcase.map(({ id }) => id);

    expect(new Set(benefitIds).size).toBe(benefitIds.length);
    expect(new Set(serviceIds).size).toBe(serviceIds.length);
    expect(benefitIds).toContain("beneficio-salud-visual");
    expect(benefitIds).toContain("beneficio-educacion-superior");
  });
});
