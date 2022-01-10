import React from "react";
import { Recommendations, Title, RecommendationsContainer } from "./styled"
import { EachLastReco } from "../EachLastReco";

const Component = ({much}) => {
  return (
    <Recommendations>
      <Title>Your last recommendations </Title>
      <RecommendationsContainer>
        {
          [...Array(much)].map(item => (
            <EachLastReco value={5} color={"red"} title={"El Chavo Del 8"}/>
          ))
        }
      </RecommendationsContainer>
    </Recommendations>
  );
};

export { Component as Recommendations };
export default Component;