import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faMusic, faTv, faBook } from '@fortawesome/free-solid-svg-icons'
import { Main, TypeInfo, TypeName, TypeTotalReco, TypeBio, TextBio, RecoTitle,TypeReco, CirclePicture } from "./styled";
import { Post } from "../index";

const tagsMock =[ "#D76868", "#E5BE5A", "#9DC865","#5AAEDE"]
const icons = [faFilm, faBook, faTv, faMusic]
const Component = ({type}) => {
  const { Posts } = type;
  return (
    <Main>
      <TypeInfo>
        <CirclePicture color={tagsMock[type.id-1]}>
          <FontAwesomeIcon icon={icons[type.id-1]}/>
        </CirclePicture>
        <TypeName>{type.name}</TypeName>
        <TypeTotalReco>Recommendations: { Posts!=null ? Posts.length : "Loading"}</TypeTotalReco>
        <TypeBio>
          Bio
          <TextBio>
            {type.description}
          </TextBio>
        </TypeBio>
      </TypeInfo>
      <RecoTitle>Recommendations</RecoTitle>
      
      <TypeReco>
      {
        type.Posts ? (type.Posts.map((item) => {
          return (
              <Post post={item}/>
          )
        })) : null
      }
      </TypeReco>
    </Main>
  );
};

export { Component as TypeLayout};
export default Component;