import React from "react";
import Link from "next/link";
import className from "classnames/bind";
import styles from "./Navigation.module.scss";
let cx = className.bind(styles);

const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Cases",
    href: "#cases",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navigation = () => {
  return (
    <nav className={cx("menu")}>
      <ul className={cx("flex")}>
        {menu.map((item, idx) => (
          <li key={idx}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
