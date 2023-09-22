import React, {useState} from "react";
import { motion } from "framer-motion";

import className from "classnames/bind";
import styles from "./Cursor.module.scss";
let cx = className.bind(styles);

export default function Cursor({  mouseXPosition, mouseYPosition }) {
  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {
    default: {
      opacity: 1,
      height: 80,
      width: 80,
      fontSize: "16px",
      backgroundColor: "#fff",
      x: mouseXPosition - 40,
      y: mouseYPosition - 140,
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <motion.div
      variants={variants}
      className={cx("cursor")}
      animate={cursorVariant}
      transition={spring}
    ></motion.div>
  );
}
