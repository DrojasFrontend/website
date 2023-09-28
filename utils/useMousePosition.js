import React from "react";
import useMouse from "@react-hook/mouse-position";

export function useMousePosition() {
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

  return { mouseXPosition, mouseYPosition, ref };
}
