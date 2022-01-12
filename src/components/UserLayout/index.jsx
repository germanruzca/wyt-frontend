import React from "react";
import { Main, UserInfo,UserReco,NameUser, Username, UserTotalReco, UserBio, TextBio,RecoTitle,CirclePicture } from "./styled";
import { Post } from "../index";


const Component = ({user}) => {
  const { Posts } = user;
  return (
    <Main>
      <UserInfo>
        <CirclePicture src={user.pictureId}/>
        <NameUser>{user.firstName} {user.lastName}</NameUser>
        <Username>@{user.username}</Username>
        <UserTotalReco>Recommendations: { Posts!=null ? Posts.length : "Loading"}</UserTotalReco>
        <UserBio>
          Bio
          <TextBio>
            {user.bio}
          </TextBio>
        </UserBio>
      </UserInfo>
      <RecoTitle>Recommendations</RecoTitle>
      
      <UserReco>
        {
          user.Posts ? (user.Posts.map((item) => {
            return (
                <Post post={item}/>
            )
          })) : null
        }
      </UserReco>
    </Main>
  );
};

export { Component as UserLayout};
export default Component;