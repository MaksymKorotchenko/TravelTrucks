import { Camper } from "@/types/camper";
import css from "./CamperInfo.module.css";
import Link from "next/link";
import Image from "next/image";

interface CamperInfoProps {
  camper: Camper | undefined;
  isFeaturesActive: boolean;
  toogleButton: () => void;
}
export default function CamperInfo({
  camper,
  isFeaturesActive,
  toogleButton,
}: CamperInfoProps) {
  return (
    <>
      <section className={css.cardWrapper}>
        <div className={css.nameWrapper}>
          <h1 className={css.title}>{camper?.name}</h1>
          <div className={css.ratingWrapper}>
            <div>
              <svg>
                <use href="/sprite.svg#star"></use>
              </svg>
              <Link
                className={css.ratingLink}
                href={`/catalog/${camper?.id}`}
              >{`${camper?.rating}(${camper?.reviews.length} Reviews)`}</Link>
            </div>
            <div className={css.locationWrapper}>
              <svg>
                <use href="/sprite.svg#map"></use>
              </svg>
              <span className={css.location}>{camper?.location}</span>
            </div>
          </div>
          <span className={css.price}>{`€${camper?.price}.00`}</span>
        </div>
        <div className={css.imageWrapper}>
          {camper?.gallery.map((img) => (
            <Image
              className={css.image}
              key={img.original}
              src={img.original}
              alt={`${img.original} picture`}
              width={292}
              height={320}
              priority={true}
              loading="eager"
            ></Image>
          ))}
        </div>
        <p className={css.description}>{camper?.description}</p>
      </section>
      <div className={`${css.navWrapper}`}>
        <button
          onClick={toogleButton}
          className={`${css.navBtn} ${isFeaturesActive ? css.featuresBtn : ""}`}
        >
          Features
        </button>
        <button
          onClick={toogleButton}
          className={`${css.navBtn} ${isFeaturesActive ? "" : css.reviewsBtn}`}
        >
          Reviews
        </button>
      </div>
    </>
  );
}
