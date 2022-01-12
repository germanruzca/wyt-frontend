import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm,faMusic,faBook,faTv } from '@fortawesome/free-solid-svg-icons';
import { Link } from "@reach/router";
import { Post, MainInfo, NameProfile, IconType,ContentTitle, MainReview, ReviewTitle, ReviewText, UserInfo, ContentReview } from "./styled";
import { PictureProfile, RatedStars } from "../index";

const icons = [faFilm, faBook, faTv, faMusic]

const Component = ({post}) => {
  const { title, body, rate, mediaTitle, typeId, User} = post;
  const { firstName, lastName, pictureId} = User
  return (
    <Post>
      <MainInfo>
        <UserInfo>
          <PictureProfile src={pictureId}/>
          <NameProfile>{firstName} {lastName}</NameProfile>
          <IconType>
            <Link to={`/type/${typeId}`}>
              <FontAwesomeIcon icon={icons[typeId-1]}/>
            </Link>
          </IconType>
        </UserInfo>
        <ContentReview>
          <ContentTitle>{mediaTitle}</ContentTitle>
          <RatedStars value={rate}/>
        </ContentReview>
      </MainInfo>
      <MainReview>
        <ReviewTitle>{title}</ReviewTitle>
        <ReviewText>
          {body}
        </ReviewText>
      </MainReview>
    </Post>
  );
};

export { Component as Post };
export default Component;