import React from "react";
import { ProfileLeft, ImageContainer, InfomationContainer, NameProfile, TotalReco, UsernameProfile } from "./styled"
import { PictureProfile } from "../index";

const Component = () => {
  return (
    <ProfileLeft>
      <ImageContainer>
        <PictureProfile/>
      </ImageContainer>

      <InfomationContainer>
        <NameProfile>
          German Ruiz
        </NameProfile>
        <UsernameProfile>
          @germanruzca
        </UsernameProfile>
        <TotalReco>
          Recommendations: 14
        </TotalReco>
      </InfomationContainer>
    </ProfileLeft>
  );
};

export { Component as ProfileLeft };
export default Component;