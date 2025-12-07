"use client";

import { getCampers } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar/Navbar";
import css from "./Catalog.module.css";
import CampersList from "../components/CampersItem/CampersList";
import { useCampersStore } from "@/lib/store/campersStore";
import { useEffect, useState } from "react";
import { CampersFilters } from "@/types/camper";

export default function Catalog() {
  const campers = useCampersStore((state) => state.campers);
  const setCampers = useCampersStore((state) => state.setCampers);
  const appendCampers = useCampersStore((state) => state.appendCampers);
  const page = useCampersStore((state) => state.page);
  const setPage = useCampersStore((state) => state.setPage);
  const nextPage = useCampersStore((state) => state.nextPage);
  const filters = useCampersStore((state) => state.filters);
  const setFilters = useCampersStore((state) => state.setFilters);
  const [selectedFilters, setSelectedFilters] = useState<CampersFilters>({});

  const handleLoadMore = () => nextPage();

  const handleApplyFilters = () => {
    setPage(1);
    setCampers([]);
    setFilters(selectedFilters);
  };

  const handleToggleCategory = (category: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      categories: prev.categories?.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...(prev.categories || []), category],
    }));
  };

  const { data } = useQuery({
    queryKey: ["campers", page, 4, filters],
    queryFn: () => getCampers(page, 4, filters),
  });

  useEffect(() => {
    if (!data) return;
    if (page === 1) setCampers(data.items);
    else appendCampers(data.items);
  }, [data, page, setCampers, appendCampers]);

  console.log(selectedFilters);
  console.log(filters);

  return (
    <section className={`container ${css.container}`}>
      <main className={css.main}>
        <Navbar
          selectFilters={handleApplyFilters}
          appendFilters={handleToggleCategory}
        ></Navbar>
        <CampersList
          onLoad={handleLoadMore}
          campers={campers}
          isAllLoaded={campers.length < (data?.total ?? 0)}
        ></CampersList>
      </main>
    </section>
  );
}
