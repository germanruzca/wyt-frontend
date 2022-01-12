import React from "react";
import { ProfileLeft, ImageContainer, InfomationContainer, NameProfile, TotalReco, UsernameProfile } from "./styled"
import { PictureProfile } from "../index";

const Component = ({user}) => {
  const { Posts } = user;
  return (
    <ProfileLeft>
      <ImageContainer>
        <PictureProfile src={user.pictureId}/>
      </ImageContainer>
      <InfomationContainer>
        <NameProfile>
          {user.firstName} {user.lastName}
        </NameProfile>
        <UsernameProfile>
          @{user.username}
        </UsernameProfile>
       { Posts ? <TotalReco>
            Recommendations: {Posts.length}
        </TotalReco> : <p>Loading</p>
        }
      </InfomationContainer>
    </ProfileLeft>
  );
};

export { Component as ProfileLeft };
export default Component;