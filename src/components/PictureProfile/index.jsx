import React from "react";
import { PictureProfile } from "./styled";

const Component = ({src}) => {
  return (
    <PictureProfile src={ src ? src : "https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok="}/>
  );
};

export { Component as PictureProfile };
export default Component;