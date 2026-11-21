import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CooperativePage } from "@/components/site/section-pages";
import { cooperativeResources } from "@/content/coocentral";

describe("Cooperative documents", () => {
  it("opens document resources in a new tab and keeps internal links in the current tab", () => {
    render(<CooperativePage />);

    const documentResources = cooperativeResources.filter(({ href }) =>
      href.startsWith("/documentos/"),
    );

    for (const resource of documentResources) {
      const link = screen.getByRole("link", { name: new RegExp(resource.label) });

      expect(link).toHaveAttribute("href", resource.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }

    const internalLink = screen.getByRole("link", { name: /Crédito y cartera/ });
    expect(internalLink).not.toHaveAttribute("target");
  });
});
