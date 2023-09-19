import Head from "next/head";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { SharpSans } from "../styles/fonts";

export default function RootLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title || "Daniel Rojas Astood"}</title>
        <meta
          name="description"
          content={description || "Descripción por defecto"}
        />
      </Head>
      <div className={SharpSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
