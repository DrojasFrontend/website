import Image from "next/image";
import {
  Header,
  HeroTextImage,
  Brands,
  Cards,
  ImageTextBlock,
  Carousel,
  Footer,
} from "./components";

import iconMobile from "/public/icon-mobile.svg"
import iconLightning from "/public/icon-lightning.svg"
import iconFrontEnd from "/public/icon-front-end.svg"
import iconDesktop from "/public/icon-desktop.svg"
import iconCode from "/public/icon-code.svg"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroTextImage />
        <Brands baseVelocity={-1}>
          <p><Image src={iconMobile} width={18} height={18} alt="iconMobile" />Desktop</p>
          <p><Image src={iconLightning} width={15} height={15} alt="iconLightning" />Front end</p>
          <p><Image src={iconFrontEnd} width={28} height={28} alt="iconFrontEnd" />Development</p>
          <p><Image src={iconDesktop} width={23} height={23} alt="iconDesktop" />Mobile</p>
          <p><Image src={iconCode} width={25} height={25} alt="iconCode" />Frameworks</p>
        </Brands>
        <Cards />
        <ImageTextBlock />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
