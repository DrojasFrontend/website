import React from "react";
import Image from "next/legacy/image";
import { Container } from "@/components/Layout/Container";
import { Heading } from "@/components/UI/Heading";
import { FontWeightSelector } from "@/components/UI/FontWeightSelector";

import className from "classnames/bind";
import styles from "./ImageTextBlock.module.scss";
let cx = className.bind(styles);

import DanielRojas from "/public/images/pexels-oladimeji-ajegbile-4930018.jpg";
import iconCode from "/public/icon-code-lg.svg";
import iconLightning from "/public/icon-lightning.svg";
import iconFrontEnd from "/public/icon-front-end.svg";

const ImageTextBlock = () => {
  return (
    <section className={cx("wrapper")} id="about">
      <Container>
        <div className={cx("grid")}>
          <figure>
            <Image
              src={DanielRojas}
              layout="fill"
              objectFit="cover"
              quality={75}
              alt="front end"
              priority={true}
            />
          </figure>
          <div className={cx("copy")}>
            <p className="fz-20">
              <FontWeightSelector>Hello, nice to meet you</FontWeightSelector>
              <span className={cx("icon")}>👋</span>
            </p>
            <Heading level="h3" font="Sharp" className="fz-30">
              Daniel Rojas Astood
            </Heading>

            <p className="fz-20">
              <FontWeightSelector>Front-end Developer</FontWeightSelector>
            </p>
            <p className="color-gray-dark">
              I'm a Computer Science graduate at Simon Bolivar University in
              Colombia, Atlantico and I've been working as a front-end developer
              for 8 years. My experiences in the area of programming made me
              evolve as a professional and programming became my favorite hobby.
            </p>
            <ul className={cx("grid-3")}>
              <li>
                <Image
                  src={iconLightning}
                  width={19}
                  height={26}
                  alt="experience"
                />
                <p className="fz-14">+8 years of experience</p>
              </li>
              <li>
                <Image
                  src={iconCode}
                  width={32}
                  height={34}
                  alt="perfect Pixel"
                />
                <p className="fz-14">Perfect Pixel Wonder</p>
              </li>
              <li>
                <Image
                  src={iconFrontEnd}
                  width={30}
                  height={22}
                  alt="Front end at One Sure"
                />
                <p className="fz-14">Front end at One Sure</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageTextBlock;
