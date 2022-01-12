import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faMusic, faTv, faBook } from '@fortawesome/free-solid-svg-icons';
import { Tags, Title,Type, Circle, Text } from "./styled";

const tags=[
    {
      name: "Movies",
      color: "#D76868",
      id: 1,
    },
    {
      name: "Books",
      color: "#E5BE5A",
      id: 2,
    },
    {
      name: "TV-Shows",
      color: "#9DC865",
      id: 3,
    },
    {
      name: "Music",
      color: "#5AAEDE",
      id: 4,
    }
  ]
const icons = [faFilm,faBook,faTv,faMusic]
const Component = () => {
  return (
    <Tags>
      <Title>Tags</Title>
      {
        tags.map((item) => {
          return (
            <Link to={`/type/${item.id}`}>
              <Type>
                <Circle col={item.color}>
                  <FontAwesomeIcon icon={icons[item.id-1]}/>
                </Circle>
                <Text>{item.name}</Text>
              </Type>
            </Link>
          );
        })
      }
    </Tags>
  );
};

export { Component as Tags };
export default Component;