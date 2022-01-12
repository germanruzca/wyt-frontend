import React from "react";
import { Container, Input, Label, InputContainer } from "./styled";

const Component = (props) => {
  const {
    label,
    placeholder
  } = props;

  const renderLabel =  (
    <Label>
      {label}
    </Label>
  );

  return (
    <Container>
      {renderLabel}
      <InputContainer>
      <Input
          placeholder={placeholder}
        />
      </InputContainer>
    </Container>
  );
};

export { Component as CustomInput };
export default Component;