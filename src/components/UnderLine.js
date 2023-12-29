import React from "react";
import { underLineColor } from "../config/constants";

function UnderLine(props) {
  const style = {
    marginTop: `${props?.marginTop || "0%"}`,
    width: `${props?.width || "100%"}`,
    borderRadius: "50px",
    borderColor: `${props?.color || underLineColor}`,
    boxSizing: "inherit",
    fontFamily: "inherit",
  };
  return <hr style={style}></hr>;
}

export default UnderLine;
