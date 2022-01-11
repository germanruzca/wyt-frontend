import React from "react";
import { Tags, Title,Type, Circle, Text } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faMusic, faTv, faBook } from '@fortawesome/free-solid-svg-icons'

const Component = () => {
  return (
    <Tags>
      <Title>Tags</Title>
      <Type>
        <Circle col={"#5AAEDE"}>
          <FontAwesomeIcon icon={faFilm}/>
        </Circle>
        <Text>Movie</Text>
      </Type>
      <Type>
        <Circle col={"#E5BE5A"}>
          <FontAwesomeIcon icon={faMusic} />
        </Circle>
        <Text>Music</Text>
      </Type>
      <Type>
        <Circle col={"#D76868"}>
          <FontAwesomeIcon icon={faTv}/>
        </Circle>
        <Text>TV-Show</Text>
      </Type>
      <Type>
        <Circle col={"#9DC865"}>
          <FontAwesomeIcon icon={faBook}/>
        </Circle>
        <Text>Book</Text>
      </Type>

    </Tags>
  );
};

export { Component as Tags };
export default Component;