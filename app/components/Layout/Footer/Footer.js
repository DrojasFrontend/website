import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/Layout/Container";
import { Heading } from "@/app/components/UI/Heading";
import { Logo } from "@/app/components/Branding/Logo";

import className from "classnames/bind";
import styles from "./Footer.module.scss";
let cx = className.bind(styles);

import iconLinkedinFooter from "/public/icon-linkedin.svg";
import iconLaptopFooter from "/public/icon-laptop-code-footer.svg";
import iconGithubFooter from "/public/icon-github-footer.svg";

const Footer = () => {
  return (
    <footer>
      <div className={cx("wrapper")}>
        <Container>
          <div className={cx("top")}>
            <div className={cx("top__copy")}>
              <Heading level="h2" font="Sharp" className="fz-30">
                Let’s talk about programming, design, or one of my hobbies like
                football or books?
              </Heading>
            </div>
            <ul>
              <li>
                <Image
                  src={iconLinkedinFooter}
                  width={20}
                  height={23}
                  alt="iconLinkedinFooter"
                />
                <Link href="#">Linkedin</Link>
              </li>
              <li>
                <Image
                  src={iconGithubFooter}
                  width={20}
                  height={21}
                  alt="iconLaptopFooter"
                />
                <Link href="#">GitHub</Link>
              </li>
              <li>
                <Image
                  src={iconLaptopFooter}
                  width={24}
                  height={17}
                  alt="iconGithubFooter"
                />
                <Link href="#">My Work</Link>
              </li>
            </ul>
          </div>
          <div className={cx("bottom")}>
            <Logo/>
            <p className="fz-14 color-white">
            Copyright 2023 - All rights reserved to Daniel rojas astood
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
