import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/UI/Heading";
import { FontWeightSelector } from "@/components/UI/FontWeightSelector";
import { ParallaxText } from "@/components/UI/ParallaxText";
import { CTA } from "@/components/UI/Buttons/CTA";

import className from "classnames/bind";
import styles from "./CardProjects.module.scss";
let cx = className.bind(styles);

const projects = [
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "01",
    image: "/images/sannaofficial.png",
  },
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "02",
    image: "/images/sannaofficial.png",
  },
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "03",
    image: "/images/sannaofficial.png",
  },
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "04",
    image: "/images/sannaofficial.png",
  },
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "05",
    image: "/images/sannaofficial.png",
  },
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "06",
    image: "/images/sannaofficial.png",
  },
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "07",
    image: "/images/sannaofficial.png",
  },
  {
    title: "Amazing Project",
    year: "2023",
    link: "https://sannaofficial.com/",
    dominio: "sannaofficial.com",
    number: "08",
    image: "/images/sannaofficial.png",
  },
];

const CardProjects = ({ numberCards, loadMore }) => {
  return (
    <section className={cx("wrapper")} id="cases">
      <div className={cx("container")}>
        <Heading level="h2" font="Sharp" className={cx(["title"], "fz-64")}>
          Projects
        </Heading>
        <div className={cx("grid")}>
          {projects.slice(0, numberCards).map((p, idx) => {
            const stickyIdx = (idx % 3) + 1;
            return (
              <Link
                key={idx}
                href={p.link}
                className={cx(["card", `sticky-${stickyIdx}`])}
              >
                <div className={cx("image")}>
                  <figure>
                    <Image
                      src={p.image}
                      fill
                      sizes="(min-width: 640px) 100vw, 100vw"
                      style={{
                        objectFit: "cover",
                      }}
                      quality={75}
                      alt=""
                      priority={true}
                    />
                  </figure>
                </div>
                <div className={cx("name")}>
                  <Heading
                    level="h2"
                    font="Sharp"
                    className="fz-20 color-white"
                  >
                    {p.title}
                  </Heading>
                  <p className="color-white">{p.year}</p>
                </div>
                <div className={cx("detail")}>
                  <h3 className="color-white">
                    <FontWeightSelector>{p.dominio}</FontWeightSelector>
                  </h3>
                  <p className={cx(["number", "color-white fz-64"])}>
                    <FontWeightSelector>{p.number}</FontWeightSelector>
                  </p>
                </div>
                <div className={cx("info")}>
                  <ParallaxText baseVelocity={-0.5} bckg="bckg-black">
                    <h3 className="fz-80 color-white">{p.dominio}</h3>
                    <h3 className="fz-80 color-white">{p.dominio}</h3>
                    <h3 className="fz-80 color-white">{p.dominio}</h3>
                    <h3 className="fz-80 color-white">{p.dominio}</h3>
                  </ParallaxText>
                </div>
              </Link>
            );
          })}
        </div>
        {loadMore ?? (
          <div className={cx("load-more")}>
            <CTA path="/cases" blank={false} style="black">
              View more projects
            </CTA>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardProjects;
