import React from "react";
import { BioMain, Title, BioText } from "./styled"

const Component = ({user}) => {
  return (
    <BioMain>
      <Title>
        Bio
      </Title>
      <BioText>
        {user.bio}
      </BioText>
    </BioMain>
  );
};

export { Component as Bio };
export default Component;