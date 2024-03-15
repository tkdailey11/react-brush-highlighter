import React, { PropsWithChildren, useLayoutEffect, useRef } from "react";
import {
  brush1,
  brush2,
  brush3,
  brush4,
  brush5,
  brush6,
  brush7,
  brush8,
} from "./brushes";

interface IBrushProps {
  style?: React.CSSProperties;
  type: number;
  color: string;
}

export const Brush = (props: PropsWithChildren<IBrushProps>) => {
  const ref = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const svg = ref.current;
    if (svg) {
      const bbox = svg.getBBox();
      const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
      svg.setAttribute("viewBox", viewBox);
    }
  }, []);

  function renderBrush(type: number, color: string) {
    switch (type) {
      case 1:
        return brush1(color);
      case 2:
        return brush2(color);
      case 3:
        return brush3(color);
      case 4:
        return brush4(color);
      case 5:
        return brush5(color);
      case 6:
        return brush6(color);
      case 7:
        return brush7(color);
      case 8:
        return brush8(color);
      default:
        return brush1(color);
    }
  }

  return (
    <span
      style={{
        position: "relative",
        ...(props.style || {}),
      }}
    >
      <svg
        ref={ref}
        id="svg-brush"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        height={"150%"}
        scale={1.5}
        style={{
          position: "absolute",
          zIndex: -1,
          width: "130%",
          marginLeft: "-45px",
          marginTop: "-15px",
        }}
      >
        {renderBrush(props.type, props.color)}
      </svg>
      {props.children}
    </span>
  );
};
