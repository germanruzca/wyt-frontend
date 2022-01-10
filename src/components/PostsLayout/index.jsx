import React from "react";
import { Main } from "./styled";
import { Post } from "../index";


const Component = () => {
  return (
    <Main>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Main>
  );
};

export { Component as PostsLayout};
export default Component;