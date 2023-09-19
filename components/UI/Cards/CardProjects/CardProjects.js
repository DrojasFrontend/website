import React from "react";
import Link from "next/link";
import { Heading } from "../../Heading";
import { FontWeightSelector } from "@/components/UI/FontWeightSelector";
import { ParallaxText } from "@/components/UI/ParallaxText";

import className from "classnames/bind";
import styles from "./CardProjects.module.scss";
let cx = className.bind(styles);

const CardProjects = () => {
  return (
    <section className={cx("wrapper")}>
      <div className={cx("container")}>
        <Heading level="h2" font="Sharp" className={cx(["title"], "fz-64")}>
          Projects
        </Heading>
        <div className={cx("grid")}>
          <Link href="#" className={cx(["card", "sticky-1"])}>
            <div className={cx("name")}>
              <Heading level="h2" font="Sharp" className="fz-20 color-white">
                Project
              </Heading>
              <p className="color-white">2023</p>
            </div>
            <div className={cx("detail")}>
              <h3 className="color-white">
                <FontWeightSelector>Project.co</FontWeightSelector>
              </h3>
              <p className={cx(["number", "color-white fz-64"])}>
                <FontWeightSelector>01</FontWeightSelector>
              </p>
            </div>
            <div className={cx("info")}>
              <ParallaxText baseVelocity={-0.5} bckg="bckg-black">
                <h3 className="fz-80 color-white">Project.com</h3>
                <h3 className="fz-80 color-white">Project.com</h3>
                <h3 className="fz-80 color-white">Project.com</h3>
                <h3 className="fz-80 color-white">Project.com</h3>
              </ParallaxText>
            </div>
          </Link>
          <Link href="#" className={cx(["card", "sticky-2"])}>
            <div className={cx("name")}>
              <Heading level="h2" font="Sharp" className="fz-20 color-white">
                Project
              </Heading>
              <p className="color-white">2022</p>
            </div>
            <div className={cx("detail")}>
              <h3 className="color-white">
                <FontWeightSelector>Project.co</FontWeightSelector>
              </h3>
              <p className={cx(["number", "color-white fz-64"])}>
                <FontWeightSelector>02</FontWeightSelector>
              </p>
            </div>
            <div className={cx("info")}>
              <ParallaxText baseVelocity={-0.5} bckg="bckg-black">
                <h3 className="fz-80 color-white">Project 2.com</h3>
                <h3 className="fz-80 color-white">Project 2.com</h3>
                <h3 className="fz-80 color-white">Project 2.com</h3>
                <h3 className="fz-80 color-white">Project 2.com</h3>
              </ParallaxText>
            </div>
          </Link>
          <Link href="#" className={cx(["card", "sticky-3"])}>
            <div className={cx("name")}>
              <Heading level="h2" font="Sharp" className="fz-20 color-white">
                Project
              </Heading>
              <p className="color-white">2022</p>
            </div>
            <div className={cx("detail")}>
              <h3 className="color-white">
                <FontWeightSelector>Project.co</FontWeightSelector>
              </h3>
              <p className={cx(["number", "color-white fz-64"])}>
                <FontWeightSelector>03</FontWeightSelector>
              </p>
            </div>
            <div className={cx("info")}>
              <ParallaxText baseVelocity={-0.5} bckg="bckg-black">
                <h3 className="fz-80 color-white">Project 3.com</h3>
                <h3 className="fz-80 color-white">Project 3.com</h3>
                <h3 className="fz-80 color-white">Project 3.com</h3>
                <h3 className="fz-80 color-white">Project 3.com</h3>
              </ParallaxText>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardProjects;