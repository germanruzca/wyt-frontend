import React from "react";
import { Main } from "./styled";
import { Post } from "../index";

const Component = ({posts}) => {
  return (
    <Main>
      {
        posts ? (posts.map((post) => {
          return (
            <Post post={post}/>
          );
        })) : <h1>Loading</h1>
      }
    </Main>
  );
};

export { Component as PostsLayout};
export default Component;