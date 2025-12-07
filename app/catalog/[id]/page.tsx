import { getCamperById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import CamperDetailsClient from "./CamperDetailsClient";

type CamperDetails = {
  params: Promise<{ id: string }>;
};

export default async function CamperDetails({ params }: CamperDetails) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
}
