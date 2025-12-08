import { Camper } from "@/types/camper";
import Link from "next/link";
import Image from "next/image";
import css from "./CampersList.module.css";

type CampersProps = {
  campers: Camper[];
  onLoad: () => void;
  isAllLoaded: boolean;
};

export default function CampersList({
  campers,
  onLoad,
  isAllLoaded,
}: CampersProps) {
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
    <div className={css.mainWrapper}>
      <ul className={css.cardsList}>
        {campers.map((camper) => (
          <li className={css.cardItem} key={`${camper.id}`}>
            <div className={css.cardWrapper}>
              <div className={css.imageWrapper}>
                <Image
                  className={css.image}
                  src={camper.gallery[0].thumb}
                  alt={`${camper.name} picture`}
                  width={292}
                  height={320}
                  priority={true}
                  loading="eager"
                ></Image>
              </div>
              <div className={css.contentWrapper}>
                <div className={css.nameWrapper}>
                  <h2 className={css.title}>{camper.name}</h2>
                  <div>
                    <span className={css.price}>{`€${camper.price}.00`}</span>
                    <svg>
                      <use href="/sprite.svg#heart"></use>
                    </svg>
                  </div>
                </div>
                <div className={css.ratingWrapper}>
                  <div className={css.starWrapper}>
                    <svg>
                      <use href="/sprite.svg#star"></use>
                    </svg>
                    <Link
                      className={css.ratingLink}
                      href={`/catalog/${camper.id}`}
                    >{`${camper.rating}(${camper.reviews.length} Reviews)`}</Link>
                  </div>
                  <div className={css.locationWrapper}>
                    <svg>
                      <use href="/sprite.svg#map"></use>
                    </svg>
                    <span>{camper.location}</span>
                  </div>
                </div>
                <p className={css.description}>{camper.description}</p>
                <ul className={css.categoryList}>
                  {Object.entries(camper)
                    .filter(([, value]) => value === true)
                    .map(([key]) => {
                      const capitalize =
                        key.charAt(0).toUpperCase() + key.slice(1);
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
                </ul>
                <Link className={`button`} href={`/catalog/${camper.id}`}>
                  Show more
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isAllLoaded && (
        <button onClick={onLoad} className={`button ${css.loadButton}`}>
          Load more
        </button>
      )}
    </div>
  );
}
