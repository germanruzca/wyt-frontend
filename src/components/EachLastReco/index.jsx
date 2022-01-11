import React from "react";
import { MainBox, Title, StarsContainer } from "./styled.js"
import { RatedStars } from '../index'


const Compontent = ({value, title, color}) => {
  return (
    <MainBox color={color}>
      <Title>
        {title}
      </Title>
      <StarsContainer>
        <RatedStars value={value}/>
      </StarsContainer>
    </MainBox>
  );
};

export { Compontent as EachLastReco};
export default Compontent;