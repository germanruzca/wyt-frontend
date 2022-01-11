import React from "react";
import { Login,Form, Title, InputContainer, ButtonContainer, ToSignup } from "./styled";
import { CustomInput, Button } from "../index";

const Component = () => {
  return (
    <Login>
      <Form>
        <Title>Login</Title>
        <InputContainer>
          <CustomInput
            label={'Username'}
            placeholder={'@example'}
          />
        </InputContainer>
        <InputContainer>
          <CustomInput
            label={'Password'}
            placeholder={'******'}
          />
        </InputContainer>
        <ButtonContainer>
          <Button text={"Sign in"}/>
        </ButtonContainer>
      </Form>
      <ToSignup>
        Sign up
      </ToSignup>
    </Login>
  );
};

export { Component as Login };
export default Component;

