import React from "react";
import { Post, MainInfo, NameProfile, IconType,ContentTitle, MainReview, ReviewTitle, ReviewText, UserInfo, ContentReview } from "./styled";
import { PictureProfile, RatedStars } from "../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios' 

const Component = () => {
  return (
    <Post>
      <MainInfo>
        <UserInfo>
          <PictureProfile/>
          <NameProfile>German Ruiz</NameProfile>
          <IconType>
            <FontAwesomeIcon icon={faFilm}/>
          </IconType>
        </UserInfo>
        <ContentReview>
          <ContentTitle>Spider-Man: No Way Home</ContentTitle>
          <RatedStars value={5}/>
        </ContentReview>
      </MainInfo>
      <MainReview>
        <ReviewTitle>I loveeeeeee it!!!!</ReviewTitle>
        <ReviewText>
          Spiderman No way home is a delightful joy-ride coupled with great acting and a beautiful story that pulls the emotional strings to both the casual or avid viewer of the franchise. The movie is nearly 2 hours 30 mins long and it rarely misses its beat. This is without a doubt the best Spiderman film in the franchise because it explores what it means to be a spiderman. 
          Spiderman No way home is a delightful joy-ride coupled with great acting and a beautiful story that pulls the emotional strings to both the casual or avid viewer of the franchise. The movie is nearly 2 hours 30 mins long and it rarely misses its beat. This is without a doubt the best Spiderman film in the franchise because it explores what it means to be a spiderman. 
          Spiderman No way home is a delightful joy-ride coupled with great acting and a beautiful story that pulls the emotional strings to both the casual or avid viewer of the franchise. The movie is nearly 2 hours 30 mins long and it rarely misses its beat. This is without a doubt the best Spiderman film in the franchise because it explores what it means to be a spiderman. 
          Spiderman No way home is a delightful joy-ride coupled with great acting and a beautiful story that pulls the emotional strings to both the casual or avid viewer of the franchise. The movie is nearly 2 hours 30 mins long and it rarely misses its beat. This is without a doubt the best Spiderman film in the franchise because it explores what it means to be a spiderman. 
          
        </ReviewText>
      </MainReview>
    </Post>
  );
};

export { Component as Post };
export default Component;