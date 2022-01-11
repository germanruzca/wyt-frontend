import React from "react";
import { Container, Input, Label, HelpText, InputContainer, Error } from "./styled";

const Component = (props) => {
  const {
    label,
    helpText,
    onClick,
    placeholder,
    disabled = false,
    readOnly = false,
    type = "text",
    icon,
    iconPosition = "after",
    error,
    name,
    value,
    showLabel = true,
    ...rest
  } = props;

  const renderLabel = showLabel && (
    <Label>
      {label}
      <HelpText>{helpText}</HelpText>
    </Label>
  );

  return (
    <Container>
      {renderLabel}
      <InputContainer>
      <Input
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          type={type}
          {...rest}
        />
      </InputContainer>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export { Component as CustomInput };
export default Component;