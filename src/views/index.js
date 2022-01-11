import React from "react";
import { Router } from "@reach/router";

import { Public } from "./Public";

const Routes = ({children}) => {
  return (
    <Router>
      <Public path="/*" />
    </Router>
  );
}

export { Routes };
export default Routes;