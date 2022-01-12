import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Stars, Star } from "./styled.js"

const Component = ({value}) => {
  return (
    <Stars >
      {
        [...Array(value)].map((star)=> <FontAwesomeIcon icon={faStar}/>)
      }
    </Stars>
  );
};

export { Component as RatedStars };
export default Component;