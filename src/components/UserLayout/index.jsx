import React from "react";
import { Main, UserInfo,UserReco,NameUser, Username, UserTotalReco, UserBio, TextBio,RecoTitle,CirclePicture } from "./styled";
import { Post } from "../index";


const Component = () => {
  const vlaue = [1,2,3,4,5]
  return (
    <Main>
      <UserInfo>
        <CirclePicture src={"https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png"}/>
        <NameUser>Andrea Cisneros</NameUser>
        <Username>@germanruzca</Username>
        <UserTotalReco>Recommendations: 14</UserTotalReco>
        <UserBio>
          Bio
          <TextBio>
            I am a person who likes to share all want I like to others. I hope to do sime friends here! I am a person who likes to share all want I like to others. I hope to do sime friends here! I am a person who likes to share all want I like to others. I hope to do sime friends here! I am a person who likes to share all want I like to others. I hope to do sime friends here!
          </TextBio>
        </UserBio>
      </UserInfo>
      <RecoTitle>Recommendations</RecoTitle>
      
      <UserReco>
      {
        vlaue.map(item => {
          return (
            
              <Post/>
           
          )
        })
      }
      </UserReco>
    </Main>
  );
};

export { Component as UserLayout};
export default Component;