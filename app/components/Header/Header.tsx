"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
  ];

  return (
    <header className={css.header}>
      <div className="container">
        <Link className={css.logo} href="/">
          Travel<span>Trucks</span>
        </Link>
        <nav className={css.navigation}>
          {links.map((link) => (
            <Link
              key={link.name}
              className={`${css.link} ${path === link.href ? css.linkActive : ""}`}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
