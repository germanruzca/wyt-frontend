import React from "react";
import { Button } from "./styled";

const Component = ({text}) => {
  return (
    <Button>
      {text}
    </Button>
  );
};

export { Component as Button };
export default Component;