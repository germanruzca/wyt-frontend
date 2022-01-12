import React from "react";
import { Recommendations, Title, RecommendationsContainer } from "./styled"
import { EachLastReco } from "../EachLastReco";


const Component = ({posts}) => {
  return (
    <Recommendations>
      <Title>Your last recommendations </Title>
      <RecommendationsContainer>
        {
          
          posts ? (posts.map((item, index) => (
            <EachLastReco value={item.rate} color={item.typeId} title={item.mediaTitle}/>
          ))) : <h1>Loading</h1>
        }
      </RecommendationsContainer>
    </Recommendations>
  );
};

export { Component as Recommendations };
export default Component;