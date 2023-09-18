import React from "react";
import { Sharp, SharpBold, SharpSans } from "@/app/styles/fonts";

const Heading = ({ level, children, className, font }) => {
  let fontClass;

  switch (font) {
    case "Sharp":
      fontClass = Sharp.className;
      break;
    case "SharpBold":
      fontClass = SharpBold.className;
      break;
    default:
      fontClass = SharpSans.className;
  }

  const Tag = ({ ...props }) => React.createElement(level, props, children);
  return <Tag className={`${className} ${fontClass}`}>{children}</Tag>;
};

export default Heading;
