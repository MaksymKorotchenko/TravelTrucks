"use client";

import { getCamperById } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CamperDetailsClient.module.css";
import CamperInfo from "@/app/components/CamperInfo/CamperInfo";
import CamperFeatures from "@/app/components/CamperFeatures/CamperFeatures";
import { useState } from "react";
import BookForm from "@/app/components/BookForm/BookForm";
import CamperReviews from "@/app/components/CamperReviews/CamperReviews";

export default function CamperDetailsClient() {
  const [isFeaturesActive, setIsFeaturesActive] = useState(true);
  const { id } = useParams<{ id: string }>();

  const toggleFeaturesComponent = () => {
    setIsFeaturesActive(!isFeaturesActive);
  };

  const { data } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
    placeholderData: keepPreviousData,
  });
  return (
    <div className="container">
      <main className={css.mainWrapper}>
        <CamperInfo
          toogleButton={toggleFeaturesComponent}
          isFeaturesActive={isFeaturesActive}
          camper={data}
        ></CamperInfo>
        <div className={css.detailsWrapper}>
          {isFeaturesActive ? (
            <CamperFeatures camper={data}></CamperFeatures>
          ) : (
            <CamperReviews camper={data}></CamperReviews>
          )}
          <BookForm></BookForm>
        </div>
      </main>
    </div>
  );
}
