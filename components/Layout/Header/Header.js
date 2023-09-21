import React from "react";
import { Logo } from "@/components/Branding/Logo";
import { Container } from "@/components/Layout/Container";
import { Navigation } from "@/components/Layout/Navigation";
import className from "classnames/bind";
import styles from "./Header.module.scss";
let cx = className.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")} id="#">
      <Container>
        <div className={cx("flex")}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
