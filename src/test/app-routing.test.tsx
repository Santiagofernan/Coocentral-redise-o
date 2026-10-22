import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

async function loadAt(path: string) {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  await router.load();
  return router;
}

describe("App routing", () => {
  it("matches the index route", async () => {
    const router = await loadAt("/");

    expect(router.state.matches.some((match) => match.routeId === "/")).toBe(true);
  });

  it("keeps unknown paths outside the registered route matches", async () => {
    const router = await loadAt("/this-route-does-not-exist");

    expect(router.state.location.pathname).toBe("/this-route-does-not-exist");
    expect(router.state.matches.map((match) => match.routeId)).toEqual(["__root__"]);
  });
});
