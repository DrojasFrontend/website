import React from "react";
import Image from "next/image";
import className from "classnames/bind";
import styles from "./CardsDefault.module.scss";
let cx = className.bind(styles);
import { Heading } from "@/components/UI/Heading";
import { FontWeightSelector } from "@/components/UI/FontWeightSelector";
import { Container } from "@/components/Layout/Container";

import iconMobile from "/public/icon-mobile.svg";
import iconLightning from "/public/icon-lightning.svg";
import iconFrontEnd from "/public/icon-front-end.svg";
import iconDesktop from "/public/icon-desktop.svg";
import iconGithub from "/public/icon-github.svg";
import iconCodeLg from "/public/icon-code-lg.svg";

const Cards = () => {
  return (
    <section className={cx("wrapper")}>
      <Container>
        <div className={cx("flex")}>
          <Heading level="h2" font="Sharp" className="fz-64">
            Experience
          </Heading>
          <p>
            <FontWeightSelector>Transform design</FontWeightSelector> into web
            pages with agility, quality and <FontWeightSelector>high performance.</FontWeightSelector>
          </p>
        </div>
        <div className={cx("grid")}>
          <div className={cx("card")}>
            <Image src={iconDesktop} width={36} height={32} alt="iconMobile" />
            <h3 className="fz-30">
              <FontWeightSelector>Beyond the front-end</FontWeightSelector>
            </h3>
            <p className="color-gray-dark">
              Highly skilled at progressive enhancement, design systems & UI
              development.
            </p>
          </div>
          <div className={cx("card")}>
            <Image
              src={iconLightning}
              width={19}
              height={26}
              alt="iconLightning"
            />
            <h3 className="fz-30">
              <FontWeightSelector>Frameworks</FontWeightSelector>
            </h3>
            <p className="color-gray-dark">Familiar with various front-end frameworks and libraries.</p>
          </div>
          <div className={cx("card")}>
            <Image src={iconCodeLg} width={32} height={34} alt="iconFrontEnd" />
            <h3 className="fz-30">
              <FontWeightSelector>Code</FontWeightSelector>
            </h3>
            <p className="color-gray-dark">Experience in core programming languages for web development.</p>
          </div>
          <div className={cx("card")}>
            <Image src={iconMobile} width={32} height={43} alt="iconDesktop" />
            <h3 className="fz-30">
              <FontWeightSelector>Responsive Design</FontWeightSelector>
            </h3>
            <p className="color-gray-dark">
              Keen eye for detail and strong understanding of user experience.
            </p>
          </div>
          <div className={cx("card")}>
            <Image src={iconFrontEnd} width={30} height={22} alt="iconCode" />
            <h3 className="fz-30">
              <FontWeightSelector>Optimization</FontWeightSelector>
            </h3>
            <p className="color-gray-dark">SEO techniques to promote better ranking of your pages.</p>
          </div>
          <div className={cx("card")}>
            <Image src={iconGithub} width={32} height={37} alt="iconCode" />
            <h3 className="fz-30">
              <FontWeightSelector>UI Design</FontWeightSelector>
            </h3>
            <p className="color-gray-dark">Interfaces for websites and applications.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cards;
