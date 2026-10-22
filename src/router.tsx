import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import { RoutePending } from "@/components/site/route-pending";

import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPendingComponent: RoutePending,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
