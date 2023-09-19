import Image from "next/image";
import Link from "next/link";

import { Heading } from "../../components/UI/Heading";
import { Container } from "../../components/Layout/Container";

import className from "classnames/bind";
import styles from "./cases.module.scss";
let cx = className.bind(styles);

import picture from "/public/images/pexels-oladimeji-ajegbile-4930018.jpg";
import { FontWeightSelector } from "../../components/UI/FontWeightSelector";
import { CardProjects } from "../../components/UI/Cards/CardProjects";

const projects = [
  {
    name: "Sanna",
    path: "https://sannaofficial.com/",
    image: "/images/pexels-oladimeji-ajegbile-4930018.jpg",
    role: "Front end development",
    year: "2023",
    description:
      "Sanna Official is your go-to fashion destination, offering a diverse range of high-quality clothing. Explore the latest trends in our WooCommerce-powered store, and enjoy a fully customizable shopping experience to suit your unique style.",
  },
  {
    name: "Coop",
    path: "https://coop-development-clone.myshopify.com/",
    image: "/images/pexels-oladimeji-ajegbile-4930018.jpg",
    role: "Front end development",
    year: "2020",
    description:
      "Coop: Elevate Your Sleep. Shop adjustable sleep essentials at coop-development for ultimate comfort in a fully customizable experience.",
  },
];

export default function Cases() {
  return (
    <section className={cx("wrapper")}>
      <Container>
        <div className={cx("title")}>
          <Heading level="h1" font="Sharp" className="fz-64">
            Recent Projects
          </Heading>
        </div>
        {projects.map((p, idx) => (
          <div key={idx} className={cx("grid")}>
            <div className={cx("sticky")}>
              <Heading level="h1" font="Sharp" className="fz-120">
                {p.name}
              </Heading>
              <div className={cx("info")}>
                <p className={cx(["description", "fz-14"])}>{p.description}</p>
                <p className={cx(["project-info", "fz-14"])}>
                  <FontWeightSelector>Project Info</FontWeightSelector>
                </p>
                <p className={cx(["role", "fz-14"])}>Role: {p.role}</p>
                <p className={cx(["year", "fz-14"])}>Year: {p.year}</p>
                <Link href={p.path} target="_blank">
                  Visit live link
                </Link>
              </div>
            </div>
            <figure>
              <Image
                src={p.image}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                alt=""
              />
            </figure>
          </div>
        ))}
        <CardProjects />
      </Container>
    </section>
  );
}