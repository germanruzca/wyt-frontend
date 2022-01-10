import React from "react";
import { LeftBox, ProfileContainer, BioContainer,RecommendationsContainer } from "./styled";
import { ProfileLeft, Bio, Recommendations } from "../index";

const Component = ({much}) => {
  return (
    <LeftBox>
      <ProfileContainer>
        <ProfileLeft />
      </ProfileContainer>
      <BioContainer>
        <Bio/>
      </BioContainer>
      <RecommendationsContainer>
        <Recommendations much={much}/>
      </RecommendationsContainer>
    </LeftBox>
  );
};

export { Component as LeftBox};
export default Component;
