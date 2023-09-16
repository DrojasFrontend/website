import React from "react";
import Link from "next/link";

import className from "classnames/bind";
import styles from "./CTA.module.scss";
let cx = className.bind(styles);

const CTA = ({ style, children, className, path, blank }) => {

  const target = blank ? "_blank" : "";
  return (
    <Link href={path} className={cx(["button", `button--${style}`, className])} target={target}>
      {children}
    </Link>
  );
};

export default CTA;
