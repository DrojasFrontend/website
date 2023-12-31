import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";

import Head from "next/head";
import { Main } from "@/components/Layout/Main";
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
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
}
