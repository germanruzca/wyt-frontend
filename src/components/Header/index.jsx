import React from "react";
import { Header, Title } from "./styled";


const Component = () => {
  return (
    <Header>
      <Title src={'https://rentamelo.s3.us-east-2.amazonaws.com/logo.png'}/>
    </Header>
  );
};

export { Component as Header };
export default Component;