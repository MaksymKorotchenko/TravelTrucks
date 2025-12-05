"use client";

import { getCampers } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import css from "./Catalog.module.css";
import CampersItem from "../components/CampersItem/CampersItem";
import { Camper } from "@/types/camper";

export default function Catalog() {
  // const [page, setPage] = useState(1);
  // const [campers, setCampers] = useState<Camper[] | null>(null);

  const { data } = useQuery({
    queryKey: ["campers", { page: 1 }],
    queryFn: () => getCampers(1),
    placeholderData: keepPreviousData,
  });

  console.log(data);

  return (
    <div>
      <section className={`container ${css.container}`}>
        <Navbar></Navbar>
        <main>
          <CampersItem campers={data || []}></CampersItem>
        </main>
      </section>
    </div>
  );
}
