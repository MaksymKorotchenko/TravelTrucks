import { Camper } from "@/types/camper";
import css from "./Navbar.module.css";

interface NavbarProps {
  selectFilters: () => void;
  appendFilters: (name: string) => void;
  campers: Camper[];
}

export default function Navbar({ appendFilters, selectFilters }: NavbarProps) {
  const categoryNames = [
    "AC",
    "automatic",
    "kitchen",
    "TV",
    "bathroom",
    "water",
    "gas",
    "radio",
  ];

  const formMap = {
    Van: "panelTruck",
    "Fully Integrated": "fullyIntegrated",
    Alcove: "alcove",
  };

  const locationMap = {
    Kyiv: "Ukraine, Kyiv",
    Poltava: "Ukraine, Poltava",
    Dnipro: "Ukraine, Dnipro",
    Odesa: "Ukraine, Odesa",
    Kharkiv: "Ukraine, Kharkiv",
    Sumy: "Ukraine, Sumy",
    Lviv: "Ukraine, Lviv",
  };

  return (
    <aside className={css.navbar}>
      <div className={css.locationWrapper}>
        <label className={css.locationLabel} htmlFor="location">
          Location
        </label>
        <svg>
          <use href="/sprite.svg#map"></use>
        </svg>
        <select name="location" id="location" className={css.locationInput}>
          {Object.values(locationMap).map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <span className={css.filtersText}>Filters</span>
      <div className={css.filtersWrapper}>
        <legend className={css.equipmentLabel}>Vehicle equipment</legend>
        <hr />
        <fieldset className={css.equipmentWrapper}>
          <ul className={css.equipmentList}>
            {categoryNames.map((filter) => {
              const capitalize =
                filter.charAt(0).toUpperCase() + filter.slice(1);
              return (
                <li
                  onClick={() => appendFilters(filter)}
                  key={filter}
                  className={css.equipmentItem}
                >
                  <svg>
                    <use href={`/sprite.svg#${filter}`}></use>
                  </svg>
                  <span>{capitalize}</span>
                </li>
              );
            })}
          </ul>
        </fieldset>
      </div>

      <div className={css.filtersWrapper}>
        <legend className={css.equipmentLabel}>Vehicle type</legend>
        <hr />
        <fieldset className={css.typeWrapper}>
          <ul className={css.equipmentList}>
            {Object.entries(formMap).map(([label, value]) => (
              <li
                onClick={() => appendFilters(value)}
                key={value}
                className={css.equipmentItem}
              >
                <svg>
                  <use href={`/sprite.svg#${value}`}></use>
                </svg>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
      <button onClick={() => selectFilters()} className="button">
        Search
      </button>
    </aside>
  );
}
