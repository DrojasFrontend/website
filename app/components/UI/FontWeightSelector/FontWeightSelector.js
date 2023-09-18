import React from "react";
import className from "classnames/bind";
import styles from "./FontWeightSelector.module.scss";
let cx = className.bind(styles);
import { SharpBold } from "@/app/styles/fonts";

const FontWeightSelector = ({children}) => {
  return <strong className={SharpBold.className}>{children}</strong>;
};

export default FontWeightSelector;
