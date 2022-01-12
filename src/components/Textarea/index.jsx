import React from "react";
import { TextareaContainer, Textarea, Error, Label } from "./styled";

const Component = (props) => {
  const {
    label,
    onClick,
    placeholder,
    disabled = false,
    readOnly = false,
    type = "text",
    error,
    name,
    value,
    ...rest
  } = props;

  return (
    <TextareaContainer>
      <Label>{label}</Label>
      <Textarea
        label={label}
        placeholder={placeholder}
      />
      {error && <Error>{error}</Error>}
    </TextareaContainer>
  );
};

export { Component as Textarea };
export default Component;
