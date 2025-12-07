import { getCampers } from "@/lib/api";
import CatalogClient from "./CatalogClient";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["campers", 1, 4, {}],
    queryFn: () => getCampers(1, 4, {}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
