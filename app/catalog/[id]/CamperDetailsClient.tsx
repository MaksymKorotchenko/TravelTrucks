"use client";

import { getCamperById } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CamperDetailsClient.module.css";
import Link from "next/link";
import CamperInfo from "@/app/components/CamperInfo/CamperInfo";

export default function CamperDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
    placeholderData: keepPreviousData,
  });
  return (
    <main>
      <section>
        <div className="container">
          <CamperInfo camper={data}></CamperInfo>
        </div>
      </section>
    </main>
  );
}
