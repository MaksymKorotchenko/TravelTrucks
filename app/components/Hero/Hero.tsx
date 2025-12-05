"use client";

import css from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={css.imageWrapper}>
        <div className="container">
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Link href={"/catalog"} className="button">
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
