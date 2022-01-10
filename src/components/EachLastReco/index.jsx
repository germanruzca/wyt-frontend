import React from "react";
import { MainBox, Title, StarsContainer } from "./styled.js"
import { Stars } from '../index'


const Compontent = ({value, title, color}) => {
  return (
    <MainBox color={color}>
      <Title>
        {title}
      </Title>
      <StarsContainer>
        <Stars value={value}/>
      </StarsContainer>
    </MainBox>
  );
};

export { Compontent as EachLastReco};
export default Compontent;