import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { Header, Title } from "./styled";


const Component = () => {
  return (
    <Header>
      <a href="/">
        <Title src={'https://rentamelo.s3.us-east-2.amazonaws.com/logo.png'} href={"www.com.com"}/>
      </a>
    </Header>
  );
};

export { Component as Header };
export default Component;