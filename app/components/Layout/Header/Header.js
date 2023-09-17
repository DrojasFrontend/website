import React from "react";
import { Logo } from "../../Branding/Logo";
import { Container } from "../../Layout/Container";
import { Navigation } from "../../Layout/Navigation";
import className from "classnames/bind";
import styles from "./Header.module.scss";
let cx = className.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
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
