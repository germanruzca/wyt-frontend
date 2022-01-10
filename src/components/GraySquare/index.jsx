import React from "react";
import { GraySquare } from "./styled.js";

const Component = ({title}) => {
  return (
    <GraySquare>
      <div>{title}</div>
    </GraySquare>
  );
}

export { Component as GraySquare };
export default Component;