import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Layout/Container";
import { Heading } from "@/components/UI/Heading";
import { Logo } from "@/components/Branding/Logo";

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
                WANT TO SEE MORE WORKS? DISCUSS A NEW PROJECT? LET'S HAVE A
                CHAT.
              </Heading>
              <Link className="color-white" href="mailto:danielrojas243@gmail.com">danielrojas243@gmail.com</Link>
            </div>
            <ul>
              <li>
                <Image
                  src={iconLinkedinFooter}
                  width={20}
                  height={23}
                  alt="iconLinkedinFooter"
                />
                <Link
                  href="https://www.linkedin.com/in/daniel-rojas-astood-6a3198150/"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Image
                  src={iconGithubFooter}
                  width={20}
                  height={21}
                  alt="iconLaptopFooter"
                />
                <Link href="https://github.com/DrojasFrontend" target="_blank">
                  GitHub
                </Link>
              </li>
              <li>
                <Image
                  src={iconLaptopFooter}
                  width={24}
                  height={17}
                  alt="iconGithubFooter"
                />
                <Link href="/cases">My Work</Link>
              </li>
            </ul>
          </div>
          <div className={cx("bottom")}>
            <Logo />
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
