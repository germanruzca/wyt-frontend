import React from "react";
import { NewPost, Form, Title, InputContainer, InputRating } from "./styled";
import { CustomInput, Textarea, RatingStars, Label } from "../index"

const Component = () => {
  return (
    <NewPost>
      <Form>
        <Title>New recommendation</Title>
        <InputContainer>
          <CustomInput
            label={"Title review"}
            placeholder={'Type the title of the review...'}
          />
        </InputContainer>
        <InputContainer>
          <Textarea
            label={"Review"}
            placeholder={'i.e. I like it...'}
          />
        </InputContainer>
        <InputContainer>
          <CustomInput
            label={"Name of the media"}
            placeholder={'i.e. Spiderman'}
          />
        </InputContainer>
        <InputRating>
          <Label>Rating</Label>
          <RatingStars/>
        </InputRating>
      </Form>
    </NewPost>  
  );
};

export { Component as NewPost };
export default Component;