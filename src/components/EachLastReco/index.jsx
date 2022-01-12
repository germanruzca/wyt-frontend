import React from "react";
import { MainBox, Title, StarsContainer } from "./styled.js"
import { RatedStars } from '../index'

const lastReco = [ "#D76868","#AC841D","#9DC865","#5AAEDE"]

const Compontent = ({value, title, color}) => {
  return (
    <MainBox color={lastReco[color-1]}>
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