"use client";
import Image from "next/image";
import { Heading, Button } from "../../..";

import { CTA } from "../../Buttons/CTA";

import className from "classnames/bind";
import styles from "./HeroTextImage.module.scss";
let cx = className.bind(styles);

import Hero from "/public/images/pexels-oladimeji-ajegbile-4930018.jpg";
import iconHero from "/public/icon-circle-rotate.svg";

const HeroTextImage = () => {
  return (
    <section>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("grid")}>
            <div className={cx("copy")}>
              <p className="fz-20">
                <span className="color-gray">Hi, I`m</span>{" "}
                <strong>Daniel Rojas</strong>{" "}
                <span className={cx("icon")}>👋</span>
              </p>
              <Heading level="h1" font="Sharp" className="fz-60">
                Front-end Development Specialist.
              </Heading>
              <p className="fz-20 color-gray">
                I worked on several front-end projects, from small websites to
                large web applications. This hands-on experience has allowed me
                to develop skills that help me create efficient and effective
                solutions.
              </p>
              <CTA path="/contact" blank={true} style="default">
                Start a new project
              </CTA>
            </div>
            <div className={cx("img")}>
              <figure className={cx("img-circle")}>
                <Image src={iconHero} width={87} height={87} alt="" />
              </figure>
              <figure>
                <Image
                  src={Hero}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTextImage;
