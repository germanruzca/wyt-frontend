import React from "react";
import { Main, TypeInfo, TypeName, TypeTotalReco, TypeBio, TextBio, RecoTitle,TypeReco, CirclePicture } from "./styled";
import { PictureProfile, Post } from "../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faMusic, faTv, faBook } from '@fortawesome/free-solid-svg-icons'


const Component = () => {
  const vlaue = [1,2,3,4,5]
  return (
    <Main>
      <TypeInfo>
        <CirclePicture col={"#9DC865"}>
          <FontAwesomeIcon icon={faBook}/>
        </CirclePicture>
        <TypeName>Music</TypeName>
        <TypeTotalReco>Recommendations: 14</TypeTotalReco>
        <TypeBio>
          Bio
          <TextBio>
            Here you can see all the recommendations about the music!
          </TextBio>
        </TypeBio>
      </TypeInfo>
      <RecoTitle>Recommendations</RecoTitle>
      
      <TypeReco>
      {
        vlaue.map((item) => {
          return (
              <Post/>
          )
        })
      }
      </TypeReco>
    </Main>
  );
};

export { Component as TypeLayout};
export default Component;