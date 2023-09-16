import React from "react";
import { Container, Logo, Navigation } from "../..";
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
