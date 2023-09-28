import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";

import Image from "next/image";

import { Cursor } from "@/components/Layout/Cursor";
import { HeroTextImage } from "@/components/UI/Heros/HeroTextImage";
import { ParallaxText } from "@/components/UI/ParallaxText";
import { CardsDefault } from "@/components/UI/Cards/CardsDefault";
import { ImageTextBlock } from "@/components/UI/MediaBlock/ImageTextBlock";
import { CardProjects } from "@/components/UI/Cards/CardProjects";
import { Carousel } from "@/components/UI/Carousel";

import iconMobile from "/public/icon-mobile.svg";
import iconLightning from "/public/icon-lightning.svg";
import iconFrontEnd from "/public/icon-front-end.svg";
import iconDesktop from "/public/icon-desktop.svg";
import iconCode from "/public/icon-code.svg";

export default function Home({}) {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 100;
  let mouseYPosition = 48;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  return (
    <>
      <div ref={ref}>
        <Cursor
          mouseXPosition={mouseXPosition}
          mouseYPosition={mouseYPosition}
        />
        <HeroTextImage />
        <ParallaxText baseVelocity={-1} bckg="bckg-gray-100">
          {[
            { src: iconMobile, width: 18, height: 24, text: "Desktop" },
            { src: iconLightning, width: 19, height: 26, text: "Front end" },
            { src: iconFrontEnd, width: 30, height: 22, text: "Development" },
            { src: iconDesktop, width: 27, height: 24, text: "Mobile" },
            { src: iconCode, width: 30, height: 26, text: "Frameworks" },
          ].map((item, index) => (
            <p key={index}>
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.text}
              />
              {item.text}
            </p>
          ))}
        </ParallaxText>
        <CardsDefault />
        <ImageTextBlock />
        <CardProjects
          numberCards={3}
          loadMore={true}
          mouseXPosition={mouseXPosition}
          mouseYPosition={mouseYPosition}
        />
        <Carousel />
      </div>
    </>
  );
}
