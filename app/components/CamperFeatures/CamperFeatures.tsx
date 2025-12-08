import { Camper } from "@/types/camper";
import css from "./CamperFeatures.module.css";

type CamperFeaturesProps = {
  camper: Camper | undefined;
};

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

const vehicleDetailsConfig: Record<string, string> = {
  Form: "form",
  Length: "length",
  Width: "width",
  Height: "height",
  Tank: "tank",
  Consumption: "consumption",
};

export default function CamperFeatures({ camper }: CamperFeaturesProps) {
  return (
    <section className={css.featuresWrapper}>
      <ul className={css.categoryList}>
        {Object.entries(camper || {})
          .filter(([key, value]) => iconsMap[key] && value === true)
          .map(([key]) => {
            const capitalize = key.charAt(0).toUpperCase() + key.slice(1);
            const iconId = iconsMap[key];
            return (
              <li className={css.categoryItem} key={key}>
                <svg>
                  <use href={`/sprite.svg#${iconId}`} />
                </svg>
                <span className={css.featureText}>{capitalize}</span>
              </li>
            );
          })}
      </ul>
      <div className={css.detailsWrapper}>
        <h2 className={css.title}>Vehicle details</h2>
        <hr />
        <dl className={css.detailsList}>
          {camper &&
            Object.entries(vehicleDetailsConfig).map(([label, camperKey]) => {
              const value = camper[camperKey as keyof Camper];
              return (
                <div key={label} className={css.detailItem}>
                  <dt className={css.detailsLabel}>{label}</dt>
                  <dd className={css.detailsValue}>{String(value)}</dd>
                </div>
              );
            })}
        </dl>
      </div>
    </section>
  );
}
