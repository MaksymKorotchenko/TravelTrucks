import css from "./Navbar.module.css";

export default function Navbar() {
  return (
    <aside className={css.navbar}>
      <div className={css.locationWrapper}>
        <label className={css.locationLabel} htmlFor="location">
          Location
        </label>
        <input
          name="location"
          id="location"
          className={css.locationInput}
          type="text"
        />
      </div>
      <span className={css.filtersText}>Filters</span>
      <div className={css.filtersWrapper}>
        <legend className={css.equipmentLabel}>Vehicle equipment</legend>
        <hr />
        <fieldset className={css.equipmentWrapper}>
          <ul className={css.equipmentList}>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#wind"></use>
              </svg>
              <span>AC</span>
            </li>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#diagram"></use>
              </svg>
              <span>Automatic</span>
            </li>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#cup"></use>
              </svg>
              <span>Kitchen</span>
            </li>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#tv"></use>
              </svg>
              <span>TV</span>
            </li>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#shower"></use>
              </svg>
              <span>Bathroom</span>
            </li>
          </ul>
        </fieldset>
      </div>

      <div className={css.filtersWrapper}>
        <legend className={css.equipmentLabel}>Vehicle type</legend>
        <hr />
        <fieldset className={css.typeWrapper}>
          <ul className={css.equipmentList}>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#grid3"></use>
              </svg>
              <span>Van</span>
            </li>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#grid2"></use>
              </svg>
              <span>Fully Integrated</span>
            </li>
            <li className={css.equipmentItem}>
              <svg>
                <use href="/sprite.svg#grid"></use>
              </svg>
              <span>Alcove</span>
            </li>
          </ul>
        </fieldset>
      </div>
      <button className="button">Search</button>
    </aside>
  );
}
