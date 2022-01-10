import React from "react";
import { Router } from "@reach/router";

import { Header, Footer } from "../../components"

import { Main } from "./Main";
import { Type } from "./Type";
import { User } from "./User"


const Public = ({children}) => {
  return (
    <>
      <Header/>
      <Router>
        <Main default />
        <Type path="/:id" />
        <User path="/user/:id" />
      </Router>
      <Footer/>
    </>
  );
};

export { Public };
export default Public;