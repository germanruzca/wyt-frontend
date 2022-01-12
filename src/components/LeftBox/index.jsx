import React from "react";
import { LeftBox, ProfileContainer, BioContainer,RecommendationsContainer } from "./styled";
import { ProfileLeft, Bio, Recommendations } from "../index";

const Component = ({user}) => {
  const { Posts } = user;
  console.log(user );
  return (
    <LeftBox>
      <ProfileContainer>
        <ProfileLeft user={user}/>
      </ProfileContainer>
      <BioContainer>
        <Bio user={user}/>
      </BioContainer>
      <RecommendationsContainer>
        <Recommendations posts={Posts}/>
      </RecommendationsContainer>
    </LeftBox>
  );
};

export { Component as LeftBox};
export default Component;
