import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Stars, Star } from "./styled.js"

const Component = () => {

  const [rating, setRating ] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <Stars >
      {
        [...Array(5)].map((star, index)=> { 
          const ratingValue = index + 1;
          return (
            <Star ratingValue={ratingValue} rating={rating} hover={hover} >
              <input 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={()=> setRating(ratingValue)}/>
              <FontAwesomeIcon 
                icon={faStar} 
                onMouseEnter={()=> setHover(ratingValue)}
                onMouseLeave={()=> setHover(null)}
              />
            </Star>
          );
          }
        )
      }
    </Stars>
  );
};

export { Component as RatingStars };
export default Component;