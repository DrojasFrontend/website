import Image from "next/image";
import {
  Header,
  HeroTextImage,
  Brands,
  Cards,
  ImageTextBlock,
  Carousel,
  Footer
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroTextImage />
        <Brands />
        <Cards />
        <ImageTextBlock />
        <Carousel />
      </main>
      <Footer/>
    </>
  );
}
