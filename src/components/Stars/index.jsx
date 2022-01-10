import React from "react";
import { Stars } from "./styled.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Component = ({value}) => {
  return (
    <Stars>
      {
        [...Array(value)].map(star=>  <FontAwesomeIcon icon={faStar}/>)
      }
    </Stars>
  );
};

export { Component as Stars };
export default Component;