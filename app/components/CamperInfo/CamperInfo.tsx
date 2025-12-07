import { Camper } from "@/types/camper";
import css from "./CamperInfo.module.css";
import Link from "next/link";
import Image from "next/image";

interface CamperInfoProps {
  camper: Camper | undefined;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  const iconsMap: Record<string, string> = {
    AC: "AC",
    bathroom: "bathroom",
    kitchen: "kitchen",
    TV: "TV",
    radio: "radio",
    refrigerator: "fridge",
    microwave: "microwave",
    gas: "gas",
    water: "water",
  };
  return (
    <>
      <div className={css.nameWrapper}>
        <h2 className={css.title}>{camper?.name}</h2>
        <div>
          <Link
            className={css.ratingLink}
            href={`/campers/${camper?.id}`}
          >{`${camper?.rating}(${camper?.reviews.length} Reviews)`}</Link>
          <svg>
            <use href="/sprite.svg#star"></use>
          </svg>
        </div>
        <div className={css.locationWrapper}>
          <svg>
            <use href="/sprite.svg#map"></use>
          </svg>
          <span>{camper?.location}</span>
        </div>
        <span className={css.price}>{`€${camper?.price}.00`}</span>
      </div>
      {camper?.gallery.map((img) => (
        <Image
          key={img.original}
          src={img.original}
          alt={`${img.original} picture`}
          width={292}
          height={320}
        ></Image>
      ))}
      <p>{camper?.description}</p>
      <button>Features</button>
      <button>Reviews</button>
      <div>
        <ul className={css.categoryList}>
          {/* {camper.
            ?.filter(([, value]) => value === true)
            ?.map(([key]) => {
              const capitalize = key.charAt(0).toUpperCase() + key.slice(1);
              const iconId = iconsMap[key];
              if (!iconId) return null;
              return (
                <li className={css.categoryItem} key={key}>
                  <svg>
                    <use href={`/sprite.svg#${iconId}`} />
                  </svg>
                  <span>{capitalize}</span>
                </li>
              );
            })}
          ; */}
        </ul>
      </div>
    </>
  );
}
